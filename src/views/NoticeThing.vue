<template>
  <LoadingVue :active="isLoading" :z-index="100"></LoadingVue>
  <div
    class="banner container-fluid d-flex align-items-center justify-content-center"
    style="
      background-image: url(../../public/images/sc/notice1.png);
      height: 300px;
      background-position: 50% 50%;
      background-size: cover;
    "
  >
    <div
      class="container  d-flex align-items-center justify-content-end text-primary"
    >
  <h1 class="fs-2 lh-base" style="text-indent:-30%">專注每位顧客的需求<br>美味品嚐者的期待</h1>
    </div>
  </div>
  <div class="container mb-5">
    <div class="row px-1 px-lg-7 my-5">
      <h2>商品訂購須知</h2>
      <div class="accordion" id="accordionExampleA">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne1">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne1"
              aria-expanded="true"
              aria-controls="collapseOne1"
            >
              購買蛋糕後，我需要注意什麼事項，以享用到最佳風味呢？
            </button>
          </h2>
          <div
            id="collapseOne1"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne1"
            data-bs-parent="#accordionExampleA"
          >
            <div class="accordion-body">
              由於每個品項幾乎都是天然食材，所以顧客在收到蛋糕後，請盡速在常溫兩小時內食用完畢。<br />
              提拉米蘇：冷藏保存期限3日，常溫2小時內享用完畢為佳 <br />
              時令蛋糕：冷藏保存期限2日，冷凍保存期限7日 <br />
              餅乾點心：常溫保存5日，冷藏保存期限1週，冷凍保存期限1個月
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              我們公司想訂購蛋糕作為下午茶，請問最大數量是多少呢？
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              以最熱門的提拉米蘇來說，一天的產能大約是10個；蛋糕類則是2~3個，依內容豐富度而定。
              <br />
              如果還需要更多，則會以"提前"製作好送出的方式，讓客戶分批冷藏，帶需要的時候食用。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              請問你們有賣馬卡龍之類的小點心嗎？
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              一般而言販賣的品項都以商品列表上的為主，為的就是保證內容物的品質。
              <br />
              但我也是喜歡嘗試新口味的人，如果客戶對我的手藝有一定的信賴度，
              <br />
              也可以從網頁下方的訂購專線與我聯絡，以討論製作事宜。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row px-1 px-lg-7 mb-5">
      <h2>配送相關問題</h2>
      <div class="accordion" id="accordionExample2">
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading11">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse11"
              aria-expanded="true"
              aria-controls="collapse11"
            >
              請問商品訂購後該如何收到品項呢?
            </button>
          </h2>
          <div
            id="collapse11"
            class="accordion-collapse collapse show"
            aria-labelledby="heading11"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              由於TwoCakes是個人工作室，所以配送方式都是以土城附近捷運站面交的方式為主。
              <br />
              如果有需要送到特定地點則需要使用宅配的方式進行運送。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading12">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse12"
              aria-expanded="false"
              aria-controls="collapse12"
            >
              如果我希望能在短時間內馬上收到商品，應該怎麼辦呢？
            </button>
          </h2>
          <div
            id="collapse12"
            class="accordion-collapse collapse"
            aria-labelledby="heading12"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              我們可以從購物車內的"<b>前往結帳中</b>"的表單內註明需求。 <br />
              或是由網頁最下方的"<b>訂購專線</b>"確認需要調整的地方。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading14">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse14"
              aria-expanded="false"
              aria-controls="collapse14"
            >
              請問如何收取運費呢?
            </button>
          </h2>
          <div
            id="collapse14"
            class="accordion-collapse collapse"
            aria-labelledby="heading14"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              以宅配規範的收取方式是商品60公分內，常溫配送130元、低溫配送160元。
              <br />
              其中"<b>提拉米蘇</b>"和"<b>時令蛋糕</b>"需要低溫配送，若訂購餅乾類則是常溫配送。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading15">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse15"
              aria-expanded="false"
              aria-controls="collapse15"
            >
              請問宅配公司是哪一家？
            </button>
          </h2>
          <div
            id="collapse15"
            class="accordion-collapse collapse"
            aria-labelledby="heading15"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              視配送區會使用『台灣宅配通』、『黑貓宅急便』、『新竹貨運』、『中華郵政』等各家物流業者<br />
              以出貨單位配合物流業者為主，恕無法挑選特定物流業者。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading16">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse16"
              aria-expanded="false"
              aria-controls="collapse16"
            >
              在確認訂單後，多久可以收到商品呢？
            </button>
          </h2>
          <div
            id="collapse16"
            class="accordion-collapse collapse"
            aria-labelledby="heading16"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              除預購、特別訂製商品外，一般在訂單確認後三天內(不含例假日)將貨品運送到指定地點。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading17">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse17"
              aria-expanded="false"
              aria-controls="collapse17"
            >
              訂單已超過配送時間還沒收到商品？
            </button>
          </h2>
          <div
            id="collapse17"
            class="accordion-collapse collapse"
            aria-labelledby="heading17"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              請使用訂購專線與我聯絡，我將儘速為您查詢商品流向。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row px-1 px-lg-7 mb-5">
      <h2>訂單資料異動</h2>
      <div class="accordion" id="accordionExample3">
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse18"
              aria-expanded="true"
              aria-controls="collapse18"
            >
              訂單成立後，可以更改訂購數量嗎？
            </button>
          </h2>
          <div
            id="collapse18"
            class="accordion-collapse collapse show"
            aria-labelledby="heading17"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              訂單成立後會無法更改品項，若需加購或減少可由服務至專線與我聯絡
            </div>
          </div>
        </div>
        <!-- // 456 -->
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse19"
              aria-expanded="true"
              aria-controls="collapse19"
            >
              我收到的商品跟我想像中的不一樣？
            </button>
          </h2>
          <div
            id="collapse19"
            class="accordion-collapse collapse"
            aria-labelledby="heading17"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              商品的大小會依照商品資訊內的尺寸做設計，在製作完成後放入固定大小的容器中
              <br />
              所以顧客可以放心內容物不會有縮水的問題。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    loading () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 300)
    }
  },
  mounted () {
    window.scroll(0, 0)
    this.loading()
  }
}
</script>
