#!/usr/bin/env bash

# 啟用錯誤模式，一旦腳本中的任何指令返回非零狀態，腳本將立即退出
set -e

# 檢查是否有提交訊息作為參數
if [ -z "$1" ]; then
  # 如果沒有提供提交訊息，則自動抓取最新的 commit 訊息
  COMMIT_MESSAGE=$(git log -1 --pretty=%B)
else
  COMMIT_MESSAGE=$1
fi


# 執行編譯指令，將源代碼編譯成可部署的版本
npm run build

# 進入編譯後的目錄
cd dist

# 初始化一個新的 Git 儲存庫
git init

# 切換到一個名為 main 的新分支
git checkout -B main

# 將所有文件添加到 Git 暫存區
git add -A

# 提交更改，使用抓取的 commit 訊息
git commit -m "$COMMIT_MESSAGE"

# 強制推送到 GitHub 的 gh-pages 分支，覆蓋遠端的內容
git push -f https://github.com/Neil10241126/Cafe-Website-Project.git main:gh-pages

# 返回到之前的工作目錄
cd -