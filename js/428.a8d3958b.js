"use strict";(self["webpackChunktwo_cakes"]=self["webpackChunktwo_cakes"]||[]).push([[428],{3041:function(t,i,s){function e(t){return{all:t=t||new Map,on:function(i,s){var e=t.get(i);e?e.push(s):t.set(i,[s])},off:function(i,s){var e=t.get(i);e&&(s?e.splice(e.indexOf(s)>>>0,1):t.set(i,[]))},emit:function(i,s){var e=t.get(i);e&&e.slice().map((function(t){t(s)})),(e=t.get("*"))&&e.slice().map((function(t){t(i,s)}))}}}s.d(i,{Z:function(){return o}});const c=e();var o=c},428:function(t,i,s){s.r(i),s.d(i,{default:function(){return A}});var e=s(6252),c=s(3577),o=s(9963);const a=(0,e._)("div",{class:"banner products-banner mb-5 container-fluid d-flex align-items-center justify-content-end"},[(0,e._)("div",{class:"container d-flex justify-content-end text-white"},[(0,e._)("h1",{class:"fs-2 lh-base",style:{"text-indent":"-30%"}},[(0,e.Uk)("我喜歡美食"),(0,e._)("br"),(0,e.Uk)("特別是和妳一起分享")])])],-1),r={class:"container"},n={class:"row"},l={class:"col-3"},d={class:"list-group fs-5 text-center",id:"list-tab",role:"tablist"},u={class:"col-8"},p={class:"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"},h={class:"card shadow card-radius"},g=(0,e._)("div",{class:"card-icon d-flex justify-content-end"},[(0,e._)("i",{class:"bi bi-bookmark-heart fs-1",style:{color:"#dc3545"}})],-1),v={class:"layer box-border"},f=(0,e._)("button",{type:"button",class:"btn btn-secondary text-layer text-white shadow"}," 查看內容 ",-1),m={class:"card-body text-center"},_={class:"card-title"},k={class:"card-text"},b={type:"button",class:"fs-5 text-white text-decoration-none bg-primary py-2"};function w(t,i,s,w,x,y){const C=(0,e.up)("LoadingVue"),L=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(C,{active:x.isLoading,"z-index":100},null,8,["active"]),a,(0,e._)("div",r,[(0,e._)("div",n,[(0,e._)("div",l,[(0,e._)("div",d,[(0,e._)("a",{class:(0,c.C_)(["list-group-item list-group-item-action",{active:"all"===x.isActive}]),onClick:i[0]||(i[0]=(0,o.iM)((i=>t.filter("all")),["prevent"]))},"全部品項",2),(0,e._)("a",{class:(0,c.C_)(["list-group-item list-group-item-action",{active:"tiramisu"===x.isActive}]),onClick:i[1]||(i[1]=(0,o.iM)((i=>t.filter("tiramisu")),["prevent"]))},"提拉米蘇",2),(0,e._)("a",{class:(0,c.C_)(["list-group-item list-group-item-action",{active:"cake"===x.isActive}]),onClick:i[2]||(i[2]=i=>t.filter("cake"))},"時令蛋糕",2),(0,e._)("a",{class:(0,c.C_)(["list-group-item list-group-item-action",{active:"cookie"===x.isActive}]),onClick:i[3]||(i[3]=i=>t.filter("cookie"))},"可口點心",2)])]),(0,e._)("div",u,[(0,e._)("div",p,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(x.tempProducts,(s=>((0,e.wg)(),(0,e.iD)("div",{class:"col",key:s.id},[(0,e._)("div",h,[(0,e._)("div",{style:(0,c.j5)([{height:"200px",width:"100%","background-position":"50% 50%","background-size":"cover"},{backgroundImage:`url(${s.imageUrl})`}]),class:"card-img-top img-wrap"},[g,(0,e._)("div",v,[(0,e.Wm)(L,{to:`/product/${s.id}`},{default:(0,e.w5)((()=>[f])),_:2},1032,["to"])])],4),(0,e._)("div",m,[(0,e._)("h5",_,[(0,e.Wm)(L,{class:"text-decoration-none text-black",to:`/product/${s.id}`},{default:(0,e.w5)((()=>[(0,e.Uk)((0,c.zw)(s.title),1)])),_:2},1032,["to"])]),(0,e._)("p",k,"NT$ "+(0,c.zw)(s.price),1)]),(0,e._)("a",b,[(0,e._)("div",{class:"text-center",onClick:i[4]||(i[4]=i=>t.getCart())},"加入購物車")])])])))),128))])])])])],64)}var x=s(3041),y={data(){return{products:{},isLoadingItem:"",isLoading:!1,isActive:"all",tempProducts:{},product:{}}},methods:{getProducts(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/v2/api/phil/products/all";this.$http.get(t).then((t=>{this.products=t.data.products,this.tempProducts=t.data.products})),this.isLoading=!1}},addToCart(t,i=1){const s={product_id:t,qty:i},e="https://vue3-course-api.hexschool.io/v2//api/phil/cart";this.$http.post(e,{data:s}).then((t=>{x.Z.emit("get-cart"),this.showAlert({icon:"success",title:`${t.data.message}`})}))},filter(t="all"){this.isLoading=!0,this.isActive=t,this.tempProducts="all"===t?this.products:this.products.filter((i=>i.category===t)),this.isLoading=!1},mounted(){this.getProducts()}},C=s(3744);const L=(0,C.Z)(y,[["render",w]]);var A=L}}]);
//# sourceMappingURL=428.a8d3958b.js.map