(this["webpackJsonpartist-became-coiner"]=this["webpackJsonpartist-became-coiner"]||[]).push([[0],{17:function(n,t,i){},18:function(n,t,i){},22:function(n,t,i){"use strict";i.r(t);var e,r=i(0),o=i.n(r),c=i(9),a=i.n(c),u=(i(17),i(18),i(7)),d=i(2),l=i(3),f=i(1),p=l.a.div(e||(e=Object(d.a)(["\n  background-color: ",";\n\n  margin-top: ",";\n  margin-bottom: ",";\n  margin-left: ",";\n  margin-right: ",";\n\n  padding-top: ",";\n  padding-bottom: ",";\n  padding-left: ",";\n  padding-right: ",";\n\n  width: ",";\n  height: ",";\n\n  display: ",";\n  flex-direction: ",";\n  align-items: ",";\n  justify-content: ",";\n  vertical-align: top;\n\n  border: ",";\n  border-bottom: ",";\n  border-top: ",";\n  border-radius: ",";\n\n  position: ",";\n  top: ",";\n  top: ",";\n  z-index: ",";\n\n  overflow-y: ",";\n\n  animation: ",";\n"])),(function(n){return n.backgroundColor}),(function(n){return n.marginTop}),(function(n){return n.marginBottom}),(function(n){return n.marginLeft}),(function(n){return n.marginRight}),(function(n){return n.paddingTop}),(function(n){return n.paddingBottom}),(function(n){return n.paddingLeft}),(function(n){return n.paddingRight}),(function(n){return n.width||"100%"}),(function(n){return n.height||"100%"}),(function(n){return n.display||"flex"}),(function(n){return n.fd||"row"}),(function(n){return n.verticalAlign||"center"}),(function(n){return n.horizontalAlign||"center"}),(function(n){return n.border}),(function(n){return n.borderBottom}),(function(n){return n.borderTop}),(function(n){return n.borderRadius}),(function(n){return n.position}),(function(n){return"fixed"===n.position?0:null}),(function(n){return"sticky"===n.position?"80px":null}),(function(n){return n.zIndex}),(function(n){return n.scroll&&"scroll"}),(function(n){return n.animation||"fadein 0.3s"}));function g(n){var t=n.backgroundColor,i=n.size,e=n.fontSize,r=n.display,o=n.marginTop,c=n.marginBottom,a=n.marginLeft,u=n.marginRight,d=n.paddingTop,l=n.paddingBottom,g=n.paddingLeft,m=n.paddingRight,s=n.width,h=n.height,b=n.fd,x=n.verticalAlign,j=n.horizontalAlign,_=n.border,v=n.borderRadius,z=n.borderBottom,y=n.borderTop,O=n.position,k=n.zIndex,S=n.visual,T=n.scroll,w=n.top,B=n.animation,R=n.children,L=n.className;return Object(f.jsx)(p,{backgroundColor:t,size:i,fontSize:e,display:r,marginTop:o,marginBottom:c,marginLeft:a,marginRight:u,paddingTop:d,paddingBottom:l,paddingLeft:g,paddingRight:m,width:s,height:h,fd:b,verticalAlign:x,horizontalAlign:j,border:_,borderRadius:v,borderBottom:z,borderTop:y,position:O,zIndex:k,visual:S,scroll:T,top:w,animation:B,className:L,children:R})}g.defaultProps={};var m,s=g,h=l.a.p(m||(m=Object(d.a)(["\n  font-size: ",";\n  color: ",";\n  font-family: ",";\n  font-weight: ",";\n\n  margin: 0;\n  margin-left: ",";\n  margin-top: ",";\n\n  ","\n  ","\n  ","\n  ","\n"])),(function(n){return n.fontSize||"15px"}),(function(n){return n.fontColor}),(function(n){return n.fontFamily||"Bamin"}),(function(n){return n.fontWeight}),(function(n){return n.marginLeft}),(function(n){return n.marginTop}),(function(n){return n.clubName&&"font-size:24px; margin-top:40px"}),(function(n){return n.clubSummary&&"font-size:16px; margin-top:10px; font-family:SeoulLight"}),(function(n){return n.more&&"position:absolute; right:30px;"}),(function(n){return n.underline&&"text-decoration: underline solid #14406c 1px;"}));var b=function(n){var t=n.fontSize,i=n.fontColor,e=n.fontFamily,r=n.fontWeight,o=n.marginLeft,c=n.marginTop,a=n.clubName,u=n.clubSummary,d=n.more,l=n.underline,p=n.children;return Object(f.jsx)(h,{fontSize:t,fontColor:i,fontFamily:e,fontWeight:r,marginLeft:o,marginTop:c,clubName:a,clubSummary:u,more:d,underline:l,children:p})};var x=function(){var n=Object(r.useState)([]),t=Object(u.a)(n,2),i=t[0],e=t[1],o=Object(r.useState)([]),c=Object(u.a)(o,2),a=c[0],d=c[1];return Object(r.useEffect)((function(){fetch("/market/all?isDetails=false",{method:"GET"}).then((function(n){return n.json()})).then((function(n){var t=n.filter((function(n){return n.market.includes("KRW")}));e(t.slice(0,10))}))}),[]),Object(r.useEffect)((function(){if(0!==i.length){var n=[];i.forEach((function(t){var i;(i=t.market,fetch("/candles/minutes/1?market=".concat(i,"&count=1"),{method:"GET"}).then((function(n){return n.json()})).then((function(n){return n})).catch((function(n){console.log(n)}))).then((function(t){if(t[0]){var i={};i.market=t[0].market,i.candle_time=t[0].candle_date_time_kst,i.candle_acc_price=t[0].candle_acc_trade_price,i.candle_acc_volume=t[0].candle_acc_trade_volume,i.candle_high_price=t[0].high_price,i.candle_low_price=t[0].low_price,i.candle_opening_price=t[0].opening_price,i.candle_closing_price=t[0].trade_price,n.push(i)}}))})),d(n)}}),[i]),Object(f.jsx)(s,{children:Object(f.jsx)(s,{width:"1640px",height:"1500px",display:"block",children:a.map((function(n,t){return Object(f.jsxs)(s,{width:"400px",height:"200px",marginRight:"10px",marginBottom:"10px",display:"inline-flex",backgroundColor:"#1A2436",fd:"column",children:[Object(f.jsx)(b,{fontSize:"21px",children:n.korean_name}),Object(f.jsxs)(b,{fontSize:"21px",children:["\uc2dc\uac00: ",n.candle_opening_price]}),Object(f.jsxs)(b,{fontSize:"21px",children:["\uc885\uac00: ",n.candle_closing_price]})]},t)}))})})};a.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.59c32066.chunk.js.map