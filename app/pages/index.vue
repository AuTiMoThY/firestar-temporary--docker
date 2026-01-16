<script setup lang="ts">
import { banner } from "~/constant/banner";
import { new_pdt } from "~/constant/new_pdt";
import { top_pdt } from "~/constant/top_pdt";

// 獲取 baseURL - 使用 useRequestURL() 或從 window.location 獲取
let baseURL = "/";
try {
    const url = useRequestURL();
    const pathname = url.pathname;
    // 從路徑中提取 baseURL（例如：/firestar-202601/xxx -> /firestar-202601/）
    if (pathname !== "/" && pathname.startsWith("/")) {
        const segments = pathname.split("/").filter(Boolean);
        if (segments.length > 0) {
            baseURL = `/${segments[0]}/`;
        }
    }
} catch (e) {
    // 如果 useRequestURL() 不可用（例如在 generate 時），嘗試從 window.location 獲取
    if (typeof window !== "undefined") {
        const pathname = window.location.pathname;
        if (pathname !== "/" && pathname.startsWith("/")) {
            const segments = pathname.split("/").filter(Boolean);
            if (segments.length > 0) {
                baseURL = `/${segments[0]}/`;
            }
        }
    }
}

// 處理圖片路徑，確保包含 baseURL
const getImagePath = (path: string) => {
    if (!path) return "";
    // 如果路徑已經包含 baseURL，直接返回
    if (path.startsWith(baseURL)) return path;
    // 如果路徑以 / 開頭，加上 baseURL（移除開頭的 /）
    if (path.startsWith("/")) {
        // 確保 baseURL 以 / 結尾，path 去掉開頭的 /
        const cleanBaseURL = baseURL.endsWith("/") ? baseURL : `${baseURL}/`;
        const cleanPath = path.startsWith("/") ? path.slice(1) : path;
        return `${cleanBaseURL}${cleanPath}`;
    }
    return path;
};

const bannerList = ref(banner.map(item => ({
    ...item,
    image: getImagePath(item.image),
    image_mobile: getImagePath(item.image_mobile)
})));

const new_pdtList = ref(new_pdt.map(item => ({
    ...item,
    image: getImagePath(item.image)
})));

const top_pdtList = ref(top_pdt.map(item => ({
    ...item,
    image: getImagePath(item.image)
})));
</script>
<template>
    <main class="content_wrapper">
        <!-- Banner Section -->
        <section class="banner">
            <div class="banner_list">
                <div
                    v-for="item in bannerList"
                    :key="item.id"
                    class="banner_item"
                    :data-id="item.id">
                    <NuxtLink :to="item.link">
                        <div class="pic">
                            <img class="d-none d-sm-block" :src="item.image" />
                            <img class="d-sm-none" :src="item.image_mobile" />
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- New Products Section -->
        <section class="main_section new_pdt">
            <div class="inner">
                <ul class="cf lis-n row no-gutters">
                    <li
                        v-for="item in new_pdtList"
                        :key="item.id"
                        class="new_pdt-item col-sm-4">
                        <NuxtLink class="inner" :to="item.link">
                            <div class="pic">
                                <img :src="item.image" :alt="item.alt" />
                            </div>
                            <span class="inner-more">
                                <div class="txt">了解更多</div>
                            </span>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </section>

        <!-- Product Category Section -->
        <section class="main_section pdt_category">
            <div class="inner">
                <ul class="cf lis-n row no-gutters">
                    <li class="pdt_category-item col-sm-6">
                        <NuxtLink class="inner" to="/new_products?type=1">
                            <div class="pic">
                                <img src="/images/MENS01.jpg" alt="MEN'S" />
                            </div>
                        </NuxtLink>
                    </li>
                    <li class="pdt_category-item col-sm-6">
                        <NuxtLink class="inner" to="/new_products?type=2">
                            <div class="pic">
                                <img src="/images/WOMENS01.jpg" alt="WOMEN'S" />
                            </div>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </section>

        <!-- Top Products Section -->
        <section class="main_section top_pdt">
            <div class="inner">
                <h2 class="top_pdt-title">精選商品</h2>
                <ul class="top_pdt-list">
                    <li
                        v-for="item in top_pdtList"
                        :key="item.id"
                        class="top_pdt-item">
                        <NuxtLink class="inner" :to="item.link">
                            <div class="pic">
                                <img :src="item.image" :alt="item.alt" />
                            </div>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </section>

        <!-- Additional Banner Section -->
        <section class="banner">
            <div class="banner_list"></div>
        </section>
    </main>
