import{a as i,F as u,c,e as r,m as o,_ as s,C as d,o as t,d as m}from"./q-4e2a80fc.js";import{u as p,F as _}from"./q-8fc0bd4f.js";import{useSupabaseLogin as g}from"./q-b8951228.js";const b=`.form{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);background-color:var(--dark-text);height:50%;width:90%;max-width:700px;background-color:#f5f5f5}#message{padding:10px;border:1px solid #ccc;border-radius:4px;width:80%;margin:auto}#name{border:1px solid #ccc;padding:10px;border-radius:4px;width:80%;margin:auto auto 0}button{background-color:var(--dark-black);color:var(--dark-text);max-width:100px;margin:.5rem auto;padding:.5rem 1rem;cursor:pointer}button:hover{background-color:#fff;color:var(--dark-black)}
`,f=b,v=({track:a})=>{const[e,l]=i();a(()=>e.value),e.value&&e.value.statusMessage==="success"&&l("/")},h=()=>{u(o(()=>s(()=>Promise.resolve().then(()=>n),void 0),"s_et0a2iBw31U"));const a=p(),e=g();return c(o(()=>s(()=>Promise.resolve().then(()=>n),void 0),"s_37XcAsRJzq4",[e,a])),r("div",null,{class:"form"},d(_,{action:e,"preventdefault:submit":!0,get style(){return{display:"flex",flexDirection:"column",height:"100%"}},children:[r("textarea",null,{id:"message",minLength:5,name:"message",placeholder:"Write here",required:!0,rows:10},null,3,null),r("input",null,{id:"name",name:"email",placeholder:"your email",required:!0,type:"email"},null,3,null),r("button",null,{type:"submit"},"Send",3,null)],[t]:{action:t,"preventdefault:submit":t,style:t}},3,"AB_0"),1,"AB_1")},n=Object.freeze(Object.defineProperty({__proto__:null,_hW:m,s_37XcAsRJzq4:v,s_U3HoWm67vOc:h,s_et0a2iBw31U:f},Symbol.toStringTag,{value:"Module"}));export{m as _hW,v as s_37XcAsRJzq4,h as s_U3HoWm67vOc,f as s_et0a2iBw31U};
