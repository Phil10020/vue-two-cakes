"use strict";(self["webpackChunktwo_cakes"]=self["webpackChunktwo_cakes"]||[]).push([[316],{8316:function(t,e,l){l.r(e),l.d(e,{default:function(){return N}});var s=l(6252),r=l(3577);const c={class:"container mt-7"},i={class:"row row-cols-3 row-cols-sm-3"},d=(0,s.uE)('<div class="col text-center"><div class="check-step check-step-finished d-flex flex-column justify-content-center"><i class="bi bi-check2-circle check-step-icon"></i><span>STEP 1</span><span>確認訂單</span></div></div><div class="col text-center"><div class="check-step check-step-finished d-flex flex-column justify-content-center"><i class="bi bi-check2-circle check-step-icon"></i><span>STEP 2</span><span>建立訂單</span></div></div>',2),a={class:"col text-center"},n={key:0,class:"bi bi-dash-circle-dotted check-step-icon"},o={key:1,class:"bi bi-check2-circle check-step-icon"},u=(0,s._)("span",null,"STEP 3",-1),_=(0,s._)("span",null,"完成訂單",-1),p={key:0,class:"row text-center mt-7"},h=(0,s._)("h2",{class:"fw-bolder"},"訂單已完成付款，謝謝您的訂購！",-1),w=[h],k={class:"container my-7"},g={class:"row row-cols-1 row-cols-sm-2"},m={class:"col"},b=(0,s._)("h3",{class:"fw-bold"},"訂購商品",-1),v={class:"table"},y=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{style:{width:"100px"}}),(0,s._)("th"),(0,s._)("th",{class:"text-end",style:{width:"150px"}})])],-1),f={class:"align-middle"},x=(0,s._)("br",null,null,-1),z={class:"ps-3 align-middle text-end"},D={colspan:"3",class:"text-end"},$={class:"text-danger"},O={class:"col"},j={class:"fw-bold"},C=(0,s.Uk)(" 訂單資訊"),E={class:"fw-normal fs-5 text-danger"},S={class:"table"},q=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{style:{width:"150px"}}),(0,s._)("th")])],-1),P=(0,s._)("td",{class:"align-middle"},"訂單金額",-1),T={class:"text-danger align-middle"},U=(0,s._)("td",null,"訂單編號",-1),A=(0,s._)("td",null,"訂單日期",-1),H=(0,s._)("td",null,"email",-1),Y=(0,s._)("td",null,"收件人姓名",-1),I=(0,s._)("td",null,"收件人電話",-1),K=(0,s._)("td",null,"收件地址",-1),L=(0,s._)("td",null,"備註",-1),Z={key:0,class:"col"},B={key:1,class:"col"};function F(t,e,l,h,F,G){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",c,[(0,s._)("div",i,[d,(0,s._)("div",a,[(0,s._)("div",{class:(0,r.C_)(["check-step d-flex flex-column justify-content-center",{"check-step-finished":F.order.is_paid}])},[F.order.is_paid?((0,s.wg)(),(0,s.iD)("i",o)):((0,s.wg)(),(0,s.iD)("i",n)),u,_],2)])]),F.order.is_paid?((0,s.wg)(),(0,s.iD)("div",p,w)):(0,s.kq)("",!0)]),(0,s._)("div",k,[(0,s._)("div",g,[(0,s._)("div",m,[b,(0,s._)("table",v,[y,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(F.products,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",null,[(0,s._)("div",{style:(0,r.j5)([{height:"100px","background-size":"cover","background-position":"center center"},{backgroundImage:`url(${t.product.imageUrl})`}])},null,4)]),(0,s._)("td",f,[(0,s.Uk)((0,r.zw)(t.product.title),1),x,(0,s._)("small",null,"數量:"+(0,r.zw)(t.qty),1)]),(0,s._)("td",z,(0,r.zw)(t.product.price)+" 元 ",1)])))),128))]),(0,s._)("tfoot",null,[(0,s._)("tr",null,[(0,s._)("td",D,[(0,s._)("h4",$," 總金額 "+(0,r.zw)(F.order.total)+" 元 ",1)])])])])]),(0,s._)("div",O,[(0,s._)("h3",j,[C,(0,s._)("span",E,"("+(0,r.zw)(F.order.is_paid?"已付款":"未付款")+")",1)]),(0,s._)("table",S,[q,(0,s._)("tbody",null,[(0,s._)("tr",null,[P,(0,s._)("td",null,[(0,s._)("h2",T,(0,r.zw)(F.order.total)+" 元 ",1)])]),(0,s._)("tr",null,[U,(0,s._)("td",null,(0,r.zw)(F.order.id),1)]),(0,s._)("tr",null,[A,(0,s._)("td",null,(0,r.zw)(G.getDate(F.order.create_at)),1)]),(0,s._)("tr",null,[H,(0,s._)("td",null,(0,r.zw)(F.user.email),1)]),(0,s._)("tr",null,[Y,(0,s._)("td",null,(0,r.zw)(F.user.name),1)]),(0,s._)("tr",null,[I,(0,s._)("td",null,(0,r.zw)(F.user.tel),1)]),(0,s._)("tr",null,[K,(0,s._)("td",null,(0,r.zw)(F.user.address),1)]),(0,s._)("tr",null,[L,(0,s._)("td",null,[F.order.message?((0,s.wg)(),(0,s.iD)("p",Z,(0,r.zw)(F.order.message),1)):((0,s.wg)(),(0,s.iD)("p",B,"無"))])])])]),F.order.is_paid?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("button",{key:0,type:"submit",class:"btn bg-primary text-white w-100 py-3 mt-2",onClick:e[0]||(e[0]=(...t)=>G.payOrder&&G.payOrder(...t))}," 訂購並付款 "))])])])],64)}var G={data(){return{order:{},user:{},products:{},is_paid:!1}},watch:{is_paid(){this.is_paid=this.order.is_paid}},methods:{getOrder(){const{id:t}=this.$route.params,e=`https://vue3-course-api.hexschool.io/v2/api/phil/order/${t}`;this.$http.get(e).then((t=>{this.order=t.data.order,this.user=t.data.order.user,this.products=t.data.order.products}))},getDate(t){const e=new Date(1e3*t);return e.toLocaleDateString()},payOrder(){const{id:t}=this.$route.params,e=`https://vue3-course-api.hexschool.io/v2/api/phil/pay/${t}`;this.$http.post(e).then((t=>{this.showAlert({icon:"success",title:`${t.data.message}`}),this.getOrder()}))},showAlert(t){this.$swal(t)}},mounted(){this.getOrder(),window.scroll(0,0)}},J=l(3744);const M=(0,J.Z)(G,[["render",F]]);var N=M}}]);
//# sourceMappingURL=316.abfbb749.js.map