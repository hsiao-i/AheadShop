<template>
  <div
    class="toast-container"
    class="position-fixed top-0 end-0"
    style="z-index: 1500"
  >
    <div
      class="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      v-for="(msg, key) in messages"
      :key="key"
    >
      <div class="toast-header">
        <img
          src="..."
          class="rounded me-2"
          alt="..."
          :class="`bg-${msg.state}`"
        />
        <strong class="me-auto">{{ msg.title }}</strong>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
          @click="clearToast(key)"
        ></button>
      </div>
      <div class="toast-body">
        {{ msg.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['emitter'],
  data() {
    return {
      messages: []
    }
  },
  methods: {
    clearToast(index) {
      this.message.splice(index, 1)
    },
    toastClose() {
      setTimeOut(() => {
        this.messages.shift(), 6000
      })
    }
  },
  mounted() {
    this.emitter.on('get-message', (message) => {
      const { state = 'success', title, content } = message
      this.messages.push(state, title, content)
      this.toastClose()
    })
  }
}
</script>
