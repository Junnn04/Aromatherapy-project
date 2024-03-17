<template>
    <NavbarComponents></NavbarComponents>
        <RouterView></RouterView>
     <div class="py-5" style="background-color: #3e2723;">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
          <a class="text-white h4" href="./index.html">
            <img src="../../img/logo.jpg" class="img-fluid" alt="logo" style="width: 150px"> </a>
          <ul class="d-flex list-unstyled mb-0 h4">
            <li><a href="#" class="text-white mx-3"><i class="bi bi-facebook"></i></a></li>
            <li><a href="#" class="text-white mx-3"><i class="bi bi-instagram"></i></a></li>
            <li><a href="#" class="text-white ms-3"><i class="bi bi-line"></i></a></li>
          </ul>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end
         align-items-start text-white">
          <div class="mb-md-0 mb-1">
            <p class="mb-0">06-3456-7890</p>
            <p class="mb-0">service@aroma.com</p>
          </div>
          <p class="mb-0">© 香氛心療坊 Aroma</p>
        </div>
      </div>
    </div>
</template>

<script>
import NavbarComponents from '../../components/NavbarComponents.vue';

export default {
  components: {
    NavbarComponents,
  },
};
</script>
