<template>
  <!-- <loading v-model:active="isLoading"
               :can-cancel="true"
               :on-cancel="onCancel"
               :is-full-page="fullPage"/> -->
  <div class="position-relative">
    <div
      class="position-absolute z-n1"
      style="
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url(https://th.bing.com/th/id/OIG1.y8qAI6TiPfngjMh1XOv5?w=1024&h=1024&rs=1&pid=ImgDetMain);
        background-position: center center;
        opacity: 0.3;
      "
    ></div>
    <div class="container d-flex flex-column" style="min-height: 100vh">
      <!-- <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="./index.html">Navbar</a>
          <button class="navbar-toggler" type="button"
           data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link me-4 active" href="./index.html">
                Home <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link me-4" href="./product.html">Product</a>
              <a class="nav-item nav-link me-4" href="./detail.html">Detail</a>
              <a class="nav-item nav-link" href="./cart.html">
                <i class="fas fa-shopping-cart"></i></a>
            </div>
          </div>
        </nav> -->
      <div class="row justify-content-center my-auto">
        <div class="col-md-4 text-center">
          <h2>從香氛開始，創造美好生活。</h2>
          <p class="text-muted mb-0">
            每一種香氣都是一段故事的開始，我們追求的不僅僅是生活，更是一種與自我對話的方式。
          </p>
          <!-- <RouterLink class="btn btn-dark rounded-0 mt-6" to="/products">
                走進香氛</RouterLink> -->
          <button type="button" class="btn btn-dark rounded-0 mt-6 z-3">
            <RouterLink
              class="text-decoration-none"
              style="color: #7fa185"
              to="/products"
              >走進香氛</RouterLink
            >
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-4 mt-md-4">
        <RouterLink
          class="text-decoration-none"
          to="/products?category=單方精油"
        >
          <div class="card border-0 mb-4">
            <img
              src="../../assets/img/essential.jpg"
              class="card-img-top rounded-0"
              alt="單方精油"
            />
            <div class="card-body text-center">
              <h4>單方精油</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-muted mb-0">
                  單方精油為純粹的植物提取物，保留植物的天然特性和功效。
                </p>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
      <div class="col-md-4 mt-md-4">
        <RouterLink
          class="text-decoration-none"
          to="/products?category=複方精油"
        >
          <div class="card border-0 mb-4">
            <img
              src="../../assets/img/essential oil blend.jpg"
              class="card-img-top rounded-0"
              alt="複方精油"
            />
            <div class="card-body text-center">
              <h4>複方精油</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-muted mb-0">
                  由多種單方精油混合而成。結合不同精油的特性和功效，創造出不同的香氣和功效。
                </p>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
      <div class="col-md-4 mt-md-4">
        <RouterLink class="text-decoration-none" to="/products?category=薰香機">
          <div class="card border-0 mb-4">
            <img
              src="../../assets/img/Diffuser.jpg"
              class="card-img-top rounded-0"
              alt="精油薰香機"
            />
            <div class="card-body text-center">
              <h4>精油薰香機</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-muted mb-0">
                  將精油擴散至空氣中，為室內帶來愉悅香氣，改善室內空氣品質，提升空間的氛圍，放鬆身心。
                </p>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
  <div class="bg-light">
    <div class="container">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row justify-content-center py-7">
              <div class="col-md-6 text-center">
                <h3>香氛之旅</h3>
                <p class="my-5">
                  我們相信每一種香氣都擁有獨特的力量，能夠觸動人心，療癒靈魂。我們的香氛不僅是一種感官享受，
                  更是一種情感表達，一種生活態度的展現。
                </p>
                <p><small>—Fragrance Journey—</small></p>
              </div>
            </div>
          </div>
          <!-- <div class="carousel-item">
              <div class="row justify-content-center py-7">
                <div class="col-md-6 text-center">
                  <h3>關於</h3>
                  <p class="my-5">我們的故事源自於對大自然的尊重與感恩，我們從每一滴花朵的芬芳中汲取靈感
                    ，從每一片樹葉的輕柔中尋找力量。我們的產品精心挑選來自世界各地的天然植物提取物，保證給您最純淨、最自然的呵護。</p>
                  <p><small>—Lorem ipsum dolor sit amet.—</small></p>
                </div>
              </div>
            </div> -->
        </div>
      </div>
    </div>
  </div>
  <div class="container my-7">
    <RouterLink class="text-decoration-none" to="/about">
      <div class="row">
        <div class="col-md-6">
          <img src="../../assets/img/store2.jpg" alt="店面" class="img-fluid" />
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4 pb-4" style="color: #4e342e">品牌故事</h4>
          <p class="text-muted">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            我們的故事源自於對大自然的尊重與感恩，我們從每一滴花朵的芬芳中汲取靈感
            ，從每一片樹葉的輕柔中尋找力量。
          </p>
          <p class="text-muted">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            我們的產品精心挑選來自世界各地的天然植物提取物，保證給您最純淨、最自然的呵護。
          </p>
        </div>
      </div>
    </RouterLink>
    <RouterLink class="text-decoration-none" to="/about">
      <div class="row flex-row-reverse justify-content-between mt-4">
        <div class="col-md-6">
          <img
            src="../../assets/img/Process.jpg"
            alt="工藝"
            class="img-fluid"
          />
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4 pb-4" style="color: #4e342e">極致工藝</h4>
          <p class="text-muted">
            從植物的選擇和種植到萃取、純化和儲存等的每個細節和步驟都進行精心控制和優化，以確保最高質量和純度的精油。
          </p>
        </div>
      </div>
    </RouterLink>
  </div>
  <!-- <div class="bg-light py-4">
      <div class="container">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center
         align-items-start">
          <p class="mb-0 fw-bold">Lorem ipsum dolor sit amet.</p>
          <div class="input-group w-md-50 mt-md-0 mt-3">
            <input type="text" class="form-control rounded-0" placeholder="" />
            <div class="input-group-append">
              <button class="btn btn-dark rounded-0" type="button" id="search">
                Lorem ipsum
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> -->
</template>

<!-- <script>
import loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
    };
  },
  components: {
    loading,
  },
  methods: {
    doAjax() {
      this.isLoading = true;
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    },
    onCancel() {
      console.log('User cancelled the loader.');
    },
  },
  mounted() {
    this.doAjax();
  },
};
</script> -->
