<template>
  <nav aria-label="Page navigation example mb-5">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: !pages.has_pre }">
        <a
          class="page-link text-primary"
          href="#"
          aria-label="Previous"
          @click.prevent="changePage(pages.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="page in pages.total_pages"
        :key="page + '1'"
        :class="{ active: pages.current_page === page }"
      >
        <a
          class="page-link text-danger"
          href="#"
          @click.prevent="changePage(page)"
          >{{ page }}</a
        >
      </li>

      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <a
          class="page-link text-primary"
          href="#"
          aria-label="Next"
          @click.prevent="changePage(pages.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages'],
  methods: {
    changePage(page) {
      this.$emit('change-page', page)
    }
  }
}
</script>
