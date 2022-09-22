(function(){"use strict";var t={6251:function(t,e,i){var n=i(9242),s=i(3396);const a={class:"navbar navbar-expand-lg bg-light"},l={class:"container-fluid"},r={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},o={class:"navbar-nav ms-3"},u=(0,s.Uk)("All Tutorials"),c=(0,s.Uk)("Create");function d(t,e,i,n,d,p){const h=(0,s.up)("router-link"),f=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("nav",a,[(0,s._)("div",l,[(0,s._)("div",r,[(0,s._)("div",o,[(0,s.Wm)(h,{to:"/",class:"nav-link"},{default:(0,s.w5)((()=>[u])),_:1}),(0,s.Wm)(h,{to:"/tutorials/:id"}),(0,s.Wm)(h,{to:"/add",class:"nav-link"},{default:(0,s.w5)((()=>[c])),_:1})])])])]),(0,s.Wm)(f,{database:d.database},null,8,["database"])],64)}const p=i(6265);var h=p.create({baseURL:"http://localhost:3000/",headers:{"Content-Type":"application/json"}});const f={getAll(t="/tutorials"){return h.get(t)},create(t){return h.post("/tutorials",t)},deleteAll(){return h["delete"]("/tutorials")},findById(t){return h.get(`/tutorials/${t}`)},update(t,e){return h.put(`/tutorials/${t}`,e)},delete(t){return h["delete"](`/tutorials/${t}`)}};var b=f,m={data(){return{database:b}}},v=i(89);const _=(0,v.Z)(m,[["render",d]]);var y=_,g=i(2483),w=i(7139);const T={class:"d-flex justify-content-center"},k={class:"container-fluid row mt-5 mx-0"},x={class:"col-7 d-flex justify-content-end pe-0"},D={class:"",id:"listTutors"},C=(0,s._)("h2",{class:"text-center mb-3"},"Tutorials List",-1),j={class:"list-group"},O=["onClick"],A={class:"col-5 d-flex justify-content-center ps-0"},U={key:0,id:"listTutors"},$=(0,s._)("h2",{class:"text-center mb-3"},"Tutorial",-1),I={class:"list-group"},B={class:"list-group-item"},V={class:"list-group-item"},z={class:"list-group-item"},H=["onClick"];function K(t,e,i,a,l,r){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",{onKeyup:e[2]||(e[2]=(0,n.D2)((t=>r.findByTitle()),["enter"])),class:"container"},[(0,s._)("div",T,[(0,s.wy)((0,s._)("input",{type:"text",name:"title",id:"search","onUpdate:modelValue":e[0]||(e[0]=t=>l.title=t),class:"form-control"},null,512),[[n.nr,l.title]]),(0,s._)("button",{onClick:e[1]||(e[1]=t=>r.findByTitle()),class:"btn btn-primary"},"Search")])],32),(0,s._)("div",k,[(0,s._)("div",x,[(0,s._)("div",D,[C,(0,s._)("ul",j,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.allTutorials,((t,e)=>((0,s.wg)(),(0,s.iD)("li",{key:e,onClick:e=>r.detailTutor(t),class:"list-group-item text-center"},(0,w.zw)(t.title),9,O)))),128))]),(0,s._)("button",{onClick:e[3]||(e[3]=t=>r.deleteAll()),class:"mt-3 btn btn-danger container"},"Remove All")])]),(0,s._)("div",A,[l.items.length>0?((0,s.wg)(),(0,s.iD)("div",U,[$,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.items,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{key:e},[(0,s._)("ul",I,[(0,s._)("li",B," title: "+(0,w.zw)(t.title),1),(0,s._)("li",V," description: "+(0,w.zw)(t.description),1),(0,s._)("li",z," published: "+(0,w.zw)(t.published),1)]),(0,s._)("button",{onClick:e=>r.changeRouter(t.id),class:"mt-3 btn btn-danger container"},"Edit",8,H)])))),128))])):(0,s.kq)("",!0)])])],64)}i(7658);var P={name:"all-tutorials",data(){return{allTutorials:[],items:[],title:null}},props:["database"],methods:{retrieveTutorials:async function(){const t=await this.database.getAll();this.allTutorials=t.data},detailTutor(t){this.items[0]=t},async deleteAll(){const t=await this.database.deleteAll();this.allTutorials=[],setTimeout((()=>{this.message(t.data)}),300)},async findByTitle(){if(null===this.title)return this.message("sorry! you need to fill in the title");const t=await this.database.getAll(`/?title=${this.title}`);if(this.title=null,0===t.data.length)return this.message("not found tutorial");this.items=t.data},message(t){alert(t)},changeRouter(t){this.$router.push({path:`/tutorials/${t}`})}},mounted(){this.retrieveTutorials()}};const R=(0,v.Z)(P,[["render",K]]);var W=R;const Y={class:"container row"},Z={class:"col-3 offset-6"},E=(0,s._)("h2",{class:"text-center my-3"},"Tutorial",-1),L={class:"my-3"},M=(0,s._)("label",{for:"title",class:"d-block"},"Title",-1),S={class:"mb-3"},q=(0,s._)("label",{for:"description",class:"d-block"},"Description",-1),F=(0,s.Uk)("status: "),N={key:0},G={key:1},J={class:"btn-group container px-0 mt-4"};function Q(t,e,i,a,l,r){return(0,s.wg)(),(0,s.iD)("div",Y,[(0,s._)("div",Z,[(0,s._)("div",{onKeyup:e[2]||(e[2]=(0,n.D2)((t=>r.updateTutor()),["enter"]))},[E,(0,s._)("div",L,[M,(0,s.wy)((0,s._)("input",{type:"text",id:"title",name:"title",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>l.title=t)},null,512),[[n.nr,l.title]])]),(0,s._)("div",S,[q,(0,s.wy)((0,s._)("input",{type:"text",id:"description",name:"description",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>l.description=t)},null,512),[[n.nr,l.description]])]),(0,s._)("p",null,[F,l.status?((0,s.wg)(),(0,s.iD)("span",N," published ")):((0,s.wg)(),(0,s.iD)("span",G," unPublished "))])],32),(0,s._)("div",J,[(0,s._)("button",{onClick:e[3]||(e[3]=t=>l.status=!l.status),class:"btn btn-outline-info"},"Publish"),(0,s._)("button",{onClick:e[4]||(e[4]=t=>r.deleteTutor()),class:"btn btn-outline-danger"},"Delete"),(0,s._)("button",{onClick:e[5]||(e[5]=t=>r.updateTutor()),class:"btn btn-outline-info"},"Update")])])])}var X={name:"tutorial-details",props:["database"],data(){return{title:null,description:null,status:null,tutorId:null}},methods:{async deleteTutor(){const t=await this.database.delete(this.tutorId);this.$router.push({path:"/"}),setTimeout((()=>{this.message(t.data)}),300)},async updateTutor(){const t=await this.database.update(this.tutorId,{title:this.title,description:this.description,published:this.status});this.$router.push({path:"/"}),setTimeout((()=>{this.message(t.data)}),300)},message(t){alert(t)}},async mounted(){const{id:t}=this.$route.params,e=parseInt(t);this.tutorId=e;const i=await this.database.findById(e),{title:n,description:s,published:a}=i.data;this.title=n,this.description=s,this.status=a}};const tt=(0,v.Z)(X,[["render",Q]]);var et=tt;const it={class:"container row mt-5"},nt={class:"col-3 offset-6"},st=(0,s._)("h2",{class:"text-center"},"Tutorial",-1),at={class:"my-3"},lt=(0,s._)("label",{for:"title",class:"d-block"},"Title",-1),rt={class:"my-3"},ot=(0,s._)("label",{for:"description",class:"d-block"},"Description",-1);function ut(t,e,i,a,l,r){return(0,s.wg)(),(0,s.iD)("div",it,[(0,s._)("div",nt,[st,(0,s._)("div",at,[lt,(0,s.wy)((0,s._)("input",{type:"text",id:"title",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>l.title=t)},null,512),[[n.nr,l.title]])]),(0,s._)("div",rt,[ot,(0,s.wy)((0,s._)("input",{type:"text",id:"description",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>l.description=t)},null,512),[[n.nr,l.description]])]),(0,s._)("button",{onClick:e[2]||(e[2]=t=>r.createTutor()),class:"mt-3 btn btn-outline-info container"},"Submit")])])}var ct={data(){return{title:null,description:null}},props:["database"],methods:{async createTutor(){await this.database.create({title:this.title,description:this.description}),this.$router.push({path:"/"})}}};const dt=(0,v.Z)(ct,[["render",ut]]);var pt=dt;const ht=[{path:"/",name:"all-tutorials",component:W},{path:"/tutorials/:id",name:"tutorial-details",component:et},{path:"/add",name:"create-tutorial",component:pt}],ft=(0,g.p7)({history:(0,g.r5)(),routes:ht});var bt=ft;const mt=(0,n.ri)(y);mt.use(bt),mt.mount("#app")}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,i),a.exports}i.m=t,function(){var t=[];i.O=function(e,n,s,a){if(!n){var l=1/0;for(c=0;c<t.length;c++){n=t[c][0],s=t[c][1],a=t[c][2];for(var r=!0,o=0;o<n.length;o++)(!1&a||l>=a)&&Object.keys(i.O).every((function(t){return i.O[t](n[o])}))?n.splice(o--,1):(r=!1,a<l&&(l=a));if(r){t.splice(c--,1);var u=s();void 0!==u&&(e=u)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[n,s,a]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,a,l=n[0],r=n[1],o=n[2],u=0;if(l.some((function(e){return 0!==t[e]}))){for(s in r)i.o(r,s)&&(i.m[s]=r[s]);if(o)var c=o(i)}for(e&&e(n);u<l.length;u++)a=l[u],i.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return i.O(c)},n=self["webpackChunkvuejs_client"]=self["webpackChunkvuejs_client"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(6251)}));n=i.O(n)})();
//# sourceMappingURL=app.2a44d3bf.js.map