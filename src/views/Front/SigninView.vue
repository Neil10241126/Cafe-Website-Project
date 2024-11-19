<template>
  <!-- loading -->
  <LoadingUi></LoadingUi>

  <div class="py-8">
    <div class="container px-4">
      <div
        class="row justify-content-center bg-secondary-light rounded-4"
        style="
          box-shadow:
            0 4px 4px rgba(95, 61, 45, 0.2),
            0 4px 4px rgba(95, 61, 45, 0.2);
        "
      >
        <!-- 登入圖片 -->
        <div class="col-lg-5">
          <div class="d-none d-lg-block px-3 py-6">
            <img src="/public/images/Sign-logo.svg" class="img-fluid" alt="Sign-logo" />
          </div>
        </div>
        <!-- 輸入內容 -->
        <div class="col-12 col-sm-8 col-lg-5">
          <div class="px-3 py-6">
            <div class="text-center mb-6">
              <img
                src="/public/images/Beans-cafe-logo-dark.svg"
                class="mx-auto mb-2"
                alt="logo-dark"
              />
              <BadgeUi :content="user.isAdmin ? '管理者' : '一般用戶'" size="normal"></BadgeUi>
            </div>
            <form>
              <div class="d-flex mb-4">
                <label for="email" class="form-label me-3 mb-0">
                  <i class="bi bi-person-circle fs-3 lh-40px text-gray-800"></i>
                </label>
                <div class="w-100">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="請輸入您的帳號"
                    :class="{ 'is-invalid': errors['signin.username'] }"
                    v-model="username"
                    v-bind="usernameAttrs"
                  />
                  <span class="text-danger">{{ errors['signin.username'] }}</span>
                </div>
              </div>
              <div class="d-flex mb-4">
                <label for="password" class="form-label me-3 mb-0">
                  <i class="bi bi-shield-lock fs-3 lh-40px text-gray-800"></i>
                </label>
                <div class="w-100">
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="請輸入您的密碼"
                    autocomplete="true"
                    :class="{ 'is-invalid': errors['signin.password'] }"
                    v-model="password"
                    v-bind="passwordAttrs"
                    @keyup.enter="user.isAdmin ? signinAdmin() : signinUser()"
                  />
                  <span class="text-danger">{{ errors['signin.password'] }}</span>
                </div>
              </div>
            </form>
            <div class="d-flex align-items-center justify-content-between">
              <RouterLink to="/" class="link-gray-600 text-decoration-underline link-offset-1">
                返回首頁
              </RouterLink>
              <div>
                <a
                  href="#"
                  class="link-primary text-decoration-underline link-offset-1"
                  @click.prevent="showModal()"
                  >註冊帳號</a
                >
                <button
                  type="button"
                  class="btn btn-primary ms-3"
                  :disabled="!meta.valid"
                  @click="user.isAdmin ? signinAdmin() : signinUser()"
                >
                  登入
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 註冊 modal -->
  <div class="modal fade" id="signupModal" ref="refModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">註冊帳號</h1>
          <button type="button" class="btn-close" @click="hideModal()"></button>
        </div>
        <div class="modal-body d-flex justify-content-center py-4">
          <form>
            <div class="row gx-0 mb-3">
              <label for="name" class="form-label col-3 mb-0">姓名</label>
              <div class="col-9">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="註冊的姓名"
                  :class="{ 'is-invalid': errors['signup.name'] }"
                  v-model="name"
                  v-bind="nameAttrs"
                />
                <span class="text-danger fs-8">{{ errors['signup.name'] }}</span>
              </div>
            </div>
            <div class="row gx-0 mb-3">
              <label for="signupEmail" class="form-label col-3 mb-0">信箱</label>
              <div class="col-9">
                <input
                  type="email"
                  class="form-control"
                  id="signupEmail"
                  placeholder="註冊的信箱"
                  :class="{ 'is-invalid': errors['signup.email'] }"
                  v-model="email"
                  v-bind="emailAttrs"
                />
                <span class="text-danger fs-8">{{ errors['signup.email'] }}</span>
              </div>
            </div>
            <div class="row gx-0 mb-3">
              <label for="signupPassword" class="form-label col-3 mb-0">密碼</label>
              <div class="col-9">
                <input
                  type="password"
                  class="form-control"
                  id="signupPassword"
                  placeholder="註冊的密碼"
                  autocomplete="true"
                  :class="{ 'is-invalid': errors['signup.password'] }"
                  v-model="signupPassword"
                  v-bind="signupPasswordAttrs"
                />
                <span class="text-danger fs-8">{{ errors['signup.password'] }}</span>
              </div>
            </div>
            <div class="row gx-0">
              <label for="passwordConfirm" class="form-label col-3 mb-0">確認密碼</label>
              <div class="col-9">
                <input
                  type="password"
                  class="form-control"
                  id="passwordConfirm"
                  placeholder="確認密碼"
                  autocomplete="true"
                  :class="{ 'is-invalid': errors['signup.passwordConfirm'] }"
                  v-model="passwordConfirm"
                  v-bind="passwordConfirmAttrs"
                />
                <span class="text-danger fs-8">{{ errors['signup.passwordConfirm'] }}</span>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="hideModal()">取消</button>
          <button
            type="button"
            class="btn btn-primary"
            :disabled="!meta.valid"
            @click="signupUser()"
          >
            確認註冊
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useMutationObserver } from '@vueuse/core';
import { useForm } from 'vee-validate'; // 引入 useForm 處理表單
// 引入 Pinia 狀態管理
import { storeToRefs } from 'pinia';
import useAlertStore from '@/stores/alert';
import useUserStore from '@/stores/user';
import useLoadingStore from '@/stores/loading';
// 引入 UI 組件
import BadgeUi from '@/components/BadgeUi.vue';
import LoadingUi from '@/components/LoadingUi.vue';
// 引入 Composables 方法
import useValidation from '@/composables/useValidation';
import useApi from '@/composables/useApi';
// 引入 Bootstrap 方法
import Modal from 'bootstrap/js/dist/modal';

