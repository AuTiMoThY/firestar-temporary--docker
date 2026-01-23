<script setup lang="ts">
const config = useRuntimeConfig();
const basePath = config.public.basePath;

// 標籤頁狀態
const activeTab = ref(0);

// Accordion 展開狀態
const expandedItems = ref<Record<string, boolean>>({});

// 切換 accordion 項目
const toggleItem = (category: string, index: number) => {
  const key = `${category}-${index}`;
  expandedItems.value[key] = !expandedItems.value[key];
};

// 檢查項目是否展開
const isExpanded = (category: string, index: number) => {
  const key = `${category}-${index}`;
  return expandedItems.value[key] || false;
};

// FAQ 資料
const faqData = {
  company: [
    {
      question: '請問你們 Firestar 的商品都在哪裡製造的?',
      answer: 'Firestar 產品皆為台灣設計，產品及原料大部份為台灣製造，但因應部分產品需要中國工廠技術性支援為中國製造，當然為了確保商品的品質及消費者的權益，Firestar 商品都有嚴格的產品把關，請大家安心選購。'
    },
    {
      question: '每家都在講台灣製造台灣製造，你們的台灣製造跟別人有差嗎?',
      answer: 'Firestar 產品不同點是我們擁有 MIT 標章，品質檢驗符合標準，Firestar 的每一件台灣製造的商品，皆由通過認證之廠商所承製，也都有專屬之 MIT 微笑標章吊牌，透過 MIT 微笑標章及其認驗證制度，提供消費者安全、健康及值得信賴之台灣產品。'
    },
    {
      question: '請問什麼是 MIT 微笑標章認證?',
      answer: '所謂MIT 微笑標章認證，就是台灣製造的品質保證，其取得方式需依照台灣製產品 MIT 微笑標章嚴格的驗證制度實施辦法，並且完成 MIT 微笑標章商驗證，品質檢驗完全符合標準，每一件台灣製造的商品，皆由通過 MIT 認證之廠商所承製，原料供應商皆需為台灣製造，透過台灣製產品 MIT 微笑標章及其認驗證制度，取得專屬之 MIT 微笑標章吊牌及專屬編號，才算通過 MIT 微笑標章認證。'
    },
    {
      question: '請問如何成為 Firestar 的經銷商?有沒有什麼樣的限制?',
      answer: '您可以電洽本公司服務專線：02-26689788，或E-MAIL至：firestar26689788@yahoo.com.tw，我們會派專員為您做詳細的解說。'
    },
    {
      question: '請問有線上購物嗎?',
      answer: '抱歉，目前 Firestar 並未提供線上購物的服務，建議您可以到就近有販售 Firestar 商品的經銷商&店家看看。'
    }
  ],
  product: [
    {
      question: '請問我買了一件 Firestar 的外套，店員說有透溼功能和防潑水功能，請問什麼是透溼功能和防潑水功能?',
      answer: `透溼功能的材料有適時阻擋雨水，但又能排出身體所產生溼氣及汗氣的功效，其透溼透氣的原理如下：

A. 透溼原理
將水隔絕在布料&衣服外層再藉由親水特性，吸收布料內層水份或溼氣，利用布料&衣服內外層氣壓(內層大於外層)的不同將溼氣排出布料&衣服外。

B. 透氣原理
布料&衣服外層將水阻擋在外，在外層的許多微小孔隙，孔隙的尺寸小於水分子所以水滴進不來，內層的溼氣分子小於內層孔隙尺寸，能讓身體所溼氣及汗氣輕易通過，達到透濕透氣的功能。

防潑水功能簡單來說，就是讓潑在衣服表面上的水凝結成水珠並滾落，這樣就不會輕易的被布料所吸收。

防潑水使水滴不易被布料所吸收，但請注意防潑水並非防水，防潑水的主要作用是減少水被布料所吸收，使水在布料表面呈現水珠狀散開滾落，只有一定程度的防水功效，並非完全防水，使用上請留意。`
    },
    {
      question: '請問排汗衫勾紗了我如何去修復?',
      answer: `排汗衫(褲)因為織工細緻，勾紗是實際存在的問題，如果是程度不嚴重的勾紗，在此提供您簡易的 DIY 修復的方法：

1. 勾紗處至於中心，將布左右上下輕輕拉扯，讓勾紗的部分歸位即可。
2. 用縫衣針(或勾紗修補針)插進勾紗部分，讓針直接穿過，這時針會把勾紗帶進內裏，勾紗隱藏至衣服內裏，衣服表面勾紗即撫平。`
    },
    {
      question: '去年購買你們品牌的排汗衣，一開始排汗效果很不錯! 但是今年拿出來穿，排汗效果似乎不見了，這是正常的狀況嗎?',
      answer: `排汗衣的功效會因洗滌方式不同，導致不同的壽命，所以 為延長衣服壽命，洗滌衣服時，請注意以下事項：

● 反面洗滌或用洗衣袋，原因是避免勾紗。
● 注意：衣物不宜泡洗衣粉水太久，隨沖隨洗，以免被分解的髒東西又被吸受回去。
● 勿用強效(濃縮)洗衣精清洗，因多含有螢光、漂白水成份。
● 衣服洗後請甩平拉直，衣領鋪平，自然晾掛，延長衣物的美觀壽命。`
    }
  ],
  purchase: [
    {
      question: '請問買 Firestar 的衣服時，如何知道我該穿著的尺寸?',
      answer: '您可以至各地的經銷商實際套量，因應不同的活動版型設計稍微不同，建議您以實際套量為佳。'
    },
    {
      question: '9月份有購買到貴公司的特價活動的車衣，感到非常的物超所值，以後會不會有類似活動?',
      answer: '謝謝，本公司會不定期舉辦類似的特價及優惠活動，來回饋支持我們的消費者。'
    },
    {
      question: '我買了一件 Firestar 的衣服&褲子，但回家後發現有瑕疵，請問我能換嗎?',
      answer: '本公司致力於好的品質回饋消費者，當您所購買的產品有瑕疵時，表示我們無法達到您的標準，我們感到抱歉，當產品有蝦庛時，在買到商品七日內至原消費店家更換即可。'
    },
    {
      question: '我買到仿冒品怎麼辦?',
      answer: '本公司致力於好的品質回饋消費者，當您所購買的產品有瑕疵時，表示我們無法達到您的標準，我們感到抱歉，當買到疑似劣質品或疑似仿冒品時，請詳記下購買地點並保留發票與我們聯繫。'
    }
  ]
};

