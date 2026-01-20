// https://nuxt.com/docs/api/configuration/nuxt-config

// 判斷是否為生產環境（generate/build）
const processEnv = (
    globalThis as { process?: { env?: Record<string, string | undefined> } }
).process?.env;
const isProduction = processEnv?.NODE_ENV === "production";

const version = "20260120";
const basePath = isProduction ? "/firestar-202601/" : "/"

console.log("======================", `http://localhost:${processEnv?.FRONTEND_PORT}`);

export default defineNuxtConfig({
    modules: [
      "@nuxt/eslint",
      "@nuxt/ui",
      "@nuxt/image",
      "@vueuse/nuxt"
    ],

    ssr: false, // 禁用 SSR，只使用客戶端渲染

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
            hmr: {
                host: "localhost",
                port: 8010,
            },
            watch: {
                usePolling: true, // Docker 環境中需要輪詢來檢測文件變更
                interval: 300, // 增加輪詢間隔以減少 CPU 使用
                binaryInterval: 1000, // 二進制文件的輪詢間隔
            },
            fs: {
                // 允許監控的目錄（包含 app 目錄）
                strict: false,
            },
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
    runtimeConfig: {
        public: {
            version,
            basePath,
        }
    }
});