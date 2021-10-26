"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[279],{8931:(e,a,t)=>{t.d(a,{Z:()=>s});var o=t(6417);const l=(e,a)=>{o.Z.create({type:a,message:e,position:"bottom-right"})},r={show:l},n=e=>{if(e.data)r.show(e.data.message,"positive");else{let a="";if(e.response.status<500)for(let t in e.response.data.errors)a=e.response.data.errors[t][0];else a="Internal server error. Try again later";r.show(a,"negative")}},s={show:n}},3279:(e,a,t)=>{t.r(a),t.d(a,{default:()=>C});var o=t(3673),l=t(2323),r=t(8880);const n=(0,o.Uk)(" User Management Application "),s=(0,o.Uk)(" Logout ");function i(e,a,t,i,u,p){const m=(0,o.up)("q-btn"),d=(0,o.up)("q-toolbar-title"),c=(0,o.up)("q-toolbar"),w=(0,o.up)("q-header"),f=(0,o.up)("q-icon"),g=(0,o.up)("q-item-section"),b=(0,o.up)("q-item"),h=(0,o.up)("q-separator"),k=(0,o.up)("q-list"),v=(0,o.up)("q-scroll-area"),Z=(0,o.up)("q-drawer"),W=(0,o.up)("router-view"),_=(0,o.up)("q-page-container"),q=(0,o.up)("q-layout"),Q=(0,o.Q2)("ripple");return(0,o.wg)(),(0,o.j4)(q,{view:"hHh Lpr lFf"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[n])),_:1})])),_:1})])),_:1}),(0,o.Wm)(Z,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":a[0]||(a[0]=a=>e.leftDrawerOpen=a),"show-if-above":"",width:250,breakpoint:600,bordered:"",class:"bg-grey-3"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{class:"fit"},{default:(0,o.w5)((()=>[(0,o.Wm)(k,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.menuList,((e,a)=>((0,o.wg)(),(0,o.iD)(o.HY,{key:a},[(0,o.wy)((0,o.Wm)(b,{exact:"",to:e.dir,clickable:"",active:"Outbox"===e.label},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{name:e.icon},null,8,["name"])])),_:2},1024),(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(e.label),1)])),_:2},1024)])),_:2},1032,["to","active"]),[[Q]]),e.separator?((0,o.wg)(),(0,o.j4)(h,{key:"sep"+a})):(0,o.kq)("",!0)],64)))),128)),(0,o.wy)((0,o.Wm)(b,{exact:"",clickable:"",onClick:(0,r.iM)(e.logout,["stop"])},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{name:"logout"})])),_:1}),(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[s])),_:1})])),_:1},8,["onClick"]),[[Q]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(W)])),_:1})])),_:1})}var u=t(1959),p=t(8931);const m=[{icon:"home",label:"Home",separator:!0,dir:"/"},{icon:"settings",label:"User Management",separator:!1,dir:"/usermanagement"},{icon:"info",label:"User Information",separator:!1,dir:"/userinfo"},{icon:"edit_calendar",label:"To-Do",separator:!0,dir:"/todo"}],d=(0,o.aZ)({name:"DrawerLayout",components:{},setup(){const e=(0,u.iH)(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value},menuList:m}},methods:{logout(){this.$api.post("api/logout").then((e=>{p.Z.show(e),sessionStorage.removeItem("token"),this.$router.push("/login")}))}}});var c=t(9214),w=t(3812),f=t(9570),g=t(8240),b=t(3747),h=t(2901),k=t(7704),v=t(7011),Z=t(3414),W=t(2035),_=t(4554),q=t(5869),Q=t(2652),y=t(6489),D=t(7518),L=t.n(D);d.render=i;const C=d;L()(d,"components",{QLayout:c.Z,QHeader:w.Z,QToolbar:f.Z,QBtn:g.Z,QToolbarTitle:b.Z,QDrawer:h.Z,QScrollArea:k.Z,QList:v.Z,QItem:Z.Z,QItemSection:W.Z,QIcon:_.Z,QSeparator:q.Z,QPageContainer:Q.Z}),L()(d,"directives",{Ripple:y.Z})}}]);