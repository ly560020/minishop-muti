(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ee1a4f8"],{"4de4":function(t,e,i){"use strict";var r=i("23e7"),s=i("b727").filter,n=i("1dde"),o=i("ae40"),a=n("filter"),d=o("filter");r({target:"Array",proto:!0,forced:!a||!d},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},"665d":function(t,e,i){"use strict";var r=i("c0f6"),s=i.n(r);s.a},c0f6:function(t,e,i){},d818:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("page-loading",{attrs:{loading:t.loading}}),i("div",{staticClass:"order-detail-content",style:{height:t.height+"px"}},[i("div",{staticClass:"order-detail-header"},[i("div",[i("div",[t._v(t._s(t.order.status_value))]),t.loading?t._e():i("div",{staticClass:"order-detail-header-content"},[t._v(t._s(void 0!==t.statusTip[t.order.status]?t.statusTip[t.order.status].tip:""))])]),i("div",[t.loading?t._e():i("i",{staticClass:"iconfont",class:void 0!==t.statusTip[t.order.status]?t.statusTip[t.order.status].icon:""})])]),i("div",{staticStyle:{position:"relative"}},[i("div",{staticClass:"order-detail-basic"},[i("div",[i("shop-icon",{attrs:{name:"dingwei",size:"small"}})],1),i("div",[i("div",[i("strong",[t._v(t._s(t.order.address.name))])]),i("div",[i("strong",[t._v(t._s(t.order.address.mobile))])]),i("div",{staticClass:"order-detail-basic__address"},[t._v(t._s(t.order.address.address))])])])]),i("div",{staticClass:"order-detail-items"},[t._m(0),t._l(t.order.items,(function(e,r){return i("div",{key:r,staticClass:"order-detail-items-item"},[i("div",[i("shop-image",{attrs:{src:e.img_url,type:"stretch",width:60,rounded:""}},[i("div",{staticClass:"order-detail-item-placeholder",attrs:{slot:"error"},slot:"error"}),i("div",{staticClass:"order-detail-item-placeholder",attrs:{slot:"placeholder"},slot:"placeholder"})])],1),i("div",[i("div",{staticClass:"order-detail-items-item__title"},[t._v(t._s(e.product_title))]),i("div",{staticClass:"order-detail-items-item__subtitle"},[t._v(t._s(e.variant_title))]),i("div",{staticClass:"order-detail-items-item__price"},[t._v("¥ "),i("strong",[t._v(t._s(e.price))])]),i("div",{staticClass:"order-detail-items-item__amount"},[t._v("x "+t._s(e.quantity))])])])})),i("div",{staticClass:"order-detail-items-service"},[i("shop-icon",{attrs:{name:"kefu",size:"small"}}),t._v("联系客服")],1)],2),i("div",{staticClass:"order-detail-info"},[i("div",[t._m(1),i("div",[t._v(t._s(t.$route.query.no))])]),i("div",[t._m(2),i("div",[t._v(t._s(t.order.created_at))])]),i("div",[t._m(3),i("div",[0===t.order.payments.length?i("div",[t._v(" - ")]):t._e(),t._l(t.order.payments,(function(e,r){return i("div",{key:r,staticClass:"order-item-list"},[i("div",[t._v(t._s(t.payments[e.payment_method]))])])}))],2)]),t.order.pay_at?i("div",[t._m(4),i("div",[t._v(t._s(t.order.pay_at))])]):t._e(),i("div",[t._m(5),i("div",[0===t.order.shipments.length?i("div",[t._v(" - ")]):t._e(),t._l(t.order.shipments,(function(e,r){return i("div",{key:r,staticClass:"order-item-list"},[i("div",[t._v(t._s(e.shipment_company))]),i("div",[i("strong",[t._v(t._s(e.shipment_no))])]),i("div",[t._v(t._s(e.created_at))])])}))],2)]),t.order.send_at?i("div",[t._m(6),i("div",[t._v(t._s(t.order.send_at))])]):t._e()]),i("div",{staticClass:"order-detail-price"},[i("div",[t._m(7),i("div",[t._v("¥ "),i("strong",[t._v(t._s(t.order.items_amount?t.order.items_amount:"-"))])])]),i("div",[t._m(8),i("div",[t._v("¥ "),i("strong",[t._v(t._s(t.order.shipments_amount?t.order.shipments_amount:"-"))])])]),i("div",[t._m(9),i("div",[t._v("¥ "),i("strong",[t._v(t._s(t.order.discounts_amount?t.order.discounts_amount:"-"))])])]),i("div",[i("div",[t._v("共 "+t._s(t.order.total_quantity?t.order.total_quantity:"-")+" 件商品，合计："),i("span",[t._v("¥ "),i("strong",[t._v(t._s(t.order.amount?t.order.amount:"-"))])])])])])]),-1===t.footerFold.indexOf(t.order.status)?i("div",{staticClass:"order-detail-bottom"},[-1!==t.canClose.indexOf(t.order.status)?i("shop-button",{attrs:{size:"small"}},[t._v("支付订单")]):t._e(),-1!==t.canShip.indexOf(t.order.status)?i("shop-button",{attrs:{size:"small"}},[t._v("查看物流")]):t._e(),-1!==t.canReceive.indexOf(t.order.status)?i("shop-button",{attrs:{size:"small"}},[t._v("确认收货")]):t._e(),-1!==t.canRefund.indexOf(t.order.status)?i("shop-button",{attrs:{size:"small"}},[t._v("退换货")]):t._e(),-1!==t.canClose.indexOf(t.order.status)?i("shop-button",{attrs:{size:"small",disabled:t.btnLoading},on:{click:t.toClose}},[t._v("关闭订单")]):t._e()],1):t._e()],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("strong",[t._v("订单详情")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("strong",[t._v("订单编号")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("strong",[t._v("下单时间")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("strong",[t._v("支付方式")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("strong",[t._v("支付时间")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("strong",[t._v("配送信息")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("strong",[t._v("配送时间")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("strong",[t._v("商品总额")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("strong",[t._v("运费")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("strong",[t._v("优惠")])])}],n=(i("4de4"),i("c975"),i("d81d"),i("b0c0"),i("f8b7")),o=i("76a0"),a={data:function(){return{loading:!1,height:0,order:{address:{},items:[],payments:[],shipments:[]},btnLoading:!1,payments:{wallet:"钱包支付"},statusTip:{pending:{tip:"您拍下的宝贝未支付，还在等着您哦～",icon:"icondaifukuan"},processing:{tip:"订单已经接收，正在抓紧为您包装理货",icon:"icondaifahuo"},sent:{tip:"包裹已经坐上火箭朝您飞来～",icon:"iconwuliu"},partial:{tip:"部分宝贝已经坐上火箭朝您飞来，剩下的也在加紧准备出发～",icon:"iconwuliu"},refunding:{tip:"退换货正在处理中",icon:"iconshouhou"},refunded:{tip:"已处理退换货",icon:"iconjianshao2"},cancel:{tip:"订单已经取消",icon:"iconjianshao2"},closed:{tip:"订单已经关闭",icon:"iconjianshao2"},success:{tip:"宝贝已经到达，期待您留下宝贵意见",icon:"icondaishouhuo"}},footerFold:["refunding","refunded","cancel","closed"],canClose:["pending"],canShip:["sent","partial","success"],canRefund:["processing","sent","partial","success"],canReceive:["sent","partial"]}},created:function(){this.getDetail()},beforeRouteLeave:function(t,e,i){"UserOrder"===t.name?t.meta.keepAlive=!0:t.meta.keepAlive=!1,i()},methods:{getDetail:function(){var t=this;this.loading=!0,Object(n["e"])(this.$route.query.no).then((function(e){t.order=e.data.body,t.order["total_quantity"]=0,t.order.items.map((function(e){t.order.total_quantity+=e.quantity})),t.order.payments=t.order.payments.filter((function(t){return"success"===t.status})),-1!==t.footerFold.indexOf(t.order.status)?t.height=window.innerHeight-49:t.height=window.innerHeight-95,t.loading=!1})).catch((function(e){t.loading=!1,401===e.response.status&&(t.$store.dispatch("logout"),t.$router.push({name:"Login",query:{from:"UserOrder"}}))}))},toClose:function(){var t=this;o["MessageBox"].confirm("是否确认关闭?").then((function(){t.btnLoading=!0,Object(n["b"])(t.$route.query.no,{status:"cancel"}).then((function(){Object(o["Toast"])("订单已关闭"),t.getDetail(),t.btnLoading=!1}))})).catch((function(){}))}}},d=a,c=(i("665d"),i("2877")),u=Object(c["a"])(d,r,s,!1,null,"4e21cef8",null);e["default"]=u.exports},f8b7:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"d",(function(){return o})),i.d(e,"g",(function(){return a})),i.d(e,"f",(function(){return d})),i.d(e,"e",(function(){return c})),i.d(e,"b",(function(){return u}));var r=i("b775");function s(t){return Object(r["a"])({url:"order/calc",method:"post",data:t})}function n(t){return Object(r["a"])({url:"order",method:"post",data:t})}function o(t,e){return Object(r["a"])({url:"order/"+t+"/pay/"+e,method:"post"})}function a(t){return Object(r["a"])({url:"pay/"+t+"/wallet",method:"get"})}function d(t){return Object(r["a"])({url:"order",method:"get",params:t})}function c(t){return Object(r["a"])({url:"order/"+t,method:"get"})}function u(t,e){return Object(r["a"])({url:"order/"+t,method:"put",data:e})}}}]);