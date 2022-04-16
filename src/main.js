import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './registerServiceWorker'
import router from './router'
// loading 效果
import Loading from 'vue-loading-overlay' // component
import 'vue-loading-overlay/dist/vue-loading.css' // style
// 格式轉換
import { date, toThousandths, descriptionSplit } from './methods/filters.js'
import $messageState from '@/methods/messageState.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
// veevalidate
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import AllRules from '@vee-validate/rules'
// import { required, email, min } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
// sweetAlert
// import VueSwal from 'vue-swal'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
// wow.js
import 'animate.css'
import WOW from 'wow.js'
new WOW({
  live: true,
  offset: 4
}).init()

// veevalidate
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW') // 因為語系檔沒辦法直接啟用，因此會強制預設語系為中文

const app = createApp(App)

app.config.globalProperties.$filters = {
  date,
  toThousandths
}
app.config.globalProperties.$messageState = $messageState

app.config.globalProperties.$descriptionSplit = descriptionSplit

app.use(router)
app.use(VueAxios, axios)
// app.use(VueSwal)
app.use(VueSweetalert2)
app.component(date)
// loading
app.component('LoadingOverlay', Loading)
// 表單驗證
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)
// sweetAlert

app.mount('#app')
