#!/usr/bin/env bash

# 檢查是否有提交訊息作為參數
if [ -z "$1" ]; then
  echo "請提供提交訊息"
  exit 1
fi

# 執行 Git 指令
git add .
git commit -m "$1"
git push