<script setup lang="ts">
import { detail } from "~/constant/detail";

// 獲取路由和查詢參數
const route = useRoute();
const config = useRuntimeConfig();
const basePath = config.public.basePath;
const productId = computed(() => {
    const idParam = route.query.id;
    return idParam ? parseInt(idParam as string) : null;
});

// 根據 id 載入對應的商品資料
const product = computed(() => {
    if (!productId.value) return null;
    return detail.find(item => item.id === productId.value) || null;
});

// 設定頁面標題
const pageTitle = computed(() => {
    if (product.value) {
        return `${product.value.name_tw} | Firestar 方元開發有限公司`;
    }
    return "Firestar 方元開發有限公司";
});

useHead({
    title: pageTitle
});

// 當前選中的顏色索引
const selectedColorIndex = ref(0);

// 當前選中的顏色
const selectedColor = computed(() => {
    if (!product.value || !product.value.colors[selectedColorIndex.value]) return null;
    return product.value.colors[selectedColorIndex.value];
});

// 當前顯示的主圖
const currentMainImage = computed(() => {
    if (selectedColor.value) {
        return selectedColor.value.mainImage;
    }
    return product.value?.mainImage || "";
});

// 切換顏色
const selectColor = (color: NonNullable<typeof product.value>['colors'][0], colorIndex: number) => {
    if (!product.value) return;
    
    selectedColorIndex.value = colorIndex;
    
    // 更新所有顏色的 isActive 狀態
    product.value.colors.forEach((c, index) => {
        c.isActive = index === colorIndex;
    });
    
    // 根據 index 對應激活對應的 thumbnail
    product.value.thumbnails.forEach((t, index) => {
        t.isActive = index === colorIndex;
    });
};

// 切換縮圖
const selectThumbnail = (thumbnail: NonNullable<typeof product.value>['thumbnails'][0], thumbnailIndex: number) => {
    if (!product.value) return;
    
    // 根據 thumbnail index 對應激活對應的 color
    selectedColorIndex.value = thumbnailIndex;
    
    // 更新所有 thumbnails 的 isActive 狀態
    product.value.thumbnails.forEach((t, index) => {
        t.isActive = index === thumbnailIndex;
    });
    
    // 更新所有 colors 的 isActive 狀態
    product.value.colors.forEach((c, index) => {
        c.isActive = index === thumbnailIndex;
    });
};

// 監聽商品變化，更新選中的顏色
watch(product, (newProduct) => {
    if (newProduct) {
        // 找到第一個 isActive 的顏色索引，如果沒有則使用 0
        const activeIndex = newProduct.colors.findIndex(c => c.isActive);
        selectedColorIndex.value = activeIndex >= 0 ? activeIndex : 0;
        
        // 確保對應的 thumbnail 也被激活
        newProduct.thumbnails.forEach((t, index) => {
            t.isActive = index === selectedColorIndex.value;
        });
        newProduct.colors.forEach((c, index) => {
            c.isActive = index === selectedColorIndex.value;
        });
    }
}, { immediate: true });
</script>

