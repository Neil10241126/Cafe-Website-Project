<template>
  <label
    ref="dropArea"
    class="uploader"
    for="input-file"
    @dragover.prevent
    @drop.prevent="drop($event)"
  >
    <input
      ref="inputFile"
      type="file"
      accept="images/*"
      id="input-file"
      hidden
      @change="validateImage()"
    />

    <div ref="imageView" class="uploader__view">
      <svg width="60" height="60">
        <use xlink:href="/public/icons/dashboard-icons.svg#fig-upload"></use>
      </svg>
      <p class="uploader__view-title">拖曳您的圖片或者從資料夾</p>
      <p class="uploader__view-text">僅限 .jpg .png 檔案，且不可大於 3MB。</p>
    </div>
  </label>
</template>

<script setup>
import { ref } from 'vue';
import useApi from '@/composables/useApi';

const { fetchUpload } = useApi();

const dropArea = ref(null);
const imageView = ref(null);
const inputFile = ref(null);

function drop(e) {
  inputFile.value.files = e.dataTransfer.files;
  validateImage();
}

function validateImage() {
  const file = inputFile.value.files[0];
  const { size, type } = file;

  const { isValidSize, isValidType } = validateFile(size, type);

  if (isValidSize && isValidType) {
    uploadImageToServer(file);
  } else {
    if (!isValidSize) alert('檔案過大');
    if (!isValidType) alert('類型錯誤');
  }
}

function validateFile(fileSize, fileType) {
  return {
    isValidSize: fileSize < 3 * 1024 * 1024,
    isValidType: ['jpeg', 'png'].includes(fileType.split('/').pop()),
  };
}

async function uploadImageToServer(file) {
  const formData = new FormData();
  formData.append('file-to-upload', file);

  try {
    const res = await fetchUpload(formData);
    console.log(res);
    // imageView.value.style.backgroundImage = `url(${res.data.imageUrl})`;
  } catch (err) {
    console.log(err);
  }
}
</script>

<style lang="scss" scoped>
.uploader {
  width: 100%;
  height: 240px;
  border: 2px dashed #a0a0a0;
  border-radius: 8px;
  padding: 16px 24px;

  &--success {
    border-color: #2fe5a7;
  }
}

.uploader__view {
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background-image: url(/public/尼耶里曙光G1.jpg);
  background-position: center center;
  background-size: cover;
}

.uploader__view-title {
  font-size: 14px;
  color: #a0a0a0;
  margin: 8px 0;
}
.uploader__view-text {
  font-size: 10px;
  color: #a0a0a0;
  margin-bottom: 0;
}
</style>
