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
          @click="getArticle(pages.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        :class="{ active: page === pages.current_page }"
        style="cursor: pointer; background-color: gray"
        :style="{
          backgroundColor: page === pages.current_page ? '#7fa185' : 'gray',
        }"
        v-for="page in pages.total_pages"
        :key="page + 123"
      >
        <a class="page-link" @click="getArticle(page)">{{ page }}</a>
      </li>
      <li
        class="page-item"
        :class="{ disabled: !pages.has_next }"
        style="cursor: pointer"
      >
        <a
          class="page-link"
          aria-label="Next"
          @click="getArticle(pages.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["pages", "getArticle"],
};
</script>
