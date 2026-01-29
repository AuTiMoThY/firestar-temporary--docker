// https://nuxt.com/docs/api/configuration/nuxt-config

// 判斷是否為生產環境（generate/build）
const processEnv = (
    globalThis as { process?: { env?: Record<string, string | undefined> } }
).process?.env;
const isProduction = processEnv?.NODE_ENV === "production";

const version = "20260120";
const basePath = isProduction ? "/" : "/"

console.log("======================", `http://localhost:${processEnv?.FRONTEND_PORT}`);


export default defineNuxtConfig({
    modules: [
      "@nuxt/eslint",
      "@nuxt/ui",
      "@nuxt/image",
      "@vueuse/nuxt"
    ],

    // 設定基礎路徑：開發時為 /，生產環境為 /admin/
    app: {
        baseURL: basePath
    },

    devtools: {
        enabled: true
    },

    css: ["~/assets/css/main.css"],

    compatibilityDate: "2025-01-15",

    // 開發伺服器配置
    devServer: {
        host: "0.0.0.0", // 綁定到所有網路介面（Docker 需要）
        port: 8010,
        // 注意：Nuxt 會根據實際綁定的 host 顯示 URL
        // 即使顯示 0.0.0.0，您仍可使用 http://localhost:8010 訪問
    },

    // Vite 配置（Docker 環境中的 HMR 支援）
    vite: {
        server: {
            // 允許外部訪問（重要：Docker 環境需要）
            cors: true,
            hmr: {
                // Docker 環境：讓瀏覽器透過 host 的 port 連上 HMR WebSocket
                host: "localhost",
                port: 8010,
                protocol: "ws",
            },
            watch: {
                // Docker 內 inotify 收不到 host 的檔案事件，必須用輪詢
                usePolling: true,
                interval: 500,  // 輪詢間隔（ms），愈小愈即時，但 CPU 稍高
                binaryInterval: 1000,
            },
            fs: {
                // 允許監控的目錄（包含 app 目錄）
                strict: false,
                // 允許訪問的目錄
                allow: [".."],
            },
        },
        // 優化構建效能
        optimizeDeps: {
            // 預先構建常用依賴以加快啟動速度
            include: ["vue", "@nuxt/ui", "@vueuse/core"],
            // 排除原生模組（.node 文件），這些模組不能通過 esbuild 預構建
            exclude: [
                "lightningcss",
                "@tailwindcss/oxide",
                "@tailwindcss/oxide-linux-x64-musl",
                "@tailwindcss/oxide-linux-x64-gnu",
            ],
            // 強制預構建（加快後續啟動速度）
            force: false,
        },
        // 開發環境優化
        logLevel: "warn", // 減少日誌輸出
        build: {
            // 在開發環境中減少構建開銷
            minify: isProduction,
            sourcemap: !isProduction,
        },
    },

    eslint: {
        config: {
            stylistic: {
                commaDangle: "never",
                braceStyle: "1tbs",
                quotes: "double"
            }
        }
    },

    // 優化開發環境的編譯速度
    typescript: {
        // 在開發環境中跳過類型檢查以加快編譯速度
        typeCheck: isProduction,
    },

    // 優化 Nitro 配置（用於 SSR/API）
    nitro: {
        // 在開發環境中禁用預渲染以加快啟動速度
        prerender: {
            // 自動從頁面中發現連結並預渲染
            crawlLinks: true,
            // 如果遇到錯誤，繼續處理其他路由（不中斷整個流程）
            failOnError: false,
            // 明確指定要預渲染的路由（包含所有 detail 路由）
            routes: [
                "/",
                "/about",
                "/store",
                "/bicycle",
                "/new_products/men",
                "/new_products/women",
                "/new_products/golf",
            ]
        },
    },
    runtimeConfig: {
        public: {
            version,
            basePath,
        }
    },

    // Nuxt Image 配置
    image: {
        // 使用本地提供者
        provider: "ipx",
        // 圖片品質設定
        quality: 80,
        // 預設格式（如果瀏覽器支援）
        format: ["webp"],
        // 響應式圖片尺寸
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
        },
    }

});