<template>
    <main class="content_wrapper">
        <!-- Banner Section -->
        <section class="banner">
            <div class="banner_list">
                <div class="banner_item" data-id="22">
                    <NuxtLink to="/new_products?type=1">
                        <div class="pic">
                            <img
                                class="d-none d-sm-block"
                                src="/images/banner1.jpg"
                                alt="Banner 1"
                            >
                            <img
                                class="d-sm-none"
                                src="/images/banner1-m.jpg"
                                alt="Banner 1"
                            >
                        </div>
                    </NuxtLink>
                </div>
                <div class="banner_item" data-id="25">
                    <NuxtLink to="/detail?id=622">
                        <div class="pic">
                            <img
                                class="d-none d-sm-block"
                                src="/images/banner2.jpg"
                                alt="Banner 2"
                            >
                            <img
                                class="d-sm-none"
                                src="/images/banner2-m.jpg"
                                alt="Banner 2"
                            >
                        </div>
                    </NuxtLink>
                </div>
                <div class="banner_item" data-id="29">
                    <NuxtLink to="/detail?id=616">
                        <div class="pic">
                            <img
                                class="d-none d-sm-block"
                                src="/images/banner3.jpg"
                                alt="Banner 3"
                            >
                            <img
                                class="d-sm-none"
                                src="/images/banner3-m.jpg"
                                alt="Banner 3"
                            >
                        </div>
                    </NuxtLink>
                </div>
                <div class="banner_item" data-id="30">
                    <NuxtLink to="/detail?id=467">
                        <div class="pic">
                            <img
                                class="d-none d-sm-block"
                                src="/images/banner4.jpg"
                                alt="Banner 4"
                            >
                            <img
                                class="d-sm-none"
                                src="/images/banner4-m.jpg"
                                alt="Banner 4"
                            >
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- New Products Section -->
        <section class="main_section new_pdt">
            <div class="inner">
                <ul class="cf lis-n row no-gutters">
                    <li class="new_pdt-item col-sm-4">
                        <NuxtLink class="inner" to="/detail?id=333">
                            <div class="pic">
                                <img
                                    src="/images/product1.jpg"
                                    alt="輕量彈性連帽外套(單層) - Men's 4-Way Stretch Woven Jacket"
                                >
                            </div>
                            <span class="inner-more">
                                <div class="txt">了解更多</div>
                            </span>
                        </NuxtLink>
                    </li>
                    <li class="new_pdt-item col-sm-4">
                        <NuxtLink class="inner" to="/detail?id=487">
                            <div class="pic">
                                <img
                                    src="/images/product2.jpg"
                                    alt="可拆帽鋪棉外套 - Men's Polyester Puffer Hooded Jacket"
                                >
                            </div>
                            <span class="inner-more">
                                <div class="txt">了解更多</div>
                            </span>
                        </NuxtLink>
                    </li>
                    <li class="new_pdt-item col-sm-4">
                        <NuxtLink class="inner" to="/detail?id=405">
                            <div class="pic">
                                <img
                                    src="/images/product3.jpg"
                                    alt="立領輕鋪棉背心 - Men's Polyester Puffer Vest"
                                >
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
                                <img src="/images/mens.jpg" alt="MEN'S">
                            </div>
                        </NuxtLink>
                    </li>
                    <li class="pdt_category-item col-sm-6">
                        <NuxtLink class="inner" to="/new_products?type=2">
                            <div class="pic">
                                <img src="/images/womens.jpg" alt="WOMEN'S">
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
                <ul class="cf lis-n row m-0 mb-3">
                    <li class="top_pdt-item col-sm-3 col-6">
                        <NuxtLink class="inner" to="/detail?id=662">
                            <div class="pic">
                                <img
                                    src="/images/top1.jpg"
                                    alt="彈性保暖圓領上衣 - Men's Warm Long Sleeve T-Shirt"
                                >
                            </div>
                        </NuxtLink>
                    </li>
                    <li class="top_pdt-item col-sm-3 col-6">
                        <NuxtLink class="inner" to="/detail?id=618">
                            <div class="pic">
                                <img
                                    src="/images/top2.jpg"
                                    alt="連帽四面彈外套(薄款) - Men's 4-Way Stretch Jacket"
                                >
                            </div>
                        </NuxtLink>
                    </li>
                    <li class="top_pdt-item col-sm-3 col-6">
                        <NuxtLink class="inner" to="/detail?id=403">
                            <div class="pic">
                                <img
                                    src="/images/top3.jpg"
                                    alt="立領輕鋪棉背心 - Women's Polyester Puffer Vest"
                                >
                            </div>
                        </NuxtLink>
                    </li>
                    <li class="top_pdt-item col-sm-3 col-6">
                        <NuxtLink class="inner" to="/detail?id=665">
                            <div class="pic">
                                <img
                                    src="/images/top4.jpg"
                                    alt="雙面穿絨毛立領外套 - Women's Reversible Fleece Jacket"
                                >
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
    @apply w-full py-8;
}

.main_section .inner {
    @apply w-full max-w-[1200px] mx-auto px-4;
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
.top_pdt-title {
    @apply text-center text-white bg-gray-600 tracking-[1rem] font-normal py-[0.2rem];
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
