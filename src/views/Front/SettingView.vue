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
                <a href="#">
                  <svg width="55" height="55" class="text-gray-600">
                    <use xlink:href="/public/icons/icons.svg#user" />
                  </svg>
                  <!-- <img
                    src="../../../public/images/Sign-logo.svg"
                    class="rounded-circle"
                    style="min-width: 55px; height: 55px"
                    width="55"
                  /> -->
                </a>
                <div class="ms-3">
                  <p class="fs-7 fw-semibold text-gray-800 mb-1">您的個人照片</p>
                  <span class="fs-8 text-gray-600">請使用約 130 像素大小的正方形圖片</span>
                </div>
              </div>
              <div>
                <p class="fs-7 fw-semibold text-gray-800 mb-1">您的名稱</p>
                <span class="fs-8 text-gray-600">可使用姓名、偏好暱稱</span>
                <div class="d-flex align-items-stretch mt-1">
                  <input type="text" class="form-control form-control-sm me-3" />
                  <button
                    type="button"
                    class="fs-8 btn btn-outline-gray-800 border-gray-600 rounded-1 text-nowrap"
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
                    <span class="fs-8 text-gray-600">選擇或更新帳戶密碼</span>
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
          <div class="mb-3">
            <p class="fs-7 fw-semibold text-gray-800 mb-1">新的密碼</p>
            <span class="fs-8 text-gray-600">密碼長度至少 8 個字元</span>
            <input
              type="password"
              class="form-control form-control-sm mt-2"
              placeholder="請輸入密碼"
            />
          </div>
          <div class="mb-3">
            <p class="fs-7 fw-semibold text-gray-800 mb-1">確認密碼</p>
            <input
              type="password"
              class="form-control form-control-sm mt-2"
              placeholder="請輸入相同密碼"
            />
          </div>
        </div>
        <div class="modal-footer px-4">
          <button
            type="button"
            class="btn btn-outline-gray-600 rounded-1 fs-8"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary rounded-1 fs-8">更新</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
