import{E as B,m as x,r as d,n as D,q as F,o as s,d as f,w as h,c as _,s as C,F as b,t as k,v as L}from"./vendor.9a9f1d32.js";const m="https://raw.githubusercontent.com/odofmine/td/master",l=`${m}/fof/`,w="https://raw.githubusercontent.com/odofmine/historical-ranking/main/coincodex";function g(t){B({title:"\u52A0\u8F7D\u5931\u8D25",message:x("i",{style:"color: teal"},`${t}`),type:"error",duration:0})}async function T(){const t=`${m}/list-fof.json`;return(await fetch(t)).json()}async function c(t,e,n){const o=`${l}/${t}/${e}.json`,a=await fetch(o);return a.status!=200?(g(o),n):a.json()}async function M(t){return(await fetch(`${w}/${t}.json`)).json()}async function p(t){const e=Object.keys(t).map(async n=>{const o=await fetch(t[n]);if(o.status!=200)return g(t[n]),{name:n,data:[]};const a=await o.json();return{name:n,data:a}});return Promise.all(e)}function q(t){return c(t,"funds",[])}async function A(t,e){return await c(t,e,[])}function E(t){return c(t,"metrics",{})}function S(t){return c(t,"leverages",{})}function U(t){return c(t,"stats",{})}function G(t){return c(t,"holdings",{})}function H(){return M("gainers_vs_losers")}function I(t){return c(t,"config",{})}function O(t){const e={candidates:`${l}/${t}/candidates.json`};return p(e)}function V(t){const e={atr:`${l}/${t}/atr.json`};return p(e)}function z(t){const e={market_cap_pnt:`${l}/${t}/market_cap_pnt.json`,raw_market_cap_pnt:`${l}/${t}/raw_market_cap_pnt.json`};return p(e)}function J(){const t={turnovers:`${w}/turnovers.json`};return p(t)}function K(t,e){const n=e.reduce((o,a)=>(o[a]=`${l}/${t}/${a}.json`,o),{});return p(n)}const Q=(t,e)=>{const n=Math.pow(10,e||2);return`${Math.floor(t*100*n)/n} %`};const N={key:0},R={props:{data:{type:Array},loading:{type:Boolean},columns:{type:Array}},setup(t){const e=t,n=({row:a,column:$,rowIndex:y,columnIndex:u})=>{if(a.type==="split")return u===0?[1,e.columns.length]:[0,0]},o=({row:a})=>{if(a.type==="split")return{background:"#f1f1f1 !important","--el-table-row-hover-bg-color":"#f1f1f1"}};return(a,$)=>{const y=d("router-link"),u=d("el-table-column"),v=d("el-table"),j=D("loading");return F((s(),f(v,{data:e.data,style:{width:"100%"},border:"",class:"monospace-table","span-method":n,"row-style":o},{default:h(()=>[(s(!0),_(b,null,C(e.columns,r=>(s(),_(b,null,[r.path?(s(),f(u,{key:0,label:r.label},{default:h(i=>[i.row.type==="split"?(s(),_("span",N,k(i.row[r.prop]),1)):(s(),f(y,{key:1,target:"_blank",to:{path:r.path(i.row),query:r.query?r.query(i.row):{}}},{default:h(()=>[L(k(i.row[r.prop]),1)]),_:2},1032,["to"]))]),_:2},1032,["label"])):r.formatter?(s(),f(u,{key:1,prop:r.prop,label:r.label,formatter:r.formatter},null,8,["prop","label","formatter"])):(s(),f(u,{key:2,prop:r.prop,label:r.label},null,8,["prop","label"]))],64))),256))]),_:1},8,["data"])),[[j,e.loading]])}}};export{R as _,q as a,K as b,G as c,O as d,S as e,T as f,z as g,I as h,A as i,V as j,U as k,J as l,H as m,E as n,Q as v};
