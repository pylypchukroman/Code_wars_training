parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
"use strict";function t(t){return t<0?t:0===t?t:-1*t}function n(t){let n=[];for(var e=0;e<t.length;e++)t[e]>0&&n.push(t[e]);return n.reduce((t,n)=>t+n,0)}function e(t){console.log(t);let n=Array.from(String(t),Number);console.log(n),n=[...n].sort((t,n)=>n-t),console.log(n);const e=+n.join("");return console.log(e),e}function r(t,n,e,r){let o=0;for(;;){if(t>=r)return o;t=t*(1+n/100)+e,o++}}function o(t){if(0==t.length)return"even";const n=t.reduce((t,n)=>t+n);return console.log(n),n%2?"odd":"even"}function u(t){return[Math.min(...t),Math.max(...t)]}function l(t){const n=t.split(" ");let e=0,r=null;for(let o=0;o<n.length-1;o++)e<n[o].length&&(e=n[o].length,r=n[o]);return r}function i(t){return t.split(" ").sort(function(t,n){return n.length-t.length})[0].length}function c(t,n,e){switch(e){case"add":return t+n;case"subtract":return t-n;case"multiply":return t*n;case"divide":return t/n}}function s(t){const n=t.split(" ").map(t=>t.length);return Math.min(...n)}function f(t){let n=[...t],e=n.indexOf(Math.min(...n));return n.splice(e,1),n}function a(t,n){return t.every(t=>t<=n)}function h(t){let n=0,e=0;for(let r=0;r<t.length;r++)r%2==0?n+=t[r]:e+=t[r];return[n,e]}function p(t,n){return t.repeat(n)}function g(t){return[].concat(...t).sort((t,n)=>t-n)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.solution=N,String.prototype.toJadenCase=function(t){return this.split(" ").map(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}).join(" ")},l("The quick brown fox jumped over the lazy dog"),i("The quick brown fox jumped over the lazy dog");const m=[{ccy:"USD",bace_ccy:"UAH",buy:"29.25",sale:"32.18"},{ccy:"EUR",bace_ccy:"UAH",buy:"31.82",sale:"34.80"},{ccy:"BTC",bace_ccy:"USD",buy:"38390.85",sale:"42431.99"},{ccy:"USD",bace_ccy:"UAH",buy:"11.25",sale:"32.18"},{ccy:"EUR",bace_ccy:"UAH",buy:"40.82",sale:"34.80"}],d=m.filter(t=>"USD"==t.ccy||"EUR"==t.ccy);function j(t){return+t.join(",").split(",").reduce(function(t,n){return n.length>t.length?n:t},"")}function y(t){console.log(t);let n=0;return t.forEach(t=>{n+=Math.min(...t)}),n}function w(t,n){const e=t.split(""),r=n.split("");return e.concat(r).filter((t,n,e)=>e.indexOf(t)===n).sort().join("")}function b(t){return 5*Math.ceil(t/5)}function C(t){return t.split("").reverse().join("").split(" ").reverse().join(" ")}var $=function(t){const n=t.split("");let e=[];for(let r=0;r<n.length;r++)n[r]==n[r].toUpperCase()&&e.push(n.indexOf(n[r]));return e};function M(t,n){return t==n?t:t>n?t+M(t-1,n):t+M(t+1,n)}function v(t){return Array.from(t.toString()).map(t=>t=+t)}function x(t){let n=[];for(let e=0;e<=Math.max.apply(null,t);e++)t.includes(e)||n.push(e);return Number(n.join(""))}function U(t){let n=0;for(;t>0;)n+=t,t=Math.floor(t/2);return n}function N(t){return t.split("").reverse().join("")}function S(t){const n=t.split(" ");return[Math.max(...n),Math.min(...n)].join(" ")}function E(t){let n=[];for(let e=1;e<=t;e++)n.push(e);return n.sort()}function A(...t){return t.reduce((t,n)=>t+n,0)}function L(t){arr=t.toUpperCase().split(""),newArr=[];for(let n=0;n<arr.length;n++)" "!==arr[n]&&newArr.push(arr[n]);return newArr.join("  ")}function O(...t){return Math.floor(Math.sqrt(t.map(t=>t*t).reduce((t,n)=>t+n))/2)}function k(t){const n=["a","e","i","o","u"];let e=[];for(let r=0;r<t.length;r++){let o=!0;for(let e=0;e<n.length;e++)if(t[r]===n[e]){o=!1;break}o&&e.push(t[r])}return e.join("")}function z(t){return t.slice(0,t.length-1)}function R(t,n){let e=[];for(let r=t;r<=n;r++)e.push(r);return e}function _(t){switch(t){case"green":return"yellow";case"yellow":return"red";case"red":return"green"}}function H(t,n){return t.split(" ").filter(t=>t.length>n)}function q(t){return t.filter(t=>4==t.length)}function D(t){for(;4==t;)return 7;for(;7==t;)return 4;return 0}function I(t){const n=t.toString().split(""),e=n.length;let r=0;for(let o=0;o<n.length;o++){r+=Math.pow(n[o],e)}return r%e==0}function J(t){return Number(t.toString().split("").map(t=>t*t).join(""))}function P(t){return t.length<1?0:Math.max(...t)-Math.min(...t)}function T(t){const n={"(":")","{":"}","[":"]"};let e,r=[];for(let o=0;o<t.length;o++)if(n[e=t[o]])r.push(e);else if(e!==n[r.pop()])return"Wrong order";return 0===r.length}function B(t){return t.map(t=>t[0]>=55&&t[1]>7?"Senior":"Open")}function N(t){return null==t?[]:t.sort((t,n)=>t-n)}function W(t){let n=0;const e=t.match(/\d+/g).map(t=>Number(t));for(let r=0;r<e.length;r++)n+=e[r];return n}function G(t){const n={};return t.split("").forEach(t=>{n[t]=n[t]?n[t]+1:1}),n}function Y(t){let n=[];for(let e=0;e<t;e++)n.push(" ".repeat(t-e-1)+"*".repeat(2*e+1)+" ".repeat(t-e-1));return n}k("drake"),I(1741725),B([[3,12],[55,1],[91,-2],[53,23]]),W("In 2015, I want to know how much does iPhone 6+ cost?");const Z=function(t){var n=[];for(let e=0;e<t.length;e++)t[e]!==t[e+1]&&n.push(t[e]);return n};function F(t){return t.trim().split(" ").map((t,n)=>n%2?t.split("").reverse().join(""):t).join(" ")}function K(t){return`(${t[0]}${t[1]}${t[2]}) ${t[3]}${t[4]}${t[5]}-${t[6]}${t[7]}${t[8]}${t[9]}`}function Q(t){return t.length<1?"no one likes this":1==t.length?`${t[0]} likes this`:2==t.length?`${t[0]} and ${t[1]} like this`:3==t.length?`${t[0]}, ${t[1]} and ${t[2]} like this`:t.length>=4?`${t[0]}, ${t[1]} and ${t.length-2} others like this`:void 0}function V(t){return+t.filter(n=>t.indexOf(n)==t.lastIndexOf(n))}function X(t){let n=[];const e=t.toString().split("");if(0==e[e.length-1])return Number(e.join(""));for(let o=0;o<e.length;o++)0!=e[o]&&n.push(e[o]);const r=n.sort((t,n)=>t-n).join("");return Number(r)}function tt(t){return t.replace(/[0-9]/g,"").split(/(?=[A-Z])/).join("-").toLowerCase()}function nt(t){const n=t.split("");for(let e=0;e<n.length;e++)n[e]===n[e].toUpperCase()?n[e]=n[e].toLowerCase():n[e]=n[e].toUpperCase();return n.join("").split(" ").reverse().join(" ")}function nt(t){return t.split("").map(t=>-1==="abcdefghijklmnopqrstuvwxyz".indexOf(t)?t.toLowerCase():t.toUpperCase()).join("").split(" ").reverse().join(" ")}function et(t){let n={};const e=t.split("");for(let r=0;r<e.length;++r){let t=e[r];null!=n[t]?++n[t]:n[t]=1}return n}function rt(t,n){return t.filter(t=>n.indexOf(t)<0)}function ot(t){let n=[];const e=t.map(t=>t.length<1?"0":t).toString().split(",");for(let r=0;r<e.length;r++){if(e[r].includes("-")){const t=e[r].split("-");let o=+t[0],u=+t[1];for(let e=o;e<=u;e++)n.push(o++)}n.push(e[r])}return n.map(Number).filter(t=>!Number.isNaN(t))}function ut(t,n){let e=[];for(let r=t;r<=n;r++)r.toString().includes("5")||e.push(r);return e.length}function lt(t){let n=[];const e=t.sort((t,n)=>t-n),r=t.splice(0,t.length/2),o=e.sort((t,n)=>n-t);for(let u=0;u<r.length;u++)n.push(r[u]*o[u]);return n.reduce((t,n)=>t+=n)}function it(t,n){const e=[];for(let r=0;r<n.length;r++)t.includes(n[r])&&e.push(n[r]);return e}function ct(t){const n=t.sort((t,n)=>t-n);return n[0]+n[1]}function st(t,n){console.log(`Вхідна строка -> ${t}`),console.log(`Вхідний масив для порівняння -> ${n}`);let e=[];const r=t.split(" ");for(let o=0;o<r.length;o++)for(let t=0;t<n.length;t++)r[o]!=n[t]&&e.push(r[o]);return`Результат -> ${e.join(" ")}`}function ft(t){let n=[],e=0;for(;e<t;)t%++e==0&&(console.log(e),n.push(e));return n.length}function at(t){return`${t.toLowerCase().replace(/[^n-z]/g,"").length}/${t.length}`}function ht(t){return Math.floor(t/2)}function pt(t,n,e){return t.includes(n)&&t.includes(e)}function gt(t,n,e){let r;const o=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"];if(0==Math.floor(t)||0==Math.floor(n)||0==Math.floor(e))return"zero";const u=Math.floor(1.15*(t+n+e));for(let l=0;l<o.length;l++)l==u&&(r=o[l]);return r}function mt(t){const n=t.toString().split(""),e=n.length;return t===n.map(t=>Math.pow(t,e)).reduce((t,n)=>n+=t)}function dt(t,n){if(0===t.length||0===n.length)return-1;let e=t.map(t=>t.length),r=n.map(t=>t.length);return Math.max(Math.max(...e)-Math.min(...r),Math.max(...r)-Math.min(...e))}function jt(t){return t.filter(t=>"Europe"==t.continent&&"JavaScript"==t.language).length}function yt(t){let n=[];const e=["a","e","i","o","u","y"],r=t.toLowerCase().split("");for(let o=0;o<r.length;o++)for(let t=0;t<e.length;t++)r[o]===e[t]&&n.push(o+1);return n}function wt(t){return t.forEach(t=>{t.greeting=`Hi ${t.firstName}, what do you like the most about ${t.language}?`}),t}function bt(t,n){let e=0,r=0,o=[],u=[],l=[];for(;e<t;)t%++e==0&&o.push(e);for(;r<n;)n%++r==0&&u.push(r);for(let i=0;i<o.length;i++)u.includes(o[i])&&l.push(o[i]);return 1==l[l.length-1]}function Ct(t){const n=t.toLowerCase().split("");let e="";const r=[...new Set(n)].sort();for(let o=0;o<r.length;o++)for(let u=0;u<t.length;u++)r[o]==n[u]&&(e+=n[u]);return e.split("").map((t,n)=>t!==e[n-1]?t=t.toUpperCase():t).join("")}function $t(t){return t.trim().length?t.split(" ").sort((t,n)=>t[t.length-1].localeCompare(n[n.length-1])):t.split(" ")}function Mt(t){return t.map((t,n)=>t+(n+1)).map(t=>t>=10?t-10:t).map(t=>t>=10?t-10:t)}function vt(t){return t.replace(/[aeiouyAEIOUY]/gi,"")}function xt(t){let n=[];const e=t.toLowerCase().split("");for(let r=0;r<e.length;r++)n.push(e[r].repeat(r+1));return n.map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("-")}lt([9,2,8,7,5,4,0,6]);const Ut=[{id:2320,name:"",items:[{id:43555444,name:""},{id:43555445,name:""},{id:43555446,name:""}]},{id:2321,name:"",items:[{id:42555444,name:""},{id:42555445,name:""}]}],Nt=["NewExtra1","subject1","subject2","subject3","NewExtra2","subject1","subject2","subject3"];function St(t){let n=0;for(let e=0;e<Ut.length;e+=1){Ut[e].name=t[n],n+=1;let r=Ut[e].items;for(let e=0;e<r.length;e+=1)r[e].name=t[n],n+=1}}function N(t,n){let e=n.length;return t.split("").splice(t.length-e,e).join("")==n}function Et(...t){let n=0;for(let e=0;e<t.length;e++){if(t.length<1)return 0;if(t[e]<0)return-1;n+=t[e]}return n}St(Nt);const At=function(t){return t==t.toString().split("").reverse().join("")},Lt=function(t){if(0==t.length)return 0;let n=0;for(let e=1;e<t.length;e++)t[e]!==t[n]&&(t[++n]=t[e]);return n+1},Ot=function(t){const n=t.trim().split(" ");return n[n.length-1].length},kt=function(t){const n=t.length;console.log(n);const e=t.filter(t=>t<0),r=t.filter(t=>t>=10);if(0==e.length&&0==r.length&&0!=n){for(let n=t.length-1;n>=0;n--){if(t[n]++,!(t[n]>9))return t;t[n]=0}return t.unshift(1),t}return null};function zt(t){return t.length==[...new Set(t)].length}function Rt(t){let n=0,e=0;for(let r=0;r<t.length;r++)"x"==t[r]?n++:"o"==t[r]&&e++;return n==e}function _t(t){let n=[],e=1;for(;e<t-1;)t%++e==0&&n.push(e);return 0===n.length?`${t} is prime`:n}function Ht(t){return t.sort((t,n)=>t-n).splice(t.length-2,2)}function Et(t){let n=0,e=[];for(;n<t;)++n%3!=0&&n%5!=0||e.push(n);return e.reduce((t,n)=>n+=t)}function qt(t){return t.split("#")[0]}function Dt(t,n){let e=[];for(let r=0;r<t.length;r++)t[r]%2==0&&e.push(t[r]);return e.splice(e.length-n,n)}function It(t,n,e){const r=t.indexOf(e),o=n.indexOf(e);return t.slice(0,r+1)+n.slice(o+1)}function Jt(t){return t.split("").map(t=>t==t.toLowerCase()?t.toUpperCase():t.toLowerCase()).join("")}function Pt(t){const n=Math.floor(t.length/2);return t.length%2==0?t[n-1]+t[n]:t[n]}function Tt(t){return t.length<4?t:"#".repeat(t.length-4)+t.slice(t.length-4)}function Bt(t){let n;const e=t.filter((t,n,e)=>e.indexOf(t)!=n);for(let r=0;r<t.length;r++)e.includes(t[r])||(n=t[r]);return n}function Wt(t,n){let e=0;for(let r=0;r<t.length;r++)t[r]==n[r]?e+=4:""===n[r]?e+=0:e-=1;return e<0?0:e}function Gt(t){let n=0,e=[];for(let r=0;r<t.length;r++)t[r].age>n&&(n=t[r].age);for(let r=0;r<t.length;r++)t[r].age==n&&e.push(t[r]);return e}const Yt=function(t){return[...t].sort((t,n)=>t[0].toLowerCase().localeCompare(n[0].toLowerCase()))};function N(t){let n=0,e=[];for(;n<t-1;)++n%3!=0&&n%5!=0||e.push(n);return e.reduce((t,n)=>n+=t)<0?0:e.reduce((t,n)=>n+=t)}function N(t){const n=t.split("");let e=[];for(let r=0;r<n.length;r++)n[r]==n[r].toUpperCase()?e.push("."+n[r]):e.push(n[r]);return e.join("").split(".").join(" ")}function Zt(t){return t.split(" ").map(t=>[...t].map((t,n)=>n%2?t.toLowerCase():t.toUpperCase()).join``).join(" ")}function Ft(t){const n={};return t.forEach(t=>n[t]=n[t]?n[t]+1:1),+Object.keys(n).find(t=>n[t]%2==1)}function Kt(t){let n=[];return[...t].map(t=>"#"===t?n.pop():n.push(t)),n.join("")}function Qt(t){let n=0;return t.toString().split("").map(t=>{n+=Number(t)}),n>9?Qt(n):n}function Vt(t){let n={},e=0;return t.toLowerCase().split("").forEach(t=>n[t]=n[t]?n[t]+1:1),Object.values(n).forEach(t=>t>1?e++:null),e}function Xt(t){const n=(t||[]).map(t=>t?t.length:0).sort((t,n)=>t-n);if(n.includes(0))return 0;for(let e=0;e<n.length-1;e++)if(n[e]+1!==n[e+1])return n[e]+1;return 0}function tn(t){return t%2==0?t.toString(2):t.toString(16)}function nn(t){return t.split("").map((t,n)=>n%2==0?t.toUpperCase():t.toLowerCase()).join("")}var en=function(t){let n=[];return t.forEach((t,e)=>n.push(`${e+1}: ${t}`)),n};function rn(t,n,e){let r=0,o=[];for(;r<t;)++r%2==0?o.push(e):o.push(n);return o}function on(t){return t>0?t*(t+1)/2:0}function un(t){let n={};return t.forEach(t=>n[t]=n[t]?n[t]+1:1),[...t].sort((t,e)=>n[e]-n[t]||t-e)}function ln(t){let n="";for(let e=0;e<t[0].length;e++){for(let r=0;r<t.length;r++)t[r][e]&&(n+=t[r][e]);n+=" "}return n.trim()}function cn(t,n){return t%2==0&&n%2!=0||n%2==0&&t%2!=0}function sn(t,n,e){return`Hello, ${t.map(t=>t).join(" ")}! Welcome to ${n}, ${e}!`}function fn(t){let n={};return t.forEach(t=>n[t.language]=n[t.language]?n[t.language]+=1:1),n}console.log(fn([{firstName:"Noah",lastName:"M.",country:"Switzerland",continent:"Europe",age:19,language:"C"},{firstName:"Anna",lastName:"R.",country:"Liechtenstein",continent:"Europe",age:52,language:"JavaScript"},{firstName:"Ramon",lastName:"R.",country:"Paraguay",continent:"Americas",age:29,language:"Ruby"},{firstName:"George",lastName:"B.",country:"England",continent:"Europe",age:81,language:"C"}]));
},{}]},{},["Focm"], null)
//# sourceMappingURL=/parcel-project-template/src.e7ebd3d0.js.map