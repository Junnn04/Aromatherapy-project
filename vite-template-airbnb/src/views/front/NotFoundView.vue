<template>
  <div class="container text-center">
    <img
      src="../../assets/img/404.png"
      alt="404頁面"
      class="img-fluid"
      style="max-height: 500px"
    />
  </div>
  <div class="container">
    <div class="row justify-content-center pt-3">
      <div class="col-md-6 text-center">
        <h3 style="color: #4e342e">您訪問的頁面不存在</h3>
        <RouterLink
          class="btn btn-dark mt-4 rounded-pill border-0"
          to="/"
          style="background-color: #7fa185"
        >
          <i class="bi bi-arrow-left-circle"></i> 返回首頁</RouterLink
        >
      </div>
    </div>
  </div>
</template>
