<script setup lang="ts">
const config = useRuntimeConfig();
const basePath = config.public.basePath;

// 獲取路由和查詢參數
const route = useRoute();
const type = computed(() => {
    const typeParam = route.query.type;
    // 支援 type=men, women, headscarf, pants, sleevelet
    if (typeParam === "women") return "women";
    if (typeParam === "headscarf") return "headscarf";
    if (typeParam === "pants") return "pants";
    if (typeParam === "sleevelet") return "sleevelet";
    return "men"; // 預設為 men
});

// 產品數據定義
interface BicycleProduct {
    thumbnail: string;
    fullImage: string;
    alt: string;
}

interface BicycleCategory {
    title: string;
    products: BicycleProduct[];
}

const bicycleData: Record<string, BicycleCategory> = {
    headscarf: {
        title: "自行車頭巾",
        products: [
            { thumbnail: "images/bicycle/headscarf/K9901.jpg", fullImage: "images/bicycle/headscarf/K9901-1.jpg", alt: "K9901" },
            { thumbnail: "images/bicycle/headscarf/K9902.jpg", fullImage: "images/bicycle/headscarf/K9901-1.jpg", alt: "K9902" },
            { thumbnail: "images/bicycle/headscarf/K9903.jpg", fullImage: "images/bicycle/headscarf/K9901-1.jpg", alt: "K9903" },
            { thumbnail: "images/bicycle/headscarf/K9908.jpg", fullImage: "images/bicycle/headscarf/K9901-1.jpg", alt: "K9908" },
        ]
    },
    men: {
        title: "男自行車衣",
        products: [
            { thumbnail: "images/bicycle/men/K-0201-10.jpg", fullImage: "images/bicycle/men/K0201.jpg", alt: "K-0201-10" },
            { thumbnail: "images/bicycle/men/K9070.jpg", fullImage: "images/bicycle/men/K9070-1.jpg", alt: "K9070" },
            { thumbnail: "images/bicycle/men/K9071.jpg", fullImage: "images/bicycle/men/K9071-1.jpg", alt: "K9071" },
            { thumbnail: "images/bicycle/men/K8011.jpg", fullImage: "images/bicycle/men/K8011-1.jpg", alt: "K8011" },
            { thumbnail: "images/bicycle/men/K8012.jpg", fullImage: "images/bicycle/men/K8012-1.jpg", alt: "K8012" },
            { thumbnail: "images/bicycle/men/K8013.jpg", fullImage: "images/bicycle/men/K8013-1.jpg", alt: "K8013" },
            { thumbnail: "images/bicycle/men/K8015.jpg", fullImage: "images/bicycle/men/K8015-1.jpg", alt: "K8015" },
            { thumbnail: "images/bicycle/men/K8051.jpg", fullImage: "images/bicycle/men/K8051-1.jpg", alt: "K8051" },
            { thumbnail: "images/bicycle/men/K8052.jpg", fullImage: "images/bicycle/men/K8052-1.jpg", alt: "K8052" },
            { thumbnail: "images/bicycle/men/K9053.jpg", fullImage: "images/bicycle/men/K9053-1.jpg", alt: "K9053" },
            { thumbnail: "images/bicycle/men/K8022.jpg", fullImage: "images/bicycle/men/K8022-1.jpg", alt: "K8022" },
            { thumbnail: "images/bicycle/men/K9515.jpg", fullImage: "images/bicycle/men/K9515-1.jpg", alt: "K9515" },
        ]
    },
    pants: {
        title: "自行車褲",
        products: [
            { thumbnail: "images/bicycle/pants/K8071.jpg", fullImage: "images/bicycle/pants/K8071-1.jpg", alt: "K8071" },
            { thumbnail: "images/bicycle/pants/K8072.jpg", fullImage: "images/bicycle/pants/K8072-1.jpg", alt: "K8072" },
            { thumbnail: "images/bicycle/pants/K8073.jpg", fullImage: "images/bicycle/pants/K8071-1.jpg", alt: "K8073" },
            { thumbnail: "images/bicycle/pants/K8075.jpg", fullImage: "images/bicycle/pants/K8071-1.jpg", alt: "K8075" },
            { thumbnail: "images/bicycle/pants/K9076.jpg", fullImage: "images/bicycle/pants/K9076-1.jpg", alt: "K9076" },
            { thumbnail: "images/bicycle/pants/K9077.jpg", fullImage: "images/bicycle/pants/K9077-1.jpg", alt: "K9077" },
            { thumbnail: "images/bicycle/pants/K9685.jpg", fullImage: "images/bicycle/pants/K9685-1.jpg", alt: "K9685" },
        ]
    },
    sleevelet: {
        title: "自行車袖套",
        products: [
            { thumbnail: "images/bicycle/sleevelet/K8091.jpg", fullImage: "images/bicycle/sleevelet/K8091-1.jpg.jpg", alt: "K8091" },
            { thumbnail: "images/bicycle/sleevelet/KL896.jpg", fullImage: "images/bicycle/sleevelet/K8091-1.jpg.jpg", alt: "KL896" },
        ]
    },
    women: {
        title: "女自行車衣",
        products: [
            { thumbnail: "images/bicycle/women/KL-006-46.jpg", fullImage: "images/bicycle/women/KL006.jpg", alt: "KL006" },
            { thumbnail: "images/bicycle/women/KL915.jpg", fullImage: "images/bicycle/women/KL915-1.jpg", alt: "KL915" },
            { thumbnail: "images/bicycle/women/KL916.jpg", fullImage: "images/bicycle/women/KL916-1.jpg", alt: "KL916" },
            { thumbnail: "images/bicycle/women/K8016.jpg", fullImage: "images/bicycle/women/K8016-1.jpg", alt: "K8016" },
            { thumbnail: "images/bicycle/women/KL817.jpg", fullImage: "images/bicycle/women/KL817-1.jpg", alt: "KL817" },
            { thumbnail: "images/bicycle/women/KL818.jpg", fullImage: "images/bicycle/women/KL818-1.jpg", alt: "KL818" },
            { thumbnail: "images/bicycle/women/K8023.jpg", fullImage: "images/bicycle/women/K8023-1.jpg", alt: "K8023" },
            { thumbnail: "images/bicycle/women/KL825.jpg", fullImage: "images/bicycle/women/KL825-1.jpg", alt: "KL825" },
            { thumbnail: "images/bicycle/women/KL920.jpg", fullImage: "images/bicycle/women/KL920-1.jpg", alt: "KL920" },
            { thumbnail: "images/bicycle/women/KL921.jpg", fullImage: "images/bicycle/women/KL921-1.jpg", alt: "KL921" },
        ]
    }
};

