<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li
        class="page-item"
        :class="{ disabled: !pages.has_pre }"
        style="cursor: pointer"
      >
        <a
          class="page-link"
          aria-label="Previous"
          @click="getProducts(pages.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        :class="{ active: page === pages.current_page }"
        :style="{
          cursor: 'pointer',
        }"
        v-for="page in pages.total_pages"
        :key="page + 123"
      >
        <a class="page-link" @click="getProducts(page)">{{ page }}</a>
      </li>
      <li
        class="page-item"
        :class="{ disabled: !pages.has_next }"
        style="cursor: pointer"
      >
        <a
          class="page-link"
          aria-label="Next"
          @click="getProducts(pages.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["pages", "getProducts"],
  data() {
    return {
      isFocused: false,
      linkColor: "white", // 定义链接颜色
      focusColor: "blue", // 定义聚焦时的颜色
    };
  },
};
</script>
