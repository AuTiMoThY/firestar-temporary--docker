<script setup lang="ts">
import { store_north } from "~/constant/store_north";
import { store_middle } from "~/constant/store_middle";
import { store_south } from "~/constant/store_south";
import { store_east } from "~/constant/store_east";
import { store_islands } from "~/constant/store_islands";

const config = useRuntimeConfig();
const basePath = config.public.basePath;

// 設定頁面標題
useHead({
    title: "經銷據點 | Firestar 方元開發有限公司"
});

// 地區選項
const areaOptions = [
    { value: "north", label: "北部地區" },
    { value: "middle", label: "中部地區" },
    { value: "south", label: "南部地區" },
    { value: "east", label: "東部地區" },
    { value: "islands", label: "離島地區" }
];

// 當前選中的地區
const selectedArea = ref("north");

// 根據選中的地區獲取對應的商店列表
const currentStores = computed(() => {
    switch (selectedArea.value) {
        case "north":
            return store_north;
        case "middle":
            return store_middle;
        case "south":
            return store_south;
        case "east":
            return store_east;
        case "islands":
            return store_islands;
        default:
            return store_north;
    }
});

// 地區標題和描述
const areaInfo = computed(() => {
    switch (selectedArea.value) {
        case "north":
            return {
                title: "北部地區據點一覽表",
                description: "基隆市、台北市、新北市、桃園市、新竹市、新竹縣"
            };
        case "middle":
            return {
                title: "中部地區據點一覽表",
                description: "苗栗縣、台中市、南投縣、彰化縣、雲林縣"
            };
        case "south":
            return {
                title: "南部地區據點一覽表",
                description: "嘉義縣、台南市、高雄市、屏東縣"
            };
        case "east":
            return {
                title: "東部地區據點一覽表",
                description: "宜蘭縣、花蓮縣、台東縣"
            };
        case "islands":
            return {
                title: "離島地區據點一覽表",
                description: "金門縣"
            };
        default:
            return {
                title: "北部地區據點一覽表",
                description: "基隆市、台北市、新北市、桃園市、新竹市、新竹縣"
            };
    }
});
</script>

<template>
    <main class="content_wrapper">
        <!-- Banner Section -->
        <section class="banner">
            <div class="pic">
                <img
                    class="d-none d-sm-block"
                    :src="`${basePath}images/banner-about.jpg`"
                    alt="經銷據點" />
                <img
                    class="d-sm-none"
                    :src="`${basePath}images/banner-about-m.jpg`"
                    alt="經銷據點" />
            </div>
        </section>

        <!-- Page Title -->
        <h1 class="page_title">經銷據點</h1>

        <!-- Store Content -->
        <section class="row">
            <div class="store_content col">
                <div class="inner">
                    <div class="store_wrap">
                        <!-- Area Selector -->
                        <select
                            v-model="selectedArea"
                            class="select_style select_area">
                            <option
                                v-for="option in areaOptions"
                                :key="option.value"
                                :value="option.value">
                                {{ option.label }}
                            </option>
                        </select>

                        <!-- Store Container -->
                        <section class="store_container">
                            <h2 class="title">{{ areaInfo.title }}</h2>
                            <p class="small-txt">{{ areaInfo.description }}</p>
                            
                            <!-- Store List -->
                            <div class="store_list d-md-table">
                                <!-- Table Header -->
                                <div class="store_list-title d-md-table-row">
                                    <div class="tablecell name d-md-table-cell" data-rel="門市名稱">
                                        門市名稱
                                    </div>
                                    <div class="tablecell addr d-md-table-cell" data-rel="地址">
                                        地址
                                    </div>
                                    <div class="tablecell phone d-md-table-cell" data-rel="電話">
                                        電話
                                    </div>
                                </div>
                                
                                <!-- Store Items -->
                                <div
                                    v-for="(store, index) in currentStores"
                                    :key="index"
                                    class="store_item d-md-table-row">
                                    <div class="tablecell name d-md-table-cell" data-rel="門市名稱">
                                        {{ store.store }}
                                    </div>
                                    <div class="tablecell addr d-md-table-cell" data-rel="地址">
                                        {{ store.addr }}
                                    </div>
                                    <div class="tablecell phone d-md-table-cell" data-rel="電話">
                                        {{ store.phone }}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
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

.banner .pic {
    @apply relative w-full;
    /* padding-bottom: 42.66667%; */
    @apply bg-cover;
}
/* 
@media (max-width: 575.98px) {
    .banner .pic {
        padding-bottom: 100%;
    }
} */

/* .banner .pic img {
    @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-none;
} */

/* Page Title */
.page_title {
    @apply text-center text-[#3d3d3d] font-bold tracking-[2px] py-4;
}

/* Row */
.row {
    @apply flex flex-wrap -mx-2;
}

.col {
    @apply w-full px-2;
}

/* Store Content */
.store_content {
    @apply w-full;
}

.store_content .inner {
    @apply w-full px-4 py-6;
}

.store_wrap {
    @apply w-full;
}

/* Select Style */
.select_style {
    @apply w-full max-w-xs mb-6 px-4 py-2 border border-gray-300 rounded bg-white text-[#3d3d3d] cursor-pointer;
}

.select_style:focus {
    @apply outline-none border-gray-500;
}

/* Store Container */
.store_container {
    @apply w-full;
}

.store_container .title {
    @apply text-[#3d3d3d] font-bold mb-2;
}

.store_container .small-txt {
    @apply text-gray-600 text-sm mb-4;
}

/* Store List */
.store_list {
    @apply w-full;
}

@media (min-width: 768px) {
    .d-md-table {
        @apply table w-full;
    }

    .d-md-table-row {
        @apply table-row;
    }

    .d-md-table-cell {
        @apply table-cell align-middle;
    }
}

@media (max-width: 767.98px) {
    .d-md-table {
        @apply block;
    }

    .d-md-table-row {
        @apply block mb-4 pb-4 border-b border-gray-200;
    }

    .d-md-table-cell {
        @apply block mb-2;
    }

    .d-md-table-cell::before {
        content: attr(data-rel) ": ";
        @apply font-bold text-[#3d3d3d];
    }
}

/* Store List Title */
.store_list-title {
    @apply font-bold bg-gray-100;
}

@media (min-width: 768px) {
    .store_list-title {
        @apply border-b-2 border-gray-300;
    }
}

@media (max-width: 767.98px) {
    .store_list-title {
        @apply hidden;
    }
}

/* Store Item */
.store_item {
    @apply transition-colors duration-200;
}

@media (min-width: 768px) {
    .store_item:hover {
        @apply bg-gray-50;
    }

    .store_item {
        @apply border-b border-gray-200;
    }
}

/* Table Cell */
.tablecell {
    @apply px-4 py-3 text-[#3d3d3d];
}

.tablecell.name {
    @apply font-medium;
}

@media (min-width: 768px) {
    .tablecell.name {
        @apply w-1/4;
    }

    .tablecell.addr {
        @apply w-1/2;
    }

    .tablecell.phone {
        @apply w-1/4;
    }
}

/* Utility Classes */
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
