<template>
  <div class="uploader scrollbar">
    <!-- 顯示圖片區列表 -->
    <ul class="list-unstyled uploader__img-view">
      <li
        v-for="(images, index) in props.imagesUrl"
        :key="`image-${index}-${images}`"
        class="uploader__item loaded"
        :class="{ 'uploader__item--success': images }"
      >
        <img :src="images" width="150" height="150" />

        <!-- 圖片控制器 -->
        <div class="uploader__controller">
          <button type="button" @click="removeImage(index)">
            <svg width="24" height="24">
              <use xlink:href="/public/icons/dashboard-icons.svg#fig-trash"></use>
            </svg>
          </button>
        </div>
      </li>
    </ul>

    <!-- 上傳圖片按鈕 -->
    <div class="uploader__button" :class="{ none: !remaineUploadCount }">
      <label
        ref="dropArea"
        class="uploader__drop-area"
        :class="{ 'uploader__drop-area--enter': isDragEnter }"
        for="input-file"
        @dragover.prevent
        @drop.prevent="drop($event)"
        @dragenter="isDragEnter = true"
        @dragleave="isDragEnter = false"
      >
        <input
          id="input-file"
          ref="inputFile"
          type="file"
          multiple
          accept="image/*"
          hidden
          @change="updateImages()"
        />
        <svg width="48" height="48">
          <use xlink:href="/public/icons/dashboard-icons.svg#fig-plus"></use>
        </svg>
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
// 引入 Composables 方法
import useApi from '@/composables/useApi';
// 引入 Pinia 狀態管理
import useAlertStore from '@/stores/alert';

const props = defineProps({
  imagesUrl: {
    type: Array,
    default: () => [],
  },
});

const emits = defineEmits(['sendData', 'removeData']);

const inputFile = ref(null);
const dropArea = ref(null);
const isUploading = ref(false); // 是否正在上傳中的狀態
const isDragEnter = ref(false); // 是否拖曳進入上傳區域的狀態

// 計算剩餘可上傳圖片數量
const remaineUploadCount = computed(() => 5 - props.imagesUrl.length);

// 處理拖放事件
function drop(e) {
  inputFile.value.files = e.dataTransfer.files;
  updateImages();
}

// 取得 alert 方法
const alertStore = useAlertStore();
const { apiResAlert, apiErrAlert } = alertStore;

// 更新圖片
function updateImages() {
  // 將 FileList 轉換為陣列
  const files = [...inputFile.value.files];
  const fetchFiles = [];

  files.forEach((file, index) => {
    const { name, size, type } = file;
    const { isValidSize, isValidType, isUploadAllowed } = validateFile(size, type, index + 1);

    // 驗證檔案並加入上傳列表
    if (isValidSize && isValidType && isUploadAllowed && !isUploading.value) {
      fetchFiles.push(file);
    } else {
      // 顯示相應錯誤訊息
      if (!isValidSize) apiErrAlert(`${name} 檔案過大，不進行匯入`);
      if (!isValidType) apiErrAlert(`${name} 檔案類型錯誤，不進行匯入`);
      if (!isUploadAllowed) apiErrAlert(`${name} 超過最大值，第五筆以後不匯入!`);
      if (isUploading.value) apiErrAlert(`上傳中，禁止匯入檔案!`);
    }
  });

  // 上傳驗證通過的檔案
  if (fetchFiles.length) {
    uploadImagesToServer(fetchFiles);
  }
}

// 移除圖片
function removeImage(index) {
  emits('removeData', index);
}

// 驗證檔案: 檔案大小、類型、上傳數量
function validateFile(fileSize, fileType, count) {
  return {
    isValidSize: fileSize < 3 * 1024 * 1024, // 3 MB,
    isValidType: ['png', 'jpeg'].includes(fileType.split('/').pop()),
    isUploadAllowed: count <= remaineUploadCount.value,
  };
}

// 取得 useApi 方法
const { fetchUpload } = useApi();

// 上傳圖片到伺服器
async function uploadImagesToServer(files) {
  isUploading.value = true;

  // 將文件存為陣列格式，準備一次上傳
  const uploadPromises = files.map((file) => {
    const formData = new FormData();
    formData.append('file-to-upload', file);
    return fetchUpload(formData);
  });

  try {
    const results = await Promise.all(uploadPromises);

    // 從上傳結果中提取圖片 URL
    const imagesData = results.map((res) => res.data.imageUrl);

    // 發送上傳成功的圖片 URL 到父組件
    emits('sendData', [...imagesData]);
    apiResAlert('圖片上傳成功');
  } catch (error) {
    apiErrAlert(error.response.data.message);
  } finally {
    isUploading.value = false;
    isDragEnter.value = false;
  }
}
</script>

<style lang="scss" scoped>
.uploader {
  display: flex;
  overflow-x: auto;
}

// 顯示圖片列表 Style
.uploader__img-view {
  display: flex;

  .uploader__item {
    position: relative;
    width: 100px;
    height: 100px;
    border: 2px solid #a0a0a0;
    border-radius: 8px;
    margin-right: 8px;

    &--success {
      border-color: #2fe5a7;
    }

    img {
      max-width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }

    // 控制按鈕 Style
    .uploader__controller {
      display: none;
      position: absolute;
      inset: 0;
      border-radius: inherit;
      top: 0;
      left: 0;
      margin-left: 0;
      transition: 0.25s;
      button {
        position: absolute;
        top: 50%;
        left: 50%;
        visibility: hidden;
        opacity: 0;
        background-color: transparent;
        transform: translate(-50%, -50%);
        border: 0;
        padding: 4px;
        transition: 0.25s;
        color: #a0a0a0;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.6);
        button {
          visibility: visible;
          opacity: 1;
          &:hover {
            color: #f2f2f2;
          }
        }
      }
    }

    &.loaded .uploader__controller {
      display: block;
    }
  }
}

// 上傳按鈕 Style
.uploader__button {
  .uploader__drop-area {
    width: 100px;
    height: 100px;
    border: 2px dashed #fff;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    svg {
      pointer-events: none;
    }

    &:hover,
    &--enter {
      border-color: #2fe5a7;
      color: #2fe5a7;
    }
  }
}

.none {
  display: none;
}

// X 軸拖曳樣式
.scrollbar {
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: #a0a0a0;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #fcc55f;
  }
}
</style>
