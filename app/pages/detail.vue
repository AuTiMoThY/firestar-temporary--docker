<script setup lang="ts">
/**
 * 舊網址導頁：/detail?id=xxx → /products/xxx
 */
const route = useRoute();
const queryId = route.query.id;

const targetSlug = typeof queryId === "string" ? queryId : undefined;
const target = targetSlug ? `/products/${targetSlug}` : "/";

await navigateTo(target, {
    redirectCode: 301,
    replace: true
});
</script>
<template>
    <div class="p-4 text-center">
        <p>正在導向…</p>
    </div>
</template>
