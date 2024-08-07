import { toTypedSchema } from '@vee-validate/yup'; // 引入 toTypedSchema 定義驗證規則
import * as yup from 'yup'; // 引入 yup 檢合庫
import { zhtw } from 'yup-locales'; // 引入 yup 繁體中文
import { setLocale } from 'yup'; // 引入 yup 的 setLocale 設置語系方法

// 設置 yup 的語系為繁體中文
setLocale(zhtw);

// 定義表單驗證規則 :
export default function useValidation() {
  // 格式化輸出 null
  const formatNull = yup
    .string()
    .default(null)
    .transform(() => null)
    .notRequired();

  // ======== 前台 ========
  // 聯絡我們 schema
  const contactSchema = toTypedSchema(
    yup.object({
      name: yup.string().required('必填'),
      email: yup.string().required('必填').isEmail(),
      tel: yup.string().required('必填').isPhone(),
      message: yup.string().required('請輸入告訴我們的內容'),
    })
  );

  // 登入 schema
  const signinSchema = toTypedSchema(
    yup.object({
      signin: yup.object({
        username: yup.string().required('帳號 為必填').isEmail(),
        password: yup.string().required('密碼 為必填').min(8, '密碼至少8個字元'),
      }),
    })
  );

  // 註冊 schema
  const signupSchema = toTypedSchema(
    yup.object({
      signup: yup.object({
        name: yup.string().required('姓名 為必填'),
        email: yup.string().required('帳號 為必填').isEmail(),
        password: yup.string().required('密碼 為必填').min(8, '密碼至少8個字元'),
        passwordConfirm: yup
          .string()
          .required('確認密碼 為必填')
          .min(8, '密碼至少8個字元')
          .oneOf([yup.ref('password')], '確認密碼有誤'),
      }),
    })
  );

  // 填寫訂單 schema
  const orderSchema = toTypedSchema(
    yup.object({
      // 訂單資訊
      user: yup.object({
        // 發票資訊
        billInfo: yup.object({
          type: yup.string().required('必填!'),
          billName: yup
            .string()
            .required()
            .when('type', {
              is: '公司統編',
              then: () => yup.string().required('必填!'),
              // 當 type 不為 '公司統編' 時，billName 內容強制輸出 null
              otherwise: () => formatNull,
            }),
          billNumber: yup
            .string()
            .required()
            .when('type', {
              is: '公司統編',
              then: () =>
                yup
                  .string()
                  .required('必填!')
                  .matches(/^\d{8}$/, '統一編號需為8位數字!'),
              // 當 type 不為 '公司統編' 時，billNumber 內容強制輸出 null
              otherwise: () => formatNull,
            }),
        }),
        name: yup.string().required('必填!'),
        email: yup.string().required('必填!').isEmail(),
        tel: yup.string().required('必填!').isPhone(),
        postalCode: yup
          .string()
          .required('必填!')
          .matches(/^\d{3}/g, '格式不符!'),
        address: yup.string().required('必填!'),
      }),
      message: yup.string().default(''),
    })
  );

  // 付款 schema
  const paymentSchema = toTypedSchema(
    yup.object({
      payment: yup.object({
        type: yup.string().required('必填!'),
        creditCard: yup.object().when('type', {
          is: '信用卡',
          then: () =>
            yup.object({
              name: yup.string().required('必填!'),
              number: yup
                .string()
                .required('必填!')
                .transform((value) => value?.replace(/\s+/g, '')) // 清除空白字元
                .test('len-is-16', '格式需為16組數字', (val) => val.length === 16),
              month: yup
                .string()
                .required('必填!')
                .matches(/^\d{2}$/, '格式不符'),
              day: yup
                .string()
                .required('必填!')
                .matches(/^\d{2}$/, '格式不符'),
              cvv: yup
                .string()
                .required('必填!')
                .matches(/^\d{3}$/, '格式不符'),
            }),
          otherwise: () =>
            yup.object({
              name: formatNull,
              number: formatNull,
              month: formatNull,
              day: formatNull,
              cvv: formatNull,
            }),
        }),
      }),
    })
  );

  // ======== 後台 ========
  // 新增產品 schema
  const addProductSchema = toTypedSchema(
    yup.object({
      title: yup.string().required('必填!'),
      category: yup.string().required('必填!'),
      acidity: yup.number().required('必填!'),
      origin: yup.string().required('必填!'),
      originPrice: yup.number().required('必填!'),
      price: yup.number().required('必填!'),
      unit: yup.string().required('必填!'),
      content: yup.string().required('必填!'),
      description: yup.string().required('必填!'),
      isEnabled: yup.boolean().default(true).required('必填!'),
      imageUrl: yup.string().required('必填!'),
    })
  );

  // 新增優惠券 schema
  const addCouponSchema = toTypedSchema(
    yup.object({
      title: yup.string().required('必填!'),
      percent: yup.number('必填!').max(99, '必須小於100').min(0, '必須大於0').required('必填!'),
      dueDate: yup.number().required('必填!'),
      startDate: yup.number().required('必填!'),
      code: yup.string().required('必填!'),
      isEnabled: yup.number().default(1).required('必填!'),
    })
  );

  return {
    // 前台
    contactSchema,
    signinSchema,
    signupSchema,
    orderSchema,
    paymentSchema,
    // 後台
    addProductSchema,
    addCouponSchema,
  };
}

// 電話驗證
yup.addMethod(yup.string, 'isPhone', function isPhone() {
  return this.matches(/^(09)[0-9]{8}$/, {
    message: '電話號碼格式不正確',
  });
});

// Email 驗證
yup.addMethod(yup.string, 'isEmail', function isEmail() {
  return this.matches(/^[a-z0-9]+(\.[a-z0-9]+)*@[a-z0-9]+(\.[a-z0-9]+)*\.[a-z]+$/i, {
    message: '電子郵件格式不正確',
  });
});