const tabs = [
  { id: 0, name: '公司問題', key: 'company' },
  { id: 1, name: '產品問題', key: 'product' },
  { id: 2, name: '購買問題', key: 'purchase' }
];
</script>

<template>
    <main class="content_wrapper">
        <!-- Banner Section -->
        <section class="banner">
            <div class="pic">
                <NuxtImg 
                    class="d-none d-sm-block" 
                    :src="`${basePath}images/banner-about.jpg`" 
                    alt="常見問題"
                    preload
                    format="webp"
                    quality="85"
                />
                <NuxtImg 
                    class="d-sm-none" 
                    :src="`${basePath}images/banner-about-m.jpg`" 
                    alt="常見問題"
                    preload
                    format="webp"
                    quality="85"
                />
            </div>
        </section>

        <!-- Page Title -->
        <h1 class="page_title">常見問題</h1>

        <!-- Main Content Section -->
        <section class="row">
            <article class="faq_content col-md-8">
                <div class="inner">
                    <p class="des">
                        <strong>說明</strong><br>
                        如果對公司或產品有所疑問，還是有購買方面等問題，可以在此先作一般性的問題檢索。
                    </p>
                    <p class="des">
                        <strong>為什麼會有這個?</strong><br>
                        針對常用的問題作回答，為了有效率的回答重複性高的問題，所設的問答檢索。
                    </p>

                    <!-- Tabs -->
                    <div class="faq_tabs">
                        <ul class="faq_tabs-list">
                            <li 
                                v-for="tab in tabs" 
                                :key="tab.id"
                                class="faq_tabs-item"
                                :class="{ active: activeTab === tab.id }"
                                @click="activeTab = tab.id"
                            >
                                <a href="#" @click.prevent>{{ tab.name }}</a>
                            </li>
                        </ul>

                        <!-- Tab Content: 公司問題 -->
                        <section 
                            v-show="activeTab === 0"
                            class="faq_block"
                        >
                            <h2 class="hide_txt">公司問題</h2>
                            <div class="faq_cnt">
                                <div
                                    v-for="(item, index) in faqData.company"
                                    :key="index"
                                    class="faq_item"
                                >
                                    <h3 
                                        class="faq_title"
                                        :class="{ active: isExpanded('company', index) }"
                                        @click="toggleItem('company', index)"
                                    >
                                        <span class="faq_icon">{{ isExpanded('company', index) ? '−' : '+' }}</span>
                                        <span v-html="item.question.replace(/製造/g, '<span class=\'red-text\'>製造</span>').replace(/台灣製造/g, '<span class=\'red-text\'>台灣製造</span>').replace(/MIT 微笑標章認證/g, '<span class=\'red-text\'>MIT 微笑標章認證</span>').replace(/經銷商/g, '<span class=\'red-text\'>經銷商</span>').replace(/線上購物/g, '<span class=\'red-text\'>線上購物</span>')"></span>
                                    </h3>
                                    <div 
                                        v-show="isExpanded('company', index)"
                                        class="faq_txt"
                                    >
                                        <p v-html="item.answer.replace(/\n/g, '<br>')"></p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <!-- Tab Content: 產品問題 -->
                        <section 
                            v-show="activeTab === 1"
                            class="faq_block"
                        >
                            <h2 class="hide_txt">產品問題</h2>
                            <div class="faq_cnt">
                                <div
                                    v-for="(item, index) in faqData.product"
                                    :key="index"
                                    class="faq_item"
                                >
                                    <h3 
                                        class="faq_title"
                                        :class="{ active: isExpanded('product', index) }"
                                        @click="toggleItem('product', index)"
                                    >
                                        <span class="faq_icon">{{ isExpanded('product', index) ? '−' : '+' }}</span>
                                        <span v-html="item.question.replace(/透溼功能/g, '<span class=\'red-text\'>透溼功能</span>').replace(/防潑水功能/g, '<span class=\'red-text\'>防潑水功能</span>').replace(/勾紗/g, '<span class=\'red-text\'>勾紗</span>').replace(/排汗效果/g, '<span class=\'red-text\'>排汗效果</span>')"></span>
                                    </h3>
                                    <div 
                                        v-show="isExpanded('product', index)"
                                        class="faq_txt"
                                    >
                                        <p v-html="item.answer.replace(/\n/g, '<br>')"></p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <!-- Tab Content: 購買問題 -->
                        <section 
                            v-show="activeTab === 2"
                            class="faq_block"
                        >
                            <h2 class="hide_txt">購買問題</h2>
                            <div class="faq_cnt">
                                <div
                                    v-for="(item, index) in faqData.purchase"
                                    :key="index"
                                    class="faq_item"
                                >
                                    <h3 
                                        class="faq_title"
                                        :class="{ active: isExpanded('purchase', index) }"
                                        @click="toggleItem('purchase', index)"
                                    >
                                        <span class="faq_icon">{{ isExpanded('purchase', index) ? '−' : '+' }}</span>
                                        <span v-html="item.question.replace(/尺寸/g, '<span class=\'red-text\'>尺寸</span>').replace(/活動/g, '<span class=\'red-text\'>活動</span>').replace(/瑕疵/g, '<span class=\'red-text\'>瑕疵</span>').replace(/仿冒品/g, '<span class=\'red-text\'>仿冒品</span>')"></span>
                                    </h3>
                                    <div 
                                        v-show="isExpanded('purchase', index)"
                                        class="faq_txt"
                                    >
                                        <p v-html="item.answer.replace(/\n/g, '<br>')"></p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </article>

            <!-- Sidebar -->
            <aside class="faq_aside col-md-4">
                <div class="inner">
                    <section class="about_aside-sec">
                        <h2 class="title text-title">什麼?沒有你的問題?</h2>
                        <p class="txt text-content mb-5">
                            如果在問答檢索中沒辦法得到您要的答案，或沒有回答到您的問題，可以與我們連絡。
                        </p>
                        <p class="txt text-content">
                            Firestar<br>
                            方元開發有限公司
                        </p>
                        <p class="txt text-content">
                            新北市樹林區佳園路3段43之2號<br>
                            郵遞區號：238<br>
                            台灣
                        </p>
                        <p class="txt text-content">
                            電 話：(02) 2668-9788<br>
                            傳 真：(02) 2668-9968<br>
                            統 編：1689-8543<br>
                            E-Mail：firestar26689788@yahoo.com.tw
                        </p>
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

