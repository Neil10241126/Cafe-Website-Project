<template>
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
              <BadgeUi content="一般用戶" size="normal"></BadgeUi>
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
                    v-model="username"
                    v-bind="usernameAttrs"
                  />
                  <span class="text-danger">{{ errors.username }}</span>
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
                    v-model="password"
                    v-bind="passwordAttrs"
                    @keyup.enter="signin()"
                  />
                  <span class="text-danger">{{ errors.password }}</span>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <RouterLink to="/" class="link-gray-600 text-decoration-underline link-offset-1">
                  返回首頁
                </RouterLink>
                <div>
                  <button type="button" class="btn btn-outline-primary">註冊</button>
                  <button
                    type="button"
                    class="btn btn-primary ms-4"
                    :disabled="!meta.valid"
                    @click="signin()"
                  >
                    登入
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useForm } from 'vee-validate'; // 引入 useForm 處理表單
// 引入 Pinia 狀態管理
import useAlertStore from '@/stores/alert';
// 引入 UI 組件
import BadgeUi from '@/components/BadgeUi.vue';
// 引入 helpers 方法
import { singinSchema } from '@/helpers/validation';
import { loginUser } from '@/helpers/api';

// 初始化路由
const router = useRouter();

// 取得 alert 方法
const alertStore = useAlertStore();
const { apiResAlert, apiErrAlert } = alertStore;

// 使用 useForm 來處理表單驗證
const { defineField, errors, meta, values } = useForm({
  validationSchema: singinSchema,
});

// 定義表單欄位
const [username, usernameAttrs] = defineField('username');
const [password, passwordAttrs] = defineField('password');

// 登入後台 POST
const signin = () => {
  loginUser(values)
    .then((res) => {
      const { token, expired: expires } = res.data;

      // 將 token expires 存入 cookie
      document.cookie = `token=${token}; expires=${expires}; path=/`;
      apiResAlert(res.data.message);
      router.push('/admin');
    })
    .catch((err) => apiErrAlert(err.response.data.message));
};
</script>

<style lang="scss" scoped></style>
