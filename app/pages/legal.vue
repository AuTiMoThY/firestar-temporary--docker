<script setup lang="ts">
const config = useRuntimeConfig();
const basePath = config.public.basePath;
</script>

<template>
    <main class="content_wrapper">
        <!-- Banner Section -->
        <section class="banner">
            <div class="pic">
                <NuxtImg 
                    class="d-none d-sm-block" 
                    :src="`${basePath}images/banner-about.jpg`" 
                    alt="法律聲明"
                    preload
                    format="webp"
                    quality="85"
                />
                <NuxtImg 
                    class="d-sm-none" 
                    :src="`${basePath}images/banner-about-m.jpg`" 
                    alt="法律聲明"
                    preload
                    format="webp"
                    quality="85"
                />
            </div>
        </section>

        <!-- Page Title -->
        <h1 class="page_title">法律聲明</h1>

        <!-- Main Content Section -->
        <section class="row">
            <div class="legal_content col">
                <div class="inner">
                    <h2 class="title">商標</h2>
                    <p class="txt">
                        此處使用的 Firestar 商標、標誌和商業名稱等，這些都是 Firestar 的商標或註冊商標。未經 Firestar 同意不可以任何方式複製、再製、修改、出版、傳輸等未授權之使用。
                    </p>
                    
                    <h2 class="title">著作權</h2>
                    <p class="txt">
                        本網站所有的內容為 Firestar 所有。您僅授權可以做為個人、資訊性和非商業用途使用。本網站內容若有錯誤，也具有修改刪除之授權，不負任何的責任。
                    </p>
                    
                    <h2 class="title">內容免責</h2>
                    <p class="txt">
                        本網站所有內容在法律最大允許的範圍之內，並無任何明示或默示之保證，其內容為參考資訊，不構成任何建議，內容可能含有技術性失誤或繕打上的錯誤，擁有修改以及刪除內容的權力。
                    </p>
                    
                    <h2 class="title">連結授權</h2>
                    <p class="txt">
                        本網站提供網站連結 方便瀏覽者作為商品購買參考，僅為提供瀏覽者的便利性考量，一旦您進入與 Firestar 連結有關的其他外部第三者編輯之網站， Firestar 不負責其網站內容，一切風險自行承擔。此外使用本網站連結並不代表 Firestar 同意將任何智慧財產權授權給您。
                    </p>
                    
                    <h2 class="title">濫用警告</h2>
                    <p class="txt">
                        強烈禁止利用 Firestar 商標或名義等來公佈或傳輸任何會或可能是侵犯、錯誤、誤導、煽動、威脅、誹謗、侵犯隱私、色情、穢褻、歧視、非法的行為，或者任何可能構成刑事案件、可能侵害任何一方權利、或可能會違反法律的不當內容。
                    </p>
                    
                    <h2 class="title">與我們連絡</h2>
                    <p class="txt">
                        任何有關本網站以及政策方面的問題或意見，請電洽02-26689788客服專線；或寫信給我們：fire.star@msa.hinet.net 謝謝!
                    </p>
                    
                    <h2 class="title">變更聲明</h2>
                    <p class="txt">
                        Firestar 保留修改以上聲明之權利，修改後即生效不再另行告知。
                    </p>
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

/* Legal Content */
.legal_content {
    @apply w-full px-4;
}

.legal_content .inner {
    @apply p-4;
}

.title {
    @apply text-xl font-bold mb-4 mt-6;
    @apply text-gray-800;
}

.title:first-child {
    @apply mt-0;
}

.txt {
    @apply text-base text-gray-700 leading-relaxed mb-4;
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