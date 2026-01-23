# 使用 Node.js 20 Alpine 映像（輕量且高效）
FROM node:20-alpine

# 安裝 pnpm
RUN npm install -g pnpm@10.24.0

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 pnpm-lock.yaml（用於檢查依賴是否已安裝）
COPY package.json pnpm-lock.yaml ./

# 不在這裡安裝依賴，等待容器啟動時處理
# 這樣可以避免每次代碼變更都需要重新構建 Docker 映像

# 暴露端口
EXPOSE 8010

# 開發環境會延遲到容器啟動時才執行依賴安裝和啟動
