import{e as K}from"./chunk-HBADNBMG.js";import{C as Q,La as G,Ma as J,N as V,T as H,X as L,Z as q,ba as U}from"./chunk-W74ELNPS.js";import{Ca as y,Da as W,Ea as A,La as I,Mb as P,Nb as l,Pb as a,Qa as j,Qb as _,Qc as M,Rb as z,Uc as $,Xc as f,Yb as g,bc as S,cc as N,dc as m,ha as T,hc as O,kc as F,mc as o,nc as u,oa as B,oc as h,pb as v,q as C,qb as s,qc as w,sc as k,tc as D,ud as E,vb as b,xb as c,xc as R,yb as Z}from"./chunk-NZC3NNIL.js";var x=["*"],ee=["nz-sider-trigger",""];function te(t,r){}function ne(t,r){if(t&1&&l(0,te,0,0,"ng-template",2),t&2){let e=o(),n=R(5);a("ngTemplateOutlet",e.nzZeroTrigger||n)}}function ie(t,r){}function re(t,r){if(t&1&&l(0,ie,0,0,"ng-template",2),t&2){let e=o(),n=R(3);a("ngTemplateOutlet",e.nzTrigger||n)}}function oe(t,r){if(t&1&&m(0,"nz-icon",3),t&2){let e=o(2);a("nzType",e.nzCollapsed?"left":"right")}}function se(t,r){if(t&1&&m(0,"nz-icon",3),t&2){let e=o(2);a("nzType",e.nzCollapsed?"right":"left")}}function le(t,r){if(t&1&&l(0,oe,1,1,"nz-icon",3)(1,se,1,1,"nz-icon",3),t&2){let e=o();g(e.nzReverseArrow?0:1)}}function ae(t,r){t&1&&m(0,"nz-icon",4)}function de(t,r){if(t&1){let e=O();S(0,"div",2),F("click",function(){W(e);let i=o();return A(i.setCollapsed(!i.nzCollapsed))}),N()}if(t&2){let e=o();a("matchBreakPoint",e.matchBreakPoint)("nzCollapsedWidth",e.nzCollapsedWidth)("nzCollapsed",e.nzCollapsed)("nzBreakpoint",e.nzBreakpoint)("nzReverseArrow",e.nzReverseArrow)("nzTrigger",e.nzTrigger)("nzZeroTrigger",e.nzZeroTrigger)("siderWidth",e.widthSetting)}}var Be=(()=>{class t{elementRef;renderer;constructor(e,n){this.elementRef=e,this.renderer=n,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}static \u0275fac=function(n){return new(n||t)(s(j),s(b))};static \u0275cmp=c({type:t,selectors:[["nz-content"]],exportAs:["nzContent"],ngContentSelectors:x,decls:1,vars:0,template:function(n,i){n&1&&(u(),h(0))},encapsulation:2,changeDetection:0})}return t})();var X=(()=>{class t{nzCollapsed=!1;nzReverseArrow=!1;nzZeroTrigger=null;nzTrigger=void 0;matchBreakPoint=!1;nzCollapsedWidth=null;siderWidth=null;nzBreakpoint=null;isZeroTrigger=!1;isNormalTrigger=!1;updateTriggerType(){this.isZeroTrigger=this.nzCollapsedWidth===0&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=this.nzCollapsedWidth!==0}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=c({type:t,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(n,i){n&2&&(_("width",i.isNormalTrigger?i.siderWidth:null),z("ant-layout-sider-trigger",i.isNormalTrigger)("ant-layout-sider-zero-width-trigger",i.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",i.isZeroTrigger&&i.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",i.isZeroTrigger&&!i.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],features:[y],attrs:ee,decls:6,vars:2,consts:[["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],[3,"nzType"],["nzType","bars"]],template:function(n,i){n&1&&l(0,ne,1,1,null,2)(1,re,1,1,null,2)(2,le,2,1,"ng-template",null,0,M)(4,ae,1,0,"ng-template",null,1,M),n&2&&(g(i.isZeroTrigger?0:-1),v(),g(i.isNormalTrigger?1:-1))},dependencies:[E,q,L],encapsulation:2,changeDetection:0})}return t})(),Y=(()=>{class t{platform;cdr;breakpointService;destroy$=new C;nzMenuDirective=null;nzCollapsedChange=new I;nzWidth=200;nzTheme="dark";nzCollapsedWidth=80;nzBreakpoint=null;nzZeroTrigger=null;nzTrigger=void 0;nzReverseArrow=!1;nzCollapsible=!1;nzCollapsed=!1;matchBreakPoint=!1;flexSetting=null;widthSetting=null;updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:Q(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&this.nzMenuDirective.nzMode==="inline"&&this.nzCollapsedWidth!==0&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(e){e!==this.nzCollapsed&&(this.nzCollapsed=e,this.nzCollapsedChange.emit(e),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}constructor(e,n,i){this.platform=e,this.cdr=n,this.breakpointService=i}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(G,!0).pipe(T(this.destroy$)).subscribe(e=>{let n=this.nzBreakpoint;n&&V().subscribe(()=>{this.matchBreakPoint=!e[n],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(e){let{nzCollapsed:n,nzCollapsedWidth:i,nzWidth:d}=e;(n||i||d)&&this.updateStyleMap(),n&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}static \u0275fac=function(n){return new(n||t)(s(H),s($),s(J))};static \u0275cmp=c({type:t,selectors:[["nz-sider"]],contentQueries:function(n,i,d){if(n&1&&w(d,K,5),n&2){let p;k(p=D())&&(i.nzMenuDirective=p.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(n,i){n&2&&(_("flex",i.flexSetting)("max-width",i.widthSetting)("min-width",i.widthSetting)("width",i.widthSetting),z("ant-layout-sider-zero-width",i.nzCollapsed&&i.nzCollapsedWidth===0)("ant-layout-sider-light",i.nzTheme==="light")("ant-layout-sider-dark",i.nzTheme==="dark")("ant-layout-sider-collapsed",i.nzCollapsed)("ant-layout-sider-has-trigger",i.nzCollapsible&&i.nzTrigger!==null))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:[2,"nzReverseArrow","nzReverseArrow",f],nzCollapsible:[2,"nzCollapsible","nzCollapsible",f],nzCollapsed:[2,"nzCollapsed","nzCollapsed",f]},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],features:[P,y],ngContentSelectors:x,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth"],["nz-sider-trigger","",3,"click","matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth"]],template:function(n,i){n&1&&(u(),S(0,"div",0),h(1),N(),l(2,de,1,8,"div",1)),n&2&&(v(2),g(i.nzCollapsible&&i.nzTrigger!==null?2:-1))},dependencies:[X],encapsulation:2,changeDetection:0})}return t})(),We=(()=>{class t{directionality;listOfNzSiderComponent;dir="ltr";destroy$=new C;constructor(e){this.directionality=e}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(T(this.destroy$)).subscribe(e=>{this.dir=e})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static \u0275fac=function(n){return new(n||t)(s(U))};static \u0275cmp=c({type:t,selectors:[["nz-layout"]],contentQueries:function(n,i,d){if(n&1&&w(d,Y,4),n&2){let p;k(p=D())&&(i.listOfNzSiderComponent=p)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(n,i){n&2&&z("ant-layout-rtl",i.dir==="rtl")("ant-layout-has-sider",i.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],ngContentSelectors:x,decls:1,vars:0,template:function(n,i){n&1&&(u(),h(0))},encapsulation:2,changeDetection:0})}return t})(),Ae=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=B({imports:[Y,X]})}return t})();export{Be as a,Y as b,We as c,Ae as d};