<template>
    <main class="content_wrapper" v-if="product">
        <article class="pdt_detail">
            <div class="inner">
                <div class="pdt_detail_container">
                    <!-- 商品詳細資訊 Header -->
                    <section class="row pdt_detail-hd">
                        <div class="w-full col-sm-7">
                            <div class="pdt_detail-pic">
                                <div class="pic">
                                    <div class="image-loading-wrapper">
                                        <div class="image-skeleton"></div>
                                        <img 
                                            :src="`${basePath}${currentMainImage}`" 
                                            :alt="`${product.name_tw} - ${selectedColor?.colorName || ''}`"
                                            class="product-main-image"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="pdt_detail-thumbnail_list">
                                <ul class="cf lis-n">
                                    <li
                                        v-for="(thumbnail, index) in product.thumbnails"
                                        :key="thumbnail.image"
                                        class="pdt_detail-thumbnail_item"
                                        :class="{ 'js-active': thumbnail.isActive }"
                                        @click="selectThumbnail(thumbnail, index)">
                                        <div class="pic">
                                            <div class="image-loading-wrapper thumbnail-wrapper">
                                                <div class="image-skeleton"></div>
                                                <img 
                                                    :src="`${basePath}${thumbnail.image}`" 
                                                    :alt="`${product.name_tw} - ${thumbnail.colorName}`"
                                                    class="thumbnail-image"
                                                />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="w-full col-sm-5">
                            <div class="pdt_detail-intro">
                                <div class="intro_row name_en">
                                    <h3 class="inner title">{{ product.name_en }}</h3>
                                </div>
                                <div class="intro_row name_tw">
                                    <h2 class="inner title">
                                        {{ product.name_tw }}&nbsp;
                                        <span class="c_txt" v-if="selectedColor">{{ selectedColor.colorName }}</span>
                                    </h2>
                                </div>
                                <div class="intro_row price">
                                    <div class="inner">
                                        <span class="title">NT$</span>
                                        <span class="cnt">{{ product.price }}</span>
                                    </div>
                                </div>
                                <div class="intro_row style_num">
                                    <div class="inner">
                                        <span class="title"># 款號：</span>
                                        <span class="cnt">
                                            {{ product.style }}-<span class="color_no">{{ selectedColor?.colorNo || '' }}</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="intro_row color">
                                    <div class="inner">
                                        <span class="title"># 顏色：</span>
                                        <span class="cnt">
                                            <ul class="cf lis-n color_list">
                                                <li
                                                    v-for="(color, index) in product.colors"
                                                    :key="`${color.colorNo}-${color.colorName}`"
                                                    class="color_item"
                                                    :class="{ 'js-active': color.isActive }"
                                                    @click="selectColor(color, index)">
                                                    <figure class="color_item-pic">
                                                        <div class="pic">
                                                            <div class="image-loading-wrapper color-wrapper">
                                                                <div class="image-skeleton"></div>
                                                                <img 
                                                                    :src="`${basePath}${color.image}`" 
                                                                    :alt="color.colorName"
                                                                    class="color-image"
                                                                />
                                                            </div>
                                                        </div>
                                                        <figcaption class="pic_name">{{ color.colorName }}</figcaption>
                                                    </figure>
                                                </li>
                                            </ul>
                                        </span>
                                    </div>
                                </div>
                                <div class="intro_row size">
                                    <div class="inner">
                                        <span class="title"># 尺寸：</span>
                                        <span class="cnt">{{ product.size }}</span>
                                    </div>
                                </div>
                                <div class="intro_row description">
                                    <div class="inner">
                                        <span class="title"># 商品特色：</span>
                                        <span class="cnt">
                                            <span v-for="(feature, index) in product.features" :key="index">
                                                ▪ {{ feature }}<br v-if="index < product.features.length - 1">
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div class="intro_row ingredient">
                                    <div class="inner">
                                        <span class="title"># 材質：</span>
                                        <span class="cnt">{{ product.material }}</span>
                                    </div>
                                </div>
                                <div class="feature_icon">
                                    <ul class="cf lis-n feature_icon_list">
                                        <li
                                            v-for="icon in product.featureIcons"
                                            :key="icon.name"
                                            class="feature_icon_item">
                                            <figure class="feature_icon_item-pic">
                                                <div class="pic">
                                                    <div class="image-loading-wrapper icon-wrapper">
                                                        <div class="image-skeleton"></div>
                                                        <img 
                                                            :src="`${basePath}${icon.image}`" 
                                                            :alt="icon.name"
                                                            class="icon-image"
                                                        />
                                                    </div>
                                                </div>
                                                <figcaption class="pic_name">{{ icon.name }}</figcaption>
                                            </figure>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- 商品詳細資訊 Body -->
                    <section class="row pdt_detail-bd">
                        <div class="col-12 mb-3">
                            <h2 class="title">商品說明</h2>
                            <main class="content">
                                <p v-html="product.description"></p>
                            </main>
                        </div>
                        <div class="col-12">
                            <h2 class="title">注意</h2>
                            <main class="content">
                                <p>{{ product.notice }}</p>
                            </main>
                        </div>
                    </section>
                </div>
            </div>
        </article>
    </main>
    <div v-else class="content_wrapper">
        <div class="inner text-center">
            <p>找不到該商品</p>
        </div>
    </div>
</template>

<style scoped>
@reference "tailwindcss";

/* Content Wrapper */
.content_wrapper {
    @apply w-full;
}

/* Product Detail */
.pdt_detail {
    @apply w-full;
}

.pdt_detail > .inner {
    padding: 1rem 2rem;
}

@media (max-width: 767.98px) {
    .pdt_detail > .inner {
        padding: 1rem;
    }
}

.pdt_detail_container {
    @apply w-full;
}

/* Product Detail Header */
.pdt_detail-hd {
    @apply mb-6;
}

.pdt_detail-pic {
    @apply mb-4;
}

