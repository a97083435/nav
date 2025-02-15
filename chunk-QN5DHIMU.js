import{R as le,S as ue,X as pe,Z as me,fb as fe,ga as de}from"./chunk-QNEUM5VA.js";import{$b as J,Aa as T,Ca as C,Hb as d,Hc as se,Ja as y,Jc as ce,Mb as L,Nb as f,Pa as S,Pb as h,Qa as O,Qb as b,Rb as g,Tb as Y,Uc as _,Xc as R,Yb as D,Zc as I,_a as H,_b as G,ac as K,bc as E,cc as j,dc as X,gc as ee,ha as z,la as w,mc as l,n as V,na as N,nc as A,oc as P,pb as u,q as x,qa as v,qb as p,qc as te,r as U,rb as Q,s as k,sc as ne,ta as a,tc as ie,ud as ae,w as W,x as M,xb as m,yc as oe,zb as F,zc as re}from"./chunk-IM5CQDWH.js";function ve(e){e||(T(ve),e=a(y));let r=new V(t=>e.onDestroy(t.next.bind(t)));return t=>t.pipe(z(r))}function $(e,r){let t=!r?.manualCleanup;t&&!r?.injector&&T($);let n=t?r?.injector?.get(y)??a(y):null,i=Ce(r?.equal),o;r?.requireSync?o=d({kind:0},{equal:i}):o=d({kind:1,value:r?.initialValue},{equal:i});let s=e.subscribe({next:c=>o.set({kind:1,value:c}),error:c=>{if(r?.rejectErrors)throw c;o.set({kind:2,error:c})}});if(r?.requireSync&&o().kind===0)throw new w(601,!1);return n?.onDestroy(s.unsubscribe.bind(s)),I(()=>{let c=o();switch(c.kind){case 1:return c.value;case 2:throw c.error;case 0:throw new w(601,!1)}},{equal:r?.equal})}function Ce(e=Object.is){return(r,t)=>r.kind===1&&t.kind===1&&e(r.value,t.value)}var ge=["*"],De=e=>({$implicit:e});function _e(e,r){if(e&1&&oe(0),e&2){let t=l(3);re(t.nzSplit)}}function Ie(e,r){if(e&1&&(E(0,"span",3),f(1,_e,1,1,"ng-template",4),j()),e&2){let t=l(),n=t.$index,i=t.$count,o=l();b("margin-bottom",o.nzDirection==="vertical"?n===i-1?null:o.spaceSize:null,"px")("margin-right",o.nzDirection==="horizontal"?n===i-1?null:o.spaceSize:null,"px"),u(),h("nzStringTemplateOutlet",o.nzSplit)("nzStringTemplateOutletContext",ce(6,De,n))}}function xe(e,r){if(e&1&&(E(0,"div",0),ee(1,1),j(),f(2,Ie,2,8,"span",2)),e&2){let t=r.$implicit,n=r.$index,i=r.$count,o=l();b("margin-bottom",o.nzDirection==="vertical"?n===i-1?null:o.spaceSize:null,"px")("margin-right",o.nzDirection==="horizontal"?n===i-1?null:o.spaceSize:null,"px"),u(),h("ngTemplateOutlet",t),u(),D(o.nzSplit&&n!==i-1?2:-1)}}var ke=new v("NZ_SPACE_COMPACT_SIZE"),ze=new v("NZ_SPACE_COMPACT_ITEMS"),Me=new v("NZ_SPACE_COMPACT_ITEM_TYPE"),we=(()=>{class e{constructor(){this.nzBlock=S(!1,{transform:R}),this.nzDirection=S("horizontal"),this.nzSize=S("default"),this.elementRef=a(O)}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=m({type:e,selectors:[["nz-space-compact"]],hostAttrs:[1,"ant-space-compact"],hostVars:4,hostBindings:function(n,i){n&2&&g("ant-space-compact-block",i.nzBlock())("ant-space-compact-vertical",i.nzDirection()==="vertical")},inputs:{nzBlock:[1,"nzBlock"],nzDirection:[1,"nzDirection"],nzSize:[1,"nzSize"]},exportAs:["nzSpaceCompact"],features:[se([{provide:ke,useFactory:()=>a(e).nzSize},{provide:ze,useFactory:()=>d([])}])],ngContentSelectors:ge,decls:1,vars:0,template:function(n,i){n&1&&(A(),P(0))},encapsulation:2,changeDetection:0})}}return e})(),ht=(()=>{class e{get parentElement(){return this.elementRef.nativeElement?.parentElement}constructor(){this.spaceCompactCmp=a(we,{host:!0,optional:!0}),this.items=a(ze,{host:!0,optional:!0}),this.type=a(Me),this.elementRef=a(O),this.directionality=a(de),this.dir=$(this.directionality.change,{initialValue:this.directionality.value}),this.class=I(()=>{if(!this.spaceCompactCmp||!this.items||this.parentElement!==this.spaceCompactCmp.elementRef.nativeElement)return null;let t=this.items(),n=this.spaceCompactCmp.nzDirection(),i=[Ne(this.type,n,this.dir()==="rtl")],o=t.indexOf(this),s=t.findIndex(c=>c);return o===s?i.push(Te(this.type,n)):o===t.length-1&&i.push(Oe(this.type,n)),i}),!(!this.spaceCompactCmp||!this.items)&&H(()=>{if(this.parentElement===this.spaceCompactCmp.elementRef.nativeElement){let t=Array.from(this.parentElement.children).indexOf(this.elementRef.nativeElement);this.items.update(n=>{let i=n.slice();return i.splice(t,0,this),i})}})}ngOnDestroy(){this.items?.update(t=>t.filter(n=>n!==this))}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275dir=F({type:e,hostVars:2,hostBindings:function(n,i){n&2&&Y(i.class())},exportAs:["nzSpaceCompactItem"]})}}return e})();function q(e,r,t){return`ant-${e}-compact-${r==="vertical"?"vertical-":""}${t}`}function Ne(e,r,t){let n=t?"-rtl":"";return`${q(e,r,"item")}${n}`}function Te(e,r){return q(e,r,"first-item")}function Oe(e,r){return q(e,r,"last-item")}var Fe=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275dir=F({type:e,selectors:[["","nzSpaceItem",""]]})}}return e})(),Ee="space",he={small:8,middle:16,large:24},gt=(()=>{let e,r=[],t=[];return class B{static{let i=typeof Symbol=="function"&&Symbol.metadata?Object.create(null):void 0;e=[ue()],W(null,null,e,{kind:"field",name:"nzSize",static:!1,private:!1,access:{has:o=>"nzSize"in o,get:o=>o.nzSize,set:(o,s)=>{o.nzSize=s}},metadata:i},r,t),i&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:i})}constructor(i,o){this.nzConfigService=i,this.cdr=o,this._nzModuleName=Ee,this.nzDirection="horizontal",this.nzSplit=null,this.nzWrap=!1,this.nzSize=M(this,r,"small"),this.items=M(this,t),this.spaceSize=he.small,this.destroy$=new x}updateSpaceItems(){let i=typeof this.nzSize=="string"?he[this.nzSize]:this.nzSize;this.spaceSize=i/(this.nzSplit?2:1),this.cdr.markForCheck()}ngOnChanges(){this.updateSpaceItems(),this.mergedAlign=this.nzAlign===void 0&&this.nzDirection==="horizontal"?"center":this.nzAlign}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}ngAfterContentInit(){this.updateSpaceItems(),this.items.changes.pipe(z(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}static{this.\u0275fac=function(o){return new(o||B)(p(le),p(_))}}static{this.\u0275cmp=m({type:B,selectors:[["nz-space"],["","nz-space",""]],contentQueries:function(o,s,c){if(o&1&&te(c,Fe,4,Q),o&2){let Z;ne(Z=ie())&&(s.items=Z)}},hostAttrs:[1,"ant-space"],hostVars:14,hostBindings:function(o,s){o&2&&(b("flex-wrap",s.nzWrap?"wrap":null),g("ant-space-horizontal",s.nzDirection==="horizontal")("ant-space-vertical",s.nzDirection==="vertical")("ant-space-align-start",s.mergedAlign==="start")("ant-space-align-end",s.mergedAlign==="end")("ant-space-align-center",s.mergedAlign==="center")("ant-space-align-baseline",s.mergedAlign==="baseline"))},inputs:{nzDirection:"nzDirection",nzAlign:"nzAlign",nzSplit:"nzSplit",nzWrap:[2,"nzWrap","nzWrap",R],nzSize:"nzSize"},exportAs:["nzSpace"],features:[L,C],ngContentSelectors:ge,decls:3,vars:0,consts:[[1,"ant-space-item"],[3,"ngTemplateOutlet"],[1,"ant-space-split",3,"margin-bottom","margin-right"],[1,"ant-space-split"],[3,"nzStringTemplateOutlet","nzStringTemplateOutletContext"]],template:function(o,s){o&1&&(A(),P(0),J(1,xe,3,6,null,null,G)),o&2&&(u(),K(s.items))},dependencies:[ae,fe],encapsulation:2,changeDetection:0})}}})();function je(e,r){if(e&1&&X(0,"nz-icon",0),e&2){let t=l();h("nzType",t.iconType)}}var St=(()=>{class e{constructor(){this.formStatusChanges=new k(1)}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=N({token:e,factory:e.\u0275fac})}}return e})(),bt=(()=>{class e{constructor(){this.noFormStatus=new U(!1)}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=N({token:e,factory:e.\u0275fac})}}return e})(),Ae={error:"close-circle-fill",validating:"loading",success:"check-circle-fill",warning:"exclamation-circle-fill"},Dt=(()=>{class e{constructor(t){this.cdr=t,this.status="",this.iconType=null}ngOnChanges(t){this.updateIcon()}updateIcon(){this.iconType=this.status?Ae[this.status]:null,this.cdr.markForCheck()}static{this.\u0275fac=function(n){return new(n||e)(p(_))}}static{this.\u0275cmp=m({type:e,selectors:[["nz-form-item-feedback-icon"]],hostAttrs:[1,"ant-form-item-feedback-icon"],hostVars:8,hostBindings:function(n,i){n&2&&g("ant-form-item-feedback-icon-error",i.status==="error")("ant-form-item-feedback-icon-warning",i.status==="warning")("ant-form-item-feedback-icon-success",i.status==="success")("ant-form-item-feedback-icon-validating",i.status==="validating")},inputs:{status:"status"},exportAs:["nzFormFeedbackIcon"],features:[C],decls:1,vars:1,consts:[[3,"nzType"]],template:function(n,i){n&1&&f(0,je,1,1,"nz-icon",0),n&2&&D(i.iconType?0:-1)},dependencies:[me,pe],encapsulation:2,changeDetection:0})}}return e})();export{ve as a,$ as b,ke as c,Me as d,ht as e,St as f,bt as g,Dt as h};