</template>

<style scoped>
@reference "tailwindcss";
/* Content Wrapper */
.content_wrapper {
    @apply w-full;
}

/* Banner Section */
.banner {
    @apply w-full;
}

.banner_list {
    @apply w-full;
}

.banner_item:not(:first-of-type) {
    @apply mt-[15px];
}

.banner_item .pic {
    @apply relative w-full;
    padding-bottom: 42.66667%;
    @apply bg-cover;
}

@media (max-width: 575.98px) {
    .banner_item .pic {
        @apply w-full;
        padding-bottom: 100%;
        @apply bg-cover;
    }
}

.banner_item img {
    @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
}

.index_page .banner img {
    @apply w-full max-w-none;
}

/* Main Section */
.main_section {
    @apply w-full;
}

.main_section .inner {
    @apply w-full;
}

/* New Products */
.new_pdt ul {
    @apply mb-0 p-1;
}

.new_pdt-item {
    @apply float-left;
}

.new_pdt-item > .inner {
    @apply block relative border-4 border-white overflow-hidden;
}

.new_pdt-item > .inner .inner-more {
    @apply z-[1] flex absolute inset-0 bg-black/60 text-center items-center opacity-0 transition-opacity duration-300;
}

.new_pdt-item > .inner .txt {
    @apply table text-white py-[0.6rem] px-4 border border-white bg-white/30;
}

.new_pdt-item:hover .inner-more {
    @apply opacity-100;
}

.new_pdt-item:hover img {
    @apply scale-110;
}

.new_pdt-item .pic {
    @apply relative w-full;
    padding-bottom: 100%;
    @apply bg-cover;
}

.new_pdt-item .pic img {
    @apply w-full max-w-none absolute inset-0 m-auto transition-all duration-300 ease-[cubic-bezier(0.12,0.49,0.17,0.87)];
}

/* Product Category */
.pdt_category-item > .inner {
    @apply block overflow-hidden;
}

.pdt_category-item:hover img {
    @apply scale-105;
}

.pdt_category-item .pic {
    @apply relative w-full;
    padding-bottom: 35.56485%;
    @apply bg-cover;
}

.pdt_category-item .pic img {
    @apply w-full max-w-none absolute inset-0 m-auto transition-all duration-300 ease-[cubic-bezier(0.12,0.49,0.17,0.87)];
}

/* Top Products */
.top_pdt-list {
    @apply flex m-0 py-4;
}

.top_pdt-title {
    @apply text-center text-white bg-gray-600 tracking-[1rem] font-normal py-[0.2rem];
}

.top_pdt-item {
    @apply w-1/4 px-4;
}

.top_pdt-item > .inner {
    @apply block;
}

.top_pdt-item:hover .pic {
    @apply shadow-md;
}

.top_pdt-item .pic {
    @apply relative w-full;
    padding-bottom: 100%;
    @apply bg-cover shadow-[1px_1px_3px_transparent] transition-all duration-300 ease-[cubic-bezier(0.12,0.49,0.17,0.87)];
}

.top_pdt-item:hover .pic {
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.top_pdt-item .pic img {
    @apply w-full max-w-none absolute inset-0 m-auto;
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

.m-0 {
    @apply m-0;
}

.mb-3 {
    @apply mb-3;
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
</style>
