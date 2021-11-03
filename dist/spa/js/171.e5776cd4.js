"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[171],{8931:(t,e,s)=>{s.d(e,{Z:()=>d});var a=s(6417);const o=(t,e)=>{a.Z.create({type:e,message:t,position:"bottom-right"})},l={show:o},i=t=>{if(t.data)l.show(t.data.message,"positive");else{let e="";if(t.response.status<500)for(let s in t.response.data.errors)e=t.response.data.errors[s][0];else e="Internal server error. Try again later";l.show(e,"negative")}},d={show:i}},3171:(t,e,s)=>{s.r(e),s.d(e,{default:()=>F});var a=s(3673),o=s(2323);const l={key:0,class:"text-h5 absolute-center"},i={key:1,flat:"",class:"q-pa-md"},d=(0,a._)("thead",{class:"bg-light-blue"},[(0,a._)("tr",null,[(0,a._)("th",{colspan:"8"},[(0,a._)("div",{class:"text-h5 q-my-sm text-left"},"Todo")])]),(0,a._)("tr",null,[(0,a._)("th",{class:"text-center"},"Task ID"),(0,a._)("th",{class:"text-center"},"Subject"),(0,a._)("th",{class:"text-center"},"Task"),(0,a._)("th",{class:"text-center"},"Assigned to"),(0,a._)("th",{class:"text-center"},"Deadline"),(0,a._)("th",{class:"text-center"},"Notes"),(0,a._)("th",{class:"text-center"},"Status"),(0,a._)("th",{class:"text-center"},"Update")])],-1),n={class:"text-left"},r={class:"text-right"},u={class:"text-right"},c={class:"text-right"},h={class:"text-right"},m={class:"text-right"},p={class:"text-right"},g={key:0},f={colspan:"8"},w={class:"row q-px-lg"},_={class:"row q-px-lg"},k={class:"row q-px-lg q-mb-md"},b={class:"row q-px-lg"},D={class:"row q-px-lg"},q={class:"row q-px-lg q-mt-md"};function x(t,e,s,x,y,v){const Z=(0,a.up)("q-btn"),V=(0,a.up)("q-markup-table"),C=(0,a.up)("q-input"),W=(0,a.up)("q-select"),j=(0,a.up)("q-card-section"),T=(0,a.up)("q-card-actions"),U=(0,a.up)("q-form"),A=(0,a.up)("q-card"),Q=(0,a.up)("q-dialog"),I=(0,a.up)("q-page");return v.isLoading?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(I,{key:0,class:"flex flex-top"},{default:(0,a.w5)((()=>[y.canAccess?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",l," You do not have permission to access this page ")),y.canAccess?((0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(V,null,{default:(0,a.w5)((()=>[d,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(y.todoData,((t,e)=>((0,a.wg)(),(0,a.iD)("tr",{key:t.id},[(0,a._)("td",n,(0,o.zw)(t.id),1),(0,a._)("td",r,(0,o.zw)(t.subject),1),(0,a._)("td",u,(0,o.zw)(t.task),1),(0,a._)("td",c,(0,o.zw)(t.assigned_to),1),(0,a._)("td",h,(0,o.zw)(t.deadline),1),(0,a._)("td",m,(0,o.zw)(t.notes),1),(0,a._)("td",p,(0,o.zw)(t.status),1),(0,a._)("td",null,[y.canDelete?((0,a.wg)(),(0,a.j4)(Z,{key:0,icon:"delete",color:"negative",round:"",onClick:t=>v.deleteItem(e),flat:""},null,8,["onClick"])):(0,a.kq)("",!0),y.canModify?((0,a.wg)(),(0,a.j4)(Z,{key:1,class:"q-pa-sm float-right",icon:"edit",color:"positive",onClick:t=>{v.show(),v.setItems(e,"update")},round:"",flat:""},null,8,["onClick"])):(0,a.kq)("",!0)])])))),128)),y.canAdd?((0,a.wg)(),(0,a.iD)("tr",g,[(0,a._)("td",f,[(0,a.Wm)(Z,{class:"float-right",color:"blue",round:"",icon:"add_circle",flat:"",outlined:"",onClick:e[0]||(e[0]=t=>{v.show(),v.setItems(0,"")})})])])):(0,a.kq)("",!0)])])),_:1})])):(0,a.kq)("",!0),(0,a.Wm)(Q,{onHide:v.hide,ref:"updateDialog"},{default:(0,a.w5)((()=>[(0,a.Wm)(A,null,{default:(0,a.w5)((()=>[(0,a.Wm)(U,{onSubmit:v.onOKClick},{default:(0,a.w5)((()=>[(0,a.Wm)(j,null,{default:(0,a.w5)((()=>[(0,a._)("div",w,[(0,a.Wm)(C,{class:"col",modelValue:y.form.subject,"onUpdate:modelValue":e[1]||(e[1]=t=>y.form.subject=t),outlined:"",label:"Subject",rules:[t=>!!t||"Field is required"]},null,8,["modelValue","rules"])]),(0,a._)("div",_,[(0,a.Wm)(C,{class:"col",modelValue:y.form.task,"onUpdate:modelValue":e[2]||(e[2]=t=>y.form.task=t),outlined:"",label:"Task",rules:[t=>!!t||"Field is required"]},null,8,["modelValue","rules"])]),(0,a._)("div",k,[(0,a.Wm)(W,{style:{"min-width":"100%"},outlined:"",modelValue:y.form.assigned_to,"onUpdate:modelValue":e[3]||(e[3]=t=>y.form.assigned_to=t),options:y.users,label:"Assign To"},null,8,["modelValue","options"])]),(0,a._)("div",b,[(0,a.Wm)(C,{class:"col",modelValue:y.form.deadline,"onUpdate:modelValue":e[4]||(e[4]=t=>y.form.deadline=t),outlined:"",label:"Deadline",rules:[t=>!!t||"Field is required"]},null,8,["modelValue","rules"])]),(0,a._)("div",D,[(0,a.Wm)(C,{class:"col",modelValue:y.form.notes,"onUpdate:modelValue":e[5]||(e[5]=t=>y.form.notes=t),outlined:"",label:"Notes",type:"textarea"},null,8,["modelValue"])]),(0,a._)("div",q,[(0,a.Wm)(W,{style:{"min-width":"100%"},outlined:"",modelValue:y.form.status,"onUpdate:modelValue":e[6]||(e[6]=t=>y.form.status=t),options:y.options,label:"Status"},null,8,["modelValue","options"])])])),_:1}),(0,a.Wm)(T,{align:"right"},{default:(0,a.w5)((()=>[(0,a.Wm)(Z,{label:"Submit",type:"submit",color:"primary"}),(0,a.Wm)(Z,{color:"primary",label:"Cancel",onClick:v.hide},null,8,["onClick"])])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1},8,["onHide"])])),_:1}))}var y=s(8825),v=s(8931),Z=s(1959);const V={name:"UserInfo",setup(){const t=(0,y.Z)();return{sendNotification(e,s){t.notify({type:s,message:e,position:"bottom-right"})},showLoading(e){t.loading.show({delay:e})},hideLoading(){t.loading.hide()}}},data(){return{loading:!0,canAccess:1,canAdd:0,canDelete:0,canModify:0,action:"",todoData:[],users:[],options:["On-Going","Pending","Finished"],form:{assigned_to:"",subject:"",task:"",deadline:"",notes:"",status:(0,Z.iH)(null)}}},computed:{isUpdating:function(){return"update"==this.action},isLoading:function(){return this.loading}},beforeCreate(){this.loading=!0,this.showLoading(),this.$api.get("api/todo").then((t=>{this.hideLoading(),this.setData(t),this.loading=!1})).catch((t=>{console.log(t),this.$router.push("/login"),this.hideLoading()}))},methods:{deleteItem(t){let e=this.todoData[t].id;this.$api.delete(`api/todo/${e}`).then((e=>{this.todoData.splice(t,1),v.Z.show(e)})).catch((t=>{v.Z.show(t)}))},updateTask(){let t=this.index,e=this.todoData[t].id;this.$api.put(`api/todo/${e}`,this.form).then((e=>{this.todoData[t]=e.data.todo,v.Z.show(e),this.hide()})).catch((t=>{console.log(t),v.Z.show(t)}))},addNewTask(){this.$api.post("api/todo",this.form).then((t=>{this.todoData.push(t.data.todo),v.Z.show(t),this.hide()})).catch((t=>{v.Z.show(t)}))},setItems(t,e){this.action=e,this.index=t,this.isUpdating?(this.form.assigned_to=this.todoData[t].assigned_to,this.form.task=this.todoData[t].task,this.form.notes=this.todoData[t].notes,this.form.status=this.todoData[t].status,this.form.subject=this.todoData[t].subject,this.form.deadline=this.todoData[t].deadline):(this.form.assigned_to=null,this.form.task=null,this.form.notes=null,this.form.status=null,this.form.subject=null,this.form.deadline=null)},show(){this.$refs.updateDialog.show()},hide(){this.$refs.updateDialog.hide(),this.action=""},onOKClick(){this.isUpdating?this.updateTask():this.addNewTask()},setData(t){if(this.canAccess=t.data.todo_access,this.canAdd=t.data.todo_add,this.canModify=t.data.todo_update,this.canDelete=t.data.todo_delete,this.todoData=t.data.todo,t.data){let e=t.data.users;for(let t=0;t<e.length;t++)this.users.push(e[t].username)}}}};var C=s(4379),W=s(481),j=s(8240),T=s(6778),U=s(151),A=s(8689),Q=s(5589),I=s(4842),S=s(1146),$=s(9367),z=s(7518),L=s.n(z);V.render=x;const F=V;L()(V,"components",{QPage:C.Z,QMarkupTable:W.Z,QBtn:j.Z,QDialog:T.Z,QCard:U.Z,QForm:A.Z,QCardSection:Q.Z,QInput:I.Z,QSelect:S.Z,QCardActions:$.Z})}}]);