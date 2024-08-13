<template>
  <div class="container py-6">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-8">
        <div>
          <h3 class="fs-5 text-gray-800">帳號設定</h3>
          <p class="fs-8 text-gray-600 mb-4">管理您的個人資料，選項或帳戶設置。</p>
          <!-- card Profile -->
          <div class="card border-gray-400 mb-4">
            <div class="card-header bg-secondary-tint px-4 p-3">
              <h4 class="fs-8 text-gray-800 mb-0">您的個人資料</h4>
            </div>
            <div class="card-body bg-secondary-tint rounded-bottom p-4">
              <div class="d-flex mb-3">
                <label for="file-input" class="drop-area">
                  <input
                    type="file"
                    id="file-input"
                    accept="image/jpeg, image/png, image/webp"
                    hidden
                    ref="fileInputRef"
                    @change="uploadImg()"
                  />

                  <!-- 圖片顯示 -->
                  <div class="img-view" ref="imgViewRef">
                    <svg v-show="!isImageUpload" width="55" height="55" class="text-gray-600">
                      <use xlink:href="/public/icons/icons.svg#user" />
                    </svg>
                  </div>
                </label>
                <div class="ms-3">
                  <p class="fs-7 fw-semibold text-gray-800 mb-1">您的個人照片</p>
                  <span class="fs-8 text-gray-600">請使用約 130 像素大小的正方形圖片</span>
                </div>
              </div>
              <div>
                <p class="fs-7 fw-semibold text-gray-800 mb-1">您的名稱</p>
                <span class="fs-8 text-gray-600">可使用姓名、偏好暱稱</span>
                <div class="d-flex align-items-stretch mt-1">
                  <input type="text" class="form-control form-control-sm me-3" v-model="rename" />
                  <button
                    type="button"
                    class="fs-8 btn btn-outline-gray-800 border-gray-600 rounded-1 text-nowrap"
                    @click="updateUserName()"
                  >
                    更新
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- card Login -->
          <div class="card border-gray-400 mb-4">
            <div class="card-header bg-secondary-tint px-4 p-3">
              <h4 class="fs-8 text-gray-800 mb-0">登入資訊</h4>
            </div>
            <div class="card-body bg-secondary-tint rounded-bottom p-4">
              <div class="d-flex align-items-center">
                <span class="border border-gray-400 rounded-circle p-1">
                  <svg width="30" height="30" class="text-gray-800">
                    <use xlink:href="/public/icons/icons.svg#key" />
                  </svg>
                </span>
                <div class="d-flex justify-content-between align-items-center flex-fill ms-3">
                  <div>
                    <p class="fs-7 fw-semibold text-gray-800 mb-0">您的密碼</p>
                    <span class="fs-8 text-gray-600">點選編輯來更新您的密碼</span>
                  </div>
                  <button
                    type="button"
                    class="fs-8 btn btn-outline-gray-800 border-gray-600 rounded-1 text-nowrap"
                    data-bs-toggle="modal"
                    data-bs-target="#editPasswordModal"
                  >
                    編輯
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Edit Password -->
  <div class="modal fade" id="editPasswordModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header px-4">
          <div>
            <h1 class="modal-title fs-6">更新您的密碼</h1>
            <span class="fs-8 text-gray-600">選擇一組新的密碼來確保您的帳戶安全</span>
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body px-4">
          <form action="#">
            <div class="mb-3">
              <p class="fs-7 fw-semibold text-gray-800 mb-1">
                新的密碼
                <span class="text-danger fw-normal fs-8 ms-1">{{ errors['password'] }}</span>
              </p>
              <span class="fs-8 text-gray-600">密碼長度至少 8 個字元</span>
              <input
                type="password"
                class="form-control form-control-sm mt-2"
                :class="{ 'is-invalid': errors['password'] }"
                placeholder="請輸入密碼"
                autocomplete="true"
                v-model="password"
                v-bind="passwordAttrs"
              />
            </div>
            <div class="mb-3">
              <p class="fs-7 fw-semibold text-gray-800 mb-1">
                確認密碼
                <span class="text-danger fw-normal fs-8 ms-1">{{ errors['passwordConfirm'] }}</span>
              </p>
              <input
                type="password"
                class="form-control form-control-sm mt-2"
                :class="{ 'is-invalid': errors['passwordConfirm'] }"
                placeholder="請輸入相同密碼"
                autocomplete="true"
                v-model="passwordConfirm"
                v-bind="passwordConfirmAttrs"
              />
            </div>
          </form>
        </div>
        <div class="modal-footer px-4">
          <button
            type="button"
            class="btn btn-outline-gray-600 rounded-1 fs-8"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary rounded-1 fs-8"
            :disabled="!meta.valid"
            @click="onSubmit()"
          >
            更新
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useForm } from 'vee-validate'; // 引入 useForm 處理表單
// 引入 Pinia 狀態管理
import { storeToRefs } from 'pinia';
import useUserStore from '@/stores/user';
import useAlertStore from '@/stores/alert';
// 引入 Composables 方法
import useApi from '@/composables/useApi';
import useValidation from '@/composables/useValidation';

