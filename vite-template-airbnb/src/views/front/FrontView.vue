<template>
<div  style="min-height: 100vh">
    <NavbarComponents></NavbarComponents>
        <RouterView style="min-height: 70vh"></RouterView>
     <div class="py-5" style="background-color: #664939;">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
          <RouterLink class="nav-item nav-link me-4 active" to="/">
            <img src="../../assets/img/logo.jpg" class="img-fluid" alt="logo" style="width: 150px">
          </RouterLink>
          <ul class="d-flex list-unstyled mb-0 h4">
            <li><a href="#" class="text-white mx-3"><i class="bi bi-facebook"></i></a></li>
            <li><a href="#" class="text-white mx-3"><i class="bi bi-instagram"></i></a></li>
            <li><a href="#" class="text-white ms-3"><i class="bi bi-line"></i></a></li>
          </ul>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end
         align-items-start text-white">
          <div class="mb-md-0 mb-1">
            <p class="mb-0" style="color: #bcaaa4;">電話:
            <a href="tel:06-3456-7890" style="color: #bcaaa4;"
              class="text-decoration-none">06-3456-7890</a></p>
            <p class="mb-0"  style="color: #bcaaa4;">E-mail:
              <a href="mailto:service@aroma.com"
               style="color: #bcaaa4;" class="text-decoration-none">service@aroma.com</a></p>
          </div>
          <p class="mb-0">© 香氛心療坊 Aroma</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponents from '@/components/NavbarComponents.vue';

export default {
  components: {
    NavbarComponents,
  },
};
</script>
