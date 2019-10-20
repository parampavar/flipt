(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{dCQc:function(t,e,s){"use strict";s.d(e,"a",function(){return a});var i=s("vDqi"),a=s.n(i).a.create({baseURL:"//"+window.location.host+"/api/v1/"})},"u+DD":function(t,e,s){"use strict";s.r(e);var i=s("uM7l"),a=s.n(i),n=s("BkRI"),l=s.n(n),r=s("6acW"),o=s.n(r),u=s("3WF5"),c=s.n(u),d=s("J2m7"),v=s.n(d),f=s("bNQv"),g=s.n(f),h=s("MQ60"),m=s.n(h),p=s("dCQc"),b=s("wjWc"),_={props:{id:String,segmentName:String,index:Number,distributions:Array},methods:{editRule:function(){this.$emit("editRule",this.index)},deleteRule:function(){this.$emit("deleteRule",this.index)}}},R=s("JFUb"),C=Object(R.a)(_,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-1"},[s("span",{staticClass:"tag is-large is-rounded is-info"},[t._v(t._s(t.index+1))])]),t._v(" "),s("div",{staticClass:"column"},[s("div",{staticClass:"field is-horizontal"},[t._m(0),t._v(" "),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field"},[s("span",{staticClass:"tag is-medium"},[t._v(" "+t._s(t.segmentName)+" ")])])])]),t._v(" "),t.distributions.length>0?[s("div",{staticClass:"field is-horizontal"},[s("div",{staticClass:"field-label is-normal"},[t._v("Then serve:")]),t._v(" "),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field"},[s("div",{staticClass:"select"},[s("select",{attrs:{disabled:""}},[1===t.distributions.length?s("option",[t._v("\n                    "+t._s(t.distributions[0].variantKey)+"\n                  ")]):s("option",[t._v(" A Percentage Rollout ")])])])])])]),t._v(" "),t.distributions.length>1?[s("hr"),t._v(" "),t._l(t.distributions,function(e,i){return s("div",{key:e.id,staticClass:"field is-horizontal"},[s("div",{staticClass:"field-label"},[s("span",{staticClass:"tag is-small"},[t._v(t._s(e.variantKey))])]),t._v(" "),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field"},[s("BInput",{attrs:{placeholder:"Percentage",disabled:"",type:"number","icon-pack":"fas",icon:"percent",size:"is-small",min:"0",max:"100"},model:{value:t.distributions[i].rollout,callback:function(e){t.$set(t.distributions[i],"rollout",e)},expression:"distributions[i].rollout"}})],1)])])})]:t._e()]:t._e()],2)]),t._v(" "),s("div",{staticClass:"buttons is-right"},[t.distributions.length>1?s("a",{staticClass:"button is-text is-small",on:{click:t.editRule}},[t._v("Edit")]):t._e(),t._v(" "),s("a",{staticClass:"button is-danger is-outlined is-small",on:{click:t.deleteRule}},[t._v("Delete")])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label is-normal"},[e("strong",[this._v("IF")]),this._v(" Matches Segment:\n        ")])}],!1,null,null,null).exports,y=s("E+oP"),k=s.n(y),E=s("xk4V"),x=s.n(E),w={flagKey:"",entityId:x()(),context:{foo:"bar"}},D={name:"FlagDebugConsole",props:{flag:Object},data:function(){return{invalidRequest:!1,request:a()(w),response:{}}},computed:{responseClass:function(){return k()(this.response)?"":this.response.error?"is-danger":"is-success"}},watch:{flag:function(){this.$set(this.request,"flagKey",this.flag.key)}},methods:{updateRequest:function(t){try{this.request=JSON.parse(t.target.value),this.invalidRequest=!1}catch(t){this.invalidRequest=!0}},reset:function(){this.request=a()(w),this.request.entityId=x()(),this.request.flagKey=this.flag.key,this.response={}},evaluate:function(){var t=this;p.a.post("/evaluate",this.request).then(function(e){t.response=e.data}).catch(function(e){t.response={error:e.response.data.error}})}}},A=Object(R.a)(D,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h5",{staticClass:"title is-5"},[t._v("Debug Console")]),t._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("h6",{staticClass:"title is-6"},[t._v("Request")]),t._v(" "),s("textarea",{staticClass:"textarea",class:{"is-danger":t.invalidRequest},attrs:{rows:"10"},domProps:{value:JSON.stringify(t.request,void 0,4)},on:{change:t.updateRequest}})]),t._v(" "),s("div",{staticClass:"column"},[s("h6",{staticClass:"title is-6"},[t._v("Response")]),t._v(" "),s("textarea",{staticClass:"textarea",class:t.responseClass,attrs:{rows:"10",disabled:""},domProps:{value:JSON.stringify(t.response,void 0,4)}})])]),t._v(" "),s("div",{staticClass:"field"},[s("div",{staticClass:"control is-grouped"},[s("button",{staticClass:"button is-primary",on:{click:function(e){return e.preventDefault(),t.evaluate()}}},[t._v("\n        Debug\n      ")]),t._v(" "),s("button",{staticClass:"button",on:{click:function(e){return e.preventDefault(),t.reset()}}},[t._v("Reset")])])])])},[],!1,null,null,null).exports,N={segmentKey:"",segmentName:"",distributions:[],rank:0},$={name:"FlagTargeting",components:{draggable:m.a,Rule:C,DebugConsole:A},mixins:[b.a],data:function(){return{dialogAddRuleVisible:!1,dialogEditRuleVisible:!1,flag:{variants:[]},rules:[],reordered:!1,segments:[],newRule:a()(N),selectedRule:a()(N)}},computed:{hasVariants:function(){return this.flag.variants&&this.flag.variants.length>0},canAddRule:function(){return this.newRule.segmentKey}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;p.a.get("/segments").then(function(e){t.segments=e.data.segments;var s=t.$route.params.key;p.a.get("/flags/"+s).then(function(e){t.flag=e.data,p.a.get("/flags/"+s+"/rules").then(function(e){t.rules=c()(e.data.rules,function(e){return t.processRule(e)})})})}).catch(function(e){t.notifyError("Error loading data"),console.error(e)})},selectSegment:function(t){t&&(this.newRule.segmentKey=t.key)},addRule:function(){var t=this;this.validRolloutPercentage(this.newRule)?(this.newRule.rank=this.rules.length+1,p.a.post("/flags/"+this.flag.key+"/rules",this.newRule).then(function(e){var s=e.data,i=v()(t.segments,{key:s.segmentKey});s.segmentName=i.name,s.distributions=[],g()(t.newRule.distributions,function(e){p.a.post("/flags/"+t.flag.key+"/rules/"+s.id+"/distributions",e).then(function(e){var i=e.data,a=v()(t.flag.variants,{id:i.variantId});i.variantKey=a.key,s.distributions.push(i)})}),t.rules.push(s),t.newRule=a()(N),t.notifySuccess("Rule added!"),t.dialogAddRuleVisible=!1}).catch(function(e){e.response&&e.response.data?t.notifyError(o()(e.response.data.message)):(t.notifyError("Error creating rule."),console.error(e))})):this.notifyError("Total percentage cannot exceed 100%.")},cancelAddRule:function(){this.dialogAddRuleVisible=!1,this.newRule=a()(N)},updateRule:function(){var t=this;if(this.validRolloutPercentage(this.selectedRule))try{g()(this.selectedRule.distributions,function(e){p.a.put("/flags/"+t.flag.key+"/rules/"+t.selectedRule.id+"/distributions/"+e.id,e)});var e=this.rules.findIndex(function(e){return e.id===t.selectedRule.id});this.rules[e]=a()(this.selectedRule),this.selectedRule=a()(N),this.notifySuccess("Rule updated!"),this.dialogEditRuleVisible=!1}catch(t){t.response&&t.response.data?this.notifyError(o()(t.response.data.message)):(this.notifyError("Error updating rule."),console.error(t))}else this.notifyError("Total percentage cannot exceed 100%.")},deleteRule:function(t){var e=this;if(confirm("Are you sure you want to delete this rule?")){var s=this.rules[t];p.a.delete("/flags/"+this.flag.key+"/rules/"+s.id).then(function(){e.rules.splice(t,1)}).catch(function(t){e.notifyError("Error deleting rule."),console.error(t)})}},editRule:function(t){this.dialogEditRuleVisible=!0,this.selectedRule=l()(this.rules[t])},cancelEditRule:function(){this.dialogEditRuleVisible=!1,this.selectedRule=a()(N)},reorderRules:function(){var t=this;this.reordered=!1,p.a.put("/flags/"+this.flag.key+"/rules/order",{ruleIds:c()(this.rules,"id")}).then(function(){t.notifySuccess("Rules reordered!")}).catch(function(e){e.response&&e.response.data?t.notifyError(o()(e.response.data.message)):(t.notifyError("Error ordering rules."),console.error(e))})},processRule:function(t){var e=this,s=v()(this.segments,{key:t.segmentKey});return t.segmentName=s.name,t.distributions=c()(t.distributions,function(t){var s=v()(e.flag.variants,{id:t.variantId});return t.variantKey=s.key,t}),t},ruleTypeChanged:function(t){var e=this,s=t.target.value;if("rollout"===s){var i=[];g()(this.flag.variants,function(t){i.push({variantId:t.id,variantKey:t.key,rollout:Number(100/e.flag.variants.length).toFixed(2)})}),this.newRule.distributions=i}else{var a=v()(this.flag.variants,{id:s});this.newRule.distributions=[{variantId:a.id,variantKey:a.key,rollout:100}]}},validRolloutPercentage:function(t){var e=0;return g()(t.distributions,function(t){e+=Number(t.rollout)}),e<=100}},beforeRouteLeave:function(t,e,s){!1!==this.reordered?confirm("Are you sure want to leave? Rules have been reordered but not saved.")?s():s(!1):s()}},q=Object(R.a)($,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section"},[s("div",{staticClass:"container"},[s("nav",{staticClass:"breadcrumb",attrs:{"aria-label":"breadcrumbs"}},[s("ul",[s("li",[s("RouterLink",{attrs:{to:{name:"flags"}}},[t._v("Flags")])],1),t._v(" "),s("li",{staticClass:"is-active"},[s("a",{attrs:{href:"#","aria-current":"page"}},[t._v(t._s(t.flag.key))])])])]),t._v(" "),s("div",{staticClass:"tabs is-boxed"},[s("ul",[s("li",[s("RouterLink",{attrs:{to:{name:"flag",params:{key:t.$route.params.key}}}},[t._v("Details")])],1),t._v(" "),s("li",{staticClass:"is-active"},[s("RouterLink",{attrs:{to:{name:"targeting",params:{key:t.$route.params.key}}}},[t._v("Targeting")])],1)])]),t._v(" "),s("h5",{staticClass:"title is-5"},[t._v("Rules")]),t._v(" "),s("p",{staticClass:"subtitle is-7"},[t._v("\n      Evaluated in order from top to bottom. Reorder rules by dragging and\n      dropping them in place.\n    ")]),t._v(" "),s("draggable",{on:{update:function(e){t.reordered=!0}},model:{value:t.rules,callback:function(e){t.rules=e},expression:"rules"}},t._l(t.rules,function(e,i){return s("Rule",t._b({key:e.id,attrs:{index:i},on:{deleteRule:function(e){return t.deleteRule(i)},editRule:function(e){return t.editRule(i)}}},"Rule",e,!1))}),1),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"field is-grouped "},[s("div",{staticClass:"control"},[s("button",{staticClass:"button is-primary",on:{click:function(e){e.preventDefault(),t.dialogAddRuleVisible=!0}}},[t._v("\n          New Rule\n        ")]),t._v(" "),s("button",{staticClass:"button",attrs:{disabled:!t.reordered},on:{click:function(e){return e.preventDefault(),t.reorderRules(e)}}},[t._v("\n          Reorder Rules\n        ")])])]),t._v(" "),s("hr"),t._v(" "),s("DebugConsole",{attrs:{flag:t.flag}})],1),t._v(" "),s("div",{staticClass:"modal",class:{"is-active":t.dialogAddRuleVisible},attrs:{id:"addRuleDialog"}},[s("div",{staticClass:"modal-background",on:{click:function(e){return e.preventDefault(),t.cancelAddRule(e)}}}),t._v(" "),s("div",{staticClass:"modal-content",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancelAddRule(e)}}},[s("div",{staticClass:"container"},[s("div",{staticClass:"box"},[s("form",[s("div",{staticClass:"field is-horizontal"},[t._m(0),t._v(" "),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field"},[s("BAutocomplete",{attrs:{data:t.segments,field:"name","open-on-focus":!0,placeholder:"e.g. All Users"},on:{select:t.selectSegment},model:{value:t.newRule.segmentName,callback:function(e){t.$set(t.newRule,"segmentName",e)},expression:"newRule.segmentName"}},[s("template",{slot:"empty"},[t._v("No segments found. Create a\n                      "),s("RouterLink",{attrs:{to:{name:"new-segment"}}},[t._v("New Segment")]),t._v(".")],1)],2)],1)])]),t._v(" "),t.hasVariants?[s("div",{staticClass:"field is-horizontal"},[t._m(1),t._v(" "),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field"},[s("div",{staticClass:"select"},[s("select",{attrs:{disabled:!t.newRule.segmentKey},on:{change:t.ruleTypeChanged}},[s("option",{attrs:{value:""}},[t._v("Choose Value")]),t._v(" "),s("option",{attrs:{disabled:""}},[t._v("──────────")]),t._v(" "),t._l(t.flag.variants,function(e){return s("option",{key:e.id,domProps:{value:e.id}},[t._v("\n                          "+t._s(e.key)+"\n                        ")])}),t._v(" "),s("option",{attrs:{disabled:""}},[t._v("──────────")]),t._v(" "),s("option",{attrs:{value:"rollout"}},[t._v("A Percentage Rollout")])],2)])])])]),t._v(" "),t.newRule.distributions.length>1?[s("hr"),t._v(" "),t._l(t.flag.variants,function(e,i){return s("div",{key:e.id,staticClass:"field is-horizontal"},[s("div",{staticClass:"field-label"},[s("span",{staticClass:"tag is-small"},[t._v(t._s(e.key))])]),t._v(" "),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field"},[s("BInput",{attrs:{placeholder:"Percentage",type:"number","icon-pack":"fas",icon:"percent",size:"is-small",min:"0",max:"100"},model:{value:t.newRule.distributions[i].rollout,callback:function(e){t.$set(t.newRule.distributions[i],"rollout",e)},expression:"newRule.distributions[index].rollout"}})],1)])])})]:t._e()]:t._e(),t._v(" "),s("div",{staticClass:"field is-grouped"},[s("div",{staticClass:"control"},[s("button",{staticClass:"button is-primary",attrs:{disabled:!t.canAddRule},on:{click:function(e){return e.preventDefault(),t.addRule(e)}}},[t._v("\n                  Add Rule\n                ")]),t._v(" "),s("button",{staticClass:"button is-text",on:{click:function(e){return e.preventDefault(),t.cancelAddRule(e)}}},[t._v("\n                  Cancel\n                ")])])])],2)]),t._v(" "),s("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{click:function(e){return e.preventDefault(),t.cancelAddRule(e)}}})])])]),t._v(" "),s("div",{staticClass:"modal",class:{"is-active":t.dialogEditRuleVisible},attrs:{id:"editRule"}},[s("div",{staticClass:"modal-background",on:{click:function(e){return e.preventDefault(),t.cancelEditRule(e)}}}),t._v(" "),s("div",{staticClass:"modal-content",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancelEditRule(e)}}},[s("div",{staticClass:"container"},[s("div",{staticClass:"box"},[s("form",[s("div",{staticClass:"field is-horizontal"},[s("div",{staticClass:"field-label is-normal"},[t._v("Segment:")]),t._v(" "),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field"},[s("span",{staticClass:"tag is-medium"},[t._v("\n                    "+t._s(t.selectedRule.segmentName)+"\n                  ")])])])]),t._v(" "),t._m(2),t._v(" "),s("hr"),t._v(" "),t._l(t.selectedRule.distributions,function(e,i){return s("div",{key:e.id,staticClass:"field is-horizontal"},[s("div",{staticClass:"field-label"},[s("span",{staticClass:"tag is-small"},[t._v("\n                  "+t._s(e.variantKey)+"\n                ")])]),t._v(" "),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field"},[s("BInput",{attrs:{placeholder:"Percentage",type:"number","icon-pack":"fas",icon:"percent",size:"is-small",min:"0",max:"100"},model:{value:t.selectedRule.distributions[i].rollout,callback:function(e){t.$set(t.selectedRule.distributions[i],"rollout",e)},expression:"selectedRule.distributions[index].rollout"}})],1)])])}),t._v(" "),s("div",{staticClass:"field is-grouped"},[s("div",{staticClass:"control"},[s("button",{staticClass:"button is-primary",on:{click:function(e){return e.preventDefault(),t.updateRule(e)}}},[t._v("\n                  Update Rule\n                ")]),t._v(" "),s("button",{staticClass:"button is-text",on:{click:function(e){return e.preventDefault(),t.cancelEditRule(e)}}},[t._v("\n                  Cancel\n                ")])])])],2)]),t._v(" "),s("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{click:function(e){return e.preventDefault(),t.cancelEditRule(e)}}})])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label is-normal"},[e("strong",[this._v("IF")]),this._v(" Matches Segment:\n              ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label is-normal"},[e("strong",[this._v("THEN")]),this._v(" Serve Variant(s):\n                ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field is-horizontal"},[e("div",{staticClass:"field-label is-normal"},[this._v("Then serve:")]),this._v(" "),e("div",{staticClass:"field-body"},[e("div",{staticClass:"field"},[e("div",{staticClass:"select"},[e("select",{attrs:{disabled:""}},[e("option",{attrs:{selected:""}},[this._v("A Percentage Rollout")])])])])])])}],!1,null,null,null);e.default=q.exports},wjWc:function(t,e,s){"use strict";e.a={methods:{notifySuccess:function(t){this.$toast.open({type:"is-primary",position:"is-bottom",message:t})},notifyError:function(t){this.$toast.open({type:"is-danger",position:"is-bottom",message:t,duration:3e3})}}}}}]);
//# sourceMappingURL=14.5f92785c39f3a0b10020.js.map