<script setup lang="ts">
import { banner } from "~/constant/banner";
import { new_pdt } from "~/constant/home-new_pdt";
import { top_pdt } from "~/constant/home-top_pdt";

const config = useRuntimeConfig();
const basePath = config.public.basePath;

console.log('basePath', basePath);


const bannerList = ref(banner.map(item => ({
    ...item,
})));

const new_pdtList = ref(new_pdt.map(item => ({
    ...item,
})));

const top_pdtList = ref(top_pdt.map(item => ({
    ...item,
})));
</script>
<template>
    <main class="content_wrapper">
        <!-- Banner Section -->
        <section class="banner">
            <div class="banner_list">
                <div v-for="item in bannerList" :key="item.id" class="banner_item" :data-id="item.id">
                    <NuxtLink :to="item.link">
                        <div class="pic">
                            <img 
                                class="d-none d-sm-block banner-image" 
                                :src="`${basePath}${item.image}`"
                            />
                            <img 
                                class="d-sm-none banner-image" 
                                :src="`${basePath}${item.image_mobile}`"
                            />
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- New Products Section -->
        <section class="main_section new_pdt">
            <div class="inner">
                <ul class="new_pdt-list">
                    <li v-for="item in new_pdtList" :key="item.id" class="new_pdt-item">
                        <NuxtLink class="inner" :to="item.link">
                            <div class="pic">
                                <img 
                                    :src="`${basePath}${item.image}`" 
                                    :alt="item.alt"
                                    class="product-image"
                                />
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
                                <img 
                                    :src="`${basePath}images/MENS01.jpg`" 
                                    alt="MEN'S"
                                    class="category-image"
                                />
                            </div>
                        </NuxtLink>
                    </li>
                    <li class="pdt_category-item col-sm-6">
                        <NuxtLink class="inner" to="/new_products?type=2">
                            <div class="pic">
                                <img 
                                    :src="`${basePath}images/WOMENS01.jpg`" 
                                    alt="WOMEN'S"
                                    class="category-image"
                                />
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
                    <li v-for="item in top_pdtList" :key="item.id" class="top_pdt-item">
                        <NuxtLink class="inner" :to="item.link">
                            <div class="pic">
                                <img 
                                    :src="`${basePath}${item.image}`" 
                                    :alt="item.alt"
                                    class="top-product-image"
                                />
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
.new_pdt-list {
    @apply flex flex-wrap mb-0 p-1;
}

.new_pdt-item {
    @apply w-1/3 max-md:w-full;
}

.new_pdt-item>.inner {
    @apply block relative border-4 border-white overflow-hidden;
}

.new_pdt-item>.inner .inner-more {
    @apply z-[1] flex justify-center items-center absolute inset-0 w-full h-full bg-black/60 text-center items-center opacity-0 transition-opacity duration-300;
}

.new_pdt-item>.inner .txt {
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
.pdt_category-item>.inner {
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

.top_pdt-item>.inner {
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

.no-gutters>* {
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
