"use strict";(self["webpackChunkAheadShop"]=self["webpackChunkAheadShop"]||[]).push([[922],{4922:function(t,e,i){i.r(e),i.d(e,{default:function(){return B}});var s=i(6252),a=i(3577);const o=t=>((0,s.dD)("data-v-3167465a"),t=t(),(0,s.Cn)(),t),r={class:"container"},c={class:"table-cus mt-5 mb-5"},l=o((()=>(0,s._)("h5",{class:"h5 bg-danger bg-gradient rounded-top p-3 text-white",style:{"--bs-bg-opacity":"0.5"}}," 我的收藏 ",-1))),n={key:0,class:"text-center p-5"},d=o((()=>(0,s._)("p",null,"目前沒有收藏商品喔",-1))),u=o((()=>(0,s._)("button",{type:"button",class:"btn btn-danger w-25 text-white bg-gradient"}," 前往逛逛 ",-1))),h={key:1,class:"px-4"},p={class:"w-100 mt-4",ref:"table"},g=o((()=>(0,s._)("thead",{class:"thead border-bottom"},[(0,s._)("tr",{class:"text-center"},[(0,s._)("th",{scope:"col-2"}),(0,s._)("th",{scope:"col",class:"py-3"},"商品資訊"),(0,s._)("th",{scope:"col"},"單件價格"),(0,s._)("th",{scope:"col"})])],-1))),f=["onClick"],v={class:"p-3"},_={class:"d-md-flex d-block align-items-center"},m=["src","alt"],b={class:"mt-2 text-center"},w={key:0},x={key:1,class:"text-danger"},k=o((()=>(0,s._)("br",null,null,-1))),y={class:"text-secondary fs-7"},C=["onClick"],$=o((()=>(0,s._)("i",{class:"bi bi-cart3 fs-5-5 rounded-circle"},null,-1))),D=(0,s.Uk)(" 加入購物車 "),F=[$,D];function S(t,e,i,o,$,D){const S=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("div",c,[l,0===D.filterFavorite.length?((0,s.wg)(),(0,s.iD)("div",n,[d,(0,s.Wm)(S,{to:"/products"},{default:(0,s.w5)((()=>[u])),_:1})])):((0,s.wg)(),(0,s.iD)("div",h,[(0,s._)("table",p,[g,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(D.filterFavorite,(t=>((0,s.wg)(),(0,s.iD)("tr",{class:"text-center",key:t.id},[(0,s._)("td",null,[(0,s._)("i",{class:"bi bi-trash text-secondary fs-6 pointer",onClick:e=>D.deleteFavorite(t.id)},null,8,f)]),(0,s._)("td",v,[(0,s._)("div",_,[(0,s.Wm)(S,{to:`/product/${t.id}`,class:"me-3"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:t.imageUrl,alt:t.title,class:"cart-img rounded-3 w-100"},null,8,m)])),_:2},1032,["to"]),(0,s._)("h6",b,(0,a.zw)(t.title),1)])]),(0,s._)("td",null,[t.price===t.origin_price?((0,s.wg)(),(0,s.iD)("p",w," NT$ "+(0,a.zw)(t.price),1)):((0,s.wg)(),(0,s.iD)("p",x,[(0,s.Uk)(" NT$ "+(0,a.zw)(t.price)+" ",1),k,(0,s._)("del",y,"NT$ "+(0,a.zw)(t.origin_price),1)]))]),(0,s._)("td",null,[(0,s._)("button",{type:"button",class:"btn btn-danger rounded-pill text-white ms-3",onClick:e=>D.addToCart(t.id)},F,8,C)])])))),128))])],512)]))])])}var N=i(4902),T={data(){return{products:[],favorite:[]}},computed:{filterFavorite(){return this.products.filter((t=>this.favorite.includes(t.id)))}},methods:{getFavorite(){this.favorite=JSON.parse(localStorage.getItem("favorite"))||[],N.Z.emit("add-favorite")},getProducts(){const t="https://vue3-course-api.hexschool.io/v2/api/hsiaoi/products/all";this.$http.get(t).then((t=>{this.products=t.data.products,this.getFavorite()})).catch((t=>{alert(t.response.data)}))},addToCart(t,e=1){const i="https://vue3-course-api.hexschool.io/v2/api/hsiaoi/cart",s={product_id:t,qty:e};this.$http.post(i,{data:s}).then((()=>{this.$swal.fire({icon:"success",text:"成功加入購物車 ✿",showConfirmButton:!1,timer:1800}),N.Z.emit("get-cart")})).catch((t=>{this.$swal.fire({icon:"warning",text:t.response.data.message,showConfirmButton:!1,timer:1800})}))},deleteFavorite(t){this.favorite.splice(this.favorite.indexOf(t),1),this.$swal.fire({icon:"success",text:"已刪除此收藏商品！",showConfirmButton:!1,timer:1800}),localStorage.setItem("favorite",JSON.stringify(this.favorite)),N.Z.emit("add-favorite")}},mounted(){this.getProducts()}},z=i(3744);const Z=(0,z.Z)(T,[["render",S],["__scopeId","data-v-3167465a"]]);var B=Z}}]);
//# sourceMappingURL=922.40b02d08.js.map