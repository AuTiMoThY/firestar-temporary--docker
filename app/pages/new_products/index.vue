<script setup lang="ts">
/**
 * 舊網址導頁：/new_products/?type=1|2|3 → /new_products/men|women|golf
 * 對應：type=1 → men, type=2 → women, type=3 → golf
 */
const route = useRoute();
const typeToSlug: Record<string, string> = {
    "1": "men",
    "2": "women",
    "3": "golf"
};

const queryType = route.query.type;
const targetSlug = typeof queryType === "string" ? typeToSlug[queryType] : undefined;
const target = targetSlug ? `/new_products/${targetSlug}` : "/new_products/men";

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
