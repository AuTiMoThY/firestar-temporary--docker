# 使用 Node.js 20 Alpine 映像（輕量且高效）
FROM node:20-alpine

# 安裝 pnpm
RUN npm install -g pnpm@10.24.0

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 pnpm-lock.yaml（用於 Docker 層級快取）
COPY package.json pnpm-lock.yaml ./

# 在構建時安裝依賴（利用 Docker 層級快取）
# 只有當 package.json 或 pnpm-lock.yaml 變更時才會重新執行此步驟
RUN pnpm install --frozen-lockfile

# 暴露端口
EXPOSE 8010

# 預設命令（可在 compose.yaml 中覆蓋）
CMD ["pnpm", "dev"]
