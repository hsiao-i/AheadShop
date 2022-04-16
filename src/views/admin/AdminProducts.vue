<template>
  <h2>後台產品列表</h2>
  <div class="container">
    <LoadingOverlay :active="isLoading" :z-index="1000"></LoadingOverlay>
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="openModal('new')">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-end">{{ item.origin_price }}</td>
          <td class="text-end">{{ item.price }}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal('edit', item)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openDelModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <ProductModal
      ref="productModal"
      :product="tempProduct"
      :is-new="isNew"
      @update-products="updateProducts"
    ></ProductModal>
    <DelModal
      ref="delModal"
      :delproduct="tempProduct"
      @del-product="delProduct"
    ></DelModal>
    <PaginationCom
      :pages="pagination"
      @change-page="getProducts"
    ></PaginationCom>
  </div>
</template>

<script>
import ProductModal from '@/components/ProductModal'
import DelModal from '@/components/DelModal.vue'
import PaginationCom from '@/components/PaginationCom.vue'

export default {
  inject: ['emitter'],
  components: {
    ProductModal,
    DelModal,
    PaginationCom
  },
  data() {
    return {
      products: [],
      isNew: false,
      tempProduct: {
        imagesUrl: []
      },
      pagination: {},
      currentPage: 1,
      isLoading: false
    }
  },
  methods: {
    getProducts(page = 1) {
      this.currentPage = page
      this.isLoading = true
      this.$http
        .get(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
        )
        .then((res) => {
          // console.log(res)
          // 產品列表
          this.products = res.data.products
          // 分頁
          this.pagination = res.data.pagination
          this.isLoading = false
        })
        .catch((err) => {
          // this.$httpMessageState(err.response, '錯誤訊息')
          alert('新增產品失敗')
          alert(err.response.message)

          this.isLoading = false
        })
    },
    openModal(status, item) {
      console.log(status, item)
      if (status === 'new') {
        this.tempProduct = {}
        this.isNew = true
      } else if (status === 'edit') {
        this.tempProduct = { ...item }
        this.isNew = false
      }
      // 抓 bootstrap、開啟 modal
      const productComponent = this.$refs.productModal
      productComponent.openModal()
    },
    // 更新與新增產品，modal 裡面需透過 emit 來取得外面的 updateProducts 方法
    updateProducts(item) {
      this.tempProduct = item
      this.isLoading = true
      let api = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/admin/product`
      let http = 'post'
      let situation = '新增產品成功'

      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
        http = 'put'
        situation = '更新產品成功'
      }
      this.$http[http](api, { data: this.tempProduct })
        .then((res) => {
          // console.log(res)
          const productComponent = this.$refs.productModal
          alert(`${situation}`)
          productComponent.closeModal()
          // this.$$httpMessageState(res, situation)
          this.isLoading = false
          this.getProducts()
        })
        .catch((err) => {
          alert(err.response.message)
          this.isLoading = false
          // this.$$httpMessageState(err.response)
        })
    },
    openDelModal(item) {
      this.tempProduct = { ...item }
      const delProductComponent = this.$refs.delModal
      delProductComponent.openModal()
    },
    delProduct() {
      this.isLoading = true
      this.$http
        .delete(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
        )
        .then((res) => {
          console.log(res)
          alert('刪除品項成功')
          this.isLoading = false
          const delProductComponent = this.$refs.delModal
          delProductComponent.closeModal()
          this.getProducts()
        })
        .catch((err) => {
          alert(err.response.message)
          this.isLoading = false
        })
    }
  },

  mounted() {
    this.getProducts()
    console.log(this.tempProduct)
  }
}
</script>
