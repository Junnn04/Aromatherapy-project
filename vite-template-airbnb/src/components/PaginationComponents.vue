<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{disabled: !pages.has_pre}">
        <a class="page-link"  aria-label="Previous"
        @click="getProducts(pages.currrent_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"
      :class="{active: page === pages.currrent_page}"
      v-for="page in pages.total_pages" :key="page + 123">
        <a class="page-link"  @click="getProducts(page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="{disabled: !pages.has_next}">
        <a class="page-link"  aria-label="Next"
        @click="getProducts(pages.currrent_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  props: ['pages', 'getProducts'],
};
</script>
