<script setup>
useHead({
    meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [{ rel: "icon", href: "/favicon.ico" }],
    htmlAttrs: {
        lang: "zh-TW"
    }
});

const title = "Firestar 方元開發有限公司";
const description =
    "FIRESTAR是台灣運動服飾品牌,吸濕排汗專家,FIRESTAR是針對時下年輕人所設計的運動休閒風品牌。並以「直接、新鮮、創意」作為FIRESTAR給人最與眾不同及清新的品牌感受，進而創造出與眾不同的運動休閒風潮。";

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description
    // ogImage: "https://ui.nuxt.com/assets/templates/nuxt/starter-light.png",
    // twitterImage: "https://ui.nuxt.com/assets/templates/nuxt/starter-light.png",
    // twitterCard: "summary_large_image"
});
</script>

<template>
    <UApp>
        <NuxtLoadingIndicator />

        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </UApp>
</template>
