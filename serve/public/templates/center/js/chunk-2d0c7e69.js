(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c7e69"],{"531f":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},r=[],u={created:function(){var e=this;this.$store.dispatch("retakeToken",this.$route.query.key).then((function(){e.$store.dispatch("getShopInfo").then((function(){"dashboard"===e.$route.query.to?e.$router.push({name:"Dashboard"}):e.$router.push({name:"ShopInit"})}))}))}},s=u,a=n("2877"),c=Object(a["a"])(s,o,r,!1,null,null,null);t["default"]=c.exports}}]);