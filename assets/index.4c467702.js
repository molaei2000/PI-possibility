import{r as e,a as l,c as n,b as s,w as t,v as o,d as r,F as a,e as u,o as i,t as c,f as d,n as m,g as b,h as p}from"./vendor.bdf8a517.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&l(e)})).observe(document,{childList:!0,subtree:!0})}function l(e){if(e.ep)return;e.ep=!0;const l=function(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerpolicy&&(l.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?l.credentials="include":"anonymous"===e.crossorigin?l.credentials="omit":l.credentials="same-origin",l}(e);fetch(e.href,l)}}();const f={setup(n){let s=e(),t=e();const o=l([]);return{states:o,calc:()=>{let e=0;for(let l=0;l<t.value;l++){let l=s.value,n=0,t=0,r=0,a=[];a.splice(0,a.length);for(let e=0;e<l;e++){let e=Math.floor(201*Math.random()),l=Math.floor(201*Math.random());Math.pow(e,2)+Math.pow(l,2)>4e4?(a.push({x:e,y:l,color:"blue"}),n+=1):Math.pow(e,2)+Math.pow(l,2)===4e4?r+=1:(a.push({x:e,y:l,color:"red"}),t+=1)}e+=t,o.push({numbers:l,moreThanOne:n,lessThanOne:t,equal:r,sum:e,dots:a})}},deletestate:e=>{o.splice(e,1)},num:s,multy:t}}},h={class:"container"},y={class:"input-group mb-3 w-50 m-auto"},v={class:"row"},g={class:"position-relative"},M={class:"states position-absolute"},k=s("br",null,null,-1),w=s("br",null,null,-1),x=s("br",null,null,-1),O=s("br",null,null,-1),T=b(),C=s("br",null,null,-1),q=s("br",null,null,-1),L={class:"box"},N={class:"box-inner"},P={class:"delete"},S=["onClick"];f.render=function(e,l,b,p,f,U){return i(),n("div",h,[s("form",{onSubmit:l[3]||(l[3]=r((()=>{}),["prevent"]))},[s("div",y,[t(s("input",{type:"number",placeholder:"Numbers X",class:"form-control","onUpdate:modelValue":l[0]||(l[0]=e=>p.num=e)},null,512),[[o,p.num]]),t(s("input",{type:"number",placeholder:"n Times",class:"form-control","onUpdate:modelValue":l[1]||(l[1]=e=>p.multy=e)},null,512),[[o,p.multy]]),s("button",{onClick:l[2]||(l[2]=(...e)=>p.calc&&p.calc(...e)),class:"btn btn-success"},"Calculate")])],32),s("div",v,[(i(!0),n(a,null,u(p.states,((e,l)=>(i(),n("div",{class:"c col-md-12 col-lg-6",key:l},[s("div",g,[s("div",M,[s("b",null,"numbers:"+c(e.numbers),1),k,s("b",null,"equal to radius:"+c(e.equal),1),w,s("b",null,"more than radius (blue dots): "+c(e.moreThanOne),1),x,s("b",null,"less than radius (red dots):"+c(e.lessThanOne),1),O,s("b",null,"Possibility inside :"+c(e.lessThanOne/e.numbers*100)+"%",1),T,C,s("b",null," Π ~= "+c(4*e.lessThanOne/e.numbers),1),q,t(s("b",null,"Pi average in "+c(p.multy)+" times : "+c(4*e.sum/(e.numbers*p.multy)),513),[[d,l===p.multy-1]])]),s("div",L,[s("div",N,[(i(!0),n(a,null,u(e.dots,((e,l)=>(i(),n("div",{class:"dot",key:l,style:m({backgroundColor:e.color,top:e.y+"px",left:e.x+"px"}),ref:"dot"},null,4)))),128))])]),s("div",P,[s("button",{onClick:e=>p.deletestate(l),class:"btn btn-danger"},"×",8,S)])])])))),128))])])},p(f).mount("#app");