// 取得 user 資料
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

// 取得 useApi 方法
const { renderUpdateName, renderUpdatePassword } = useApi();

// 取得 alert 方法
const alertStore = useAlertStore();
const { apiResAlert, apiErrAlert } = alertStore;

// 取出 useImageUpload 資料、方法
const { fileInputRef, imgViewRef, isImageUpload, uploadImg } = useImageUpload();

function useImageUpload() {
  const fileInputRef = ref(null);
  const imgViewRef = ref(null);
  const isImageUpload = ref(false);

  // 圖片上傳
  function uploadImg() {
    if (fileInputRef.value.files.length) {
      const imageLink = URL.createObjectURL(fileInputRef.value.files[0]);

      imgViewRef.value.style.backgroundImage = `url(${imageLink})`;
      isImageUpload.value = true;
    }
  }

  return {
    fileInputRef,
    imgViewRef,
    isImageUpload,
    uploadImg,
  };
}

// 取出 useUpdateUserName 資料、方法
const { rename, updateUserName } = useUpdateUserName();

function useUpdateUserName() {
  const rename = ref();

  // 更新姓名 PATCH
  function updateUserName() {
    const { id } = user.value.userInfo;
    const nameData = { name: rename.value };

    renderUpdateName(id, nameData)
      .then(() => {
        user.value.userInfo.name = rename.value;
        apiResAlert('更新成功');
      })
      .catch((err) => {
        apiErrAlert(err);
      });
  }

  onMounted(() => {
    rename.value = user.value.userInfo.name;
  });

  return {
    rename,
    updateUserName,
  };
}

// 更新密碼 PATCH
async function updateUserPassword() {
  const { id } = user.value.userInfo;
  const passwordData = { password: password.value };

  try {
    await renderUpdatePassword(id, passwordData);
    apiResAlert('更新成功');
  } catch (err) {
    apiErrAlert(err);
    throw err;
  }
}

// 取出 schema 驗證規則
const { settingSchema } = useValidation();

// 使用 useForm 來處理表單驗證
const { defineField, handleSubmit, errors, meta } = useForm({
  validationSchema: settingSchema,
});

// 定義表單欄位 : 登入
const [password, passwordAttrs] = defineField('password');
const [passwordConfirm, passwordConfirmAttrs] = defineField('passwordConfirm');

const onSubmit = handleSubmit(async (values, { resetForm }) => {
  try {
    await updateUserPassword();
    resetForm();
  } catch (err) {
    // 錯誤已經在 updateUserPassword 中處理，這裡不需要額外處理
  }
});
</script>

<style lang="scss" scoped>
.drop-area {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
}

.img-view {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  // background-image: url(../../../public/images/person-2.png);
  background-position: center;
  background-size: cover;
}
</style>
