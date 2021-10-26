"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[706],{8931:(e,a,d)=>{d.d(a,{Z:()=>o});var l=d(6417);const t=(e,a)=>{l.Z.create({type:a,message:e,position:"bottom-right"})},s={show:t},i=e=>{if(e.data)s.show(e.data.message,"positive");else{let a="";if(e.response.status<500)for(let d in e.response.data.errors)a=e.response.data.errors[d][0];else a="Internal server error. Try again later";s.show(a,"negative")}},o={show:i}},6706:(e,a,d)=>{d.r(a),d.d(a,{default:()=>ce});var l=d(3673),t=d(2323),s=d(8880);(0,l.dD)("data-v-07a8bd52");const i={key:0,class:"text-h5 absolute-center"},o={key:1,flat:"",class:"q-pa-md"},c={class:"bg-light-blue"},u=(0,l._)("tr",null,[(0,l._)("th",{colspan:"6"},[(0,l._)("div",{class:"text-h5 q-my-sm text-left"},"User Management")])],-1),n=(0,l._)("th",{class:"text-center"},"Username",-1),r={key:0,class:"texxt-center"},m=(0,l._)("th",{class:"text-center"},"User Management",-1),_=(0,l._)("th",{class:"text-center"},"User Information",-1),f=(0,l._)("th",{class:"text-center"},"To-Do",-1),p={key:1,class:"text-center"},h={class:"text-left"},b={key:0},y=["disabled","id","onUpdate:modelValue"],v=["for"],x=["disabled","id","onUpdate:modelValue"],k=["for"],g=["disabled","id","onUpdate:modelValue"],w=["for"],U={class:"row"},V={class:"column"},M=["disabled","id","onUpdate:modelValue"],D=["for"],q=["disabled","id","onUpdate:modelValue"],A=["for"],Z={class:"column"},C=["disabled","id","onUpdate:modelValue"],Q=["for"],W=["disabled","id","onUpdate:modelValue"],L=["for"],$={class:"row"},I={class:"column"},P=["disabled","id","onUpdate:modelValue"],T=["for"],z=["disabled","id","onUpdate:modelValue"],H=["for"],S={class:"column"},Y=["disabled","id","onUpdate:modelValue"],j=["for"],B=["disabled","id","onUpdate:modelValue"],F=["for"],K={key:1},E=(0,l.Uk)(" Change Permission ");function G(e,a,d,G,J,N){const O=(0,l.up)("q-btn"),R=(0,l.up)("q-markup-table"),X=(0,l.up)("q-card-section"),ee=(0,l.up)("q-checkbox"),ae=(0,l.up)("q-form"),de=(0,l.up)("q-card"),le=(0,l.up)("q-dialog"),te=(0,l.up)("q-page");return N.isLoading?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(te,{key:0,class:"flex flex-top"},{default:(0,l.w5)((()=>[J.canAccess?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",i," You do not have permission to access this page ")),J.canAccess?((0,l.wg)(),(0,l.iD)("div",o,[(0,l.Wm)(R,null,{default:(0,l.w5)((()=>[(0,l._)("thead",c,[u,(0,l._)("tr",null,[n,N.isAdmin?((0,l.wg)(),(0,l.iD)("th",r,"Admin")):(0,l.kq)("",!0),m,_,f,J.canModify?((0,l.wg)(),(0,l.iD)("th",p,"Actions")):(0,l.kq)("",!0)])]),(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(J.userData,((e,a)=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id},[(0,l._)("td",h,(0,t.zw)(e.username),1),N.isAdmin?((0,l.wg)(),(0,l.iD)("td",b,[(0,l._)("div",null,[(0,l.wy)((0,l._)("input",{disabled:!J.canModify,class:"checkbox",type:"checkbox",id:e.id+"admin","onUpdate:modelValue":a=>e.admin=a,"true-value":"1","false-value":"0"},null,8,y),[[s.e8,e.admin]]),(0,l._)("label",{class:"checkbox-text",for:e.id+"admin"},"Admin",8,v)])])):(0,l.kq)("",!0),(0,l._)("td",null,[(0,l._)("div",null,[(0,l.wy)((0,l._)("input",{disabled:!J.canModify,class:"checkbox",type:"checkbox",id:e.id+"umaccess","onUpdate:modelValue":a=>e.um_access=a,"true-value":"1","false-value":"0"},null,8,x),[[s.e8,e.um_access]]),(0,l._)("label",{class:"checkbox-text",for:e.id+"umaccess"},"Access",8,k)]),(0,l._)("div",null,[(0,l.wy)((0,l._)("input",{disabled:!J.canModify,type:"checkbox",id:e.id+"ummodify","onUpdate:modelValue":a=>e.um_modify=a,"true-value":"1","false-value":"0"},null,8,g),[[s.e8,e.um_modify]]),(0,l._)("label",{class:"checkbox-text",for:e.id+"ummodify"},"Modify",8,w)])]),(0,l._)("td",null,[(0,l._)("div",U,[(0,l._)("div",V,[(0,l._)("div",null,[(0,l.wy)((0,l._)("input",{disabled:!J.canModify,class:"checkbox",type:"checkbox",id:e.id+"uiaccess","onUpdate:modelValue":a=>e.ui_access=a,"true-value":"1","false-value":"0"},null,8,M),[[s.e8,e.ui_access]]),(0,l._)("label",{class:"checkbox-text",for:e.id+"uiaccess"},"Access",8,D)]),(0,l._)("div",null,[(0,l.wy)((0,l._)("input",{disabled:!J.canModify,type:"checkbox",id:e.id+"uimodify","onUpdate:modelValue":a=>e.ui_update=a,"true-value":"1","false-value":"0"},null,8,q),[[s.e8,e.ui_update]]),(0,l._)("label",{class:"checkbox-text",for:e.id+"uimodify"},"Modify",8,A)])]),(0,l._)("div",Z,[(0,l._)("div",null,[(0,l.wy)((0,l._)("input",{disabled:!J.canModify,class:"checkbox",type:"checkbox",id:e.id+"uiadd","onUpdate:modelValue":a=>e.ui_add=a,"true-value":"1","false-value":"0"},null,8,C),[[s.e8,e.ui_add]]),(0,l._)("label",{class:"checkbox-text",for:e.id+"uiadd"},"Add",8,Q)]),(0,l._)("div",null,[(0,l.wy)((0,l._)("input",{disabled:!J.canModify,type:"checkbox",id:e.id+"uidelete","onUpdate:modelValue":a=>e.ui_delete=a,"true-value":"1","false-value":"0"},null,8,W),[[s.e8,e.ui_delete]]),(0,l._)("label",{class:"checkbox-text",for:e.id+"uidelete"},"Delete",8,L)])])])]),(0,l._)("td",null,[(0,l._)("div",$,[(0,l._)("div",I,[(0,l._)("div",null,[(0,l.wy)((0,l._)("input",{disabled:!J.canModify,class:"checkbox",type:"checkbox",id:e.id+"tdaccess","onUpdate:modelValue":a=>e.todo_access=a,"true-value":"1","false-value":"0"},null,8,P),[[s.e8,e.todo_access]]),(0,l._)("label",{class:"checkbox-text",for:e.id+"tdaccess"},"Access",8,T)]),(0,l._)("div",null,[(0,l.wy)((0,l._)("input",{disabled:!J.canModify,type:"checkbox",id:e.id+"tdmodify","onUpdate:modelValue":a=>e.todo_update=a,"true-value":"1","false-value":"0"},null,8,z),[[s.e8,e.todo_update]]),(0,l._)("label",{class:"checkbox-text",for:e.id+"tdmodify"},"Modify",8,H)])]),(0,l._)("div",S,[(0,l._)("div",null,[(0,l.wy)((0,l._)("input",{disabled:!J.canModify,class:"checkbox",type:"checkbox",id:e.id+"tdadd","onUpdate:modelValue":a=>e.todo_add=a,"true-value":"1","false-value":"0"},null,8,Y),[[s.e8,e.todo_add]]),(0,l._)("label",{class:"checkbox-text",for:e.id+"tdadd"},"Add",8,j)]),(0,l._)("div",null,[(0,l.wy)((0,l._)("input",{disabled:!J.canModify,type:"checkbox",id:e.id+"tddelete","onUpdate:modelValue":a=>e.todo_delete=a,"true-value":"1","false-value":"0"},null,8,B),[[s.e8,e.todo_delete]]),(0,l._)("label",{class:"checkbox-text",for:e.id+"tddelete"},"Delete",8,F)])])])]),J.canModify?((0,l.wg)(),(0,l.iD)("td",K,[(0,l.Wm)(O,{class:"q-pa-sm float-right",icon:"save",color:"primary",onClick:e=>N.save(a),round:"",flat:""},null,8,["onClick"])])):(0,l.kq)("",!0)])))),128))])])),_:1}),(0,l._)("div",null,[(0,l.Wm)(le,{onHide:a[2]||(a[2]=(0,s.iM)((()=>{}),["stop"])),ref:"permissionDialog"},{default:(0,l.w5)((()=>[(0,l.Wm)(de,null,{default:(0,l.w5)((()=>[(0,l.Wm)(ae,{onSubmit:a[1]||(a[1]=(0,s.iM)((()=>{}),["stop"]))},{default:(0,l.w5)((()=>[(0,l.Wm)(X,{class:"text-left text-h5"},{default:(0,l.w5)((()=>[E])),_:1}),(0,l.Wm)(X,null,{default:(0,l.w5)((()=>[(0,l._)("div",null,(0,t.zw)(J.form.username),1),(0,l.Wm)(ee,{modelValue:J.form.um_access,"onUpdate:modelValue":a[0]||(a[0]=e=>J.form.um_access=e),label:"User management access"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},512)])])):(0,l.kq)("",!0)])),_:1}))}(0,l.Cn)();var J=d(8825),N=d(8931);const O={name:"UserManagement",setup(){const e=(0,J.Z)();return{showLoading(a){e.loading.show({delay:a})},hideLoading(){e.loading.hide()}}},computed:{isLoading:function(){return this.loading},isAdmin:function(){return 1==this.admin}},data(){return{loading:!0,userData:[],canAccess:1,canModify:0,admin:0,form:{username:"",admin:"",um_access:"",um_modify:"",ui_access:"",ui_modify:"",ui_add:"",ui_delete:"",todo_access:"",todo_modify:"",todo_add:"",todo_delete:""}}},beforeCreate(){this.loading=!0,this.showLoading();let e=this;this.$api.get("api/permission").then((a=>{this.hideLoading(),e.setData(a)})).catch((()=>{e.$router.push("/login"),this.hideLoading()}))},methods:{updatePermission(){},checkValue(e){return 1==e},save(e){this.form=this.userData[e];let a=this.userData[e].id;this.$api.put(`api/permission/${a}`,this.form).then((a=>{this.userData[e]=a.data.permission,N.Z.show(a)})).catch((e=>{N.Z.show(e)}))},setData(e){this.canAccess=e.data.um_access,this.canModify=e.data.um_modify,this.userData=e.data.users,this.loading=!1,this.admin=e.data.admin}}};var R=d(4379),X=d(481),ee=d(8240),ae=d(6778),de=d(151),le=d(8689),te=d(5589),se=d(1420),ie=d(7518),oe=d.n(ie);O.render=G,O.__scopeId="data-v-07a8bd52";const ce=O;oe()(O,"components",{QPage:R.Z,QMarkupTable:X.Z,QBtn:ee.Z,QDialog:ae.Z,QCard:de.Z,QForm:le.Z,QCardSection:te.Z,QCheckbox:se.Z})}}]);