.pdt_detail-pic .pic {
    @apply relative w-full;
    padding-bottom: 100%;
    @apply bg-cover;
    border: 1px solid #e0e0e0;
}

.pdt_detail-pic .pic img {
    @apply w-full max-w-none absolute inset-0 m-auto;
    object-fit: contain;
}

.pdt_detail-thumbnail_list {
    @apply w-full;
}

.pdt_detail-thumbnail_list ul {
    @apply flex gap-2;
}

.pdt_detail-thumbnail_item {
    @apply cursor-pointer;
    flex: 0 0 auto;
    width: 80px;
    opacity: 0.6;
    transition: opacity 0.3s;
}

.pdt_detail-thumbnail_item:hover {
    opacity: 0.8;
}

.pdt_detail-thumbnail_item.js-active {
    opacity: 1;
    border: 2px solid #d71820;
}

.pdt_detail-thumbnail_item .pic {
    @apply relative w-full;
    padding-bottom: 100%;
    @apply bg-cover;
    border: 1px solid #e0e0e0;
}

.pdt_detail-thumbnail_item .pic img {
    @apply w-full max-w-none absolute inset-0 m-auto;
    object-fit: contain;
}

.pdt_detail-intro {
    @apply w-full;
}

.intro_row {
    @apply mb-4;
}

.intro_row.name_en .title {
    @apply text-xl text-gray-600;
}

.intro_row.name_tw .title {
    @apply text-2xl font-bold text-gray-800;
}

.intro_row.name_tw .c_txt {
    @apply text-lg font-normal;
}

.intro_row.price {
    @apply text-2xl font-bold;
    color: #1565c0;
}

.intro_row.style_num,
.intro_row.color {
    @apply text-base;
    color: #333;
}

.intro_row .title {
    @apply font-semibold;
}

.color_list {
    @apply flex gap-3 mt-2;
}

.color_item {
    @apply cursor-pointer;
    opacity: 0.6;
    transition: opacity 0.3s;
}

.color_item:hover {
    opacity: 0.8;
}

.color_item.js-active {
    opacity: 1;
    border: 2px solid #d71820;
    border-radius: 4px;
}

.color_item-pic {
    @apply m-0;
}

.color_item-pic .pic {
    @apply relative w-8 pb-[100%] bg-cover border border-gray-300;
}

.color_item-pic .pic img {
    @apply w-full max-w-none absolute inset-0 m-auto;
    object-fit: contain;
}

.color_item-pic .pic_name {
    @apply text-center text-sm mt-1;
    color: #333;
}

.intro_row.size,
.intro_row.description,
.intro_row.ingredient {
    @apply text-base;
    color: #333;
}

.intro_row.description .cnt {
    @apply block;
    line-height: 1.8;
}

.feature_icon {
    @apply mt-4;
}

.feature_icon_list {
    @apply flex gap-4;
}

.feature_icon_item {
    @apply flex-shrink-0;
}

.feature_icon_item-pic {
    @apply m-0;
}

.feature_icon_item-pic .pic {
    @apply relative w-16;
    padding-bottom: 100%;
    @apply bg-cover;
}

.feature_icon_item-pic .pic img {
    @apply w-full max-w-none absolute inset-0 m-auto;
    object-fit: contain;
}

.feature_icon_item-pic .pic_name {
    @apply text-center text-sm mt-1;
    color: #333;
}

/* Product Detail Body */
.pdt_detail-bd {
    @apply mt-8;
}

.pdt_detail-bd .title {
    @apply text-xl font-bold mb-3 text-[#d71820] pb-2 border-b border-[#d71820];
}

.pdt_detail-bd .content {
    @apply text-base;
    color: #666;
    line-height: 1.8;
}

.pdt_detail-bd .content p {
    @apply mb-2;
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

.product-main-image,
.thumbnail-image,
.color-image,
.icon-image {
    @apply opacity-0;
    transition: opacity 0.3s ease-in-out;
}

.product-main-image.loaded,
.thumbnail-image.loaded,
.color-image.loaded,
.icon-image.loaded {
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

/* Grid System */
.row {
    @apply flex flex-wrap -mx-2;
}

.row > * {
    @apply px-2;
}

@media (min-width: 576px) {
    .col-sm-5 {
        @apply w-5/12;
    }

    .col-sm-7 {
        @apply w-7/12;
    }
}

.col-12 {
    @apply w-full;
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

.text-center {
    @apply text-center;
}
</style>
