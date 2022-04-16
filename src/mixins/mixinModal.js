// import Modal from '../node_modules/bootstrap/js/dist/modal'
import Modal from '../../node_modules/bootstrap/js/dist/modal'

export default {
  methods: {
    openModal() {
      this.modal.show()
    },
    closeModal() {
      this.modal.hide()
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.productModal)
  }
}
