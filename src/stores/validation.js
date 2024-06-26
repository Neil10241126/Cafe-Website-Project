import { defineStore } from 'pinia';
import { inject } from 'vue';
import { toTypedSchema } from '@vee-validate/yup'; // 引入 toTypedSchema 定義驗證規則

export default defineStore('validation', () => {
  // 引入 yup 驗證庫
  const yup = inject('$yup');

  // 電話驗證
  yup.addMethod(yup.string, 'isPhone', function isPhone() {
    return this.matches(/^(09)[0-9]{8}$/, {
      message: '電話號碼格式不正確',
    });
  });

  // 定義表單驗證規則
  const contactSchema = toTypedSchema(
    yup.object({
      name: yup.string().required('必填'),
      email: yup.string().required('必填').email(),
      tel: yup.string().required('必填').isPhone(),
      message: yup.string().required('請輸入告訴我們的內容'),
    }),
  );

  return {
    contactSchema,
  };
});