// 根據 type 載入對應的產品資料
const currentCategory = computed(() => {
    return bicycleData[type.value] || bicycleData.men;
});

// 確保 currentCategory 永遠有值
const categoryTitle = computed(() => {
    return currentCategory.value?.title || "自行車系列";
});

const categoryProducts = computed(() => {
    return currentCategory.value?.products || [];
});

// 圖片放大功能
const selectedImage = ref<string | null>(null);
const showImageModal = ref(false);

const openImage = (imagePath: string) => {
    selectedImage.value = imagePath;
    showImageModal.value = true;
};

const closeImage = () => {
    showImageModal.value = false;
    selectedImage.value = null;
};

// 設定頁面標題
const pageTitle = computed(() => {
    return `${categoryTitle.value} | 自行車系列 | Firestar 方元開發有限公司`;
});

useHead({
    title: pageTitle
});
</script>

<template>
    <main class="content_wrapper">
        <!-- Banner Section -->
        <section class="banner">
            <div class="pic">
                <div class="image-loading-wrapper">
                    <div class="image-skeleton"></div>
                    <img 
                        class="d-none d-sm-block banner-image" 
                        :src="`${basePath}images/banner-about.jpg`" 
                        alt="Banner"
                    />
                </div>
                <div class="image-loading-wrapper">
                    <div class="image-skeleton"></div>
                    <img 
                        class="d-sm-none banner-image" 
                        :src="`${basePath}images/banner-about-m.jpg`" 
                        alt="Banner"
                    />
                </div>
            </div>
        </section>

        <h1 class="page_title">{{ categoryTitle }}</h1>

        <section class="row">
            <aside class="bicycle_aside col-md-3">
                <div class="inner">
                    <!-- 分類選單 -->
                    <nav class="bicycle_category">
                        <ul class="cf lis-n bicycle_category-list">
                            <li class="bicycle_category-item">
                                <NuxtLink 
                                    :to="`/bicycle?type=men`" 
                                    :class="{ 'js-active': type === 'men' }"
                                    class="bicycle_category-link">
                                    男自行車衣
                                </NuxtLink>
                            </li>
                            <li class="bicycle_category-item">
                                <NuxtLink 
                                    :to="`/bicycle?type=women`" 
                                    :class="{ 'js-active': type === 'women' }"
                                    class="bicycle_category-link">
                                    女自行車衣
                                </NuxtLink>
                            </li>
                            <li class="bicycle_category-item">
                                <NuxtLink 
                                    :to="`/bicycle?type=pants`" 
                                    :class="{ 'js-active': type === 'pants' }"
                                    class="bicycle_category-link">
                                    自行車褲
                                </NuxtLink>
                            </li>
                            <li class="bicycle_category-item">
                                <NuxtLink 
                                    :to="`/bicycle?type=sleevelet`" 
                                    :class="{ 'js-active': type === 'sleevelet' }"
                                    class="bicycle_category-link">
                                    自行車袖套
                                </NuxtLink>
                            </li>
                            <li class="bicycle_category-item">
                                <NuxtLink 
                                    :to="`/bicycle?type=headscarf`" 
                                    :class="{ 'js-active': type === 'headscarf' }"
                                    class="bicycle_category-link">
                                    自行車頭巾
                                </NuxtLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>

            <article class="bicycle_content col-12 col-md-9">
                <div class="inner">
                    <div class="bicycle_content-list">
                        <ul class="cf lis-n row">
                            <li 
                                v-for="(product, index) in categoryProducts" 
                                :key="index"
                                class="bicycle_content-item col-4">
                                <a 
                                    class="bicycle_content-pic pic" 
                                    @click.prevent="openImage(`${basePath}${product.fullImage}`)"
                                    href="javascript:void(0)">
                                    <div class="image-loading-wrapper">
                                        <div class="image-skeleton"></div>
                                        <img 
                                            :src="`${basePath}${product.thumbnail}`" 
                                            :alt="product.alt"
                                            class="product-image"
                                        />
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
        </section>

        <!-- 圖片放大 Modal -->
        <div v-if="showImageModal" class="image_modal" @click="closeImage">
            <div class="image_modal-content" @click.stop>
                <button class="image_modal-close" @click="closeImage">&times;</button>
                <img 
                    v-if="selectedImage"
                    :src="selectedImage" 
                    :alt="categoryTitle"
                />
            </div>
        </div>
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

