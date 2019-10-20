(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{dCQc:function(t,a,e){"use strict";e.d(a,"a",function(){return n});var s=e("vDqi"),n=e.n(s).a.create({baseURL:"//"+window.location.host+"/api/v1/"})},db6Y:function(t,a,e){"use strict";e.r(a);var s=e("dCQc"),n={name:"Flags",mixins:[e("wjWc").a],data:function(){return{search:"",flags:[]}},computed:{filteredFlags:function(){var t=this;return this.flags.filter(function(a){return a.name&&a.name.toLowerCase().match(t.search.toLowerCase())})}},mounted:function(){this.getFlags()},methods:{getFlags:function(){var t=this;s.a.get("/flags").then(function(a){t.flags=a.data.flags?a.data.flags:[]}).catch(function(a){t.notifyError("Error loading flags."),console.error(a)})}}},l=e("JFUb"),o=Object(l.a)(n,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[t.flags.length>5?e("div",{staticClass:"field has-addons"},[e("p",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"input",attrs:{type:"text",placeholder:"Find a Flag"},domProps:{value:t.search},on:{input:function(a){a.target.composing||(t.search=a.target.value)}}})]),t._v(" "),t._m(0)]):t._e()])]),t._v(" "),e("div",{staticClass:"level-right"},[e("div",{staticClass:"level-item"},[e("RouterLink",{staticClass:"button is-primary",attrs:{to:{name:"new-flag"}}},[t._v("New Flag")])],1)])]),t._v(" "),e("BTable",{attrs:{data:t.filteredFlags},scopedSlots:t._u([{key:"default",fn:function(a){return[e("BTableColumn",{attrs:{field:"enabled",label:"Enabled"}},[a.row.enabled?e("span",{staticClass:"tag is-primary is-rounded"},[t._v("On")]):e("span",{staticClass:"tag is-light is-rounded"},[t._v("Off")])]),t._v(" "),e("BTableColumn",{attrs:{field:"key",label:"Key",sortable:""}},[e("RouterLink",{attrs:{to:{name:"flag",params:{key:a.row.key}}}},[t._v("\n            "+t._s(a.row.key)+"\n          ")])],1),t._v(" "),e("BTableColumn",{attrs:{field:"name",label:"Name",sortable:""}},[e("RouterLink",{attrs:{to:{name:"flag",params:{key:a.row.key}}}},[t._v("\n            "+t._s(a.row.name)+"\n          ")])],1),t._v(" "),e("BTableColumn",{attrs:{field:"hasVariants",label:"Variants",sortable:""}},[t._v("\n          "+t._s(a.row.variants?"yes":"no")+"\n        ")]),t._v(" "),e("BTableColumn",{attrs:{field:"description",label:"Description"}},[e("small",[t._v(t._s(a.row.description))])]),t._v(" "),e("BTableColumn",{attrs:{field:"createdAt",label:"Created",sortable:""}},[e("small",[t._v(t._s(t._f("moment")(a.row.createdAt,"from","now")))])]),t._v(" "),e("BTableColumn",{attrs:{field:"updatedAt",label:"Updated",sortable:""}},[e("small",[t._v(t._s(t._f("moment")(a.row.updatedAt,"from","now")))])])]}}])},[t._v(" "),e("template",{slot:"empty"},[e("section",{staticClass:"section"},[e("div",{staticClass:"content has-text-grey has-text-centered"},[e("p",[t._v("\n              No flags found. Create a\n              "),e("RouterLink",{attrs:{to:{name:"new-flag"}}},[t._v("New Flag")]),t._v(".\n            ")],1)])])])],2)],1)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"control"},[a("button",{staticClass:"button"},[this._v("Search")])])}],!1,null,null,null);a.default=o.exports},wjWc:function(t,a,e){"use strict";a.a={methods:{notifySuccess:function(t){this.$toast.open({type:"is-primary",position:"is-bottom",message:t})},notifyError:function(t){this.$toast.open({type:"is-danger",position:"is-bottom",message:t,duration:3e3})}}}}}]);
//# sourceMappingURL=12.861d133c4f344688292e.js.map