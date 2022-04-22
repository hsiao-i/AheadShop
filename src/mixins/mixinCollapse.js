import Collapse from 'bootstrap/js/dist/collapse'

export default {
  methods: {
    closeNavHam() {
      this.collapse.hide()
    },
    toggleNavHam() {
      this.collapse.toggle()
    }
  },
  mounted() {
    this.collapse = new Collapse(this.$refs.collapse, {
      toggle: false
    })
  }
}