/* FAQ Content */
.faq_content {
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

.faq_content .inner {
    @apply p-4;
}

.des {
    @apply text-base text-gray-700 leading-relaxed mb-4;
}

.des strong {
    @apply text-gray-800 font-bold;
}

/* FAQ Tabs */
.faq_tabs {
    @apply mt-6;
}

.faq_tabs-list {
    @apply flex list-none p-0 m-0 border-b border-gray-300;
}

.faq_tabs-item {
    @apply px-4 py-2 cursor-pointer border-b-2 border-transparent;
    @apply transition-colors duration-200;
}

.faq_tabs-item:hover {
    @apply bg-gray-100;
}

.faq_tabs-item.active {
    @apply border-red-600 text-red-600 font-semibold;
}

.faq_tabs-item a {
    @apply no-underline text-gray-700;
}

.faq_tabs-item.active a {
    @apply text-red-600;
}

/* FAQ Block */
.faq_block {
    @apply mt-4;
}

.hide_txt {
    @apply sr-only;
}

.faq_cnt {
    @apply space-y-2;
}

.faq_item {
    @apply border border-gray-200 rounded mb-2;
}

.faq_title {
    @apply flex items-center p-4 cursor-pointer;
    @apply text-base font-semibold text-gray-800;
    @apply transition-colors duration-200;
    @apply bg-white;
}

.faq_title:hover {
    @apply bg-gray-50;
}

.faq_title.active {
    @apply bg-gray-50;
}

.faq_icon {
    @apply mr-3 text-xl font-bold text-red-600;
    @apply w-6 text-center;
}

.faq_txt {
    @apply p-4 pt-0 text-gray-700 leading-relaxed;
    @apply bg-white;
}

.faq_txt p {
    @apply mb-2;
}

.faq_txt p:last-child {
    @apply mb-0;
}

.red-text {
    @apply text-red-600 font-semibold;
}

/* Sidebar */
.faq_aside {
    @apply px-4;
}

.faq_aside .inner {
    @apply h-full p-4;
    background-color: rgb(235, 235, 235);
}

.about_aside-sec {
    @apply mb-8;
}

.about_aside-sec:last-child {
    @apply mb-0;
}

.title {
    @apply text-xl font-bold mb-4;
    @apply text-gray-800;
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

.mb-5 {
    @apply mb-5;
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