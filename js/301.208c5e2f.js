"use strict";(self["webpackChunktwo_cakes"]=self["webpackChunktwo_cakes"]||[]).push([[301],{3041:function(t,s,e){function i(t){return{all:t=t||new Map,on:function(s,e){var i=t.get(s);i?i.push(e):t.set(s,[e])},off:function(s,e){var i=t.get(s);i&&(e?i.splice(i.indexOf(e)>>>0,1):t.set(s,[]))},emit:function(s,e){var i=t.get(s);i&&i.slice().map((function(t){t(e)})),(i=t.get("*"))&&i.slice().map((function(t){t(s,e)}))}}}e.d(s,{Z:function(){return c}});const a=i();var c=a},301:function(t,s,e){e.r(s),e.d(s,{default:function(){return z}});var i=e(6252),a=e(3577),c=e(9963),l=e(2097);const o={class:"container mx-auto row my-5"},r={class:"col-md-6"},n={class:"col-md-6"},d=(0,i.uE)('<nav aria-label="breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item"><a href="#">Home</a></li><li class="breadcrumb-item"><a href="#">Library</a></li><li class="breadcrumb-item active" aria-current="page">Data</li></ol></nav>',1),u={class:"fs-5 text-muted"},p={class:"fw-blod"},h={class:"text-decoration-line-through"},m={class:""},v={id:"",class:"form-select text-center mb-3 col-md-7"},g=["value"],f={class:"d-flex justify-content-end align-items-center"},b=(0,i._)("p",{class:"fs-5 d-flex m-0 text-dark"},[(0,i.Uk)("小記"),(0,i._)("span",null," |NT "),(0,i.Uk)("456")],-1),w=(0,i.uE)('<div class="product-banner-color"><div class="container"><div class="row justify-content-around"><div class="col-md-6 py-4 d-flex flex-wrap align-items-evenly"><h2 class="fs-3 mt-3 mb-0">注意事項：</h2><p class="fs-5 mb-0"> TwoCakes為個人工作室，所有原料幾乎都是天然食材，不含防腐劑。 <br> 使用當季水果作為主要食材，確保每位客人有最佳的品嚐體驗。 <br> 故每項商品均有其食用期限，請參閱下方式項： </p><ul class="list-unstyled fs-5 cake-list"><li>提拉米蘇：冷藏保存期限3日，常溫2小時內享用完畢為佳</li><li>時令蛋糕：冷藏保存期限2日，冷凍保存期限7日</li><li>餅乾點心：常溫保存5日，冷藏保存期限1週，冷凍保存期限1個月</li></ul></div><div class="col-md-4"><img src="'+l+'" alt="" class="img-fluid border border-white" style="height:400px;"></div></div></div></div><div class="container"><h2>你可能會喜歡</h2><div></div></div>',2);function k(t,s,e,l,k,_){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",o,[(0,i._)("div",r,[k.product.imageUrl?((0,i.wg)(),(0,i.iD)("div",{key:0,style:(0,a.j5)([{height:"400px","background-position":"50% 50%","background-size":"cover"},{backgroundImage:`url(${k.product.imageUrl})`}])},null,4)):(0,i.kq)("",!0)]),(0,i._)("div",n,[d,(0,i._)("h2",null,(0,a.zw)(k.product.title),1),(0,i._)("p",u,(0,a.zw)(k.product.description),1),(0,i._)("p",null,[(0,i._)("span",p,[(0,i.Uk)("NT$ "+(0,a.zw)(k.product.price)+" ",1),(0,i._)("small",h,(0,a.zw)(k.product.origin_price),1),(0,i._)("small",null,"/"+(0,a.zw)(k.product.unit),1)])]),(0,i._)("div",m,[(0,i._)("select",v,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(20,(t=>(0,i._)("option",{value:t,key:`${t}`},(0,a.zw)(t),9,g))),64))]),(0,i._)("div",f,[b,(0,i._)("button",{type:"button",class:"btn btn-primary ms-2 text-white fs-5",onClick:s[0]||(s[0]=(0,c.iM)(((...t)=>_.addToCart&&_.addToCart(...t)),["prevent"]))}," 加入購物車 ")])])])]),w],64)}var _=e(3041),x={data(){return{product:[],id:"",qty:1}},methods:{getData(){const t="https://vue3-course-api.hexschool.io/v2/api/phil/products/all";this.$http.get(t).then((t=>{this.products=t.data.products}))},getProduct(){const t=`https://vue3-course-api.hexschool.io/v2/api/phil/product/${this.id}`;this.$http.get(t).then((t=>{console.log(t),this.product=t.data.product,this.getData()})).catch((t=>{console.log(t.res.data.message)}))},addToCart(t,s=1){s=this.qty;const e="https://vue3-course-api.hexschool.io/v2/api/phil/cart",i={product_id:this.id,qty:s};this.$http.post(e,{data:i}).then((t=>{console.log(t),_.Z.emit("get-cart"),this.showAlert({icon:"success",title:`${t.data.message}`})})).catch((t=>{console.log(t.res.data.message)}))},showAlert(t){this.$swal(t)}},mounted(){this.id=this.$route.params.id,this.getProduct()}},y=e(3744);const $=(0,y.Z)(x,[["render",k]]);var z=$},2097:function(t,s,e){t.exports=e.p+"img/cake6.924ab632.jpg"}}]);
//# sourceMappingURL=301.208c5e2f.js.map