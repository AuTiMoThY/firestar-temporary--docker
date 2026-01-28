<script setup lang="ts">
const config = useRuntimeConfig();
const basePath = config.public.basePath;
</script>
<template>
    <!-- SVG Sprites -->
    <div class="symbols_svg d-none">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <symbol viewBox="0 0 512 512" id="add-group" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M512 428h-84v84h-40v-84h-84v-40h84v-84h40v84h84zM299.305 223.437A113.12 113.12 0 0 1 302 248c0 34.55-15.594 65.527-40.105 86.27.699.277 1.406.546 2.105.832V379.3C242.586 367.633 218.055 361 192 361v-.04c-.332.009-.668.009-1 .017V361c-83.262 0-151 67.738-151 151H0c0-79.371 48.672-147.582 117.73-176.379C92.281 314.887 76 283.31 76 248c0-62.309 50.691-113 113-113 7.406 0 14.645.723 21.656 2.09A112.644 112.644 0 0 1 208 112.746C208 50.578 258.578 0 320.746 0c62.168 0 112.746 50.578 112.746 112.746 0 34.895-15.937 66.137-40.91 86.832 33.012 13.11 61.465 35.117 82.305 63.422h-53.848c-24.848-22.023-56.976-36-92.273-37.797-2.653.188-5.325.29-8.02.29-7.332 0-14.5-.712-21.441-2.055zM248 112.748c0 40.112 32.633 72.745 72.746 72.745 40.11 0 72.746-32.633 72.746-72.746 0-40.113-32.637-72.746-72.746-72.746C280.633 40 248 72.633 248 112.746zM262 248c0-40.254-32.746-73-73-73s-73 32.746-73 73 32.746 73 73 73 73-32.746 73-73zm0 0" />
            </symbol>
            <symbol viewBox="0 0 512 512" id="facebook" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M483.738 0h-455.5C12.641.008-.004 12.66 0 28.262v455.5C.008 499.359 12.66 512.004 28.262 512h455.476c15.606.004 28.258-12.645 28.262-28.25V28.238C511.992 12.641 499.34-.004 483.738 0zm0 0"
                    fill="#4267b2" />
                <path
                    d="M353.5 512V314h66.75l10-77.5H353.5v-49.36c0-22.386 6.215-37.64 38.316-37.64H432.5V80.371c-7.078-.941-31.363-3.047-59.621-3.047-59 0-99.379 36-99.379 102.14V236.5H207V314h66.5v198zm0 0"
                    fill="#fff" />
            </symbol>
        </svg>
    </div>

    <div class="page_wrap cf index_page">
        <div class="inner container">
            <!-- Top Bar -->
            <div class="top_bar text-right bg-black text-white">Hello~歡迎來到Firestar!</div>

            <!-- Header -->
            <header class="main_header">
                <div class="m_menu" id="m_menu">
                    <div class="group">
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                        <div class="line4"></div>
                    </div>
                </div>
                <div class="logo">
                    <NuxtLink to="/">
                        <img class="logo-img d-none d-md-block" :src="`${basePath}images/logo.svg`"
                            alt="Firestar 方元開發有限公司" />
                        <img class="logo-m-img d-md-none" :src="`${basePath}images/logo-m.svg`"
                            alt="Firestar 方元開發有限公司" />
                    </NuxtLink>
                </div>

                <nav class="main_nav d-none d-md-block">
                    <ul class="cf lis-n">
                        <li class="main_nav-item">
                            <NuxtLink to="/store">
                                <div class="inner text-center">
                                    <span class="txt1">經銷據點</span><span class="small-txt">STORE</span>
                                </div>
                            </NuxtLink>
                        </li>
                        <li class="main_nav-item">
                            <NuxtLink to="/new_products?type=1">
                                <div class="inner text-center">
                                    <span class="txt1">男性系列</span><span class="small-txt">MEN</span>
                                </div>
                            </NuxtLink>
                        </li>
                        <li class="main_nav-item">
                            <NuxtLink to="/new_products?type=2">
                                <div class="inner text-center">
                                    <span class="txt1">女性系列</span><span class="small-txt">WOMEN</span>
                                </div>
                            </NuxtLink>
                        </li>
                        <li class="main_nav-item">
                            <NuxtLink to="/new_products?type=3">
                                <div class="inner text-center">
                                    <span class="txt1">高爾夫系列</span><span class="small-txt">GOLF</span>
                                </div>
                            </NuxtLink>
                        </li>
                        <li class="main_nav-item">
                            <NuxtLink to="/bicycle">
                                <div class="inner text-center">
                                    <span class="txt1">自行車系列</span><span class="small-txt">BICYCIE</span>
                                </div>
                            </NuxtLink>
                        </li>
                        <li class="main_nav-item">
                            <NuxtLink to="/about">
                                <div class="inner text-center">
                                    <span class="txt1">關於我們</span><span class="small-txt">ABOUT</span>
                                </div>
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
                <div class="main_nav-item social">
                    <div class="icon-add-group">
                        <svg class="icon">
                            <use xlink:href="#add-group"></use>
                        </svg>
                    </div>
                    <div class="icon-facebook">
                        <a href="http://www.facebook.com/pages/FIRESTAR/121032347941273" target="_blank">
                            <svg class="icon">
                                <use xlink:href="#facebook"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </header>

            <!-- Page Container -->
            <div class="page_container">
                <slot />
            </div>

            <!-- Footer -->
            <footer class="main_footer">
                <div class="footer-1 row no-gutters">
                    <div class="footer_infos">
                        <div class="footer_info info1">
                            <div class="title">經銷店家</div>
                            <div class="subtitle">STORE LOCATOR</div>
                            <p class="txt mb-3">
                                在哪裡找到你的FIRESTAR?<br />Find your local
                                Firestar
                            </p>
                            <NuxtLink class="btn btn-sm btn-grey" to="/store">LET'S GO</NuxtLink>
                        </div>
                    </div>
                    <div class="footer_logo">
                        <img class="logo-img" :src="`${basePath}images/logo2.png`" alt="Firestar 方元開發有限公司" />
                    </div>
                </div>
                <div class="footer-2 row no-gutters">
                    <ul class="cf lis-n mb-0">
                        <li class="float-left">
                            <NuxtLink to="/legal">法律聲明</NuxtLink>
                        </li>
                        <li class="float-left">
                            <NuxtLink to="/faq">常見問題</NuxtLink>
                        </li>
                        <li class="float-left">
                            <a href="job.php">企業徵才資訊 / Job</a>
                        </li>
                    </ul>
                </div>
                <div class="footer-3 row no-gutters">
                    <div class="copyright">
                        方元開發有限公司(台灣)所有 © Firestar Co., Ltd. All
                        Rights Reserved.
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<style scoped>
@reference "tailwindcss";

