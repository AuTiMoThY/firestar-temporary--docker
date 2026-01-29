<script setup lang="ts">
const config = useRuntimeConfig();
const basePath = config.public.basePath;

const handleImageLoad = (event: Event) => {
    const img = event.target as HTMLImageElement;
    if (img.complete) {
        img.classList.add('loaded');
    }
    console.log('Image loaded');
}
</script>

<template>
    <main class="content_wrapper">
        <!-- Banner Section -->
        <section class="banner">
            <div class="pic">
                <img 
                    class="d-none d-sm-block banner-image" 
                    :src="`${basePath}images/banner-about.jpg`" 
                    alt="關於我們"
                    @load="handleImageLoad"
                />
                <img 
                    class="d-sm-none banner-image" 
                    :src="`${basePath}images/banner-about-m.jpg`" 
                    alt="關於我們"
                    @load="handleImageLoad"
                />
            </div>
        </section>

        <!-- Page Title -->
        <h1 class="page_title">關於我們</h1>

        <!-- Main Content Section -->
        <section class="row">
            <!-- Main Article -->
            <article class="about_content col-md-8">
                <div class="inner">
                    <h2 class="title text-title">Firestar - 運動休閒品牌</h2>
                    <p class="txt text-content">
                        自從運動風潮席捲著時尚圈，不少品牌因此紛紛將時裝加入各種運動元素，這種跨界結合的設計讓服裝擁有機能感，呈現濃厚的運動氣息，也創造了新穎的穿著風格。
                    </p>
                    <img 
                        class="company_logo" 
                        :src="`${basePath}images/company-logo001.gif`" 
                        alt="Firestar Logo"
                    />
                    <p class="txt text-content">
                        於是Firestar 誕生，創立於1997年，是針對時下年輕人所設計的運動休閒品牌，除了著重功能性服飾的開發，更融入了fashion 元素，讓消費者有更多的選擇，無論運動&休閒、戶外&都會，都能自由的搭配出獨特風格。
                    </p>
                    <p class="txt text-content">
                        Firestar 也是早期率先運用大膽色塊拼接運動剪裁的台灣品牌，相信靈活的運用色彩，能夠大大提升整體造型的多變性。
                    </p>
                    <img 
                        class="company_logo" 
                        :src="`${basePath}images/company-logo002.gif`" 
                        alt="Firestar Logo"
                    />
                    <p class="txt text-content">
                        Firestar 體現生活，以美式Lifestyle 的穿衣概念為指標，打造輕鬆愉快的穿著體驗。
                    </p>
                    <p class="txt text-content">
                        Firestar 不斷創新，致力於開發質感與功能性兼具的服飾，期望以親民的價格，提供高CP值的產品給消費者，在設計與開發中亦能照顧到想要簡單享受品味的您，花小錢就可以打造多變造型，讓著用者自行塑造出多元迥異的風格；價值遠超過價格，令人拭目以待!
                    </p>
                    <img 
                        class="company_logo" 
                        :src="`${basePath}images/company-logo003.jpg`" 
                        alt="Firestar Logo"
                    />
                </div>
            </article>

            <!-- Sidebar -->
            <aside class="about_aside col-md-4">
                <div class="inner">
                    <!-- Company Info Section -->
                    <section class="about_aside-sec">
                        <h2 class="title text-title">公司資訊</h2>
                        <p class="txt text-content">
                            Firestar<br />
                            方元開發有限公司
                        </p>
                        <p class="txt text-content">
                            新北市樹林區佳園路3段43之2號<br />
                            郵遞區號：238<br />
                            台灣
                        </p>
                        <p class="txt text-content">
                            電 話：(02) 2668-9788<br />
                            傳 真：(02) 2668-9968<br />
                            統 編：1689-8543<br />
                            E-Mail：firestar26689788@yahoo.com.tw
                        </p>
                    </section>

                    <!-- FAQ Section -->
                    <section class="about_aside-sec">
                        <h2 class="title text-title">我有問題</h2>
                        <p class="txt text-content">
                            對公司或產品有所疑問，還是有購買方面等問題...
                        </p>
                        <NuxtLink class="btn btn-sm btn-red" to="/faq">進入</NuxtLink>
                    </section>
                </div>
            </aside>
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
    @apply bg-cover;
}

@media (max-width: 575.98px) {
    .banner .pic {
        padding-bottom: 100%;
    }
}

.banner img {
    @apply w-full max-w-none;
}

/* Page Title */
.page_title {
    @apply text-center text-2xl font-bold py-[0.2rem];
    background-color: rgb(215, 24, 32);
    color: rgb(247, 247, 247);

}

/* Row Layout */
.row {
    @apply flex flex-wrap -mx-4;
}

/* Main Content */
.about_content {
    @apply w-full px-4;
}

@media (min-width: 768px) {
    .col-md-8 {
        @apply w-2/3;
    }

    .col-md-4 {
        @apply w-1/3;
    }
}

.about_content .inner {
    @apply p-4;
}

.title {
    @apply text-xl font-bold mb-4;
}

.text-title {
    @apply text-gray-800;
}

.text-content {
    @apply text-gray-700 leading-relaxed mb-4;
}

.txt {
    @apply text-base;
}

.company_logo-wrapper {
    @apply w-full max-w-md my-6 mx-auto;
}

.company_logo {
    @apply w-[300px] block mx-auto;
}

.facebook_btn {
    @apply text-right mt-6;
}

/* Sidebar */
.about_aside {
    @apply px-4;
}

.about_aside .inner {
    @apply h-full p-4;
    background-color: rgb(235, 235, 235);
}

.about_aside-sec {
    @apply mb-8;
}

.about_aside-sec:last-child {
    @apply mb-0;
}

/* Button Styles */
.btn {
    @apply inline-block px-4 py-2 text-center no-underline transition-all duration-300;
}

.btn-sm {
    @apply text-sm px-3 py-2;
}

.btn-red {
    @apply bg-red-600 text-white;
}

.btn-red:hover {
    @apply bg-red-700;
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
