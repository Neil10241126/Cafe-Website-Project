<template>
  <div class="py-8">
    <div class="container px-4">
      <div class="row justify-content-center bg-secondary-light rounded-4"
        style="box-shadow: 0 4px 4px rgba(95, 61, 45, 0.2),0 4px 4px rgba(95, 61, 45, 0.2);">
        <!-- 登入圖片 -->
        <div class="col-lg-5">
          <div class="d-none d-lg-block px-3 py-6">
            <img src="/public/images/Sign-logo.svg" class="img-fluid" alt="Sign-logo">
          </div>
        </div>
        <!-- 輸入內容 -->
        <div class="col-12 col-sm-8 col-lg-5">
          <div class="px-3 py-6">
            <div class="text-center mb-6">
              <img src="/public/images/Beans-cafe-logo-dark.svg" class="mx-auto mb-2"
                alt="logo-dark">
              <BadgeUi content="一般用戶" size="normal"></BadgeUi>
            </div>
            <VForm :validation-schema="schema" v-slot="{ errors, meta }" @submit="signin">
              <div class="d-flex mb-4">
                <label for="email" class="form-label me-3 mb-0">
                  <i class="bi bi-person-circle fs-3 lh-40px text-gray-800"></i>
                </label>
                <div class="w-100">
                  <VField type="email" class="form-control" id="email" placeholder="請輸入您的帳號"
                    :class="{'is-invalid': errors['username']}"
                    name="username"/>
                  <ErrorMessage name="username" class="text-danger"/>
                </div>
              </div>
              <div class="d-flex mb-4">
                <label for="password" class="form-label me-3 mb-0">
                  <i class="bi bi-shield-lock fs-3 lh-40px text-gray-800"></i>
                </label>
                <div class="w-100">
                  <VField type="password" class="form-control" id="password" placeholder="請輸入您的密碼"
                    autocomplete="true"
                    :class="{'is-invalid': errors['password']}"
                    name="password"
                    @keyup.enter="signin()"/>
                  <ErrorMessage name="password" class="text-danger"/>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <RouterLink to="/" class="link-gray-600 text-decoration-underline
                  link-offset-1">返回首頁</RouterLink>
                <div>
                  <button type="button" class="btn btn-outline-primary">註冊</button>
                  <button type="submit" class="btn btn-primary ms-4"
                    :disabled="!meta.valid">登入</button>
                </div>
              </div>
            </VForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
// 引入 Pinia 狀態管理
import useAlertStore from '@/stores/alert';
// 引入 UI 組件
import BadgeUi from '@/components/BadgeUi.vue';

const { VITE_API_URL } = import.meta.env;

// 初始化路由
const router = useRouter();

// 取得 alert 方法
const alertStore = useAlertStore();
const { apiResAlert, apiErrAlert } = alertStore;

// 引入 yup 驗證庫
const yup = inject('$yup');

// 定義驗證物件 schema
const schema = yup.object({
  username: yup.string().required('email 為必填').email(),
  password: yup.string().required('password 為必填').min(8),
});

// 登入後台 POST
function signin(user) {
  axios.post(`${VITE_API_URL}/v2/admin/signin`, user)
    .then((res) => {
      const { token, expired: expires } = res.data;

      // 將 token expires 存入 cookie
      document.cookie = `token=${token}; expires=${expires}; path=/`;
      apiResAlert(res.data.message);
      router.push('/admin');
    })
    .catch((err) => apiErrAlert(err.response.data.message));
}

</script>

<style lang="scss" scoped>
</style>