/* Tailwind CSS classes for page_wrap */
.page_wrap {
    @apply relative min-h-screen overflow-hidden bg-[#f6f6f6];
}

.page_wrap>.container {
    @apply p-0 m-auto max-w-[1200px];
}

.page_wrap>.inner {
    @apply relative left-0;
    transition: all 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

/* Top Bar */
.top_bar {
    @apply py-[0.3rem] px-4 text-white text-xs;
}

.top_bar.black {
    @apply text-black;
}

/* Main Header */
.main_header {
    @apply relative z-[70] flex items-center justify-between w-full h-[36px] max-xl:h-[66px] max-md:h-[50px] max-sm:px-4;
    background-image: linear-gradient(to bottom, #ffffff, #d2d2d2);
}

.main_header .logo {
    @apply max-sm:absolute max-sm:left-1/2 max-sm:top-1/2 max-sm:-translate-x-1/2 max-sm:-translate-y-1/2 z-[2] flex w-40 h-9;
}

@media (min-width: 768px) {
    .main_header .logo {
        /* @apply absolute top-0 left-4; */
        /* bottom: unset; */
    }
}

@media (max-width: 767.98px) {
    .main_header .logo {
        @apply w-[50px] h-[50px] bg-white;
        /* bottom: unset; */
    }
}

.main_header .logo a {
    @apply block w-full h-full;
}

@media (min-width: 576px) {
    .main_header .logo a {
        @apply pt-1;
    }
}

.main_header .logo-img {
    @apply w-40;
}

.main_header .logo-m-img {
    @apply w-full h-full;
}

/* Main Navigation */
.main_nav {
    @apply h-full absolute top-0 right-24;
}

.main_nav ul {
    @apply flex h-full;
}

.main_nav-item {
    @apply flex items-center h-full;

    a {
        @apply h-full;
        background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(223, 225, 224, 0));
    }

    a:hover {
        background-image: linear-gradient(#f2f2f2, #aab0ad);
    }
}

.main_nav-item .inner {
    @apply flex flex-col items-center justify-center h-full px-4 text-center;
}

.main_nav-item .txt1 {
    @apply leading-none;
    color: currentColor;
}

.main_nav-item .small-txt {
    @apply leading-none text-xs;
    color: currentColor;
}


.main_nav-item.social {
    @apply flex;
}

@media (min-width: 768px) {
    .main_nav-item.social {
        @apply h-9;
    }
}

@media (max-width: 767.98px) {
    .main_nav-item.social {
        @apply h-full;
    }
}

.main_nav-item .icon-add-group {
    @apply mr-[0.6rem];
}

.main_nav-item .icon-facebook a {
    @apply p-0;
}

/* Page Container */
.page_container {
    @apply bg-white;
    transition: all 0.3s cubic-bezier(0.0.165, 0.84, 0.44, 1);
}

/* Footer */
.main_footer .footer-1 {
    @apply p-4 bg-gray-400 flex justify-between;
}

.main_footer .footer-2 {
    @apply bg-gray-600 py-[0.3rem] px-4 flex justify-end;
}

@media (max-width: 767.98px) {
    .main_footer .footer-2 {
        @apply justify-center;
    }
}

.main_footer .footer-2 li:not(:first-of-type) {
    @apply ml-4;
}

.main_footer .footer-2 a {
    @apply text-white text-xs;
}

.main_footer .footer-2 a:hover {
    @apply underline;
}

.main_footer .footer-3 {
    @apply bg-white;
}

@media (min-width: 576px) {
    .main_footer .footer_infos {
        @apply flex flex-[0_1_400px];
    }
}

.main_footer .footer_info {
    @apply w-[200px];
}

@media (max-width: 767.98px) {
    .main_footer .footer_info {
        @apply w-full mb-4;
    }
}

.main_footer .footer_info .title {
    @apply text-[#3d3d3d] font-bold tracking-[2px];
}

.main_footer .footer_info .subtitle {
    @apply mb-[0.3rem] text-[#3d3d3d] text-xs leading-none;
}

.main_footer .footer_info .txt {
    @apply text-gray-600 text-xs;
}

.main_footer .footer_info .btn {
    @apply text-xs;
}

.main_footer .copyright {
    @apply py-[0.2rem] px-4 w-full text-[#575757] text-center text-xs;
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

@media (min-width: 768px) {
    .d-md-block {
        @apply block;
    }

    .d-md-none {
        @apply hidden;
    }
}

.text-right {
    @apply text-right;
}

.text-center {
    @apply text-center;
}

.float-left {
    @apply float-left;
}

/* Icon Styles */
.icon-add-group {
    @apply w-5 h-5;
}

.icon-add-group .icon {
    @apply w-full h-full;
    fill: #999998;
}

.icon-facebook {
    @apply w-[30px] h-[30px] transition-all duration-300 ease-in-out;
}

.icon-facebook:hover {
    @apply scale-110;
}

.icon-facebook .icon {
    @apply w-full h-full;
}


.m_menu {
  display: none;
}
@media (max-width: 767.98px) {
  .m_menu {
    display: block;
    width: 30px;
    height: 20px;
    z-index: 101;
    transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    cursor: pointer;
  }
  .m_menu .group {
    position: relative;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
  }
  .m_menu .group div {
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #575757;
    border-radius: 3px;
    transition: all 0.5s ease;
  }
  .m_menu .group .line1 {
    top: 0;
  }
  .m_menu .group .line2, .m_menu .group .line3 {
    top: 50%;
    transform: translateY(-50%);
  }
  .m_menu .group .line3 {
    opacity: 0;
  }
  .m_menu .group .line4 {
    bottom: 0;
  }
  .m_menu.js-open .group {
    top: -2px;
    transform: rotate(360deg);
  }
  .m_menu.js-open .group .line1, .m_menu.js-open .group .line4 {
    top: 0;
    opacity: 0;
  }
  .m_menu.js-open .group .line2 {
    transform: rotate(45deg);
  }
  .m_menu.js-open .group .line3 {
    opacity: 1;
    transform: rotate(-45deg);
  }
}

</style>
