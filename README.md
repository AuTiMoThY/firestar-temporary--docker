# Docker Nuxt 4 樣板

這是一個基於 **Nuxt 4** 的前端開發樣板，使用 **Docker** 和 **Docker Compose** 進行容器化管理。樣板已整合 **Nuxt UI**、**VueUse**、**Nuxt Image** 等常用模組，並配置好開發環境的熱模組替換（HMR）功能。

## 專案特色

- 🚀 **Nuxt 4** - 最新版本的 Nuxt 框架
- 🎨 **Nuxt UI** - 現代化的 UI 元件庫
- 🐳 **Docker 容器化** - 使用 Docker Compose 管理開發環境
- 📦 **pnpm** - 快速的套件管理器
- 🔥 **熱模組替換** - 支援 Docker 環境下的 HMR
- 🖼️ **Nuxt Image** - 內建圖片優化功能
- 📝 **TypeScript** - 完整的型別支援

## Docker 起手式

### 前置需求

- [Docker](https://www.docker.com/get-started) (建議使用 Docker Desktop)
- [Docker Compose](https://docs.docker.com/compose/install/) (通常已包含在 Docker Desktop 中)

### 快速開始

1. **複製環境變數檔案**
   ```bash
   copy env.example .env
   ```

2. **啟動 Docker 容器**
   ```bash
   docker compose up -d
   ```

3. **查看容器狀態**
   ```bash
   docker compose ps
   ```

4. **開啟瀏覽器**
   訪問 `http://localhost:3001` 即可看到應用程式

### 首次啟動

首次啟動時，Docker 會自動：
- 建置映像檔
- 安裝依賴套件
- 啟動開發伺服器

這可能需要幾分鐘的時間，請耐心等待。

## Docker 常用指令

### 容器管理

```bash
# 啟動所有服務（背景執行）
docker compose up -d

# 啟動所有服務（前台執行，可看到日誌）
docker compose up

# 停止所有服務
docker compose down

# 停止並移除 volumes（清除資料）
docker compose down -v

# 重新啟動服務
docker compose restart

# 查看容器狀態
docker compose ps

# 查看容器日誌
docker compose logs

# 即時查看容器日誌（類似 tail -f）
docker compose logs -f

# 查看特定服務的日誌
docker compose logs -f frontend
```

### 建置與重建

```bash
# 建置映像檔（不啟動）
docker compose build

# 強制重新建置映像檔（不使用快取）
docker compose build --no-cache

# 重新建置並啟動
docker compose up -d --build
```

### 進入容器

```bash
# 進入前端容器執行命令
docker compose exec frontend sh

# 在容器中執行特定指令（例如安裝套件）
docker compose exec frontend pnpm install

# 在容器中執行開發伺服器
docker compose exec frontend pnpm dev
```

### 清理資源

```bash
# 停止並移除容器、網路
docker compose down

# 停止並移除容器、網路、volumes
docker compose down -v

# 移除未使用的映像檔
docker image prune

# 移除所有未使用的資源（容器、網路、映像檔、volumes）
docker system prune -a
```

### 查看資源使用情況

```bash
# 查看容器資源使用情況
docker stats

# 查看特定容器的資源使用
docker stats test-frontend
```

## 開發指令

在容器內或本地環境中，可以使用以下指令：

```bash
# 安裝依賴
pnpm install

# 啟動開發伺服器
pnpm dev

# 建置生產版本
pnpm build

# 預覽生產版本
pnpm preview

# 執行 ESLint 檢查
pnpm lint

# 執行型別檢查
pnpm typecheck
```

## 專案結構

```
docker-nuxt4/
├── app/                 # Nuxt 應用程式目錄
│   ├── pages/          # 頁面路由
│   ├── layouts/        # 佈局元件
│   └── assets/         # 靜態資源
├── public/             # 公開靜態檔案
├── Dockerfile          # Docker 映像檔定義
├── compose.yaml        # Docker Compose 配置
├── nuxt.config.ts      # Nuxt 配置檔
└── package.json        # 專案依賴
```

## 環境變數

專案使用 `.env` 檔案管理環境變數，請參考 `env.example` 進行配置。

主要環境變數：
- `FRONTEND_PORT`: 前端服務端口（預設：3001）
- `NODE_ENV`: 執行環境（development/production）
- `NUXT_PUBLIC_API_BASE`: API 基礎網址

## 注意事項

- 開發環境預設運行在 `http://localhost:3001`
- 容器內的檔案變更會自動同步到本地（透過 volume 掛載）
- 首次啟動時，`node_modules` 會建立為 Docker volume，避免與本地衝突
- 如需修改端口，請在 `.env` 檔案中設定 `FRONTEND_PORT`

## 相關連結

- [Nuxt 文件](https://nuxt.com/docs)
- [Nuxt UI 文件](https://ui.nuxt.com)
- [Docker 文件](https://docs.docker.com)
- [Docker Compose 文件](https://docs.docker.com/compose)
