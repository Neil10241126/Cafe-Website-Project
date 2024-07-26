<template>
  <label
    for="file-input"
    class="drop-area"
    :class="[{ 'border-netural-800': imgData.isUploaded }, { show: imgData.isUploaded }]"
    @drop.prevent="dropImg($event)"
    @dragover.prevent=""
  >
    <input
      type="file"
      id="file-input"
      accept="image/jpeg, image/png, image/webp"
      hidden
      ref="fileInput"
      @change="uploadImg()"
    />

    <!-- 圖片顯示 -->
    <div class="img-view" ref="imgView">
      <svg v-show="!imgData.isUploaded" width="36" height="36" class="img-icons">
        <use xlink:href="/public/icons/icons.svg#plus" />
      </svg>

      <div class="tool" :class="{ show: imgData.isUploaded }">
        <div class="tool-list">
          <a href="#" class="tool-icon" @click.prevent="removeImg()">
            <svg width="24" height="24">
              <use xlink:href="/public/icons/icons.svg#trash3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </label>
</template>

<script setup>
import { ref } from 'vue';

const fileInput = ref(null);
const imgView = ref(null);

const imgData = ref({
  isUploaded: false,
  link: '',
  name: '',
  size: 0,
  type: '',
  data: {},
});

const emits = defineEmits(['sendImgData']);

function uploadImg() {
  if (fileInput.value.files.length) {
    // 從 filles 解構取出 name size 屬性
    const { name, size, type } = fileInput.value.files[0];
    // 將取出的值從新賦予至 imgData 中
    imgData.value = {
      isUploaded: true,
      link: URL.createObjectURL(fileInput.value.files[0]),
      name,
      size,
      type: type.split('/').pop(),
      data: fileInput.value.files[0],
    };

    // 顯示上傳圖片畫面
    imgView.value.style.backgroundImage = `url(${imgData.value.link})`;
  }
}

function dropImg(e) {
  // 從拖放事件中取得第一個檔案的類型
  const { type } = e.dataTransfer.files[0];
  // 檢查檔案類型是否為圖片
  const isImageType = type.split('/').shift() === 'image';

  // 如果是圖片類型則變更 fileInput 並更新 uploadIgm()
  if (isImageType) {
    fileInput.value.files = e.dataTransfer.files;
    uploadImg();
  }
}

function removeImg() {
  // 清空 fileInput 值
  fileInput.value = {};
  // 將 imgData 值清除。
  imgData.value = {
    isUploaded: false,
    link: '',
    name: '',
    size: 0,
    type: '',
    data: {},
  };

  // 移除顯示 backgroundImage 畫面
  imgView.value.style.backgroundImage = '';
}

// emit 將資料傳出
function emitImgData() {
  emits('sendImgData', imgData);
}

emitImgData();
</script>

<style lang="scss" scoped>
.drop-area {
  position: relative;
  width: 100px;
  height: 100px;
  padding: 15px 0;
  border: 2px dashed var(--bs-netural-400);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  // cursor: pointer;
  &:hover {
    border: 2px dashed var(--bs-netural-800);
    .img-icons {
      color: 2px dashed var(--bs-netural-800);
    }
  }
}

.drop-area.show {
  background: var(--bs-netural-900);
  border: 2px solid var(--bs-netural-900);
  &:hover {
    opacity: 1;
  }
}

.img-view {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-image: url(../../assets/Service-img.jpg);
  background-position: center;
  background-size: cover;
  .img-icons {
    color: var(--bs-netural-400);
  }
}

.tool {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  inset: -2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.tool.show {
  opacity: 1;
  visibility: visible;
  transition: all 0.2s ease;
  &:hover {
    background: var(--bs-netural-900);
    opacity: 0.7;
    .tool-icon {
      display: block;
    }
  }
}

.tool-list {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tool-icon {
  display: none;
  color: var(--bs-netural-400);
  padding: 4px;
  &:hover {
    color: var(--bs-netural-100);
  }
}
</style>
