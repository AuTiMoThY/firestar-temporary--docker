export default defineNuxtPlugin((nuxtApp) => {
    // 處理 payload 載入錯誤
    // 如果 payload 載入失敗，忽略錯誤（因為資料已經在 HTML 中）
    if (import.meta.client) {
        const originalLoadPayload = nuxtApp.payload.loadPayload;
        if (originalLoadPayload) {
            nuxtApp.payload.loadPayload = async (url: string) => {
                try {
                    return await originalLoadPayload(url);
                } catch (error) {
                    // 忽略 payload 載入錯誤，因為資料已經在 HTML 中
                    console.warn("Payload load failed, using inline data:", error);
                    return null;
                }
            };
        }
    }
});
