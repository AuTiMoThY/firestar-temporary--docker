<script setup lang="ts">
import { new_products as new_products_type1 } from "~/constant/new_products-type1";
import { new_products as new_products_type2 } from "~/constant/new_products-type2";
import { new_products as new_products_type3 } from "~/constant/new_products-type3";

const config = useRuntimeConfig();
const basePath = config.public.basePath;

// 獲取路由和查詢參數
const route = useRoute();
const type = computed(() => {
    const typeParam = route.query.type;
    // 支援 type=1（男性系列）、type=2（女性系列）、type=3（高爾夫系列）
    if (typeParam === "2") return "2";
    if (typeParam === "3") return "3";
    return "1"; // 預設為 type=1（男性系列）
});

// 根據 type 載入對應的產品資料
const new_products = computed(() => {
    if (type.value === "2") return new_products_type2;
    if (type.value === "3") return new_products_type3;
    return new_products_type1;
});

// 根據 type 設定標題和 banner
const pageTitle = computed(() => {
    if (type.value === "2") return "女性系列 最新商品";
    if (type.value === "3") return "高爾夫系列 最新商品";
    return "男性系列 最新商品";
});

const bannerImage = computed(() => {
    if (type.value === "2") return "images/women_top.jpg";
    if (type.value === "3") return "images/men_top.jpg"; // 高爾夫系列使用男性系列的 banner，或可自行設定
    return "images/men_top.jpg";
});

const bannerAlt = computed(() => {
    if (type.value === "2") return "女性系列";
    if (type.value === "3") return "高爾夫系列";
    return "男性系列";
});

const pdtList = computed(() => {
    return new_products.value.map((item: any) => ({
        ...item
    }));
});
</script>

<template>
    <main class="content_wrapper">
        <article class="pdt_content">
            <!-- Banner Section -->
            <div class="pdt_banner d-none d-sm-block">
                <div class="pic">
                    <div class="image-loading-wrapper">
                        <div class="image-skeleton"></div>
                        <img 
                            :src="`${basePath}${bannerImage}`" 
                            :alt="bannerAlt"
                            class="banner-image"
                        />
                    </div>
                </div>
            </div>

            <div class="inner">
                <div class="pdt_content-list">
                    <h2 class="title text-dark text-center">
                        {{ pageTitle }}
                    </h2>
                    <ul class="cf lis-n row" id="pdtList">
                        <li
                            v-for="item in pdtList"
                            :key="item.id"
                            class="pdt_content-item w-1/2 sm:w-1/3">
                            <NuxtLink class="inner" :to="item.link">
                                <div class="pdt_content-pic pic">
                                    <div class="image-loading-wrapper">
                                        <div class="image-skeleton"></div>
                                        <img 
                                            :src="`${basePath}${item.image}`" 
                                            :alt="item.alt"
                                            class="product-image"
                                        />
                                    </div>
                                </div>
                                <div class="pdt_content-info">
                                    <div class="name">
                                        {{ item.name }}<br>#{{ item.style }}
                                    </div>
                                    <div class="size">{{ item.size }}</div>
                                    <div class="price">{{ item.price }}</div>
                                </div>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    </main>
</template>

<style scoped>
@reference "tailwindcss";

/* Content Wrapper */
.content_wrapper {
    @apply w-full;
}

/* Product Content */
.pdt_content {
    @apply w-full;
}

.pdt_content > .inner {
    padding: 1rem 2rem;
}

@media (max-width: 767.98px) {
    .pdt_content > .inner {
        padding: 1rem;
    }
}

/* Product Banner */
.pdt_banner {
    @apply w-full;
}

.pdt_banner .pic {
    @apply relative w-full;
    padding-bottom: 22.36842%;
    @apply bg-cover;
}

.pdt_banner .pic img {
    @apply w-full max-w-none absolute inset-0 m-auto;
}

/* Product Content List */
.pdt_content-list {
    @apply w-full;
}

.pdt_content-list .title {
    @apply mb-4;
}

/* Product Content Item */
.pdt_content-item {
    margin-bottom: 1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}

.pdt_content-item > .inner {
    @apply block;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    transition: all 0.3s cubic-bezier(0.12, 0.49, 0.17, 0.87);
}

.pdt_content-item:hover > .inner {
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
}

.pdt_content-pic {
    @apply relative block w-full;
    padding-bottom: 100%;
    @apply bg-cover;
    border-bottom: 1px solid #e0e0e0;
}

.pdt_content-pic img {
    @apply w-full max-w-none block absolute inset-0 m-auto;
}

.pdt_content-info {
    @apply relative;
    padding: 0.8rem;
    letter-spacing: 1px;
}

.pdt_content-info .name {
    color: #333;
}

.pdt_content-info .size {
    color: #595757;
    font-size: 12px;
    font-size: 0.75rem;
    letter-spacing: 0;
}

.pdt_content-info .price {
    @apply absolute;
    right: 0.8rem;
    bottom: 0.8rem;
    color: #1565c0;
    font-size: 1.2rem;
}

@media (max-width: 767.98px) {
    .pdt_content-info .price {
        @apply relative;
        right: unset;
        bottom: unset;
        font-size: 1rem;
    }
}

/* Grid System */
.row {
    @apply flex flex-wrap -mx-2;
}

.no-gutters {
    @apply mx-0;
}

.no-gutters > * {
    @apply px-0;
}

@media (min-width: 576px) {
    .col-sm-3 {
        @apply w-1/4;
    }

    .col-sm-4 {
        @apply w-1/3;
    }

    .col-sm-6 {
        @apply w-1/2;
    }
}

.col-6 {
    @apply w-1/2;
}

/* Utility Classes */
.cf::before,
.cf::after {
    content: "";
    @apply table h-0 overflow-hidden;
}

.cf::after {
    @apply clear-both;
}

.cf {
    zoom: 1;
}

.lis-n {
    @apply list-none p-0;
}

.d-none {
    @apply hidden;
}

@media (min-width: 576px) {
    .d-sm-block {
        @apply block;
    }

    .d-sm-none {
        @apply hidden;
    }
}

.text-dark {
    @apply text-gray-800;
}

.text-center {
    @apply text-center;
}

/* Image Loading Styles */
.image-loading-wrapper {
    @apply relative w-full h-full;
}

.image-skeleton {
    @apply absolute inset-0 w-full h-full;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: skeleton-loading 1.5s ease-in-out infinite;
    border-radius: 4px;
    z-index: 1;
}

.image-skeleton.hidden {
    @apply hidden;
}

.banner-image,
.product-image {
    @apply opacity-0;
    transition: opacity 0.3s ease-in-out;
}

.banner-image.loaded,
.product-image.loaded {
    @apply opacity-100;
}

@keyframes skeleton-loading {
    0% {
        background-position: 200% 0;
    }
    100% {
        background-position: -200% 0;
    }
}
</style>