.banner .pic {
    @apply relative w-full;
    @apply bg-cover;
}

.banner .pic img {
    @apply w-full max-w-none m-auto;
    object-fit: cover;
}

/* Page Title */
.page_title {
    @apply text-center text-2xl font-bold py-[0.2rem];
    background-color: rgb(215, 24, 32);
    color: rgb(247, 247, 247);
}

/* Row Layout */
.row {
    @apply flex flex-wrap -mx-2;
}

.row > * {
    @apply px-2;
}

/* Bicycle Aside */
.bicycle_aside {
    @apply w-full;
}

@media (min-width: 768px) {
    .col-md-3 {
        @apply w-1/4;
    }

    .col-md-9 {
        @apply w-3/4;
    }
}

.bicycle_aside > .inner {
    @apply w-full;
    padding: 1rem;
}

/* Bicycle Category */
.bicycle_category {
    @apply w-full;
}

.bicycle_category-list {
    @apply w-full;
}

.bicycle_category-item {
    @apply w-full mb-2;
}

.bicycle_category-link {
    @apply block px-4 py-2 text-base;
    color: #333;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    transition: all 0.3s;
    text-decoration: none;
}

.bicycle_category-link:hover {
    background-color: #f5f5f5;
    border-color: #d71820;
}

.bicycle_category-link.js-active {
    background-color: #d71820;
    color: #fff;
    border-color: #d71820;
}

/* Bicycle Content */
.bicycle_content {
    /* @apply w-full; */
}

.bicycle_content > .inner {
    @apply w-full;
    padding: 1rem;
}

.bicycle_content-list {
    @apply w-full;
}

.bicycle_content-list .title {
    @apply mb-6 text-2xl font-bold;
    color: #d71820;
}

.bicycle_content-list .red-text {
    color: #d71820;
}

.bicycle_content-list ul {
    @apply flex flex-wrap -mx-2;
}

.bicycle_content-item {
    @apply w-1/3 px-2 mb-4;
}

@media (max-width: 767.98px) {
    .bicycle_content-item {
        @apply w-1/2;
    }
}

.bicycle_content-pic {
    @apply block relative w-full;
    padding-bottom: 100%;
    @apply bg-cover;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s;
}

.bicycle_content-pic:hover {
    border-color: #d71820;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.bicycle_content-pic .pic {
    @apply relative w-full h-full;
}

.bicycle_content-pic img {
    @apply w-full h-full absolute inset-0 m-auto;
    object-fit: contain;
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

.product-image,
.banner-image {
    @apply opacity-0;
    transition: opacity 0.3s ease-in-out;
}

.product-image.loaded,
.banner-image.loaded {
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

/* Image Modal */
.image_modal {
    @apply fixed inset-0 z-50 flex items-center justify-center;
    background-color: rgba(0, 0, 0, 0.9);
    cursor: pointer;
}

.image_modal-content {
    @apply relative max-w-[90vw] max-h-[90vh];
    cursor: default;
}

.image_modal-close {
    @apply absolute -top-10 right-0 text-white text-4xl font-bold;
    background: none;
    border: none;
    cursor: pointer;
    line-height: 1;
    padding: 0;
    width: 40px;
    height: 40px;
    transition: opacity 0.3s;
}

.image_modal-close:hover {
    opacity: 0.7;
}

.image_modal-content img {
    @apply w-full h-auto max-h-[90vh];
    object-fit: contain;
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