// 初始化路由
const router = useRouter();

// 取得 alert 方法
const alertStore = useAlertStore();
const { apiResAlert, apiErrAlert, handleError } = alertStore;

// 取得 user 資料、方法
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const { getFavorite, addAttrDate } = userStore;

// 取得 loading 方法
const loaderStore = useLoadingStore();
const { isLoadingOn, isLoadingOff } = loaderStore;

// 取得 useApi 方法
const { loginAdmin, renderSignin, renderSignup, setUserToken } = useApi();

// 定義 modal
const refModal = ref(null);
const signupModal = ref(null);

// 取出 schema 驗證規則
const { signupSchema, signinSchema } = useValidation();

// 動態選擇 schema
const isSignup = ref(false);
const validationSchema = computed(() => (isSignup.value ? signupSchema : signinSchema));

// 使用 useForm 來處理表單驗證
const { defineField, handleSubmit, errors, meta, values } = useForm({
  validationSchema,
});

// 定義表單欄位 : 登入
const [username, usernameAttrs] = defineField('signin.username');
const [password, passwordAttrs] = defineField('signin.password');

// 定義表單欄位 : 註冊
const [name, nameAttrs] = defineField('signup.name');
const [email, emailAttrs] = defineField('signup.email');
const [signupPassword, signupPasswordAttrs] = defineField('signup.password');
const [passwordConfirm, passwordConfirmAttrs] = defineField('signup.passwordConfirm');

// 後台登入 POST
const signinAdmin = async () => {
  isLoadingOn('isFullLoading');

  try {
    const res = await loginAdmin(values.signin);
    const { token, expired: expires } = res.data;

    // 將 token expires 存入 cookie，並將登入狀態設置為 true
    document.cookie = `token=${token}; expires=${new Date(expires)}; path=/`;
    user.value.loginState = true;

    router.push('/admin/home');
    apiResAlert(res.data.message);
  } catch (err) {
    apiErrAlert(err.response.data.message);
    throw err;
  } finally {
    isLoadingOff('isFullLoading');
  }
};

// 用戶登入 POST :
const signinUser = async () => {
  isLoadingOn('isFullLoading');

  const data = {
    email: values.signin.username,
    password: values.signin.password,
  };

  try {
    const res = await renderSignin(data);

    // 取得伺服器回傳的 accessToken，並設定 token 的過期時間為 1 分鐘後
    const { user: userInfo, accessToken: token } = res.data;
    const expires = new Date(new Date().getTime() + 60 * 60 * 1000).toUTCString();

    // 將 token 存入 cookie，並設定過期時間和路徑，並將 token 寫入至 Authorization
    document.cookie = `accessToken=${token}; expires=${expires}; path=/`;
    setUserToken(token);

    // 寫入 Pinia User 資料
    user.value.userInfo = userInfo;
    user.value.loginState = true;

    // 帶入收藏相關資料
    await getFavorite(userInfo.id);

    // 提示並轉跳頁面、關閉讀取效果
    apiResAlert('登入成功');
    router.push('/products');
  } catch (err) {
    handleError(err);
    throw err;
  } finally {
    isLoadingOff('isFullLoading');
  }
};

// 用戶註冊 POST :
const signupUser = handleSubmit(async (value, { resetForm }) => {
  // 定義註冊資料
  const data = {
    name: values.signup.name,
    email: values.signup.email,
    password: values.signup.password,
  };

  isLoadingOn('isFullLoading');
  try {
    const res = await renderSignup(data);

    const { id } = res.data.user;
    await addAttrDate(id);

    // 送出表單後清除內容、關閉讀取效果、提示。
    signupModal.value.hide();
    resetForm();
    apiResAlert('註冊成功');
  } catch (err) {
    handleError(err);
    throw err;
  } finally {
    isLoadingOff('isFullLoading');
  }
});

// 開啟 modal
const showModal = () => signupModal.value.show();

// 關閉 modal
const hideModal = () => signupModal.value.hide();

onMounted(() => {
  signupModal.value = new Modal(refModal.value);

  // 使用 MutationObserver 監聽 classList 變化
  useMutationObserver(
    refModal,
    (mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          // 判斷 refModal 的 class 是否包含 show
          const result = Array.from(refModal.value.classList).includes('show');
          isSignup.value = result;
        }
      });
    },
    {
      attributes: true, // 監聽屬性變化
    }
  );
});
</script>

<style lang="scss" scoped></style>
