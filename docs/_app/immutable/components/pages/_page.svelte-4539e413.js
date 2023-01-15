import{L as ln,M as Xe,N as kt,A as Ti,O as Kt,S as mt,i as gt,s as _t,F as fn,G as dn,H as hn,I as pn,f as ye,t as Ae,K as ot,w as Ve,x as He,y as We,z as je,k as lo,l as co,m as uo,h as Dt,n as fo,b as Ht,P as rl,Q as Ln,g as es,d as ts,D as sl,o as ho,R as xr,T as ar,U as or,V as ds,a as bn,c as Mn,W as hs,X as ui,Y as al,e as Cs,Z as Ls,_ as Ps,$ as ol,B as ll}from"../../chunks/index-6c38d5fe.js";import{d as cl,w as pt,r as ul}from"../../chunks/index-890bdfa3.js";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ps="148",Wn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},jn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fl=0,Ds=1,dl=2,po=1,mo=2,wi=3,un=0,Nt=1,Ai=2,zi=3,Sn=0,li=1,Rs=2,Is=3,Fs=4,hl=5,ai=100,pl=101,ml=102,Os=103,Ns=104,gl=200,_l=201,xl=202,vl=203,go=204,_o=205,bl=206,Ml=207,Sl=208,yl=209,wl=210,El=0,Tl=1,Al=2,ns=3,Cl=4,Ll=5,Pl=6,Dl=7,xo=0,Rl=1,Il=2,Zt=0,Fl=1,Ol=2,Nl=3,vo=4,zl=5,bo=300,fi=301,di=302,is=303,rs=304,lr=306,ss=1e3,Gt=1001,as=1002,ht=1003,zs=1004,vr=1005,Ot=1006,Ul=1007,Ci=1008,Gn=1009,Bl=1010,kl=1011,Mo=1012,Gl=1013,Nn=1014,zn=1015,Li=1016,Vl=1017,Hl=1018,ci=1020,Wl=1021,jl=1022,Vt=1023,Xl=1024,ql=1025,Un=1026,hi=1027,Yl=1028,Zl=1029,Kl=1030,Jl=1031,Ql=1033,br=33776,Mr=33777,Sr=33778,yr=33779,Us=35840,Bs=35841,ks=35842,Gs=35843,$l=36196,Vs=37492,Hs=37496,Ws=37808,js=37809,Xs=37810,qs=37811,Ys=37812,Zs=37813,Ks=37814,Js=37815,Qs=37816,$s=37817,ea=37818,ta=37819,na=37820,ia=37821,ra=36492,yn=3e3,Be=3001,ec=3200,tc=3201,nc=0,ic=1,jt="srgb",Pi="srgb-linear",wr=7680,rc=519,sa=35044,aa="300 es",os=1035;class Hn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Er=Math.PI/180,oa=180/Math.PI;function Ii(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dt[r&255]+dt[r>>8&255]+dt[r>>16&255]+dt[r>>24&255]+"-"+dt[e&255]+dt[e>>8&255]+"-"+dt[e>>16&15|64]+dt[e>>24&255]+"-"+dt[t&63|128]+dt[t>>8&255]+"-"+dt[t>>16&255]+dt[t>>24&255]+dt[n&255]+dt[n>>8&255]+dt[n>>16&255]+dt[n>>24&255]).toLowerCase()}function yt(r,e,t){return Math.max(e,Math.min(t,r))}function sc(r,e){return(r%e+e)%e}function Tr(r,e,t){return(1-t)*r+t*e}function la(r){return(r&r-1)===0&&r!==0}function ls(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ui(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Tt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=i,f[2]=a,f[3]=t,f[4]=s,f[5]=l,f[6]=n,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],f=n[4],d=n[7],u=n[2],m=n[5],x=n[8],p=i[0],h=i[3],g=i[6],b=i[1],v=i[4],S=i[7],w=i[2],L=i[5],F=i[8];return s[0]=o*p+a*b+l*w,s[3]=o*h+a*v+l*L,s[6]=o*g+a*S+l*F,s[1]=c*p+f*b+d*w,s[4]=c*h+f*v+d*L,s[7]=c*g+f*S+d*F,s[2]=u*p+m*b+x*w,s[5]=u*h+m*v+x*L,s[8]=u*g+m*S+x*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return t*o*f-t*a*c-n*s*f+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,u=a*l-f*s,m=c*s-o*l,x=t*d+n*u+i*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/x;return e[0]=d*p,e[1]=(i*c-f*n)*p,e[2]=(a*n-i*o)*p,e[3]=u*p,e[4]=(f*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=m*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ar.makeScale(e,t)),this}rotate(e){return this.premultiply(Ar.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ar.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ar=new Pt;function So(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Di(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Bn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function rr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Cr={[jt]:{[Pi]:Bn},[Pi]:{[jt]:rr}},bt={legacyMode:!0,get workingColorSpace(){return Pi},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Cr[e]&&Cr[e][t]!==void 0){const n=Cr[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},yo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$e={r:0,g:0,b:0},zt={h:0,s:0,l:0},Bi={h:0,s:0,l:0};function Lr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function ki(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=bt.workingColorSpace){if(e=sc(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Lr(o,s,e+1/3),this.g=Lr(o,s,e),this.b=Lr(o,s,e-1/3)}return bt.toWorkingColorSpace(this,i),this}setStyle(e,t=jt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,bt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,bt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,f=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,f,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,bt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,bt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=jt){const n=yo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return bt.fromWorkingColorSpace(ki(this,$e),e),yt($e.r*255,0,255)<<16^yt($e.g*255,0,255)<<8^yt($e.b*255,0,255)<<0}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(ki(this,$e),t);const n=$e.r,i=$e.g,s=$e.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(ki(this,$e),t),e.r=$e.r,e.g=$e.g,e.b=$e.b,e}getStyle(e=jt){return bt.fromWorkingColorSpace(ki(this,$e),e),e!==jt?`color(${e} ${$e.r} ${$e.g} ${$e.b})`:`rgb(${$e.r*255|0},${$e.g*255|0},${$e.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(zt),zt.h+=e,zt.s+=t,zt.l+=n,this.setHSL(zt.h,zt.s,zt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zt),e.getHSL(Bi);const n=Tr(zt.h,Bi.h,t),i=Tr(zt.s,Bi.s,t),s=Tr(zt.l,Bi.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ke.NAMES=yo;let Xn;class wo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xn===void 0&&(Xn=Di("canvas")),Xn.width=e.width,Xn.height=e.height;const n=Xn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Di("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Bn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bn(t[n]/255)*255):t[n]=Bn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Eo{constructor(e=null){this.isSource=!0,this.uuid=Ii(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Pr(i[o].image)):s.push(Pr(i[o]))}else s=Pr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Pr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?wo.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ac=0;class ct extends Hn{constructor(e=ct.DEFAULT_IMAGE,t=ct.DEFAULT_MAPPING,n=Gt,i=Gt,s=Ot,o=Ci,a=Vt,l=Gn,c=ct.DEFAULT_ANISOTROPY,f=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ac++}),this.uuid=Ii(),this.name="",this.source=new Eo(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ss:e.x=e.x-Math.floor(e.x);break;case Gt:e.x=e.x<0?0:1;break;case as:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ss:e.y=e.y-Math.floor(e.y);break;case Gt:e.y=e.y<0?0:1;break;case as:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}ct.DEFAULT_IMAGE=null;ct.DEFAULT_MAPPING=bo;ct.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,i=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],f=l[4],d=l[8],u=l[1],m=l[5],x=l[9],p=l[2],h=l[6],g=l[10];if(Math.abs(f-u)<.01&&Math.abs(d-p)<.01&&Math.abs(x-h)<.01){if(Math.abs(f+u)<.1&&Math.abs(d+p)<.1&&Math.abs(x+h)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(m+1)/2,w=(g+1)/2,L=(f+u)/4,F=(d+p)/4,_=(x+h)/4;return v>S&&v>w?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=L/n,s=F/n):S>w?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=L/i,s=_/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=F/s,i=_/s),this.set(n,i,s,t),this}let b=Math.sqrt((h-x)*(h-x)+(d-p)*(d-p)+(u-f)*(u-f));return Math.abs(b)<.001&&(b=1),this.x=(h-x)/b,this.y=(d-p)/b,this.z=(u-f)/b,this.w=Math.acos((c+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wn extends Hn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new ct(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ot,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Eo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class To extends ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oc extends ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],f=n[i+2],d=n[i+3];const u=s[o+0],m=s[o+1],x=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=f,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=m,e[t+2]=x,e[t+3]=p;return}if(d!==p||l!==u||c!==m||f!==x){let h=1-a;const g=l*u+c*m+f*x+d*p,b=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const w=Math.sqrt(v),L=Math.atan2(w,g*b);h=Math.sin(h*L)/w,a=Math.sin(a*L)/w}const S=a*b;if(l=l*h+u*S,c=c*h+m*S,f=f*h+x*S,d=d*h+p*S,h===1-a){const w=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=w,c*=w,f*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],f=n[i+3],d=s[o],u=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+f*d+l*m-c*u,e[t+1]=l*x+f*u+c*d-a*m,e[t+2]=c*x+f*m+a*u-l*d,e[t+3]=f*x-a*d-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),f=a(i/2),d=a(s/2),u=l(n/2),m=l(i/2),x=l(s/2);switch(o){case"XYZ":this._x=u*f*d+c*m*x,this._y=c*m*d-u*f*x,this._z=c*f*x+u*m*d,this._w=c*f*d-u*m*x;break;case"YXZ":this._x=u*f*d+c*m*x,this._y=c*m*d-u*f*x,this._z=c*f*x-u*m*d,this._w=c*f*d+u*m*x;break;case"ZXY":this._x=u*f*d-c*m*x,this._y=c*m*d+u*f*x,this._z=c*f*x+u*m*d,this._w=c*f*d-u*m*x;break;case"ZYX":this._x=u*f*d-c*m*x,this._y=c*m*d+u*f*x,this._z=c*f*x-u*m*d,this._w=c*f*d+u*m*x;break;case"YZX":this._x=u*f*d+c*m*x,this._y=c*m*d+u*f*x,this._z=c*f*x-u*m*d,this._w=c*f*d-u*m*x;break;case"XZY":this._x=u*f*d-c*m*x,this._y=c*m*d-u*f*x,this._z=c*f*x+u*m*d,this._w=c*f*d+u*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],f=t[6],d=t[10],u=n+a+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(f-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+o*a+i*c-s*l,this._y=i*f+o*l+s*a-n*c,this._z=s*f+o*c+n*l-i*a,this._w=o*f-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-t)*f)/c,u=Math.sin(t*f)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ca.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ca.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,f=l*n+a*t-s*i,d=l*i+s*n-o*t,u=-s*t-o*n-a*i;return this.x=c*l+u*-s+f*-a-d*-o,this.y=f*l+u*-o+d*-s-c*-a,this.z=d*l+u*-a+c*-o-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dr.copy(this).projectOnVector(e),this.sub(Dr)}reflect(e){return this.sub(Dr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dr=new B,ca=new Vn;class Fi{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const f=e[l],d=e[l+1],u=e[l+2];f<t&&(t=f),d<n&&(n=d),u<i&&(i=u),f>s&&(s=f),d>o&&(o=d),u>a&&(a=u)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const f=e.getX(l),d=e.getY(l),u=e.getZ(l);f<t&&(t=f),d<n&&(n=d),u<i&&(i=u),f>s&&(s=f),d>o&&(o=d),u>a&&(a=u)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Pn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Pn)}else n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox),Rr.applyMatrix4(e.matrixWorld),this.union(Rr);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_i),Gi.subVectors(this.max,_i),qn.subVectors(e.a,_i),Yn.subVectors(e.b,_i),Zn.subVectors(e.c,_i),gn.subVectors(Yn,qn),_n.subVectors(Zn,Yn),Dn.subVectors(qn,Zn);let t=[0,-gn.z,gn.y,0,-_n.z,_n.y,0,-Dn.z,Dn.y,gn.z,0,-gn.x,_n.z,0,-_n.x,Dn.z,0,-Dn.x,-gn.y,gn.x,0,-_n.y,_n.x,0,-Dn.y,Dn.x,0];return!Ir(t,qn,Yn,Zn,Gi)||(t=[1,0,0,0,1,0,0,0,1],!Ir(t,qn,Yn,Zn,Gi))?!1:(Vi.crossVectors(gn,_n),t=[Vi.x,Vi.y,Vi.z],Ir(t,qn,Yn,Zn,Gi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Pn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tn=[new B,new B,new B,new B,new B,new B,new B,new B],Pn=new B,Rr=new Fi,qn=new B,Yn=new B,Zn=new B,gn=new B,_n=new B,Dn=new B,_i=new B,Gi=new B,Vi=new B,Rn=new B;function Ir(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Rn.fromArray(r,s);const a=i.x*Math.abs(Rn.x)+i.y*Math.abs(Rn.y)+i.z*Math.abs(Rn.z),l=e.dot(Rn),c=t.dot(Rn),f=n.dot(Rn);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const lc=new Fi,xi=new B,Fr=new B;class ms{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):lc.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xi.subVectors(e,this.center);const t=xi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(xi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xi.copy(e.center).add(Fr)),this.expandByPoint(xi.copy(e.center).sub(Fr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new B,Or=new B,Hi=new B,xn=new B,Nr=new B,Wi=new B,zr=new B;class Ao{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nn.copy(this.direction).multiplyScalar(t).add(this.origin),nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Or.copy(e).add(t).multiplyScalar(.5),Hi.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(Or);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Hi),a=xn.dot(this.direction),l=-xn.dot(Hi),c=xn.lengthSq(),f=Math.abs(1-o*o);let d,u,m,x;if(f>0)if(d=o*l-a,u=o*a-l,x=s*f,d>=0)if(u>=-x)if(u<=x){const p=1/f;d*=p,u*=p,m=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;else u<=-x?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c):u<=x?(d=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(Hi).multiplyScalar(u).add(Or),m}intersectSphere(e,t){nn.subVectors(e.center,this.origin);const n=nn.dot(this.direction),i=nn.dot(nn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,o=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,o=(e.min.y-u.y)*f),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,t,n,i,s){Nr.subVectors(t,e),Wi.subVectors(n,e),zr.crossVectors(Nr,Wi);let o=this.direction.dot(zr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xn.subVectors(this.origin,e);const l=a*this.direction.dot(Wi.crossVectors(xn,Wi));if(l<0)return null;const c=a*this.direction.dot(Nr.cross(xn));if(c<0||l+c>o)return null;const f=-a*xn.dot(zr);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,f,d,u,m,x,p,h){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=f,g[10]=d,g[14]=u,g[3]=m,g[7]=x,g[11]=p,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Kn.setFromMatrixColumn(e,0).length(),s=1/Kn.setFromMatrixColumn(e,1).length(),o=1/Kn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=o*f,m=o*d,x=a*f,p=a*d;t[0]=l*f,t[4]=-l*d,t[8]=c,t[1]=m+x*c,t[5]=u-p*c,t[9]=-a*l,t[2]=p-u*c,t[6]=x+m*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*f,m=l*d,x=c*f,p=c*d;t[0]=u+p*a,t[4]=x*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*f,t[9]=-a,t[2]=m*a-x,t[6]=p+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*f,m=l*d,x=c*f,p=c*d;t[0]=u-p*a,t[4]=-o*d,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*f,t[9]=p-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*f,m=o*d,x=a*f,p=a*d;t[0]=l*f,t[4]=x*c-m,t[8]=u*c+p,t[1]=l*d,t[5]=p*c+u,t[9]=m*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,m=o*c,x=a*l,p=a*c;t[0]=l*f,t[4]=p-u*d,t[8]=x*d+m,t[1]=d,t[5]=o*f,t[9]=-a*f,t[2]=-c*f,t[6]=m*d+x,t[10]=u-p*d}else if(e.order==="XZY"){const u=o*l,m=o*c,x=a*l,p=a*c;t[0]=l*f,t[4]=-d,t[8]=c*f,t[1]=u*d+p,t[5]=o*f,t[9]=m*d-x,t[2]=x*d-m,t[6]=a*f,t[10]=p*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cc,e,uc)}lookAt(e,t,n){const i=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),vn.crossVectors(n,At),vn.lengthSq()===0&&(Math.abs(n.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),vn.crossVectors(n,At)),vn.normalize(),ji.crossVectors(At,vn),i[0]=vn.x,i[4]=ji.x,i[8]=At.x,i[1]=vn.y,i[5]=ji.y,i[9]=At.y,i[2]=vn.z,i[6]=ji.z,i[10]=At.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],f=n[1],d=n[5],u=n[9],m=n[13],x=n[2],p=n[6],h=n[10],g=n[14],b=n[3],v=n[7],S=n[11],w=n[15],L=i[0],F=i[4],_=i[8],C=i[12],T=i[1],G=i[5],K=i[9],P=i[13],N=i[2],X=i[6],Z=i[10],J=i[14],j=i[3],$=i[7],Y=i[11],D=i[15];return s[0]=o*L+a*T+l*N+c*j,s[4]=o*F+a*G+l*X+c*$,s[8]=o*_+a*K+l*Z+c*Y,s[12]=o*C+a*P+l*J+c*D,s[1]=f*L+d*T+u*N+m*j,s[5]=f*F+d*G+u*X+m*$,s[9]=f*_+d*K+u*Z+m*Y,s[13]=f*C+d*P+u*J+m*D,s[2]=x*L+p*T+h*N+g*j,s[6]=x*F+p*G+h*X+g*$,s[10]=x*_+p*K+h*Z+g*Y,s[14]=x*C+p*P+h*J+g*D,s[3]=b*L+v*T+S*N+w*j,s[7]=b*F+v*G+S*X+w*$,s[11]=b*_+v*K+S*Z+w*Y,s[15]=b*C+v*P+S*J+w*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],u=e[10],m=e[14],x=e[3],p=e[7],h=e[11],g=e[15];return x*(+s*l*d-i*c*d-s*a*u+n*c*u+i*a*m-n*l*m)+p*(+t*l*m-t*c*u+s*o*u-i*o*m+i*c*f-s*l*f)+h*(+t*c*d-t*a*m-s*o*d+n*o*m+s*a*f-n*c*f)+g*(-i*a*f-t*l*d+t*a*u+i*o*d-n*o*u+n*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],u=e[10],m=e[11],x=e[12],p=e[13],h=e[14],g=e[15],b=d*h*c-p*u*c+p*l*m-a*h*m-d*l*g+a*u*g,v=x*u*c-f*h*c-x*l*m+o*h*m+f*l*g-o*u*g,S=f*p*c-x*d*c+x*a*m-o*p*m-f*a*g+o*d*g,w=x*d*l-f*p*l-x*a*u+o*p*u+f*a*h-o*d*h,L=t*b+n*v+i*S+s*w;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/L;return e[0]=b*F,e[1]=(p*u*s-d*h*s-p*i*m+n*h*m+d*i*g-n*u*g)*F,e[2]=(a*h*s-p*l*s+p*i*c-n*h*c-a*i*g+n*l*g)*F,e[3]=(d*l*s-a*u*s-d*i*c+n*u*c+a*i*m-n*l*m)*F,e[4]=v*F,e[5]=(f*h*s-x*u*s+x*i*m-t*h*m-f*i*g+t*u*g)*F,e[6]=(x*l*s-o*h*s-x*i*c+t*h*c+o*i*g-t*l*g)*F,e[7]=(o*u*s-f*l*s+f*i*c-t*u*c-o*i*m+t*l*m)*F,e[8]=S*F,e[9]=(x*d*s-f*p*s-x*n*m+t*p*m+f*n*g-t*d*g)*F,e[10]=(o*p*s-x*a*s+x*n*c-t*p*c-o*n*g+t*a*g)*F,e[11]=(f*a*s-o*d*s-f*n*c+t*d*c+o*n*m-t*a*m)*F,e[12]=w*F,e[13]=(f*p*i-x*d*i+x*n*u-t*p*u-f*n*h+t*d*h)*F,e[14]=(x*a*i-o*p*i-x*n*l+t*p*l+o*n*h-t*a*h)*F,e[15]=(o*d*i-f*a*i+f*n*l-t*d*l-o*n*u+t*a*u)*F,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,f*a+n,f*l-i*o,0,c*l-i*a,f*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,f=o+o,d=a+a,u=s*c,m=s*f,x=s*d,p=o*f,h=o*d,g=a*d,b=l*c,v=l*f,S=l*d,w=n.x,L=n.y,F=n.z;return i[0]=(1-(p+g))*w,i[1]=(m+S)*w,i[2]=(x-v)*w,i[3]=0,i[4]=(m-S)*L,i[5]=(1-(u+g))*L,i[6]=(h+b)*L,i[7]=0,i[8]=(x+v)*F,i[9]=(h-b)*F,i[10]=(1-(u+p))*F,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Kn.set(i[0],i[1],i[2]).length();const o=Kn.set(i[4],i[5],i[6]).length(),a=Kn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ut.copy(this);const c=1/s,f=1/o,d=1/a;return Ut.elements[0]*=c,Ut.elements[1]*=c,Ut.elements[2]*=c,Ut.elements[4]*=f,Ut.elements[5]*=f,Ut.elements[6]*=f,Ut.elements[8]*=d,Ut.elements[9]*=d,Ut.elements[10]*=d,t.setFromRotationMatrix(Ut),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),u=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),f=1/(o-s),d=(t+e)*l,u=(n+i)*c,m=(o+s)*f;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-u,a[2]=0,a[6]=0,a[10]=-2*f,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Kn=new B,Ut=new et,cc=new B(0,0,0),uc=new B(1,1,1),vn=new B,ji=new B,At=new B,ua=new et,fa=new Vn;class Oi{constructor(e=0,t=0,n=0,i=Oi.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],f=i[9],d=i[2],u=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ua.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ua,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fa.setFromEuler(this),this.setFromQuaternion(fa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Oi.DefaultOrder="XYZ";Oi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class gs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fc=0;const da=new B,Jn=new Vn,rn=new et,Xi=new B,vi=new B,dc=new B,hc=new Vn,ha=new B(1,0,0),pa=new B(0,1,0),ma=new B(0,0,1),pc={type:"added"},ga={type:"removed"};class ut extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fc++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DefaultUp.clone();const e=new B,t=new Oi,n=new Vn,i=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new et},normalMatrix:{value:new Pt}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=ut.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ut.DefaultMatrixWorldAutoUpdate,this.layers=new gs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.premultiply(Jn),this}rotateX(e){return this.rotateOnAxis(ha,e)}rotateY(e){return this.rotateOnAxis(pa,e)}rotateZ(e){return this.rotateOnAxis(ma,e)}translateOnAxis(e,t){return da.copy(e).applyQuaternion(this.quaternion),this.position.add(da.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ha,e)}translateY(e){return this.translateOnAxis(pa,e)}translateZ(e){return this.translateOnAxis(ma,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xi.copy(e):Xi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(vi,Xi,this.up):rn.lookAt(Xi,vi,this.up),this.quaternion.setFromRotationMatrix(rn),i&&(rn.extractRotation(i.matrixWorld),Jn.setFromRotationMatrix(rn),this.quaternion.premultiply(Jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(pc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ga)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ga)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(rn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vi,e,dc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vi,hc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),u=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ut.DefaultUp=new B(0,1,0);ut.DefaultMatrixAutoUpdate=!0;ut.DefaultMatrixWorldAutoUpdate=!0;const Bt=new B,sn=new B,Ur=new B,an=new B,Qn=new B,$n=new B,_a=new B,Br=new B,kr=new B,Gr=new B;class on{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Bt.subVectors(e,t),i.cross(Bt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Bt.subVectors(i,t),sn.subVectors(n,t),Ur.subVectors(e,t);const o=Bt.dot(Bt),a=Bt.dot(sn),l=Bt.dot(Ur),c=sn.dot(sn),f=sn.dot(Ur),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);const u=1/d,m=(c*l-a*f)*u,x=(o*f-a*l)*u;return s.set(1-m-x,x,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,an),an.x>=0&&an.y>=0&&an.x+an.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,an),l.set(0,0),l.addScaledVector(s,an.x),l.addScaledVector(o,an.y),l.addScaledVector(a,an.z),l}static isFrontFacing(e,t,n,i){return Bt.subVectors(n,t),sn.subVectors(e,t),Bt.cross(sn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bt.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),Bt.cross(sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return on.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Qn.subVectors(i,n),$n.subVectors(s,n),Br.subVectors(e,n);const l=Qn.dot(Br),c=$n.dot(Br);if(l<=0&&c<=0)return t.copy(n);kr.subVectors(e,i);const f=Qn.dot(kr),d=$n.dot(kr);if(f>=0&&d<=f)return t.copy(i);const u=l*d-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(Qn,o);Gr.subVectors(e,s);const m=Qn.dot(Gr),x=$n.dot(Gr);if(x>=0&&m<=x)return t.copy(s);const p=m*c-l*x;if(p<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector($n,a);const h=f*x-m*d;if(h<=0&&d-f>=0&&m-x>=0)return _a.subVectors(s,i),a=(d-f)/(d-f+(m-x)),t.copy(i).addScaledVector(_a,a);const g=1/(h+p+u);return o=p*g,a=u*g,t.copy(n).addScaledVector(Qn,o).addScaledVector($n,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let mc=0;class cr extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mc++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=li,this.side=un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=go,this.blendDst=_o,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(n.blending=this.blending),this.side!==un&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Co extends cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ke=new B,qi=new Ee;class Wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qi.fromBufferAttribute(this,t),qi.applyMatrix3(e),this.setXY(t,qi.x,qi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix3(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix4(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyNormalMatrix(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.transformDirection(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Lo extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Po extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class cn extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gc=0;const Ft=new et,Vr=new ut,ei=new B,Ct=new Fi,bi=new Fi,at=new B;class mn extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(So(e)?Po:Lo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Pt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return Vr.lookAt(e),Vr.updateMatrix(),this.applyMatrix4(Vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new cn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ct.setFromBufferAttribute(s),this.morphTargetsRelative?(at.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(at),at.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(at)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];bi.setFromBufferAttribute(a),this.morphTargetsRelative?(at.addVectors(Ct.min,bi.min),Ct.expandByPoint(at),at.addVectors(Ct.max,bi.max),Ct.expandByPoint(at)):(Ct.expandByPoint(bi.min),Ct.expandByPoint(bi.max))}Ct.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)at.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(at));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)at.fromBufferAttribute(a,c),l&&(ei.fromBufferAttribute(e,c),at.add(ei)),i=Math.max(i,n.distanceToSquared(at))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let T=0;T<a;T++)c[T]=new B,f[T]=new B;const d=new B,u=new B,m=new B,x=new Ee,p=new Ee,h=new Ee,g=new B,b=new B;function v(T,G,K){d.fromArray(i,T*3),u.fromArray(i,G*3),m.fromArray(i,K*3),x.fromArray(o,T*2),p.fromArray(o,G*2),h.fromArray(o,K*2),u.sub(d),m.sub(d),p.sub(x),h.sub(x);const P=1/(p.x*h.y-h.x*p.y);isFinite(P)&&(g.copy(u).multiplyScalar(h.y).addScaledVector(m,-p.y).multiplyScalar(P),b.copy(m).multiplyScalar(p.x).addScaledVector(u,-h.x).multiplyScalar(P),c[T].add(g),c[G].add(g),c[K].add(g),f[T].add(b),f[G].add(b),f[K].add(b))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let T=0,G=S.length;T<G;++T){const K=S[T],P=K.start,N=K.count;for(let X=P,Z=P+N;X<Z;X+=3)v(n[X+0],n[X+1],n[X+2])}const w=new B,L=new B,F=new B,_=new B;function C(T){F.fromArray(s,T*3),_.copy(F);const G=c[T];w.copy(G),w.sub(F.multiplyScalar(F.dot(G))).normalize(),L.crossVectors(_,G);const P=L.dot(f[T])<0?-1:1;l[T*4]=w.x,l[T*4+1]=w.y,l[T*4+2]=w.z,l[T*4+3]=P}for(let T=0,G=S.length;T<G;++T){const K=S[T],P=K.start,N=K.count;for(let X=P,Z=P+N;X<Z;X+=3)C(n[X+0]),C(n[X+1]),C(n[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new B,s=new B,o=new B,a=new B,l=new B,c=new B,f=new B,d=new B;if(e)for(let u=0,m=e.count;u<m;u+=3){const x=e.getX(u+0),p=e.getX(u+1),h=e.getX(u+2);i.fromBufferAttribute(t,x),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,h),f.subVectors(o,s),d.subVectors(i,s),f.cross(d),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,h),a.add(f),l.add(f),c.add(f),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(h,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),f.subVectors(o,s),d.subVectors(i,s),f.cross(d),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)at.fromBufferAttribute(e,t),at.normalize(),e.setXYZ(t,at.x,at.y,at.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,u=new c.constructor(l.length*f);let m=0,x=0;for(let p=0,h=l.length;p<h;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*f;for(let g=0;g<f;g++)u[x++]=c[m++]}return new Wt(u,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const u=c[f],m=e(u,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,u=c.length;d<u;d++){const m=c[d];f.push(m.toJSON(e.data))}f.length>0&&(i[l]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const f=i[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let u=0,m=d.length;u<m;u++)f.push(d[u].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const xa=new et,ti=new Ao,Hr=new ms,Mi=new B,Si=new B,yi=new B,Wr=new B,Yi=new B,Zi=new Ee,Ki=new Ee,Ji=new Ee,jr=new B,Qi=new B;class qt extends ut{constructor(e=new mn,t=new Co){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Yi.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(Wr.fromBufferAttribute(d,e),o?Yi.addScaledVector(Wr,f):Yi.addScaledVector(Wr.sub(t),f))}t.add(Yi)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(s),e.ray.intersectsSphere(Hr)===!1)||(xa.copy(s).invert(),ti.copy(e.ray).applyMatrix4(xa),n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,f=n.attributes.uv2,d=n.groups,u=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,x=d.length;m<x;m++){const p=d[m],h=i[p.materialIndex],g=Math.max(p.start,u.start),b=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let v=g,S=b;v<S;v+=3){const w=a.getX(v),L=a.getX(v+1),F=a.getX(v+2);o=$i(this,h,e,ti,c,f,w,L,F),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let p=m,h=x;p<h;p+=3){const g=a.getX(p),b=a.getX(p+1),v=a.getX(p+2);o=$i(this,i,e,ti,c,f,g,b,v),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,x=d.length;m<x;m++){const p=d[m],h=i[p.materialIndex],g=Math.max(p.start,u.start),b=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let v=g,S=b;v<S;v+=3){const w=v,L=v+1,F=v+2;o=$i(this,h,e,ti,c,f,w,L,F),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let p=m,h=x;p<h;p+=3){const g=p,b=p+1,v=p+2;o=$i(this,i,e,ti,c,f,g,b,v),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function _c(r,e,t,n,i,s,o,a){let l;if(e.side===Nt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===un,a),l===null)return null;Qi.copy(a),Qi.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Qi);return c<t.near||c>t.far?null:{distance:c,point:Qi.clone(),object:r}}function $i(r,e,t,n,i,s,o,a,l){r.getVertexPosition(o,Mi),r.getVertexPosition(a,Si),r.getVertexPosition(l,yi);const c=_c(r,e,t,n,Mi,Si,yi,jr);if(c){i&&(Zi.fromBufferAttribute(i,o),Ki.fromBufferAttribute(i,a),Ji.fromBufferAttribute(i,l),c.uv=on.getUV(jr,Mi,Si,yi,Zi,Ki,Ji,new Ee)),s&&(Zi.fromBufferAttribute(s,o),Ki.fromBufferAttribute(s,a),Ji.fromBufferAttribute(s,l),c.uv2=on.getUV(jr,Mi,Si,yi,Zi,Ki,Ji,new Ee));const f={a:o,b:a,c:l,normal:new B,materialIndex:0};on.getNormal(Mi,Si,yi,f.normal),c.face=f}return c}class Ni extends mn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let u=0,m=0;x("z","y","x",-1,-1,n,t,e,o,s,0),x("z","y","x",1,-1,n,t,-e,o,s,1),x("x","z","y",1,1,e,n,t,i,o,2),x("x","z","y",1,-1,e,n,-t,i,o,3),x("x","y","z",1,-1,e,t,n,i,s,4),x("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(f,3)),this.setAttribute("uv",new cn(d,2));function x(p,h,g,b,v,S,w,L,F,_,C){const T=S/F,G=w/_,K=S/2,P=w/2,N=L/2,X=F+1,Z=_+1;let J=0,j=0;const $=new B;for(let Y=0;Y<Z;Y++){const D=Y*G-P;for(let k=0;k<X;k++){const ie=k*T-K;$[p]=ie*b,$[h]=D*v,$[g]=N,c.push($.x,$.y,$.z),$[p]=0,$[h]=0,$[g]=L>0?1:-1,f.push($.x,$.y,$.z),d.push(k/F),d.push(1-Y/_),J+=1}}for(let Y=0;Y<_;Y++)for(let D=0;D<F;D++){const k=u+D+X*Y,ie=u+D+X*(Y+1),ee=u+(D+1)+X*(Y+1),se=u+(D+1)+X*Y;l.push(k,ie,se),l.push(ie,ee,se),j+=6}a.addGroup(m,j,C),m+=j,u+=J}}static fromJSON(e){return new Ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Mt(r){const e={};for(let t=0;t<r.length;t++){const n=pi(r[t]);for(const i in n)e[i]=n[i]}return e}function xc(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Do(r){return r.getRenderTarget()===null&&r.outputEncoding===Be?jt:Pi}const Ro={clone:pi,merge:Mt};var vc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jt extends cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vc,this.fragmentShader=bc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pi(e.uniforms),this.uniformsGroups=xc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _s extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}let Lt=class extends _s{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Er*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};const ni=-90,ii=1;class Mc extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Lt(ni,ii,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Lt(ni,ii,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Lt(ni,ii,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Lt(ni,ii,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Lt(ni,ii,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Lt(ni,ii,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,f=e.getRenderTarget(),d=e.toneMapping,u=e.xr.enabled;e.toneMapping=Zt,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(f),e.toneMapping=d,e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Io extends ct{constructor(e,t,n,i,s,o,a,l,c,f){e=e!==void 0?e:[],t=t!==void 0?t:fi,super(e,t,n,i,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sc extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Io(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ni(5,5,5),s=new Jt({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:Sn});s.uniforms.tEquirect.value=t;const o=new qt(i,s),a=t.minFilter;return t.minFilter===Ci&&(t.minFilter=Ot),new Mc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Xr=new B,yc=new B,wc=new Pt;class In{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Xr.subVectors(n,t).cross(yc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Xr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wc.getNormalMatrix(e),i=this.coplanarPoint(Xr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new ms,er=new B;class xs{constructor(e=new In,t=new In,n=new In,i=new In,s=new In,o=new In){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],f=n[6],d=n[7],u=n[8],m=n[9],x=n[10],p=n[11],h=n[12],g=n[13],b=n[14],v=n[15];return t[0].setComponents(a-i,d-l,p-u,v-h).normalize(),t[1].setComponents(a+i,d+l,p+u,v+h).normalize(),t[2].setComponents(a+s,d+c,p+m,v+g).normalize(),t[3].setComponents(a-s,d-c,p-m,v-g).normalize(),t[4].setComponents(a-o,d-f,p-x,v-b).normalize(),t[5].setComponents(a+o,d+f,p+x,v+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSprite(e){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(er.x=i.normal.x>0?e.max.x:e.min.x,er.y=i.normal.y>0?e.max.y:e.min.y,er.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fo(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Ec(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,f){const d=c.array,u=c.usage,m=r.createBuffer();r.bindBuffer(f,m),r.bufferData(f,d,u),c.onUploadCallback();let x;if(d instanceof Float32Array)x=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(d instanceof Int16Array)x=5122;else if(d instanceof Uint32Array)x=5125;else if(d instanceof Int32Array)x=5124;else if(d instanceof Int8Array)x=5120;else if(d instanceof Uint8Array)x=5121;else if(d instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,f,d){const u=f.array,m=f.updateRange;r.bindBuffer(d,c),m.count===-1?r.bufferSubData(d,0,u):(t?r.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):r.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f&&(r.deleteBuffer(f.buffer),n.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,f)):d.version<c.version&&(s(d.buffer,c,f),d.version=c.version)}return{get:o,remove:a,update:l}}class ur extends mn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,f=l+1,d=e/a,u=t/l,m=[],x=[],p=[],h=[];for(let g=0;g<f;g++){const b=g*u-o;for(let v=0;v<c;v++){const S=v*d-s;x.push(S,-b,0),p.push(0,0,1),h.push(v/a),h.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<a;b++){const v=b+c*g,S=b+c*(g+1),w=b+1+c*(g+1),L=b+1+c*g;m.push(v,S,L),m.push(S,w,L)}this.setIndex(m),this.setAttribute("position",new cn(x,3)),this.setAttribute("normal",new cn(p,3)),this.setAttribute("uv",new cn(h,2))}static fromJSON(e){return new ur(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ac=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Lc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rc="vec3 transformed = vec3( position );",Ic=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Oc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Uc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Xc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Kc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qc="gl_FragColor = linearToOutputTexel( gl_FragColor );",$c=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,su=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,au=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ou=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,du=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mu=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,gu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_u=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Mu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Su=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Eu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Au=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Lu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Du=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ru=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ou=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,zu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Uu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Bu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,ku=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ju=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Xu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,qu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Yu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ku=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Ju=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$u=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ef=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rf=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,sf=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,af=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,of=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,uf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ff=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,df=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,_f=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,xf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,vf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,bf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Mf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Sf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,yf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,wf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ef=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Df=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,If=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ff=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bf=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$f=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ed=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,td=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,id=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,we={alphamap_fragment:Tc,alphamap_pars_fragment:Ac,alphatest_fragment:Cc,alphatest_pars_fragment:Lc,aomap_fragment:Pc,aomap_pars_fragment:Dc,begin_vertex:Rc,beginnormal_vertex:Ic,bsdfs:Fc,iridescence_fragment:Oc,bumpmap_pars_fragment:Nc,clipping_planes_fragment:zc,clipping_planes_pars_fragment:Uc,clipping_planes_pars_vertex:Bc,clipping_planes_vertex:kc,color_fragment:Gc,color_pars_fragment:Vc,color_pars_vertex:Hc,color_vertex:Wc,common:jc,cube_uv_reflection_fragment:Xc,defaultnormal_vertex:qc,displacementmap_pars_vertex:Yc,displacementmap_vertex:Zc,emissivemap_fragment:Kc,emissivemap_pars_fragment:Jc,encodings_fragment:Qc,encodings_pars_fragment:$c,envmap_fragment:eu,envmap_common_pars_fragment:tu,envmap_pars_fragment:nu,envmap_pars_vertex:iu,envmap_physical_pars_fragment:mu,envmap_vertex:ru,fog_vertex:su,fog_pars_vertex:au,fog_fragment:ou,fog_pars_fragment:lu,gradientmap_pars_fragment:cu,lightmap_fragment:uu,lightmap_pars_fragment:fu,lights_lambert_fragment:du,lights_lambert_pars_fragment:hu,lights_pars_begin:pu,lights_toon_fragment:gu,lights_toon_pars_fragment:_u,lights_phong_fragment:xu,lights_phong_pars_fragment:vu,lights_physical_fragment:bu,lights_physical_pars_fragment:Mu,lights_fragment_begin:Su,lights_fragment_maps:yu,lights_fragment_end:wu,logdepthbuf_fragment:Eu,logdepthbuf_pars_fragment:Tu,logdepthbuf_pars_vertex:Au,logdepthbuf_vertex:Cu,map_fragment:Lu,map_pars_fragment:Pu,map_particle_fragment:Du,map_particle_pars_fragment:Ru,metalnessmap_fragment:Iu,metalnessmap_pars_fragment:Fu,morphcolor_vertex:Ou,morphnormal_vertex:Nu,morphtarget_pars_vertex:zu,morphtarget_vertex:Uu,normal_fragment_begin:Bu,normal_fragment_maps:ku,normal_pars_fragment:Gu,normal_pars_vertex:Vu,normal_vertex:Hu,normalmap_pars_fragment:Wu,clearcoat_normal_fragment_begin:ju,clearcoat_normal_fragment_maps:Xu,clearcoat_pars_fragment:qu,iridescence_pars_fragment:Yu,output_fragment:Zu,packing:Ku,premultiplied_alpha_fragment:Ju,project_vertex:Qu,dithering_fragment:$u,dithering_pars_fragment:ef,roughnessmap_fragment:tf,roughnessmap_pars_fragment:nf,shadowmap_pars_fragment:rf,shadowmap_pars_vertex:sf,shadowmap_vertex:af,shadowmask_pars_fragment:of,skinbase_vertex:lf,skinning_pars_vertex:cf,skinning_vertex:uf,skinnormal_vertex:ff,specularmap_fragment:df,specularmap_pars_fragment:hf,tonemapping_fragment:pf,tonemapping_pars_fragment:mf,transmission_fragment:gf,transmission_pars_fragment:_f,uv_pars_fragment:xf,uv_pars_vertex:vf,uv_vertex:bf,uv2_pars_fragment:Mf,uv2_pars_vertex:Sf,uv2_vertex:yf,worldpos_vertex:wf,background_vert:Ef,background_frag:Tf,backgroundCube_vert:Af,backgroundCube_frag:Cf,cube_vert:Lf,cube_frag:Pf,depth_vert:Df,depth_frag:Rf,distanceRGBA_vert:If,distanceRGBA_frag:Ff,equirect_vert:Of,equirect_frag:Nf,linedashed_vert:zf,linedashed_frag:Uf,meshbasic_vert:Bf,meshbasic_frag:kf,meshlambert_vert:Gf,meshlambert_frag:Vf,meshmatcap_vert:Hf,meshmatcap_frag:Wf,meshnormal_vert:jf,meshnormal_frag:Xf,meshphong_vert:qf,meshphong_frag:Yf,meshphysical_vert:Zf,meshphysical_frag:Kf,meshtoon_vert:Jf,meshtoon_frag:Qf,points_vert:$f,points_frag:ed,shadow_vert:td,shadow_frag:nd,sprite_vert:id,sprite_frag:rd},re={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Pt},uv2Transform:{value:new Pt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pt}}},Xt={basic:{uniforms:Mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:Mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ke(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:Mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:Mt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:Mt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new ke(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:Mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:Mt([re.points,re.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:Mt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:Mt([re.common,re.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:Mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:Mt([re.sprite,re.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:Mt([re.common,re.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:Mt([re.lights,re.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};Xt.physical={uniforms:Mt([Xt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};const tr={r:0,b:0,g:0};function sd(r,e,t,n,i,s,o){const a=new ke(0);let l=s===!0?0:1,c,f,d=null,u=0,m=null;function x(h,g){let b=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v));const S=r.xr,w=S.getSession&&S.getSession();w&&w.environmentBlendMode==="additive"&&(v=null),v===null?p(a,l):v&&v.isColor&&(p(v,1),b=!0),(r.autoClear||b)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===lr)?(f===void 0&&(f=new qt(new Ni(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:pi(Xt.backgroundCube.uniforms),vertexShader:Xt.backgroundCube.vertexShader,fragmentShader:Xt.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(L,F,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.toneMapped=v.encoding!==Be,(d!==v||u!==v.version||m!==r.toneMapping)&&(f.material.needsUpdate=!0,d=v,u=v.version,m=r.toneMapping),f.layers.enableAll(),h.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new qt(new ur(2,2),new Jt({name:"BackgroundMaterial",uniforms:pi(Xt.background.uniforms),vertexShader:Xt.background.vertexShader,fragmentShader:Xt.background.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=v.encoding!==Be,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,m=r.toneMapping),c.layers.enableAll(),h.unshift(c,c.geometry,c.material,0,0,null))}function p(h,g){h.getRGB(tr,Do(r)),n.buffers.color.setClear(tr.r,tr.g,tr.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(h,g=1){a.set(h),l=g,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(h){l=h,p(a,l)},render:x}}function ad(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=h(null);let c=l,f=!1;function d(N,X,Z,J,j){let $=!1;if(o){const Y=p(J,Z,X);c!==Y&&(c=Y,m(c.object)),$=g(N,J,Z,j),$&&b(N,J,Z,j)}else{const Y=X.wireframe===!0;(c.geometry!==J.id||c.program!==Z.id||c.wireframe!==Y)&&(c.geometry=J.id,c.program=Z.id,c.wireframe=Y,$=!0)}j!==null&&t.update(j,34963),($||f)&&(f=!1,_(N,X,Z,J),j!==null&&r.bindBuffer(34963,t.get(j).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(N){return n.isWebGL2?r.bindVertexArray(N):s.bindVertexArrayOES(N)}function x(N){return n.isWebGL2?r.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function p(N,X,Z){const J=Z.wireframe===!0;let j=a[N.id];j===void 0&&(j={},a[N.id]=j);let $=j[X.id];$===void 0&&($={},j[X.id]=$);let Y=$[J];return Y===void 0&&(Y=h(u()),$[J]=Y),Y}function h(N){const X=[],Z=[],J=[];for(let j=0;j<i;j++)X[j]=0,Z[j]=0,J[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:Z,attributeDivisors:J,object:N,attributes:{},index:null}}function g(N,X,Z,J){const j=c.attributes,$=X.attributes;let Y=0;const D=Z.getAttributes();for(const k in D)if(D[k].location>=0){const ee=j[k];let se=$[k];if(se===void 0&&(k==="instanceMatrix"&&N.instanceMatrix&&(se=N.instanceMatrix),k==="instanceColor"&&N.instanceColor&&(se=N.instanceColor)),ee===void 0||ee.attribute!==se||se&&ee.data!==se.data)return!0;Y++}return c.attributesNum!==Y||c.index!==J}function b(N,X,Z,J){const j={},$=X.attributes;let Y=0;const D=Z.getAttributes();for(const k in D)if(D[k].location>=0){let ee=$[k];ee===void 0&&(k==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),k==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor));const se={};se.attribute=ee,ee&&ee.data&&(se.data=ee.data),j[k]=se,Y++}c.attributes=j,c.attributesNum=Y,c.index=J}function v(){const N=c.newAttributes;for(let X=0,Z=N.length;X<Z;X++)N[X]=0}function S(N){w(N,0)}function w(N,X){const Z=c.newAttributes,J=c.enabledAttributes,j=c.attributeDivisors;Z[N]=1,J[N]===0&&(r.enableVertexAttribArray(N),J[N]=1),j[N]!==X&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,X),j[N]=X)}function L(){const N=c.newAttributes,X=c.enabledAttributes;for(let Z=0,J=X.length;Z<J;Z++)X[Z]!==N[Z]&&(r.disableVertexAttribArray(Z),X[Z]=0)}function F(N,X,Z,J,j,$){n.isWebGL2===!0&&(Z===5124||Z===5125)?r.vertexAttribIPointer(N,X,Z,j,$):r.vertexAttribPointer(N,X,Z,J,j,$)}function _(N,X,Z,J){if(n.isWebGL2===!1&&(N.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const j=J.attributes,$=Z.getAttributes(),Y=X.defaultAttributeValues;for(const D in $){const k=$[D];if(k.location>=0){let ie=j[D];if(ie===void 0&&(D==="instanceMatrix"&&N.instanceMatrix&&(ie=N.instanceMatrix),D==="instanceColor"&&N.instanceColor&&(ie=N.instanceColor)),ie!==void 0){const ee=ie.normalized,se=ie.itemSize,I=t.get(ie);if(I===void 0)continue;const ce=I.buffer,he=I.type,xe=I.bytesPerElement;if(ie.isInterleavedBufferAttribute){const de=ie.data,Oe=de.stride,Se=ie.offset;if(de.isInstancedInterleavedBuffer){for(let ve=0;ve<k.locationSize;ve++)w(k.location+ve,de.meshPerAttribute);N.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ve=0;ve<k.locationSize;ve++)S(k.location+ve);r.bindBuffer(34962,ce);for(let ve=0;ve<k.locationSize;ve++)F(k.location+ve,se/k.locationSize,he,ee,Oe*xe,(Se+se/k.locationSize*ve)*xe)}else{if(ie.isInstancedBufferAttribute){for(let de=0;de<k.locationSize;de++)w(k.location+de,ie.meshPerAttribute);N.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let de=0;de<k.locationSize;de++)S(k.location+de);r.bindBuffer(34962,ce);for(let de=0;de<k.locationSize;de++)F(k.location+de,se/k.locationSize,he,ee,se*xe,se/k.locationSize*de*xe)}}else if(Y!==void 0){const ee=Y[D];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(k.location,ee);break;case 3:r.vertexAttrib3fv(k.location,ee);break;case 4:r.vertexAttrib4fv(k.location,ee);break;default:r.vertexAttrib1fv(k.location,ee)}}}}L()}function C(){K();for(const N in a){const X=a[N];for(const Z in X){const J=X[Z];for(const j in J)x(J[j].object),delete J[j];delete X[Z]}delete a[N]}}function T(N){if(a[N.id]===void 0)return;const X=a[N.id];for(const Z in X){const J=X[Z];for(const j in J)x(J[j].object),delete J[j];delete X[Z]}delete a[N.id]}function G(N){for(const X in a){const Z=a[X];if(Z[N.id]===void 0)continue;const J=Z[N.id];for(const j in J)x(J[j].object),delete J[j];delete Z[N.id]}}function K(){P(),f=!0,c!==l&&(c=l,m(c.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:P,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:G,initAttributes:v,enableAttribute:S,disableUnusedAttributes:L}}function od(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,f){r.drawArrays(s,c,f),t.update(f,s,1)}function l(c,f,d){if(d===0)return;let u,m;if(i)u=r,m="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](s,c,f,d),t.update(f,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function ld(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(F){if(F==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,d=r.getParameter(34930),u=r.getParameter(35660),m=r.getParameter(3379),x=r.getParameter(34076),p=r.getParameter(34921),h=r.getParameter(36347),g=r.getParameter(36348),b=r.getParameter(36349),v=u>0,S=o||e.has("OES_texture_float"),w=v&&S,L=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:h,maxVaryings:g,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:L}}function cd(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new In,a=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u,m){const x=d.length!==0||u||n!==0||i;return i=u,t=f(d,m,0),n=d.length,x},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1,c()},this.setState=function(d,u,m){const x=d.clippingPlanes,p=d.clipIntersection,h=d.clipShadows,g=r.get(d);if(!i||x===null||x.length===0||s&&!h)s?f(null):c();else{const b=s?0:n,v=b*4;let S=g.clippingState||null;l.value=S,S=f(x,u,v,m);for(let w=0;w!==v;++w)S[w]=t[w];g.clippingState=S,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(d,u,m,x){const p=d!==null?d.length:0;let h=null;if(p!==0){if(h=l.value,x!==!0||h===null){const g=m+p*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(h===null||h.length<g)&&(h=new Float32Array(g));for(let v=0,S=m;v!==p;++v,S+=4)o.copy(d[v]).applyMatrix4(b,a),o.normal.toArray(h,S),h[S+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function ud(r){let e=new WeakMap;function t(o,a){return a===is?o.mapping=fi:a===rs&&(o.mapping=di),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===is||a===rs)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Sc(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Oo extends _s{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const oi=4,va=[.125,.215,.35,.446,.526,.582],On=20,qr=new Oo,ba=new ke;let Yr=null;const Fn=(1+Math.sqrt(5))/2,si=1/Fn,Ma=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Fn,si),new B(0,Fn,-si),new B(si,0,Fn),new B(-si,0,Fn),new B(Fn,si,0),new B(-Fn,si,0)];class Sa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Yr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ea(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yr),e.scissorTest=!1,nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fi||e.mapping===di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Li,format:Vt,encoding:yn,depthBuffer:!1},i=ya(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ya(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fd(s)),this._blurMaterial=dd(s,e,t)}return i}_compileMaterial(e){const t=new qt(this._lodPlanes[0],e);this._renderer.compile(t,qr)}_sceneToCubeUV(e,t,n,i){const a=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,u=f.toneMapping;f.getClearColor(ba),f.toneMapping=Zt,f.autoClear=!1;const m=new Co({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),x=new qt(new Ni,m);let p=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,p=!0):(m.color.copy(ba),p=!0);for(let g=0;g<6;g++){const b=g%3;b===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):b===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const v=this._cubeSize;nr(i,b*v,g>2?v:0,v,v),f.setRenderTarget(i),p&&f.render(x,a),f.render(e,a)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=u,f.autoClear=d,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===fi||e.mapping===di;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ea()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wa());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new qt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;nr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,qr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ma[(i-1)%Ma.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new qt(this._lodPlanes[i],c),u=c.uniforms,m=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*On-1),p=s/x,h=isFinite(s)?1+Math.floor(f*p):On;h>On&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${On}`);const g=[];let b=0;for(let F=0;F<On;++F){const _=F/p,C=Math.exp(-_*_/2);g.push(C),F===0?b+=C:F<h&&(b+=2*C)}for(let F=0;F<g.length;F++)g[F]=g[F]/b;u.envMap.value=e.texture,u.samples.value=h,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:v}=this;u.dTheta.value=x,u.mipInt.value=v-n;const S=this._sizeLods[i],w=3*S*(i>v-oi?i-v+oi:0),L=4*(this._cubeSize-S);nr(t,w,L,3*S,2*S),l.setRenderTarget(t),l.render(d,qr)}}function fd(r){const e=[],t=[],n=[];let i=r;const s=r-oi+1+va.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-oi?l=va[o-r+oi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),f=-c,d=1+c,u=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,x=6,p=3,h=2,g=1,b=new Float32Array(p*x*m),v=new Float32Array(h*x*m),S=new Float32Array(g*x*m);for(let L=0;L<m;L++){const F=L%3*2/3-1,_=L>2?0:-1,C=[F,_,0,F+2/3,_,0,F+2/3,_+1,0,F,_,0,F+2/3,_+1,0,F,_+1,0];b.set(C,p*x*L),v.set(u,h*x*L);const T=[L,L,L,L,L,L];S.set(T,g*x*L)}const w=new mn;w.setAttribute("position",new Wt(b,p)),w.setAttribute("uv",new Wt(v,h)),w.setAttribute("faceIndex",new Wt(S,g)),e.push(w),i>oi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ya(r,e,t){const n=new wn(r,e,t);return n.texture.mapping=lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function dd(r,e,t){const n=new Float32Array(On),i=new B(0,1,0);return new Jt({name:"SphericalGaussianBlur",defines:{n:On,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:vs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function wa(){return new Jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Ea(){return new Jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function vs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hd(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===is||l===rs,f=l===fi||l===di;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Sa(r)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||f&&d&&i(d)){t===null&&(t=new Sa(r));const u=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function pd(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function md(r,e,t,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",o),delete i[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const x in u)e.update(u[x],34962);const m=d.morphAttributes;for(const x in m){const p=m[x];for(let h=0,g=p.length;h<g;h++)e.update(p[h],34962)}}function c(d){const u=[],m=d.index,x=d.attributes.position;let p=0;if(m!==null){const b=m.array;p=m.version;for(let v=0,S=b.length;v<S;v+=3){const w=b[v+0],L=b[v+1],F=b[v+2];u.push(w,L,L,F,F,w)}}else{const b=x.array;p=x.version;for(let v=0,S=b.length/3-1;v<S;v+=3){const w=v+0,L=v+1,F=v+2;u.push(w,L,L,F,F,w)}}const h=new(So(u)?Po:Lo)(u,1);h.version=p;const g=s.get(d);g&&e.remove(g),s.set(d,h)}function f(d){const u=s.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function gd(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function f(u,m){r.drawElements(s,m,a,u*l),t.update(m,s,1)}function d(u,m,x){if(x===0)return;let p,h;if(i)p=r,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,m,a,u*l,x),t.update(m,s,x)}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=d}function _d(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function xd(r,e){return r[0]-e[0]}function vd(r,e){return Math.abs(e[1])-Math.abs(r[1])}function bd(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new lt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,d,u){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,p=x!==void 0?x.length:0;let h=s.get(f);if(h===void 0||h.count!==p){let X=function(){P.dispose(),s.delete(f),f.removeEventListener("dispose",X)};h!==void 0&&h.texture.dispose();const v=f.morphAttributes.position!==void 0,S=f.morphAttributes.normal!==void 0,w=f.morphAttributes.color!==void 0,L=f.morphAttributes.position||[],F=f.morphAttributes.normal||[],_=f.morphAttributes.color||[];let C=0;v===!0&&(C=1),S===!0&&(C=2),w===!0&&(C=3);let T=f.attributes.position.count*C,G=1;T>e.maxTextureSize&&(G=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const K=new Float32Array(T*G*4*p),P=new To(K,T,G,p);P.type=zn,P.needsUpdate=!0;const N=C*4;for(let Z=0;Z<p;Z++){const J=L[Z],j=F[Z],$=_[Z],Y=T*G*4*Z;for(let D=0;D<J.count;D++){const k=D*N;v===!0&&(o.fromBufferAttribute(J,D),K[Y+k+0]=o.x,K[Y+k+1]=o.y,K[Y+k+2]=o.z,K[Y+k+3]=0),S===!0&&(o.fromBufferAttribute(j,D),K[Y+k+4]=o.x,K[Y+k+5]=o.y,K[Y+k+6]=o.z,K[Y+k+7]=0),w===!0&&(o.fromBufferAttribute($,D),K[Y+k+8]=o.x,K[Y+k+9]=o.y,K[Y+k+10]=o.z,K[Y+k+11]=$.itemSize===4?o.w:1)}}h={count:p,texture:P,size:new Ee(T,G)},s.set(f,h),f.addEventListener("dispose",X)}let g=0;for(let v=0;v<m.length;v++)g+=m[v];const b=f.morphTargetsRelative?1:1-g;u.getUniforms().setValue(r,"morphTargetBaseInfluence",b),u.getUniforms().setValue(r,"morphTargetInfluences",m),u.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}else{const x=m===void 0?0:m.length;let p=n[f.id];if(p===void 0||p.length!==x){p=[];for(let S=0;S<x;S++)p[S]=[S,0];n[f.id]=p}for(let S=0;S<x;S++){const w=p[S];w[0]=S,w[1]=m[S]}p.sort(vd);for(let S=0;S<8;S++)S<x&&p[S][1]?(a[S][0]=p[S][0],a[S][1]=p[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(xd);const h=f.morphAttributes.position,g=f.morphAttributes.normal;let b=0;for(let S=0;S<8;S++){const w=a[S],L=w[0],F=w[1];L!==Number.MAX_SAFE_INTEGER&&F?(h&&f.getAttribute("morphTarget"+S)!==h[L]&&f.setAttribute("morphTarget"+S,h[L]),g&&f.getAttribute("morphNormal"+S)!==g[L]&&f.setAttribute("morphNormal"+S,g[L]),i[S]=F,b+=F):(h&&f.hasAttribute("morphTarget"+S)===!0&&f.deleteAttribute("morphTarget"+S),g&&f.hasAttribute("morphNormal"+S)===!0&&f.deleteAttribute("morphNormal"+S),i[S]=0)}const v=f.morphTargetsRelative?1:1-b;u.getUniforms().setValue(r,"morphTargetBaseInfluence",v),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Md(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,f=l.geometry,d=e.get(l,f);return i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const No=new ct,zo=new To,Uo=new oc,Bo=new Io,Ta=[],Aa=[],Ca=new Float32Array(16),La=new Float32Array(9),Pa=new Float32Array(4);function mi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ta[i];if(s===void 0&&(s=new Float32Array(i),Ta[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function tt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function nt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function fr(r,e){let t=Aa[e];t===void 0&&(t=new Int32Array(e),Aa[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Sd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function yd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;r.uniform2fv(this.addr,e),nt(t,e)}}function wd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tt(t,e))return;r.uniform3fv(this.addr,e),nt(t,e)}}function Ed(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;r.uniform4fv(this.addr,e),nt(t,e)}}function Td(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;Pa.set(n),r.uniformMatrix2fv(this.addr,!1,Pa),nt(t,n)}}function Ad(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;La.set(n),r.uniformMatrix3fv(this.addr,!1,La),nt(t,n)}}function Cd(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;Ca.set(n),r.uniformMatrix4fv(this.addr,!1,Ca),nt(t,n)}}function Ld(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Pd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;r.uniform2iv(this.addr,e),nt(t,e)}}function Dd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;r.uniform3iv(this.addr,e),nt(t,e)}}function Rd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;r.uniform4iv(this.addr,e),nt(t,e)}}function Id(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Fd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;r.uniform2uiv(this.addr,e),nt(t,e)}}function Od(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;r.uniform3uiv(this.addr,e),nt(t,e)}}function Nd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;r.uniform4uiv(this.addr,e),nt(t,e)}}function zd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||No,i)}function Ud(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Uo,i)}function Bd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Bo,i)}function kd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||zo,i)}function Gd(r){switch(r){case 5126:return Sd;case 35664:return yd;case 35665:return wd;case 35666:return Ed;case 35674:return Td;case 35675:return Ad;case 35676:return Cd;case 5124:case 35670:return Ld;case 35667:case 35671:return Pd;case 35668:case 35672:return Dd;case 35669:case 35673:return Rd;case 5125:return Id;case 36294:return Fd;case 36295:return Od;case 36296:return Nd;case 35678:case 36198:case 36298:case 36306:case 35682:return zd;case 35679:case 36299:case 36307:return Ud;case 35680:case 36300:case 36308:case 36293:return Bd;case 36289:case 36303:case 36311:case 36292:return kd}}function Vd(r,e){r.uniform1fv(this.addr,e)}function Hd(r,e){const t=mi(e,this.size,2);r.uniform2fv(this.addr,t)}function Wd(r,e){const t=mi(e,this.size,3);r.uniform3fv(this.addr,t)}function jd(r,e){const t=mi(e,this.size,4);r.uniform4fv(this.addr,t)}function Xd(r,e){const t=mi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function qd(r,e){const t=mi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Yd(r,e){const t=mi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Zd(r,e){r.uniform1iv(this.addr,e)}function Kd(r,e){r.uniform2iv(this.addr,e)}function Jd(r,e){r.uniform3iv(this.addr,e)}function Qd(r,e){r.uniform4iv(this.addr,e)}function $d(r,e){r.uniform1uiv(this.addr,e)}function eh(r,e){r.uniform2uiv(this.addr,e)}function th(r,e){r.uniform3uiv(this.addr,e)}function nh(r,e){r.uniform4uiv(this.addr,e)}function ih(r,e,t){const n=this.cache,i=e.length,s=fr(t,i);tt(n,s)||(r.uniform1iv(this.addr,s),nt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||No,s[o])}function rh(r,e,t){const n=this.cache,i=e.length,s=fr(t,i);tt(n,s)||(r.uniform1iv(this.addr,s),nt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Uo,s[o])}function sh(r,e,t){const n=this.cache,i=e.length,s=fr(t,i);tt(n,s)||(r.uniform1iv(this.addr,s),nt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Bo,s[o])}function ah(r,e,t){const n=this.cache,i=e.length,s=fr(t,i);tt(n,s)||(r.uniform1iv(this.addr,s),nt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||zo,s[o])}function oh(r){switch(r){case 5126:return Vd;case 35664:return Hd;case 35665:return Wd;case 35666:return jd;case 35674:return Xd;case 35675:return qd;case 35676:return Yd;case 5124:case 35670:return Zd;case 35667:case 35671:return Kd;case 35668:case 35672:return Jd;case 35669:case 35673:return Qd;case 5125:return $d;case 36294:return eh;case 36295:return th;case 36296:return nh;case 35678:case 36198:case 36298:case 36306:case 35682:return ih;case 35679:case 36299:case 36307:return rh;case 35680:case 36300:case 36308:case 36293:return sh;case 36289:case 36303:case 36311:case 36292:return ah}}class lh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Gd(t.type)}}class ch{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=oh(t.type)}}class uh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Zr=/(\w+)(\])?(\[|\.)?/g;function Da(r,e){r.seq.push(e),r.map[e.id]=e}function fh(r,e,t){const n=r.name,i=n.length;for(Zr.lastIndex=0;;){const s=Zr.exec(n),o=Zr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Da(t,c===void 0?new lh(a,r,e):new ch(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new uh(a),Da(t,d)),t=d}}}class sr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);fh(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ra(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let dh=0;function hh(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function ph(r){switch(r){case yn:return["Linear","( value )"];case Be:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Ia(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+hh(r.getShaderSource(e),o)}else return i}function mh(r,e){const t=ph(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function gh(r,e){let t;switch(e){case Fl:t="Linear";break;case Ol:t="Reinhard";break;case Nl:t="OptimizedCineon";break;case vo:t="ACESFilmic";break;case zl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _h(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ei).join(`
`)}function xh(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vh(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ei(r){return r!==""}function Fa(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oa(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bh=/^[ \t]*#include +<([\w\d./]+)>/gm;function cs(r){return r.replace(bh,Mh)}function Mh(r,e){const t=we[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return cs(t)}const Sh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Na(r){return r.replace(Sh,yh)}function yh(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function za(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wh(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===po?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===mo?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function Eh(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case fi:case di:e="ENVMAP_TYPE_CUBE";break;case lr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Th(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case di:e="ENVMAP_MODE_REFRACTION";break}return e}function Ah(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case xo:e="ENVMAP_BLENDING_MULTIPLY";break;case Rl:e="ENVMAP_BLENDING_MIX";break;case Il:e="ENVMAP_BLENDING_ADD";break}return e}function Ch(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Lh(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=wh(t),c=Eh(t),f=Th(t),d=Ah(t),u=Ch(t),m=t.isWebGL2?"":_h(t),x=xh(s),p=i.createProgram();let h,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[x].filter(Ei).join(`
`),h.length>0&&(h+=`
`),g=[m,x].filter(Ei).join(`
`),g.length>0&&(g+=`
`)):(h=[za(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ei).join(`
`),g=[m,za(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zt?"#define TONE_MAPPING":"",t.toneMapping!==Zt?we.tonemapping_pars_fragment:"",t.toneMapping!==Zt?gh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",we.encodings_pars_fragment,mh("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ei).join(`
`)),o=cs(o),o=Fa(o,t),o=Oa(o,t),a=cs(a),a=Fa(a,t),a=Oa(a,t),o=Na(o),a=Na(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,g=["#define varying in",t.glslVersion===aa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===aa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=b+h+o,S=b+g+a,w=Ra(i,35633,v),L=Ra(i,35632,S);if(i.attachShader(p,w),i.attachShader(p,L),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const C=i.getProgramInfoLog(p).trim(),T=i.getShaderInfoLog(w).trim(),G=i.getShaderInfoLog(L).trim();let K=!0,P=!0;if(i.getProgramParameter(p,35714)===!1){K=!1;const N=Ia(i,w,"vertex"),X=Ia(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+C+`
`+N+`
`+X)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(T===""||G==="")&&(P=!1);P&&(this.diagnostics={runnable:K,programLog:C,vertexShader:{log:T,prefix:h},fragmentShader:{log:G,prefix:g}})}i.deleteShader(w),i.deleteShader(L);let F;this.getUniforms=function(){return F===void 0&&(F=new sr(i,p)),F};let _;return this.getAttributes=function(){return _===void 0&&(_=vh(i,p)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=dh++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=L,this}let Ph=0;class Dh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Rh(e),t.set(e,n)),n}}class Rh{constructor(e){this.id=Ph++,this.code=e,this.usedTimes=0}}function Ih(r,e,t,n,i,s,o){const a=new gs,l=new Dh,c=[],f=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let m=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_,C,T,G,K){const P=G.fog,N=K.geometry,X=_.isMeshStandardMaterial?G.environment:null,Z=(_.isMeshStandardMaterial?t:e).get(_.envMap||X),J=Z&&Z.mapping===lr?Z.image.height:null,j=x[_.type];_.precision!==null&&(m=i.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const $=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Y=$!==void 0?$.length:0;let D=0;N.morphAttributes.position!==void 0&&(D=1),N.morphAttributes.normal!==void 0&&(D=2),N.morphAttributes.color!==void 0&&(D=3);let k,ie,ee,se;if(j){const Oe=Xt[j];k=Oe.vertexShader,ie=Oe.fragmentShader}else k=_.vertexShader,ie=_.fragmentShader,l.update(_),ee=l.getVertexShaderID(_),se=l.getFragmentShaderID(_);const I=r.getRenderTarget(),ce=_.alphaTest>0,he=_.clearcoat>0,xe=_.iridescence>0;return{isWebGL2:f,shaderID:j,shaderName:_.type,vertexShader:k,fragmentShader:ie,defines:_.defines,customVertexShaderID:ee,customFragmentShaderID:se,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:u,outputEncoding:I===null?r.outputEncoding:I.isXRRenderTarget===!0?I.texture.encoding:yn,map:!!_.map,matcap:!!_.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:J,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===ic,tangentSpaceNormalMap:_.normalMapType===nc,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===Be,clearcoat:he,clearcoatMap:he&&!!_.clearcoatMap,clearcoatRoughnessMap:he&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:he&&!!_.clearcoatNormalMap,iridescence:xe,iridescenceMap:xe&&!!_.iridescenceMap,iridescenceThicknessMap:xe&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===li,alphaMap:!!_.alphaMap,alphaTest:ce,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!N.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.iridescenceMap||_.iridescenceThicknessMap||_.transmission>0||_.transmissionMap||_.thicknessMap||_.specularIntensityMap||_.specularColorMap||_.sheen>0||_.sheenColorMap||_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!P,useFog:_.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:d,skinning:K.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:D,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&T.length>0,shadowMapType:r.shadowMap.type,toneMapping:_.toneMapped?r.toneMapping:Zt,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ai,flipSided:_.side===Nt,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function h(_){const C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(const T in _.defines)C.push(T),C.push(_.defines[T]);return _.isRawShaderMaterial===!1&&(g(C,_),b(C,_),C.push(r.outputEncoding)),C.push(_.customProgramCacheKey),C.join()}function g(_,C){_.push(C.precision),_.push(C.outputEncoding),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.combine),_.push(C.vertexUvs),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function b(_,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),_.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),_.push(a.mask)}function v(_){const C=x[_.type];let T;if(C){const G=Xt[C];T=Ro.clone(G.uniforms)}else T=_.uniforms;return T}function S(_,C){let T;for(let G=0,K=c.length;G<K;G++){const P=c[G];if(P.cacheKey===C){T=P,++T.usedTimes;break}}return T===void 0&&(T=new Lh(r,C,_,s),c.push(T)),T}function w(_){if(--_.usedTimes===0){const C=c.indexOf(_);c[C]=c[c.length-1],c.pop(),_.destroy()}}function L(_){l.remove(_)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:v,acquireProgram:S,releaseProgram:w,releaseShaderCache:L,programs:c,dispose:F}}function Fh(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Oh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ua(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ba(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d,u,m,x,p,h){let g=r[e];return g===void 0?(g={id:d.id,object:d,geometry:u,material:m,groupOrder:x,renderOrder:d.renderOrder,z:p,group:h},r[e]=g):(g.id=d.id,g.object=d,g.geometry=u,g.material=m,g.groupOrder=x,g.renderOrder=d.renderOrder,g.z=p,g.group=h),e++,g}function a(d,u,m,x,p,h){const g=o(d,u,m,x,p,h);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):t.push(g)}function l(d,u,m,x,p,h){const g=o(d,u,m,x,p,h);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):t.unshift(g)}function c(d,u){t.length>1&&t.sort(d||Oh),n.length>1&&n.sort(u||Ua),i.length>1&&i.sort(u||Ua)}function f(){for(let d=e,u=r.length;d<u;d++){const m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:f,sort:c}}function Nh(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Ba,r.set(n,[o])):i>=s.length?(o=new Ba,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function zh(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new ke};break;case"SpotLight":t={position:new B,direction:new B,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new B,halfWidth:new B,halfHeight:new B};break}return r[e.id]=t,t}}}function Uh(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Bh=0;function kh(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Gh(r,e){const t=new zh,n=Uh(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)i.probe.push(new B);const s=new B,o=new et,a=new et;function l(f,d){let u=0,m=0,x=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let p=0,h=0,g=0,b=0,v=0,S=0,w=0,L=0,F=0,_=0;f.sort(kh);const C=d!==!0?Math.PI:1;for(let G=0,K=f.length;G<K;G++){const P=f[G],N=P.color,X=P.intensity,Z=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=N.r*X*C,m+=N.g*X*C,x+=N.b*X*C;else if(P.isLightProbe)for(let j=0;j<9;j++)i.probe[j].addScaledVector(P.sh.coefficients[j],X);else if(P.isDirectionalLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*C),P.castShadow){const $=P.shadow,Y=n.get(P);Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=P.shadow.matrix,S++}i.directional[p]=j,p++}else if(P.isSpotLight){const j=t.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(N).multiplyScalar(X*C),j.distance=Z,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,i.spot[g]=j;const $=P.shadow;if(P.map&&(i.spotLightMap[F]=P.map,F++,$.updateMatrices(P),P.castShadow&&_++),i.spotLightMatrix[g]=$.matrix,P.castShadow){const Y=n.get(P);Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,i.spotShadow[g]=Y,i.spotShadowMap[g]=J,L++}g++}else if(P.isRectAreaLight){const j=t.get(P);j.color.copy(N).multiplyScalar(X),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),i.rectArea[b]=j,b++}else if(P.isPointLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*C),j.distance=P.distance,j.decay=P.decay,P.castShadow){const $=P.shadow,Y=n.get(P);Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,Y.shadowCameraNear=$.camera.near,Y.shadowCameraFar=$.camera.far,i.pointShadow[h]=Y,i.pointShadowMap[h]=J,i.pointShadowMatrix[h]=P.shadow.matrix,w++}i.point[h]=j,h++}else if(P.isHemisphereLight){const j=t.get(P);j.skyColor.copy(P.color).multiplyScalar(X*C),j.groundColor.copy(P.groundColor).multiplyScalar(X*C),i.hemi[v]=j,v++}}b>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=x;const T=i.hash;(T.directionalLength!==p||T.pointLength!==h||T.spotLength!==g||T.rectAreaLength!==b||T.hemiLength!==v||T.numDirectionalShadows!==S||T.numPointShadows!==w||T.numSpotShadows!==L||T.numSpotMaps!==F)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=b,i.point.length=h,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=L+F-_,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=_,T.directionalLength=p,T.pointLength=h,T.spotLength=g,T.rectAreaLength=b,T.hemiLength=v,T.numDirectionalShadows=S,T.numPointShadows=w,T.numSpotShadows=L,T.numSpotMaps=F,i.version=Bh++)}function c(f,d){let u=0,m=0,x=0,p=0,h=0;const g=d.matrixWorldInverse;for(let b=0,v=f.length;b<v;b++){const S=f[b];if(S.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),u++}else if(S.isSpotLight){const w=i.spot[x];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),x++}else if(S.isRectAreaLight){const w=i.rectArea[p];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),a.identity(),o.copy(S.matrixWorld),o.premultiply(g),a.extractRotation(o),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),p++}else if(S.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),m++}else if(S.isHemisphereLight){const w=i.hemi[h];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(g),h++}}}return{setup:l,setupView:c,state:i}}function ka(r,e){const t=new Gh(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Vh(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new ka(r,e),t.set(s,[l])):o>=a.length?(l=new ka(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Hh extends cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ec,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wh extends cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new B,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xh=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qh(r,e,t){let n=new xs;const i=new Ee,s=new Ee,o=new lt,a=new Hh({depthPacking:tc}),l=new Wh,c={},f=t.maxTextureSize,d={0:Nt,1:un,2:Ai},u=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:jh,fragmentShader:Xh}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const x=new mn;x.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new qt(x,u),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=po,this.render=function(S,w,L){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||S.length===0)return;const F=r.getRenderTarget(),_=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),T=r.state;T.setBlending(Sn),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);for(let G=0,K=S.length;G<K;G++){const P=S[G],N=P.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const X=N.getFrameExtents();if(i.multiply(X),s.copy(N.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/X.x),i.x=s.x*X.x,N.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/X.y),i.y=s.y*X.y,N.mapSize.y=s.y)),N.map===null){const J=this.type!==wi?{minFilter:ht,magFilter:ht}:{};N.map=new wn(i.x,i.y,J),N.map.texture.name=P.name+".shadowMap",N.camera.updateProjectionMatrix()}r.setRenderTarget(N.map),r.clear();const Z=N.getViewportCount();for(let J=0;J<Z;J++){const j=N.getViewport(J);o.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),T.viewport(o),N.updateMatrices(P,J),n=N.getFrustum(),v(w,L,N.camera,P,this.type)}N.isPointLightShadow!==!0&&this.type===wi&&g(N,L),N.needsUpdate=!1}h.needsUpdate=!1,r.setRenderTarget(F,_,C)};function g(S,w){const L=e.update(p);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new wn(i.x,i.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(w,null,L,u,p,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(w,null,L,m,p,null)}function b(S,w,L,F,_,C){let T=null;const G=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(G!==void 0)T=G;else if(T=L.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const K=T.uuid,P=w.uuid;let N=c[K];N===void 0&&(N={},c[K]=N);let X=N[P];X===void 0&&(X=T.clone(),N[P]=X),T=X}return T.visible=w.visible,T.wireframe=w.wireframe,C===wi?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:d[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,L.isPointLight===!0&&T.isMeshDistanceMaterial===!0&&(T.referencePosition.setFromMatrixPosition(L.matrixWorld),T.nearDistance=F,T.farDistance=_),T}function v(S,w,L,F,_){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&_===wi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);const G=e.update(S),K=S.material;if(Array.isArray(K)){const P=G.groups;for(let N=0,X=P.length;N<X;N++){const Z=P[N],J=K[Z.materialIndex];if(J&&J.visible){const j=b(S,J,F,L.near,L.far,_);r.renderBufferDirect(L,null,G,j,S,Z)}}}else if(K.visible){const P=b(S,K,F,L.near,L.far,_);r.renderBufferDirect(L,null,G,P,S,null)}}const T=S.children;for(let G=0,K=T.length;G<K;G++)v(T[G],w,L,F,_)}}function Yh(r,e,t){const n=t.isWebGL2;function i(){let R=!1;const H=new lt;let Q=null;const ue=new lt(0,0,0,0);return{setMask:function(ge){Q!==ge&&!R&&(r.colorMask(ge,ge,ge,ge),Q=ge)},setLocked:function(ge){R=ge},setClear:function(ge,Ne,rt,ft,En){En===!0&&(ge*=ft,Ne*=ft,rt*=ft),H.set(ge,Ne,rt,ft),ue.equals(H)===!1&&(r.clearColor(ge,Ne,rt,ft),ue.copy(H))},reset:function(){R=!1,Q=null,ue.set(-1,0,0,0)}}}function s(){let R=!1,H=null,Q=null,ue=null;return{setTest:function(ge){ge?ce(2929):he(2929)},setMask:function(ge){H!==ge&&!R&&(r.depthMask(ge),H=ge)},setFunc:function(ge){if(Q!==ge){switch(ge){case El:r.depthFunc(512);break;case Tl:r.depthFunc(519);break;case Al:r.depthFunc(513);break;case ns:r.depthFunc(515);break;case Cl:r.depthFunc(514);break;case Ll:r.depthFunc(518);break;case Pl:r.depthFunc(516);break;case Dl:r.depthFunc(517);break;default:r.depthFunc(515)}Q=ge}},setLocked:function(ge){R=ge},setClear:function(ge){ue!==ge&&(r.clearDepth(ge),ue=ge)},reset:function(){R=!1,H=null,Q=null,ue=null}}}function o(){let R=!1,H=null,Q=null,ue=null,ge=null,Ne=null,rt=null,ft=null,En=null;return{setTest:function(Ge){R||(Ge?ce(2960):he(2960))},setMask:function(Ge){H!==Ge&&!R&&(r.stencilMask(Ge),H=Ge)},setFunc:function(Ge,$t,It){(Q!==Ge||ue!==$t||ge!==It)&&(r.stencilFunc(Ge,$t,It),Q=Ge,ue=$t,ge=It)},setOp:function(Ge,$t,It){(Ne!==Ge||rt!==$t||ft!==It)&&(r.stencilOp(Ge,$t,It),Ne=Ge,rt=$t,ft=It)},setLocked:function(Ge){R=Ge},setClear:function(Ge){En!==Ge&&(r.clearStencil(Ge),En=Ge)},reset:function(){R=!1,H=null,Q=null,ue=null,ge=null,Ne=null,rt=null,ft=null,En=null}}}const a=new i,l=new s,c=new o,f=new WeakMap,d=new WeakMap;let u={},m={},x=new WeakMap,p=[],h=null,g=!1,b=null,v=null,S=null,w=null,L=null,F=null,_=null,C=!1,T=null,G=null,K=null,P=null,N=null;const X=r.getParameter(35661);let Z=!1,J=0;const j=r.getParameter(7938);j.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(j)[1]),Z=J>=1):j.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Z=J>=2);let $=null,Y={};const D=r.getParameter(3088),k=r.getParameter(2978),ie=new lt().fromArray(D),ee=new lt().fromArray(k);function se(R,H,Q){const ue=new Uint8Array(4),ge=r.createTexture();r.bindTexture(R,ge),r.texParameteri(R,10241,9728),r.texParameteri(R,10240,9728);for(let Ne=0;Ne<Q;Ne++)r.texImage2D(H+Ne,0,6408,1,1,0,6408,5121,ue);return ge}const I={};I[3553]=se(3553,3553,1),I[34067]=se(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ce(2929),l.setFunc(ns),Qe(!1),xt(Ds),ce(2884),it(Sn);function ce(R){u[R]!==!0&&(r.enable(R),u[R]=!0)}function he(R){u[R]!==!1&&(r.disable(R),u[R]=!1)}function xe(R,H){return m[R]!==H?(r.bindFramebuffer(R,H),m[R]=H,n&&(R===36009&&(m[36160]=H),R===36160&&(m[36009]=H)),!0):!1}function de(R,H){let Q=p,ue=!1;if(R)if(Q=x.get(H),Q===void 0&&(Q=[],x.set(H,Q)),R.isWebGLMultipleRenderTargets){const ge=R.texture;if(Q.length!==ge.length||Q[0]!==36064){for(let Ne=0,rt=ge.length;Ne<rt;Ne++)Q[Ne]=36064+Ne;Q.length=ge.length,ue=!0}}else Q[0]!==36064&&(Q[0]=36064,ue=!0);else Q[0]!==1029&&(Q[0]=1029,ue=!0);ue&&(t.isWebGL2?r.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Oe(R){return h!==R?(r.useProgram(R),h=R,!0):!1}const Se={[ai]:32774,[pl]:32778,[ml]:32779};if(n)Se[Os]=32775,Se[Ns]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(Se[Os]=R.MIN_EXT,Se[Ns]=R.MAX_EXT)}const ve={[gl]:0,[_l]:1,[xl]:768,[go]:770,[wl]:776,[Sl]:774,[bl]:772,[vl]:769,[_o]:771,[yl]:775,[Ml]:773};function it(R,H,Q,ue,ge,Ne,rt,ft){if(R===Sn){g===!0&&(he(3042),g=!1);return}if(g===!1&&(ce(3042),g=!0),R!==hl){if(R!==b||ft!==C){if((v!==ai||L!==ai)&&(r.blendEquation(32774),v=ai,L=ai),ft)switch(R){case li:r.blendFuncSeparate(1,771,1,771);break;case Rs:r.blendFunc(1,1);break;case Is:r.blendFuncSeparate(0,769,0,1);break;case Fs:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case li:r.blendFuncSeparate(770,771,1,771);break;case Rs:r.blendFunc(770,1);break;case Is:r.blendFuncSeparate(0,769,0,1);break;case Fs:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}S=null,w=null,F=null,_=null,b=R,C=ft}return}ge=ge||H,Ne=Ne||Q,rt=rt||ue,(H!==v||ge!==L)&&(r.blendEquationSeparate(Se[H],Se[ge]),v=H,L=ge),(Q!==S||ue!==w||Ne!==F||rt!==_)&&(r.blendFuncSeparate(ve[Q],ve[ue],ve[Ne],ve[rt]),S=Q,w=ue,F=Ne,_=rt),b=R,C=!1}function Je(R,H){R.side===Ai?he(2884):ce(2884);let Q=R.side===Nt;H&&(Q=!Q),Qe(Q),R.blending===li&&R.transparent===!1?it(Sn):it(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const ue=R.stencilWrite;c.setTest(ue),ue&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ze(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ce(32926):he(32926)}function Qe(R){T!==R&&(R?r.frontFace(2304):r.frontFace(2305),T=R)}function xt(R){R!==fl?(ce(2884),R!==G&&(R===Ds?r.cullFace(1029):R===dl?r.cullFace(1028):r.cullFace(1032))):he(2884),G=R}function qe(R){R!==K&&(Z&&r.lineWidth(R),K=R)}function ze(R,H,Q){R?(ce(32823),(P!==H||N!==Q)&&(r.polygonOffset(H,Q),P=H,N=Q)):he(32823)}function Rt(R){R?ce(3089):he(3089)}function St(R){R===void 0&&(R=33984+X-1),$!==R&&(r.activeTexture(R),$=R)}function E(R,H,Q){Q===void 0&&($===null?Q=33984+X-1:Q=$);let ue=Y[Q];ue===void 0&&(ue={type:void 0,texture:void 0},Y[Q]=ue),(ue.type!==R||ue.texture!==H)&&($!==Q&&(r.activeTexture(Q),$=Q),r.bindTexture(R,H||I[R]),ue.type=R,ue.texture=H)}function M(){const R=Y[$];R!==void 0&&R.type!==void 0&&(r.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function V(){try{r.compressedTexImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function te(){try{r.compressedTexImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ne(){try{r.texSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ae(){try{r.texSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function be(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function A(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function O(){try{r.texStorage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(){try{r.texStorage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function fe(){try{r.texImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(){try{r.texImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function me(R){ie.equals(R)===!1&&(r.scissor(R.x,R.y,R.z,R.w),ie.copy(R))}function pe(R){ee.equals(R)===!1&&(r.viewport(R.x,R.y,R.z,R.w),ee.copy(R))}function Le(R,H){let Q=d.get(H);Q===void 0&&(Q=new WeakMap,d.set(H,Q));let ue=Q.get(R);ue===void 0&&(ue=r.getUniformBlockIndex(H,R.name),Q.set(R,ue))}function Pe(R,H){const ue=d.get(H).get(R);f.get(H)!==ue&&(r.uniformBlockBinding(H,ue,R.__bindingPointIndex),f.set(H,ue))}function Ue(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},$=null,Y={},m={},x=new WeakMap,p=[],h=null,g=!1,b=null,v=null,S=null,w=null,L=null,F=null,_=null,C=!1,T=null,G=null,K=null,P=null,N=null,ie.set(0,0,r.canvas.width,r.canvas.height),ee.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ce,disable:he,bindFramebuffer:xe,drawBuffers:de,useProgram:Oe,setBlending:it,setMaterial:Je,setFlipSided:Qe,setCullFace:xt,setLineWidth:qe,setPolygonOffset:ze,setScissorTest:Rt,activeTexture:St,bindTexture:E,unbindTexture:M,compressedTexImage2D:V,compressedTexImage3D:te,texImage2D:fe,texImage3D:oe,updateUBOMapping:Le,uniformBlockBinding:Pe,texStorage2D:O,texStorage3D:le,texSubImage2D:ne,texSubImage3D:ae,compressedTexSubImage2D:be,compressedTexSubImage3D:A,scissor:me,viewport:pe,reset:Ue}}function Zh(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,f=i.maxTextureSize,d=i.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let p;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,M){return g?new OffscreenCanvas(E,M):Di("canvas")}function v(E,M,V,te){let ne=1;if((E.width>te||E.height>te)&&(ne=te/Math.max(E.width,E.height)),ne<1||M===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ae=M?ls:Math.floor,be=ae(ne*E.width),A=ae(ne*E.height);p===void 0&&(p=b(be,A));const O=V?b(be,A):p;return O.width=be,O.height=A,O.getContext("2d").drawImage(E,0,0,be,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+be+"x"+A+")."),O}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function S(E){return la(E.width)&&la(E.height)}function w(E){return a?!1:E.wrapS!==Gt||E.wrapT!==Gt||E.minFilter!==ht&&E.minFilter!==Ot}function L(E,M){return E.generateMipmaps&&M&&E.minFilter!==ht&&E.minFilter!==Ot}function F(E){r.generateMipmap(E)}function _(E,M,V,te,ne=!1){if(a===!1)return M;if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ae=M;return M===6403&&(V===5126&&(ae=33326),V===5131&&(ae=33325),V===5121&&(ae=33321)),M===33319&&(V===5126&&(ae=33328),V===5131&&(ae=33327),V===5121&&(ae=33323)),M===6408&&(V===5126&&(ae=34836),V===5131&&(ae=34842),V===5121&&(ae=te===Be&&ne===!1?35907:32856),V===32819&&(ae=32854),V===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function C(E,M,V){return L(E,V)===!0||E.isFramebufferTexture&&E.minFilter!==ht&&E.minFilter!==Ot?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function T(E){return E===ht||E===zs||E===vr?9728:9729}function G(E){const M=E.target;M.removeEventListener("dispose",G),P(M),M.isVideoTexture&&x.delete(M)}function K(E){const M=E.target;M.removeEventListener("dispose",K),X(M)}function P(E){const M=n.get(E);if(M.__webglInit===void 0)return;const V=E.source,te=h.get(V);if(te){const ne=te[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&N(E),Object.keys(te).length===0&&h.delete(V)}n.remove(E)}function N(E){const M=n.get(E);r.deleteTexture(M.__webglTexture);const V=E.source,te=h.get(V);delete te[M.__cacheKey],o.memory.textures--}function X(E){const M=E.texture,V=n.get(E),te=n.get(M);if(te.__webglTexture!==void 0&&(r.deleteTexture(te.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)r.deleteFramebuffer(V.__webglFramebuffer[ne]),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[ne]);else{if(r.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ne=0;ne<V.__webglColorRenderbuffer.length;ne++)V.__webglColorRenderbuffer[ne]&&r.deleteRenderbuffer(V.__webglColorRenderbuffer[ne]);V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ne=0,ae=M.length;ne<ae;ne++){const be=n.get(M[ne]);be.__webglTexture&&(r.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(M[ne])}n.remove(M),n.remove(E)}let Z=0;function J(){Z=0}function j(){const E=Z;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),Z+=1,E}function $(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.encoding),M.join()}function Y(E,M){const V=n.get(E);if(E.isVideoTexture&&Rt(E),E.isRenderTargetTexture===!1&&E.version>0&&V.__version!==E.version){const te=E.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(V,E,M);return}}t.bindTexture(3553,V.__webglTexture,33984+M)}function D(E,M){const V=n.get(E);if(E.version>0&&V.__version!==E.version){he(V,E,M);return}t.bindTexture(35866,V.__webglTexture,33984+M)}function k(E,M){const V=n.get(E);if(E.version>0&&V.__version!==E.version){he(V,E,M);return}t.bindTexture(32879,V.__webglTexture,33984+M)}function ie(E,M){const V=n.get(E);if(E.version>0&&V.__version!==E.version){xe(V,E,M);return}t.bindTexture(34067,V.__webglTexture,33984+M)}const ee={[ss]:10497,[Gt]:33071,[as]:33648},se={[ht]:9728,[zs]:9984,[vr]:9986,[Ot]:9729,[Ul]:9985,[Ci]:9987};function I(E,M,V){if(V?(r.texParameteri(E,10242,ee[M.wrapS]),r.texParameteri(E,10243,ee[M.wrapT]),(E===32879||E===35866)&&r.texParameteri(E,32882,ee[M.wrapR]),r.texParameteri(E,10240,se[M.magFilter]),r.texParameteri(E,10241,se[M.minFilter])):(r.texParameteri(E,10242,33071),r.texParameteri(E,10243,33071),(E===32879||E===35866)&&r.texParameteri(E,32882,33071),(M.wrapS!==Gt||M.wrapT!==Gt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(E,10240,T(M.magFilter)),r.texParameteri(E,10241,T(M.minFilter)),M.minFilter!==ht&&M.minFilter!==Ot&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===ht||M.minFilter!==vr&&M.minFilter!==Ci||M.type===zn&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Li&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(r.texParameterf(E,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function ce(E,M){let V=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",G));const te=M.source;let ne=h.get(te);ne===void 0&&(ne={},h.set(te,ne));const ae=$(M);if(ae!==E.__cacheKey){ne[ae]===void 0&&(ne[ae]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ne[ae].usedTimes++;const be=ne[E.__cacheKey];be!==void 0&&(ne[E.__cacheKey].usedTimes--,be.usedTimes===0&&N(M)),E.__cacheKey=ae,E.__webglTexture=ne[ae].texture}return V}function he(E,M,V){let te=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=35866),M.isData3DTexture&&(te=32879);const ne=ce(E,M),ae=M.source;t.bindTexture(te,E.__webglTexture,33984+V);const be=n.get(ae);if(ae.version!==be.__version||ne===!0){t.activeTexture(33984+V),r.pixelStorei(37440,M.flipY),r.pixelStorei(37441,M.premultiplyAlpha),r.pixelStorei(3317,M.unpackAlignment),r.pixelStorei(37443,0);const A=w(M)&&S(M.image)===!1;let O=v(M.image,A,!1,f);O=St(M,O);const le=S(O)||a,fe=s.convert(M.format,M.encoding);let oe=s.convert(M.type),me=_(M.internalFormat,fe,oe,M.encoding,M.isVideoTexture);I(te,M,le);let pe;const Le=M.mipmaps,Pe=a&&M.isVideoTexture!==!0,Ue=be.__version===void 0||ne===!0,R=C(M,O,le);if(M.isDepthTexture)me=6402,a?M.type===zn?me=36012:M.type===Nn?me=33190:M.type===ci?me=35056:me=33189:M.type===zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Un&&me===6402&&M.type!==Mo&&M.type!==Nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Nn,oe=s.convert(M.type)),M.format===hi&&me===6402&&(me=34041,M.type!==ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ci,oe=s.convert(M.type))),Ue&&(Pe?t.texStorage2D(3553,1,me,O.width,O.height):t.texImage2D(3553,0,me,O.width,O.height,0,fe,oe,null));else if(M.isDataTexture)if(Le.length>0&&le){Pe&&Ue&&t.texStorage2D(3553,R,me,Le[0].width,Le[0].height);for(let H=0,Q=Le.length;H<Q;H++)pe=Le[H],Pe?t.texSubImage2D(3553,H,0,0,pe.width,pe.height,fe,oe,pe.data):t.texImage2D(3553,H,me,pe.width,pe.height,0,fe,oe,pe.data);M.generateMipmaps=!1}else Pe?(Ue&&t.texStorage2D(3553,R,me,O.width,O.height),t.texSubImage2D(3553,0,0,0,O.width,O.height,fe,oe,O.data)):t.texImage2D(3553,0,me,O.width,O.height,0,fe,oe,O.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Pe&&Ue&&t.texStorage3D(35866,R,me,Le[0].width,Le[0].height,O.depth);for(let H=0,Q=Le.length;H<Q;H++)pe=Le[H],M.format!==Vt?fe!==null?Pe?t.compressedTexSubImage3D(35866,H,0,0,0,pe.width,pe.height,O.depth,fe,pe.data,0,0):t.compressedTexImage3D(35866,H,me,pe.width,pe.height,O.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage3D(35866,H,0,0,0,pe.width,pe.height,O.depth,fe,oe,pe.data):t.texImage3D(35866,H,me,pe.width,pe.height,O.depth,0,fe,oe,pe.data)}else{Pe&&Ue&&t.texStorage2D(3553,R,me,Le[0].width,Le[0].height);for(let H=0,Q=Le.length;H<Q;H++)pe=Le[H],M.format!==Vt?fe!==null?Pe?t.compressedTexSubImage2D(3553,H,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(3553,H,me,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage2D(3553,H,0,0,pe.width,pe.height,fe,oe,pe.data):t.texImage2D(3553,H,me,pe.width,pe.height,0,fe,oe,pe.data)}else if(M.isDataArrayTexture)Pe?(Ue&&t.texStorage3D(35866,R,me,O.width,O.height,O.depth),t.texSubImage3D(35866,0,0,0,0,O.width,O.height,O.depth,fe,oe,O.data)):t.texImage3D(35866,0,me,O.width,O.height,O.depth,0,fe,oe,O.data);else if(M.isData3DTexture)Pe?(Ue&&t.texStorage3D(32879,R,me,O.width,O.height,O.depth),t.texSubImage3D(32879,0,0,0,0,O.width,O.height,O.depth,fe,oe,O.data)):t.texImage3D(32879,0,me,O.width,O.height,O.depth,0,fe,oe,O.data);else if(M.isFramebufferTexture){if(Ue)if(Pe)t.texStorage2D(3553,R,me,O.width,O.height);else{let H=O.width,Q=O.height;for(let ue=0;ue<R;ue++)t.texImage2D(3553,ue,me,H,Q,0,fe,oe,null),H>>=1,Q>>=1}}else if(Le.length>0&&le){Pe&&Ue&&t.texStorage2D(3553,R,me,Le[0].width,Le[0].height);for(let H=0,Q=Le.length;H<Q;H++)pe=Le[H],Pe?t.texSubImage2D(3553,H,0,0,fe,oe,pe):t.texImage2D(3553,H,me,fe,oe,pe);M.generateMipmaps=!1}else Pe?(Ue&&t.texStorage2D(3553,R,me,O.width,O.height),t.texSubImage2D(3553,0,0,0,fe,oe,O)):t.texImage2D(3553,0,me,fe,oe,O);L(M,le)&&F(te),be.__version=ae.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function xe(E,M,V){if(M.image.length!==6)return;const te=ce(E,M),ne=M.source;t.bindTexture(34067,E.__webglTexture,33984+V);const ae=n.get(ne);if(ne.version!==ae.__version||te===!0){t.activeTexture(33984+V),r.pixelStorei(37440,M.flipY),r.pixelStorei(37441,M.premultiplyAlpha),r.pixelStorei(3317,M.unpackAlignment),r.pixelStorei(37443,0);const be=M.isCompressedTexture||M.image[0].isCompressedTexture,A=M.image[0]&&M.image[0].isDataTexture,O=[];for(let H=0;H<6;H++)!be&&!A?O[H]=v(M.image[H],!1,!0,c):O[H]=A?M.image[H].image:M.image[H],O[H]=St(M,O[H]);const le=O[0],fe=S(le)||a,oe=s.convert(M.format,M.encoding),me=s.convert(M.type),pe=_(M.internalFormat,oe,me,M.encoding),Le=a&&M.isVideoTexture!==!0,Pe=ae.__version===void 0||te===!0;let Ue=C(M,le,fe);I(34067,M,fe);let R;if(be){Le&&Pe&&t.texStorage2D(34067,Ue,pe,le.width,le.height);for(let H=0;H<6;H++){R=O[H].mipmaps;for(let Q=0;Q<R.length;Q++){const ue=R[Q];M.format!==Vt?oe!==null?Le?t.compressedTexSubImage2D(34069+H,Q,0,0,ue.width,ue.height,oe,ue.data):t.compressedTexImage2D(34069+H,Q,pe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(34069+H,Q,0,0,ue.width,ue.height,oe,me,ue.data):t.texImage2D(34069+H,Q,pe,ue.width,ue.height,0,oe,me,ue.data)}}}else{R=M.mipmaps,Le&&Pe&&(R.length>0&&Ue++,t.texStorage2D(34067,Ue,pe,O[0].width,O[0].height));for(let H=0;H<6;H++)if(A){Le?t.texSubImage2D(34069+H,0,0,0,O[H].width,O[H].height,oe,me,O[H].data):t.texImage2D(34069+H,0,pe,O[H].width,O[H].height,0,oe,me,O[H].data);for(let Q=0;Q<R.length;Q++){const ge=R[Q].image[H].image;Le?t.texSubImage2D(34069+H,Q+1,0,0,ge.width,ge.height,oe,me,ge.data):t.texImage2D(34069+H,Q+1,pe,ge.width,ge.height,0,oe,me,ge.data)}}else{Le?t.texSubImage2D(34069+H,0,0,0,oe,me,O[H]):t.texImage2D(34069+H,0,pe,oe,me,O[H]);for(let Q=0;Q<R.length;Q++){const ue=R[Q];Le?t.texSubImage2D(34069+H,Q+1,0,0,oe,me,ue.image[H]):t.texImage2D(34069+H,Q+1,pe,oe,me,ue.image[H])}}}L(M,fe)&&F(34067),ae.__version=ne.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function de(E,M,V,te,ne){const ae=s.convert(V.format,V.encoding),be=s.convert(V.type),A=_(V.internalFormat,ae,be,V.encoding);n.get(M).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,A,M.width,M.height,M.depth,0,ae,be,null):t.texImage2D(ne,0,A,M.width,M.height,0,ae,be,null)),t.bindFramebuffer(36160,E),ze(M)?u.framebufferTexture2DMultisampleEXT(36160,te,ne,n.get(V).__webglTexture,0,qe(M)):(ne===3553||ne>=34069&&ne<=34074)&&r.framebufferTexture2D(36160,te,ne,n.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function Oe(E,M,V){if(r.bindRenderbuffer(36161,E),M.depthBuffer&&!M.stencilBuffer){let te=33189;if(V||ze(M)){const ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===zn?te=36012:ne.type===Nn&&(te=33190));const ae=qe(M);ze(M)?u.renderbufferStorageMultisampleEXT(36161,ae,te,M.width,M.height):r.renderbufferStorageMultisample(36161,ae,te,M.width,M.height)}else r.renderbufferStorage(36161,te,M.width,M.height);r.framebufferRenderbuffer(36160,36096,36161,E)}else if(M.depthBuffer&&M.stencilBuffer){const te=qe(M);V&&ze(M)===!1?r.renderbufferStorageMultisample(36161,te,35056,M.width,M.height):ze(M)?u.renderbufferStorageMultisampleEXT(36161,te,35056,M.width,M.height):r.renderbufferStorage(36161,34041,M.width,M.height),r.framebufferRenderbuffer(36160,33306,36161,E)}else{const te=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0;ne<te.length;ne++){const ae=te[ne],be=s.convert(ae.format,ae.encoding),A=s.convert(ae.type),O=_(ae.internalFormat,be,A,ae.encoding),le=qe(M);V&&ze(M)===!1?r.renderbufferStorageMultisample(36161,le,O,M.width,M.height):ze(M)?u.renderbufferStorageMultisampleEXT(36161,le,O,M.width,M.height):r.renderbufferStorage(36161,O,M.width,M.height)}}r.bindRenderbuffer(36161,null)}function Se(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);const te=n.get(M.depthTexture).__webglTexture,ne=qe(M);if(M.depthTexture.format===Un)ze(M)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ne):r.framebufferTexture2D(36160,36096,3553,te,0);else if(M.depthTexture.format===hi)ze(M)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ne):r.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function ve(E){const M=n.get(E),V=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Se(M.__webglFramebuffer,E)}else if(V){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=r.createRenderbuffer(),Oe(M.__webglDepthbuffer[te],E,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),Oe(M.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function it(E,M,V){const te=n.get(E);M!==void 0&&de(te.__webglFramebuffer,E,E.texture,36064,3553),V!==void 0&&ve(E)}function Je(E){const M=E.texture,V=n.get(E),te=n.get(M);E.addEventListener("dispose",K),E.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=M.version,o.memory.textures++);const ne=E.isWebGLCubeRenderTarget===!0,ae=E.isWebGLMultipleRenderTargets===!0,be=S(E)||a;if(ne){V.__webglFramebuffer=[];for(let A=0;A<6;A++)V.__webglFramebuffer[A]=r.createFramebuffer()}else{if(V.__webglFramebuffer=r.createFramebuffer(),ae)if(i.drawBuffers){const A=E.texture;for(let O=0,le=A.length;O<le;O++){const fe=n.get(A[O]);fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&ze(E)===!1){const A=ae?M:[M];V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let O=0;O<A.length;O++){const le=A[O];V.__webglColorRenderbuffer[O]=r.createRenderbuffer(),r.bindRenderbuffer(36161,V.__webglColorRenderbuffer[O]);const fe=s.convert(le.format,le.encoding),oe=s.convert(le.type),me=_(le.internalFormat,fe,oe,le.encoding,E.isXRRenderTarget===!0),pe=qe(E);r.renderbufferStorageMultisample(36161,pe,me,E.width,E.height),r.framebufferRenderbuffer(36160,36064+O,36161,V.__webglColorRenderbuffer[O])}r.bindRenderbuffer(36161,null),E.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Oe(V.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,te.__webglTexture),I(34067,M,be);for(let A=0;A<6;A++)de(V.__webglFramebuffer[A],E,M,36064,34069+A);L(M,be)&&F(34067),t.unbindTexture()}else if(ae){const A=E.texture;for(let O=0,le=A.length;O<le;O++){const fe=A[O],oe=n.get(fe);t.bindTexture(3553,oe.__webglTexture),I(3553,fe,be),de(V.__webglFramebuffer,E,fe,36064+O,3553),L(fe,be)&&F(3553)}t.unbindTexture()}else{let A=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?A=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(A,te.__webglTexture),I(A,M,be),de(V.__webglFramebuffer,E,M,36064,A),L(M,be)&&F(A),t.unbindTexture()}E.depthBuffer&&ve(E)}function Qe(E){const M=S(E)||a,V=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let te=0,ne=V.length;te<ne;te++){const ae=V[te];if(L(ae,M)){const be=E.isWebGLCubeRenderTarget?34067:3553,A=n.get(ae).__webglTexture;t.bindTexture(be,A),F(be),t.unbindTexture()}}}function xt(E){if(a&&E.samples>0&&ze(E)===!1){const M=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],V=E.width,te=E.height;let ne=16384;const ae=[],be=E.stencilBuffer?33306:36096,A=n.get(E),O=E.isWebGLMultipleRenderTargets===!0;if(O)for(let le=0;le<M.length;le++)t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+le,36161,null),t.bindFramebuffer(36160,A.__webglFramebuffer),r.framebufferTexture2D(36009,36064+le,3553,null,0);t.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,A.__webglFramebuffer);for(let le=0;le<M.length;le++){ae.push(36064+le),E.depthBuffer&&ae.push(be);const fe=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(fe===!1&&(E.depthBuffer&&(ne|=256),E.stencilBuffer&&(ne|=1024)),O&&r.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[le]),fe===!0&&(r.invalidateFramebuffer(36008,[be]),r.invalidateFramebuffer(36009,[be])),O){const oe=n.get(M[le]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,oe,0)}r.blitFramebuffer(0,0,V,te,0,0,V,te,ne,9728),m&&r.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),O)for(let le=0;le<M.length;le++){t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+le,36161,A.__webglColorRenderbuffer[le]);const fe=n.get(M[le]).__webglTexture;t.bindFramebuffer(36160,A.__webglFramebuffer),r.framebufferTexture2D(36009,36064+le,3553,fe,0)}t.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function qe(E){return Math.min(d,E.samples)}function ze(E){const M=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Rt(E){const M=o.render.frame;x.get(E)!==M&&(x.set(E,M),E.update())}function St(E,M){const V=E.encoding,te=E.format,ne=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===os||V!==yn&&(V===Be?a===!1?e.has("EXT_sRGB")===!0&&te===Vt?(E.format=os,E.minFilter=Ot,E.generateMipmaps=!1):M=wo.sRGBToLinear(M):(te!==Vt||ne!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),M}this.allocateTextureUnit=j,this.resetTextureUnits=J,this.setTexture2D=Y,this.setTexture2DArray=D,this.setTexture3D=k,this.setTextureCube=ie,this.rebindTextures=it,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ze}function Kh(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===Gn)return 5121;if(s===Vl)return 32819;if(s===Hl)return 32820;if(s===Bl)return 5120;if(s===kl)return 5122;if(s===Mo)return 5123;if(s===Gl)return 5124;if(s===Nn)return 5125;if(s===zn)return 5126;if(s===Li)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Wl)return 6406;if(s===Vt)return 6408;if(s===Xl)return 6409;if(s===ql)return 6410;if(s===Un)return 6402;if(s===hi)return 34041;if(s===jl)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===os)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Yl)return 6403;if(s===Zl)return 36244;if(s===Kl)return 33319;if(s===Jl)return 33320;if(s===Ql)return 36249;if(s===br||s===Mr||s===Sr||s===yr)if(o===Be)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===br)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Mr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Sr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===br)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Mr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Sr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===yr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Us||s===Bs||s===ks||s===Gs)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Us)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ks)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$l)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Vs||s===Hs)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Vs)return o===Be?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Hs)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ws||s===js||s===Xs||s===qs||s===Ys||s===Zs||s===Ks||s===Js||s===Qs||s===$s||s===ea||s===ta||s===na||s===ia)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ws)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===js)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Xs)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===qs)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ys)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zs)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ks)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Js)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Qs)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===$s)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ea)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ta)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===na)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ia)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ra)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ra)return o===Be?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ci?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Jh extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ir extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qh={type:"move"};class Kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const h=t.getJointPose(p,n),g=this._getHandJoint(c,p);h!==null&&(g.matrix.fromArray(h.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=h.radius),g.visible=h!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=f.position.distanceTo(d.position),m=.02,x=.005;c.inputState.pinching&&u>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qh)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ir;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class $h extends ct{constructor(e,t,n,i,s,o,a,l,c,f){if(f=f!==void 0?f:Un,f!==Un&&f!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Un&&(n=Nn),n===void 0&&f===hi&&(n=ci),super(null,i,s,o,a,l,f,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ht,this.minFilter=l!==void 0?l:ht,this.flipY=!1,this.generateMipmaps=!1}}class ep extends Hn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=null,c=null,f=null,d=null,u=null,m=null;const x=t.getContextAttributes();let p=null,h=null;const g=[],b=[],v=new Set,S=new Map,w=new Lt;w.layers.enable(1),w.viewport=new lt;const L=new Lt;L.layers.enable(2),L.viewport=new lt;const F=[w,L],_=new Jh;_.layers.enable(1),_.layers.enable(2);let C=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let k=g[D];return k===void 0&&(k=new Kr,g[D]=k),k.getTargetRaySpace()},this.getControllerGrip=function(D){let k=g[D];return k===void 0&&(k=new Kr,g[D]=k),k.getGripSpace()},this.getHand=function(D){let k=g[D];return k===void 0&&(k=new Kr,g[D]=k),k.getHandSpace()};function G(D){const k=b.indexOf(D.inputSource);if(k===-1)return;const ie=g[k];ie!==void 0&&ie.dispatchEvent({type:D.type,data:D.inputSource})}function K(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",P);for(let D=0;D<g.length;D++){const k=b[D];k!==null&&(b[D]=null,g[D].disconnect(k))}C=null,T=null,e.setRenderTarget(p),u=null,d=null,f=null,i=null,h=null,Y.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(D){l=D},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",K),i.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,t,k),i.updateRenderState({baseLayer:u}),h=new wn(u.framebufferWidth,u.framebufferHeight,{format:Vt,type:Gn,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let k=null,ie=null,ee=null;x.depth&&(ee=x.stencil?35056:33190,k=x.stencil?hi:Un,ie=x.stencil?ci:Nn);const se={colorFormat:32856,depthFormat:ee,scaleFactor:s};f=new XRWebGLBinding(i,t),d=f.createProjectionLayer(se),i.updateRenderState({layers:[d]}),h=new wn(d.textureWidth,d.textureHeight,{format:Vt,type:Gn,depthTexture:new $h(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const I=e.properties.get(h);I.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),Y.setContext(i),Y.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function P(D){for(let k=0;k<D.removed.length;k++){const ie=D.removed[k],ee=b.indexOf(ie);ee>=0&&(b[ee]=null,g[ee].disconnect(ie))}for(let k=0;k<D.added.length;k++){const ie=D.added[k];let ee=b.indexOf(ie);if(ee===-1){for(let I=0;I<g.length;I++)if(I>=b.length){b.push(ie),ee=I;break}else if(b[I]===null){b[I]=ie,ee=I;break}if(ee===-1)break}const se=g[ee];se&&se.connect(ie)}}const N=new B,X=new B;function Z(D,k,ie){N.setFromMatrixPosition(k.matrixWorld),X.setFromMatrixPosition(ie.matrixWorld);const ee=N.distanceTo(X),se=k.projectionMatrix.elements,I=ie.projectionMatrix.elements,ce=se[14]/(se[10]-1),he=se[14]/(se[10]+1),xe=(se[9]+1)/se[5],de=(se[9]-1)/se[5],Oe=(se[8]-1)/se[0],Se=(I[8]+1)/I[0],ve=ce*Oe,it=ce*Se,Je=ee/(-Oe+Se),Qe=Je*-Oe;k.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Qe),D.translateZ(Je),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const xt=ce+Je,qe=he+Je,ze=ve-Qe,Rt=it+(ee-Qe),St=xe*he/qe*xt,E=de*he/qe*xt;D.projectionMatrix.makePerspective(ze,Rt,St,E,xt,qe)}function J(D,k){k===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(k.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;_.near=L.near=w.near=D.near,_.far=L.far=w.far=D.far,(C!==_.near||T!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),C=_.near,T=_.far);const k=D.parent,ie=_.cameras;J(_,k);for(let se=0;se<ie.length;se++)J(ie[se],k);_.matrixWorld.decompose(_.position,_.quaternion,_.scale),D.matrix.copy(_.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale);const ee=D.children;for(let se=0,I=ee.length;se<I;se++)ee[se].updateMatrixWorld(!0);ie.length===2?Z(_,w,L):_.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return _},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(u!==null)return u.fixedFoveation},this.setFoveation=function(D){d!==null&&(d.fixedFoveation=D),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=D)},this.getPlanes=function(){return v};let j=null;function $(D,k){if(c=k.getViewerPose(l||o),m=k,c!==null){const ie=c.views;u!==null&&(e.setRenderTargetFramebuffer(h,u.framebuffer),e.setRenderTarget(h));let ee=!1;ie.length!==_.cameras.length&&(_.cameras.length=0,ee=!0);for(let se=0;se<ie.length;se++){const I=ie[se];let ce=null;if(u!==null)ce=u.getViewport(I);else{const xe=f.getViewSubImage(d,I);ce=xe.viewport,se===0&&(e.setRenderTargetTextures(h,xe.colorTexture,d.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(h))}let he=F[se];he===void 0&&(he=new Lt,he.layers.enable(se),he.viewport=new lt,F[se]=he),he.matrix.fromArray(I.transform.matrix),he.projectionMatrix.fromArray(I.projectionMatrix),he.viewport.set(ce.x,ce.y,ce.width,ce.height),se===0&&_.matrix.copy(he.matrix),ee===!0&&_.cameras.push(he)}}for(let ie=0;ie<g.length;ie++){const ee=b[ie],se=g[ie];ee!==null&&se!==void 0&&se.update(ee,k,l||o)}if(j&&j(D,k),k.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:k.detectedPlanes});let ie=null;for(const ee of v)k.detectedPlanes.has(ee)||(ie===null&&(ie=[]),ie.push(ee));if(ie!==null)for(const ee of ie)v.delete(ee),S.delete(ee),n.dispatchEvent({type:"planeremoved",data:ee});for(const ee of k.detectedPlanes)if(!v.has(ee))v.add(ee),S.set(ee,k.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ee});else{const se=S.get(ee);ee.lastChangedTime>se&&(S.set(ee,ee.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ee}))}}m=null}const Y=new Fo;Y.setAnimationLoop($),this.setAnimationLoop=function(D){j=D},this.dispose=function(){}}}function tp(r,e){function t(p,h){h.color.getRGB(p.fogColor.value,Do(r)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function n(p,h,g,b,v){h.isMeshBasicMaterial||h.isMeshLambertMaterial?i(p,h):h.isMeshToonMaterial?(i(p,h),f(p,h)):h.isMeshPhongMaterial?(i(p,h),c(p,h)):h.isMeshStandardMaterial?(i(p,h),d(p,h),h.isMeshPhysicalMaterial&&u(p,h,v)):h.isMeshMatcapMaterial?(i(p,h),m(p,h)):h.isMeshDepthMaterial?i(p,h):h.isMeshDistanceMaterial?(i(p,h),x(p,h)):h.isMeshNormalMaterial?i(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?a(p,h,g,b):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function i(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===Nt&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===Nt&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const g=e.get(h).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const S=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*S}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let b;h.map?b=h.map:h.specularMap?b=h.specularMap:h.displacementMap?b=h.displacementMap:h.normalMap?b=h.normalMap:h.bumpMap?b=h.bumpMap:h.roughnessMap?b=h.roughnessMap:h.metalnessMap?b=h.metalnessMap:h.alphaMap?b=h.alphaMap:h.emissiveMap?b=h.emissiveMap:h.clearcoatMap?b=h.clearcoatMap:h.clearcoatNormalMap?b=h.clearcoatNormalMap:h.clearcoatRoughnessMap?b=h.clearcoatRoughnessMap:h.iridescenceMap?b=h.iridescenceMap:h.iridescenceThicknessMap?b=h.iridescenceThicknessMap:h.specularIntensityMap?b=h.specularIntensityMap:h.specularColorMap?b=h.specularColorMap:h.transmissionMap?b=h.transmissionMap:h.thicknessMap?b=h.thicknessMap:h.sheenColorMap?b=h.sheenColorMap:h.sheenRoughnessMap&&(b=h.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix));let v;h.aoMap?v=h.aoMap:h.lightMap&&(v=h.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uv2Transform.value.copy(v.matrix))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function a(p,h,g,b){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*g,p.scale.value=b*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let v;h.map?v=h.map:h.alphaMap&&(v=h.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let g;h.map?g=h.map:h.alphaMap&&(g=h.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function c(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function u(p,h,g){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===Nt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function m(p,h){h.matcap&&(p.matcap.value=h.matcap)}function x(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function np(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(b,v){const S=v.program;n.uniformBlockBinding(b,S)}function c(b,v){let S=i[b.id];S===void 0&&(x(b),S=f(b),i[b.id]=S,b.addEventListener("dispose",h));const w=v.program;n.updateUBOMapping(b,w);const L=e.render.frame;s[b.id]!==L&&(u(b),s[b.id]=L)}function f(b){const v=d();b.__bindingPointIndex=v;const S=r.createBuffer(),w=b.__size,L=b.usage;return r.bindBuffer(35345,S),r.bufferData(35345,w,L),r.bindBuffer(35345,null),r.bindBufferBase(35345,v,S),S}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const v=i[b.id],S=b.uniforms,w=b.__cache;r.bindBuffer(35345,v);for(let L=0,F=S.length;L<F;L++){const _=S[L];if(m(_,L,w)===!0){const C=_.__offset,T=Array.isArray(_.value)?_.value:[_.value];let G=0;for(let K=0;K<T.length;K++){const P=T[K],N=p(P);typeof P=="number"?(_.__data[0]=P,r.bufferSubData(35345,C+G,_.__data)):P.isMatrix3?(_.__data[0]=P.elements[0],_.__data[1]=P.elements[1],_.__data[2]=P.elements[2],_.__data[3]=P.elements[0],_.__data[4]=P.elements[3],_.__data[5]=P.elements[4],_.__data[6]=P.elements[5],_.__data[7]=P.elements[0],_.__data[8]=P.elements[6],_.__data[9]=P.elements[7],_.__data[10]=P.elements[8],_.__data[11]=P.elements[0]):(P.toArray(_.__data,G),G+=N.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,C,_.__data)}}r.bindBuffer(35345,null)}function m(b,v,S){const w=b.value;if(S[v]===void 0){if(typeof w=="number")S[v]=w;else{const L=Array.isArray(w)?w:[w],F=[];for(let _=0;_<L.length;_++)F.push(L[_].clone());S[v]=F}return!0}else if(typeof w=="number"){if(S[v]!==w)return S[v]=w,!0}else{const L=Array.isArray(S[v])?S[v]:[S[v]],F=Array.isArray(w)?w:[w];for(let _=0;_<L.length;_++){const C=L[_];if(C.equals(F[_])===!1)return C.copy(F[_]),!0}}return!1}function x(b){const v=b.uniforms;let S=0;const w=16;let L=0;for(let F=0,_=v.length;F<_;F++){const C=v[F],T={boundary:0,storage:0},G=Array.isArray(C.value)?C.value:[C.value];for(let K=0,P=G.length;K<P;K++){const N=G[K],X=p(N);T.boundary+=X.boundary,T.storage+=X.storage}if(C.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,F>0){L=S%w;const K=w-L;L!==0&&K-T.boundary<0&&(S+=w-L,C.__offset=S)}S+=T.storage}return L=S%w,L>0&&(S+=w-L),b.__size=S,b.__cache={},this}function p(b){const v={boundary:0,storage:0};return typeof b=="number"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function h(b){const v=b.target;v.removeEventListener("dispose",h);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function g(){for(const b in i)r.deleteBuffer(i[b]);o=[],i={},s={}}return{bind:l,update:c,dispose:g}}function ip(){const r=Di("canvas");return r.style.display="block",r}function ko(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:ip(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let f;t!==null?f=t.getContextAttributes().alpha:f=r.alpha!==void 0?r.alpha:!1;let d=null,u=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=yn,this.physicallyCorrectLights=!1,this.toneMapping=Zt,this.toneMappingExposure=1;const p=this;let h=!1,g=0,b=0,v=null,S=-1,w=null;const L=new lt,F=new lt;let _=null,C=e.width,T=e.height,G=1,K=null,P=null;const N=new lt(0,0,C,T),X=new lt(0,0,C,T);let Z=!1;const J=new xs;let j=!1,$=!1,Y=null;const D=new et,k=new Ee,ie=new B,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return v===null?G:1}let I=t;function ce(y,U){for(let W=0;W<y.length;W++){const z=y[W],q=e.getContext(z,U);if(q!==null)return q}return null}try{const y={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ps}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",Le,!1),I===null){const U=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&U.shift(),I=ce(U,y),I===null)throw ce(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let he,xe,de,Oe,Se,ve,it,Je,Qe,xt,qe,ze,Rt,St,E,M,V,te,ne,ae,be,A,O,le;function fe(){he=new pd(I),xe=new ld(I,he,r),he.init(xe),A=new Kh(I,he,xe),de=new Yh(I,he,xe),Oe=new _d,Se=new Fh,ve=new Zh(I,he,de,Se,xe,A,Oe),it=new ud(p),Je=new hd(p),Qe=new Ec(I,xe),O=new ad(I,he,Qe,xe),xt=new md(I,Qe,Oe,O),qe=new Md(I,xt,Qe,Oe),ne=new bd(I,xe,ve),M=new cd(Se),ze=new Ih(p,it,Je,he,xe,O,M),Rt=new tp(p,Se),St=new Nh,E=new Vh(he,xe),te=new sd(p,it,Je,de,qe,f,o),V=new qh(p,qe,xe),le=new np(I,Oe,xe,de),ae=new od(I,he,Oe,xe),be=new gd(I,he,Oe,xe),Oe.programs=ze.programs,p.capabilities=xe,p.extensions=he,p.properties=Se,p.renderLists=St,p.shadowMap=V,p.state=de,p.info=Oe}fe();const oe=new ep(p,I);this.xr=oe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const y=he.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=he.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize(C,T,!1))},this.getSize=function(y){return y.set(C,T)},this.setSize=function(y,U,W){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=y,T=U,e.width=Math.floor(y*G),e.height=Math.floor(U*G),W!==!1&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(C*G,T*G).floor()},this.setDrawingBufferSize=function(y,U,W){C=y,T=U,G=W,e.width=Math.floor(y*W),e.height=Math.floor(U*W),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(L)},this.getViewport=function(y){return y.copy(N)},this.setViewport=function(y,U,W,z){y.isVector4?N.set(y.x,y.y,y.z,y.w):N.set(y,U,W,z),de.viewport(L.copy(N).multiplyScalar(G).floor())},this.getScissor=function(y){return y.copy(X)},this.setScissor=function(y,U,W,z){y.isVector4?X.set(y.x,y.y,y.z,y.w):X.set(y,U,W,z),de.scissor(F.copy(X).multiplyScalar(G).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(y){de.setScissorTest(Z=y)},this.setOpaqueSort=function(y){K=y},this.setTransparentSort=function(y){P=y},this.getClearColor=function(y){return y.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(y=!0,U=!0,W=!0){let z=0;y&&(z|=16384),U&&(z|=256),W&&(z|=1024),I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",Le,!1),St.dispose(),E.dispose(),Se.dispose(),it.dispose(),Je.dispose(),qe.dispose(),O.dispose(),le.dispose(),ze.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ue),oe.removeEventListener("sessionend",ge),Y&&(Y.dispose(),Y=null),Ne.stop()};function me(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const y=Oe.autoReset,U=V.enabled,W=V.autoUpdate,z=V.needsUpdate,q=V.type;fe(),Oe.autoReset=y,V.enabled=U,V.autoUpdate=W,V.needsUpdate=z,V.type=q}function Le(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Pe(y){const U=y.target;U.removeEventListener("dispose",Pe),Ue(U)}function Ue(y){R(y),Se.remove(y)}function R(y){const U=Se.get(y).programs;U!==void 0&&(U.forEach(function(W){ze.releaseProgram(W)}),y.isShaderMaterial&&ze.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,W,z,q,_e){U===null&&(U=ee);const Me=q.isMesh&&q.matrixWorld.determinant()<0,Te=el(y,U,W,z,q);de.setMaterial(z,Me);let Ce=W.index,Fe=1;z.wireframe===!0&&(Ce=xt.getWireframeAttribute(W),Fe=2);const De=W.drawRange,Re=W.attributes.position;let Ye=De.start*Fe,wt=(De.start+De.count)*Fe;_e!==null&&(Ye=Math.max(Ye,_e.start*Fe),wt=Math.min(wt,(_e.start+_e.count)*Fe)),Ce!==null?(Ye=Math.max(Ye,0),wt=Math.min(wt,Ce.count)):Re!=null&&(Ye=Math.max(Ye,0),wt=Math.min(wt,Re.count));const en=wt-Ye;if(en<0||en===1/0)return;O.setup(q,z,Te,W,Ce);let Tn,Ze=ae;if(Ce!==null&&(Tn=Qe.get(Ce),Ze=be,Ze.setIndex(Tn)),q.isMesh)z.wireframe===!0?(de.setLineWidth(z.wireframeLinewidth*se()),Ze.setMode(1)):Ze.setMode(4);else if(q.isLine){let Ie=z.linewidth;Ie===void 0&&(Ie=1),de.setLineWidth(Ie*se()),q.isLineSegments?Ze.setMode(1):q.isLineLoop?Ze.setMode(2):Ze.setMode(3)}else q.isPoints?Ze.setMode(0):q.isSprite&&Ze.setMode(4);if(q.isInstancedMesh)Ze.renderInstances(Ye,en,q.count);else if(W.isInstancedBufferGeometry){const Ie=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,pr=Math.min(W.instanceCount,Ie);Ze.renderInstances(Ye,en,pr)}else Ze.render(Ye,en)},this.compile=function(y,U){function W(z,q,_e){z.transparent===!0&&z.side===zi?(z.side=Nt,z.needsUpdate=!0,It(z,q,_e),z.side=un,z.needsUpdate=!0,It(z,q,_e),z.side=zi):It(z,q,_e)}u=E.get(y),u.init(),x.push(u),y.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(u.pushLight(z),z.castShadow&&u.pushShadow(z))}),u.setupLights(p.physicallyCorrectLights),y.traverse(function(z){const q=z.material;if(q)if(Array.isArray(q))for(let _e=0;_e<q.length;_e++){const Me=q[_e];W(Me,y,z)}else W(q,y,z)}),x.pop(),u=null};let H=null;function Q(y){H&&H(y)}function ue(){Ne.stop()}function ge(){Ne.start()}const Ne=new Fo;Ne.setAnimationLoop(Q),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(y){H=y,oe.setAnimationLoop(y),y===null?Ne.stop():Ne.start()},oe.addEventListener("sessionstart",ue),oe.addEventListener("sessionend",ge),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(U),U=oe.getCamera()),y.isScene===!0&&y.onBeforeRender(p,y,U,v),u=E.get(y,x.length),u.init(),x.push(u),D.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),J.setFromProjectionMatrix(D),$=this.localClippingEnabled,j=M.init(this.clippingPlanes,$,U),d=St.get(y,m.length),d.init(),m.push(d),rt(y,U,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(K,P),j===!0&&M.beginShadows();const W=u.state.shadowsArray;if(V.render(W,y,U),j===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(d,y),u.setupLights(p.physicallyCorrectLights),U.isArrayCamera){const z=U.cameras;for(let q=0,_e=z.length;q<_e;q++){const Me=z[q];ft(d,y,Me,Me.viewport)}}else ft(d,y,U);v!==null&&(ve.updateMultisampleRenderTarget(v),ve.updateRenderTargetMipmap(v)),y.isScene===!0&&y.onAfterRender(p,y,U),O.resetDefaultState(),S=-1,w=null,x.pop(),x.length>0?u=x[x.length-1]:u=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function rt(y,U,W,z){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)u.pushLight(y),y.castShadow&&u.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||J.intersectsSprite(y)){z&&ie.setFromMatrixPosition(y.matrixWorld).applyMatrix4(D);const Me=qe.update(y),Te=y.material;Te.visible&&d.push(y,Me,Te,W,ie.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(y.isSkinnedMesh&&y.skeleton.frame!==Oe.render.frame&&(y.skeleton.update(),y.skeleton.frame=Oe.render.frame),!y.frustumCulled||J.intersectsObject(y))){z&&ie.setFromMatrixPosition(y.matrixWorld).applyMatrix4(D);const Me=qe.update(y),Te=y.material;if(Array.isArray(Te)){const Ce=Me.groups;for(let Fe=0,De=Ce.length;Fe<De;Fe++){const Re=Ce[Fe],Ye=Te[Re.materialIndex];Ye&&Ye.visible&&d.push(y,Me,Ye,W,ie.z,Re)}}else Te.visible&&d.push(y,Me,Te,W,ie.z,null)}}const _e=y.children;for(let Me=0,Te=_e.length;Me<Te;Me++)rt(_e[Me],U,W,z)}function ft(y,U,W,z){const q=y.opaque,_e=y.transmissive,Me=y.transparent;u.setupLightsView(W),_e.length>0&&En(q,U,W),z&&de.viewport(L.copy(z)),q.length>0&&Ge(q,U,W),_e.length>0&&Ge(_e,U,W),Me.length>0&&Ge(Me,U,W),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function En(y,U,W){const z=xe.isWebGL2;Y===null&&(Y=new wn(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")?Li:Gn,minFilter:Ci,samples:z&&s===!0?4:0})),p.getDrawingBufferSize(k),z?Y.setSize(k.x,k.y):Y.setSize(ls(k.x),ls(k.y));const q=p.getRenderTarget();p.setRenderTarget(Y),p.clear();const _e=p.toneMapping;p.toneMapping=Zt,Ge(y,U,W),p.toneMapping=_e,ve.updateMultisampleRenderTarget(Y),ve.updateRenderTargetMipmap(Y),p.setRenderTarget(q)}function Ge(y,U,W){const z=U.isScene===!0?U.overrideMaterial:null;for(let q=0,_e=y.length;q<_e;q++){const Me=y[q],Te=Me.object,Ce=Me.geometry,Fe=z===null?Me.material:z,De=Me.group;Te.layers.test(W.layers)&&$t(Te,U,W,Ce,Fe,De)}}function $t(y,U,W,z,q,_e){y.onBeforeRender(p,U,W,z,q,_e),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),q.onBeforeRender(p,U,W,z,y,_e),q.transparent===!0&&q.side===zi?(q.side=Nt,q.needsUpdate=!0,p.renderBufferDirect(W,U,z,q,y,_e),q.side=un,q.needsUpdate=!0,p.renderBufferDirect(W,U,z,q,y,_e),q.side=zi):p.renderBufferDirect(W,U,z,q,y,_e),y.onAfterRender(p,U,W,z,q,_e)}function It(y,U,W){U.isScene!==!0&&(U=ee);const z=Se.get(y),q=u.state.lights,_e=u.state.shadowsArray,Me=q.state.version,Te=ze.getParameters(y,q.state,_e,U,W),Ce=ze.getProgramCacheKey(Te);let Fe=z.programs;z.environment=y.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(y.isMeshStandardMaterial?Je:it).get(y.envMap||z.environment),Fe===void 0&&(y.addEventListener("dispose",Pe),Fe=new Map,z.programs=Fe);let De=Fe.get(Ce);if(De!==void 0){if(z.currentProgram===De&&z.lightsStateVersion===Me)return Es(y,Te),De}else Te.uniforms=ze.getUniforms(y),y.onBuild(W,Te,p),y.onBeforeCompile(Te,p),De=ze.acquireProgram(Te,Ce),Fe.set(Ce,De),z.uniforms=Te.uniforms;const Re=z.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Re.clippingPlanes=M.uniform),Es(y,Te),z.needsLights=nl(y),z.lightsStateVersion=Me,z.needsLights&&(Re.ambientLightColor.value=q.state.ambient,Re.lightProbe.value=q.state.probe,Re.directionalLights.value=q.state.directional,Re.directionalLightShadows.value=q.state.directionalShadow,Re.spotLights.value=q.state.spot,Re.spotLightShadows.value=q.state.spotShadow,Re.rectAreaLights.value=q.state.rectArea,Re.ltc_1.value=q.state.rectAreaLTC1,Re.ltc_2.value=q.state.rectAreaLTC2,Re.pointLights.value=q.state.point,Re.pointLightShadows.value=q.state.pointShadow,Re.hemisphereLights.value=q.state.hemi,Re.directionalShadowMap.value=q.state.directionalShadowMap,Re.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Re.spotShadowMap.value=q.state.spotShadowMap,Re.spotLightMatrix.value=q.state.spotLightMatrix,Re.spotLightMap.value=q.state.spotLightMap,Re.pointShadowMap.value=q.state.pointShadowMap,Re.pointShadowMatrix.value=q.state.pointShadowMatrix);const Ye=De.getUniforms(),wt=sr.seqWithValue(Ye.seq,Re);return z.currentProgram=De,z.uniformsList=wt,De}function Es(y,U){const W=Se.get(y);W.outputEncoding=U.outputEncoding,W.instancing=U.instancing,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function el(y,U,W,z,q){U.isScene!==!0&&(U=ee),ve.resetTextureUnits();const _e=U.fog,Me=z.isMeshStandardMaterial?U.environment:null,Te=v===null?p.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:yn,Ce=(z.isMeshStandardMaterial?Je:it).get(z.envMap||Me),Fe=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,De=!!z.normalMap&&!!W.attributes.tangent,Re=!!W.morphAttributes.position,Ye=!!W.morphAttributes.normal,wt=!!W.morphAttributes.color,en=z.toneMapped?p.toneMapping:Zt,Tn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ze=Tn!==void 0?Tn.length:0,Ie=Se.get(z),pr=u.state.lights;if(j===!0&&($===!0||y!==w)){const Et=y===w&&z.id===S;M.setState(z,y,Et)}let st=!1;z.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==pr.state.version||Ie.outputEncoding!==Te||q.isInstancedMesh&&Ie.instancing===!1||!q.isInstancedMesh&&Ie.instancing===!0||q.isSkinnedMesh&&Ie.skinning===!1||!q.isSkinnedMesh&&Ie.skinning===!0||Ie.envMap!==Ce||z.fog===!0&&Ie.fog!==_e||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==M.numPlanes||Ie.numIntersection!==M.numIntersection)||Ie.vertexAlphas!==Fe||Ie.vertexTangents!==De||Ie.morphTargets!==Re||Ie.morphNormals!==Ye||Ie.morphColors!==wt||Ie.toneMapping!==en||xe.isWebGL2===!0&&Ie.morphTargetsCount!==Ze)&&(st=!0):(st=!0,Ie.__version=z.version);let An=Ie.currentProgram;st===!0&&(An=It(z,U,q));let Ts=!1,gi=!1,mr=!1;const vt=An.getUniforms(),Cn=Ie.uniforms;if(de.useProgram(An.program)&&(Ts=!0,gi=!0,mr=!0),z.id!==S&&(S=z.id,gi=!0),Ts||w!==y){if(vt.setValue(I,"projectionMatrix",y.projectionMatrix),xe.logarithmicDepthBuffer&&vt.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),w!==y&&(w=y,gi=!0,mr=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const Et=vt.map.cameraPosition;Et!==void 0&&Et.setValue(I,ie.setFromMatrixPosition(y.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&vt.setValue(I,"isOrthographic",y.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||q.isSkinnedMesh)&&vt.setValue(I,"viewMatrix",y.matrixWorldInverse)}if(q.isSkinnedMesh){vt.setOptional(I,q,"bindMatrix"),vt.setOptional(I,q,"bindMatrixInverse");const Et=q.skeleton;Et&&(xe.floatVertexTextures?(Et.boneTexture===null&&Et.computeBoneTexture(),vt.setValue(I,"boneTexture",Et.boneTexture,ve),vt.setValue(I,"boneTextureSize",Et.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const gr=W.morphAttributes;if((gr.position!==void 0||gr.normal!==void 0||gr.color!==void 0&&xe.isWebGL2===!0)&&ne.update(q,W,z,An),(gi||Ie.receiveShadow!==q.receiveShadow)&&(Ie.receiveShadow=q.receiveShadow,vt.setValue(I,"receiveShadow",q.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Cn.envMap.value=Ce,Cn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),gi&&(vt.setValue(I,"toneMappingExposure",p.toneMappingExposure),Ie.needsLights&&tl(Cn,mr),_e&&z.fog===!0&&Rt.refreshFogUniforms(Cn,_e),Rt.refreshMaterialUniforms(Cn,z,G,T,Y),sr.upload(I,Ie.uniformsList,Cn,ve)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(sr.upload(I,Ie.uniformsList,Cn,ve),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&vt.setValue(I,"center",q.center),vt.setValue(I,"modelViewMatrix",q.modelViewMatrix),vt.setValue(I,"normalMatrix",q.normalMatrix),vt.setValue(I,"modelMatrix",q.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Et=z.uniformsGroups;for(let _r=0,il=Et.length;_r<il;_r++)if(xe.isWebGL2){const As=Et[_r];le.update(As,An),le.bind(As,An)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return An}function tl(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function nl(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(y,U,W){Se.get(y.texture).__webglTexture=U,Se.get(y.depthTexture).__webglTexture=W;const z=Se.get(y);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=W===void 0,z.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,U){const W=Se.get(y);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,W=0){v=y,g=U,b=W;let z=!0,q=null,_e=!1,Me=!1;if(y){const Ce=Se.get(y);Ce.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),z=!1):Ce.__webglFramebuffer===void 0?ve.setupRenderTarget(y):Ce.__hasExternalTextures&&ve.rebindTextures(y,Se.get(y.texture).__webglTexture,Se.get(y.depthTexture).__webglTexture);const Fe=y.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Me=!0);const De=Se.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(q=De[U],_e=!0):xe.isWebGL2&&y.samples>0&&ve.useMultisampledRTT(y)===!1?q=Se.get(y).__webglMultisampledFramebuffer:q=De,L.copy(y.viewport),F.copy(y.scissor),_=y.scissorTest}else L.copy(N).multiplyScalar(G).floor(),F.copy(X).multiplyScalar(G).floor(),_=Z;if(de.bindFramebuffer(36160,q)&&xe.drawBuffers&&z&&de.drawBuffers(y,q),de.viewport(L),de.scissor(F),de.setScissorTest(_),_e){const Ce=Se.get(y.texture);I.framebufferTexture2D(36160,36064,34069+U,Ce.__webglTexture,W)}else if(Me){const Ce=Se.get(y.texture),Fe=U||0;I.framebufferTextureLayer(36160,36064,Ce.__webglTexture,W||0,Fe)}S=-1},this.readRenderTargetPixels=function(y,U,W,z,q,_e,Me){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Se.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){de.bindFramebuffer(36160,Te);try{const Ce=y.texture,Fe=Ce.format,De=Ce.type;if(Fe!==Vt&&A.convert(Fe)!==I.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=De===Li&&(he.has("EXT_color_buffer_half_float")||xe.isWebGL2&&he.has("EXT_color_buffer_float"));if(De!==Gn&&A.convert(De)!==I.getParameter(35738)&&!(De===zn&&(xe.isWebGL2||he.has("OES_texture_float")||he.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-z&&W>=0&&W<=y.height-q&&I.readPixels(U,W,z,q,A.convert(Fe),A.convert(De),_e)}finally{const Ce=v!==null?Se.get(v).__webglFramebuffer:null;de.bindFramebuffer(36160,Ce)}}},this.copyFramebufferToTexture=function(y,U,W=0){const z=Math.pow(2,-W),q=Math.floor(U.image.width*z),_e=Math.floor(U.image.height*z);ve.setTexture2D(U,0),I.copyTexSubImage2D(3553,W,0,0,y.x,y.y,q,_e),de.unbindTexture()},this.copyTextureToTexture=function(y,U,W,z=0){const q=U.image.width,_e=U.image.height,Me=A.convert(W.format),Te=A.convert(W.type);ve.setTexture2D(W,0),I.pixelStorei(37440,W.flipY),I.pixelStorei(37441,W.premultiplyAlpha),I.pixelStorei(3317,W.unpackAlignment),U.isDataTexture?I.texSubImage2D(3553,z,y.x,y.y,q,_e,Me,Te,U.image.data):U.isCompressedTexture?I.compressedTexSubImage2D(3553,z,y.x,y.y,U.mipmaps[0].width,U.mipmaps[0].height,Me,U.mipmaps[0].data):I.texSubImage2D(3553,z,y.x,y.y,Me,Te,U.image),z===0&&W.generateMipmaps&&I.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(y,U,W,z,q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=y.max.x-y.min.x+1,Me=y.max.y-y.min.y+1,Te=y.max.z-y.min.z+1,Ce=A.convert(z.format),Fe=A.convert(z.type);let De;if(z.isData3DTexture)ve.setTexture3D(z,0),De=32879;else if(z.isDataArrayTexture)ve.setTexture2DArray(z,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(37440,z.flipY),I.pixelStorei(37441,z.premultiplyAlpha),I.pixelStorei(3317,z.unpackAlignment);const Re=I.getParameter(3314),Ye=I.getParameter(32878),wt=I.getParameter(3316),en=I.getParameter(3315),Tn=I.getParameter(32877),Ze=W.isCompressedTexture?W.mipmaps[0]:W.image;I.pixelStorei(3314,Ze.width),I.pixelStorei(32878,Ze.height),I.pixelStorei(3316,y.min.x),I.pixelStorei(3315,y.min.y),I.pixelStorei(32877,y.min.z),W.isDataTexture||W.isData3DTexture?I.texSubImage3D(De,q,U.x,U.y,U.z,_e,Me,Te,Ce,Fe,Ze.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(De,q,U.x,U.y,U.z,_e,Me,Te,Ce,Ze.data)):I.texSubImage3D(De,q,U.x,U.y,U.z,_e,Me,Te,Ce,Fe,Ze),I.pixelStorei(3314,Re),I.pixelStorei(32878,Ye),I.pixelStorei(3316,wt),I.pixelStorei(3315,en),I.pixelStorei(32877,Tn),q===0&&z.generateMipmaps&&I.generateMipmap(De),de.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?ve.setTextureCube(y,0):y.isData3DTexture?ve.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?ve.setTexture2DArray(y,0):ve.setTexture2D(y,0),de.unbindTexture()},this.resetState=function(){g=0,b=0,v=null,de.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class rp extends ko{}rp.prototype.isWebGL1Renderer=!0;let sp=class extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}};class Ga extends Wt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Va={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class ap{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){a++,s===!1&&i.onStart!==void 0&&i.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,i.onProgress!==void 0&&i.onProgress(f,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,d){return c.push(f,d),this},this.removeHandler=function(f){const d=c.indexOf(f);return d!==-1&&c.splice(d,2),this},this.getHandler=function(f){for(let d=0,u=c.length;d<u;d+=2){const m=c[d],x=c[d+1];if(m.global&&(m.lastIndex=0),m.test(f))return x}return null}}}const Go=new ap;class Vo{constructor(e){this.manager=e!==void 0?e:Go,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class op extends Vo{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Va.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Di("img");function l(){f(),Va.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){f(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Ha extends Vo{constructor(e){super(e)}load(e,t,n,i){const s=new ct,o=new op(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class lp extends mn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Ho{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wa();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wa(){return(typeof performance>"u"?Date:performance).now()}class cp{constructor(e,t,n=0,i=1/0){this.ray=new Ao(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new gs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return us(e,this,n,t),n.sort(ja),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)us(e[i],this,n,t);return n.sort(ja),n}}function ja(r,e){return r.distance-e.distance}function us(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)us(i[s],e,t,!0)}}class Xa{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ps}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ps);const up={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class dr{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const fp=new Oo(-1,1,1,-1,0,1),bs=new mn;bs.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3));bs.setAttribute("uv",new cn([0,2,0,0,2,0],2));class dp{constructor(e){this._mesh=new qt(bs,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,fp)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class hp extends dr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Jt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ro.clone(e.uniforms),this.material=new Jt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new dp(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class qa extends dr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class pp extends dr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class mp{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Ee);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new wn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hp(up),this.clock=new Ho}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}qa!==void 0&&(o instanceof qa?n=!0:o instanceof pp&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Wo extends dr{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ke}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}const gp=(r,e,t)=>{r.renderer=new ko({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),r.composer=new mp(r.renderer),r.composer.addPass(new Wo(r.scene,ln(r.camera)))},Ya=(r,e,t)=>{r.renderer&&(e?r.renderer.outputEncoding=yn:r.renderer.outputEncoding=Be,t?r.renderer.toneMapping=Zt:r.renderer.toneMapping=vo)},Za=(r,e,t)=>{var n,i,s,o,a,l,c,f;!r.renderer||!r.composer||((i=(n=r.renderer).setSize)==null||i.call(n,e.width,e.height),(o=(s=r.renderer).setPixelRatio)==null||o.call(s,t),(l=(a=r.composer).setSize)==null||l.call(a,e.width,e.height),(f=(c=r.composer).setPixelRatio)==null||f.call(c,t))},Ka=(r,e,t)=>{r.renderer&&(r.renderer.shadowMap.enabled=e,r.renderer.shadowMap.type=t)},Yt=r=>r.userData,_p=(r,e)=>{r.pointer.update(t=>r.renderer?t.set(e.offsetX/r.renderer.domElement.clientWidth*2-1,-(e.offsetY/r.renderer.domElement.clientHeight)*2+1):t)},jo=(r,e,t,n)=>(r.raycaster.setFromCamera(e,t),r.raycaster.intersectObjects(n,!1)),xp=(r,e)=>r.object.uuid!==e.object.uuid||r.instanceId!==e.instanceId,vp=(r,e,t)=>{let n=ln(r.camera);const i=r.camera.subscribe(c=>n=c);Xe(i);let s=ln(r.pointer);const o=r.pointer.subscribe(c=>s=c);Xe(o);let a;const l=c=>{var u,m;c.preventDefault();const f=c.type;r.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,_p(r,c);const d=bp(e,s,n);if(f==="pointerdown"&&(a=d?{object:d.object,instanceId:d.instanceId}:null),f==="click"){if(!Mp(d,a)){a=null;return}a=null}d&&((m=(u=Yt(d.object)).eventDispatcher)==null||m.call(u,f,{...d,event:c}))};return{onClick:l,onContextMenu:l,onPointerUp:l,onPointerDown:l,onPointerMove:l}};function bp(r,e,t){if(r.interactiveObjects.size===0||r.raycastableObjects.size===0)return null;const n=jo(r,e,t,Array.from(r.raycastableObjects));return n.length===0||!r.interactiveObjects.has(n[0].object)?null:n[0]}function Mp(r,e){return!r||!e?!1:r.object.uuid===e.object.uuid&&r.instanceId===e.instanceId}const Sp=(r,e)=>{let t=ln(r.pointerOverCanvas);const n=r.pointerOverCanvas.subscribe(c=>t=c);Xe(n);let i=ln(r.camera);const s=r.camera.subscribe(c=>i=c);Xe(s);let o=ln(r.pointer);const a=r.pointer.subscribe(c=>o=c);return Xe(a),{raycast:()=>{var d,u,m,x,p,h,g,b;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?jo(e,o,i,Array.from(e.raycastableObjects)):[],f=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;f?e.lastIntersection?e.lastIntersection&&xp(e.lastIntersection,f)&&((h=(p=Yt(e.lastIntersection.object)).eventDispatcher)==null||h.call(p,"pointerleave",e.lastIntersection),(b=(g=Yt(f.object)).eventDispatcher)==null||b.call(g,"pointerenter",f)):(x=(m=Yt(f.object)).eventDispatcher)==null||x.call(m,"pointerenter",f):e.lastIntersection&&((u=(d=Yt(e.lastIntersection.object)).eventDispatcher)==null||u.call(d,"pointerleave",e.lastIntersection)),e.lastIntersection=f}}},kn=typeof window<"u",yp=r=>{if(!kn)return;let e;const t=()=>{r(),e=requestAnimationFrame(t)};t(),Xe(()=>{e&&cancelAnimationFrame(e)})},wp=(r,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let i=0;e.frameHandlers.forEach(s=>{s.debugFrameloopMessage?e.invalidations[s.debugFrameloopMessage]=s.debugFrameloopMessage in e.invalidations?e.invalidations[s.debugFrameloopMessage]+1:1:++i}),i>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((i,s)=>s.order?!0:i,!1),n=r.clock.getDelta();t?Array.from(e.frameHandlers).sort((i,s)=>(i.order??0)>(s.order??0)?1:-1).forEach(i=>i.fn(r,n)):e.frameHandlers.forEach(i=>i.fn(r,n))},Ep=r=>{r.debugFrameloop&&(r.frame+=1,console.log(`frame: ${r.frame}${Object.keys(r.invalidations).length>0?", requested by ↴":""}`),Object.keys(r.invalidations).length>0&&console.table(r.invalidations),r.invalidations={})},Tp=(r,e,t,n)=>{let i=ln(r.camera);const s=r.camera.subscribe(a=>i=a);Xe(s);const{raycast:o}=Sp(r,e);yp(()=>{n.dispose();const a=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(a||t.pointerInvalidated)&&(o(),t.pointerInvalidated=!1),a&&(!i||!r.composer||!r.renderer||(wp(r,t),r.composer.passes.length>1?r.composer.render():r.renderer.render(r.scene,i),Ep(t),t.frameInvalidated=!1,t.advance=!1))})},Ap=()=>{const r=new Lt(75,0,.1,1e3);return Yt(r).threlteDefaultCamera=!0,r.position.z=5,r.lookAt(0,0,0),r},Cp=r=>{const e=r.size.subscribe(t=>{Yt(ln(r.camera)).threlteDefaultCamera&&r.camera.update(n=>{const i=n;return i.aspect=t.width/t.height,i.updateProjectionMatrix(),r.invalidate("Default camera: aspect ratio changed"),i})});Xe(e)},Lp=(r,e,t,n,i,s,o)=>{const a={audioListeners:new Map,addAudioListener:(g,b)=>{if(b=b??"default",a.audioListeners.has(b)){console.warn(`An AudioListener with the id "${b}" has already been added, aborting.`);return}a.audioListeners.set(b,g)},removeAudioListener:g=>{if(g=g??"default",!a.audioListeners.has(g)){console.warn(`No AudioListener with the id "${g}" found, aborting.`);return}a.audioListeners.delete(g)},getAudioListener:g=>{if(g=g??"default",!a.audioListeners.has(g)){console.warn(`No AudioListener with the id "${g}" found, aborting.`);return}return a.audioListeners.get(g)}},l={debugFrameloop:s,frameloop:o,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:cl([n,i],([g,b])=>g||b),pointer:pt(new Ee),pointerOverCanvas:pt(!1),clock:new Ho,camera:pt(Ap()),scene:new sp,renderer:void 0,composer:void 0,invalidate:g=>{l.frameInvalidated=!0,l.debugFrameloop&&g&&(l.invalidations[g]=l.invalidations[g]?l.invalidations[g]+1:1)},advance:()=>{l.advance=!0}},f={flat:pt(e),linear:pt(r),dpr:pt(t),setCamera:g=>{c.camera.set(g),c.composer&&(c.composer.passes.forEach(b=>{b instanceof Wo&&(b.camera=g)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new cp,lastIntersection:null,addRaycastableObject:g=>{f.raycastableObjects.add(g)},removeRaycastableObject:g=>{f.raycastableObjects.delete(g)},addInteractiveObject:g=>{f.interactiveObjects.add(g)},removeInteractiveObject:g=>{f.interactiveObjects.delete(g)},addPass:g=>{c.composer&&(c.composer.addPass(g),c.invalidate("Canvas: adding pass"))},removePass:g=>{c.composer&&(c.composer.removePass(g),c.invalidate("Canvas: removing pass"))}},d={dispose:async(g=!1)=>{await Ti(),!(!d.shouldDispose&&!g)&&(d.disposableObjects.forEach((b,v)=>{var S;(b===0||g)&&((S=v==null?void 0:v.dispose)==null||S.call(v),d.disposableObjects.delete(v))}),d.shouldDispose=!1)},collectDisposableObjects:(g,b)=>{const v=b??[];return g&&(g!=null&&g.dispose&&typeof g.dispose=="function"&&g.type!=="Scene"&&v.push(g),Object.entries(g).forEach(([S,w])=>{if(S==="parent"||S==="children"||typeof w!="object")return;const L=w;L!=null&&L.dispose&&d.collectDisposableObjects(L,v)})),v},addDisposableObjects:g=>{g.forEach(b=>{const v=d.disposableObjects.get(b);v?d.disposableObjects.set(b,v+1):d.disposableObjects.set(b,1)})},removeDisposableObjects:g=>{g.length!==0&&(g.forEach(b=>{const v=d.disposableObjects.get(b);v&&v>0&&d.disposableObjects.set(b,v-1)}),d.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return kt("threlte",c),kt("threlte-root",f),kt("threlte-render-context",l),kt("threlte-audio-context",a),kt("threlte-disposal-context",d),{ctx:c,rootCtx:f,renderCtx:l,audioCtx:a,disposalCtx:d,getCtx:()=>c,getRootCtx:()=>f,getRenderCtx:()=>l,getAudioCtx:()=>a,getDisposalCtx:()=>d}};function hr(r,e){const t=pt(r);let n=r;const i=t.subscribe(a=>n=a);return Xe(i),{...t,set:a=>{if((a==null?void 0:a.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(a),e==null||e(a,l)},update:a=>{const l=a(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const Qt=()=>Kt("threlte");function Pp(r){let e;const t=r[8].default,n=fn(t,r,r[7],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&128)&&dn(n,t,i,i[7],e?pn(t,i[7],s,null):hn(i[7]),null)},i(i){e||(ye(n,i),e=!0)},o(i){Ae(n,i),e=!1},d(i){n&&n.d(i)}}}const Dp=()=>({onChildMount:Kt("threlte-hierarchical-object-on-mount"),onChildDestroy:Kt("threlte-hierarchical-object-on-destroy")}),Xo=()=>Kt("threlte-hierarchical-parent-context");function Rp(r,e,t){var g;let n,{$$slots:i={},$$scope:s}=e,{object:o=void 0}=e,{children:a=[]}=e,{onChildMount:l=void 0}=e;const c=b=>{a.push(b),t(1,a),l==null||l(b)};let{onChildDestroy:f=void 0}=e;const d=b=>{const v=a.findIndex(S=>S.uuid===b.uuid);v!==-1&&a.splice(v,1),t(1,a),f==null||f(b)},{invalidate:u}=Qt(),m=Xo();ot(r,m,b=>t(6,n=b));let{parent:x=n}=e;const p=Dp();o&&((g=p.onChildMount)==null||g.call(p,o),u("HierarchicalObject: object added"));const h=hr(o,(b,v)=>{var S,w;v&&((S=p.onChildDestroy)==null||S.call(p,v),u("HierarchicalObject: object added")),b&&((w=p.onChildMount)==null||w.call(p,b),u("HierarchicalObject: object removed"))});return Xe(()=>{var b;o&&((b=p.onChildDestroy)==null||b.call(p,o),u("HierarchicalObject: object removed"))}),kt("threlte-hierarchical-object-on-mount",c),kt("threlte-hierarchical-object-on-destroy",d),kt("threlte-hierarchical-parent-context",h),r.$$set=b=>{"object"in b&&t(3,o=b.object),"children"in b&&t(1,a=b.children),"onChildMount"in b&&t(4,l=b.onChildMount),"onChildDestroy"in b&&t(5,f=b.onChildDestroy),"parent"in b&&t(2,x=b.parent),"$$scope"in b&&t(7,s=b.$$scope)},r.$$.update=()=>{r.$$.dirty&64&&t(2,x=n),r.$$.dirty&8&&h.set(o)},[m,a,x,o,l,f,n,s,i]}class Ip extends mt{constructor(e){super(),gt(this,e,Rp,Pp,_t,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function Fp(r){let e;const t=r[1].default,n=fn(t,r,r[4],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16)&&dn(n,t,i,i[4],e?pn(t,i[4],s,null):hn(i[4]),null)},i(i){e||(ye(n,i),e=!0)},o(i){Ae(n,i),e=!1},d(i){n&&n.d(i)}}}function Op(r){let e,t;return e=new Ip({props:{object:r[0],onChildMount:r[2],onChildDestroy:r[3],$$slots:{default:[Fp]},$$scope:{ctx:r}}}),{c(){Ve(e.$$.fragment)},l(n){He(e.$$.fragment,n)},m(n,i){We(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.object=n[0]),i&1&&(s.onChildMount=n[2]),i&1&&(s.onChildDestroy=n[3]),i&16&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){Ae(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function Np(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e;const o=l=>s.add(l),a=l=>s.remove(l);return r.$$set=l=>{"object"in l&&t(0,s=l.object),"$$scope"in l&&t(4,i=l.$$scope)},[s,n,o,a,i]}class Ms extends mt{constructor(e){super(),gt(this,e,Np,Op,_t,{object:0})}}const zp=()=>{const r=pt({width:0,height:0});let e={width:0,height:0};const t=r.subscribe(o=>e=o);Xe(t);let n;const i=()=>{const o=e;if(!n||!n.parentElement)return;const{clientWidth:a,clientHeight:l}=n.parentElement;(a!==o.width||l!==o.height)&&r.set({width:a,height:l})},s=o=>{n=o,i(),window.addEventListener("resize",i)};return kn?(Xe(()=>{window.removeEventListener("resize",i)}),{parentSizeAction:s,parentSize:r}):{parentSize:r,parentSizeAction:s}};function Ja(r){let e,t;return e=new Ms({props:{object:r[0].scene,$$slots:{default:[Up]},$$scope:{ctx:r}}}),{c(){Ve(e.$$.fragment)},l(n){He(e.$$.fragment,n)},m(n,i){We(e,n,i),t=!0},p(n,i){const s={};i[1]&4&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){Ae(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function Up(r){let e;const t=r[29].default,n=fn(t,r,r[33],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&4)&&dn(n,t,i,i[33],e?pn(t,i[33],s,null):hn(i[33]),null)},i(i){e||(ye(n,i),e=!0)},o(i){Ae(n,i),e=!1},d(i){n&&n.d(i)}}}function Bp(r){let e,t,n,i,s=r[2]&&Ja(r);return{c(){e=lo("canvas"),s&&s.c(),this.h()},l(o){e=co(o,"CANVAS",{class:!0});var a=uo(e);s&&s.l(a),a.forEach(Dt),this.h()},h(){fo(e,"class","svelte-o3oskp")},m(o,a){Ht(o,e,a),s&&s.m(e,null),r[30](e),t=!0,n||(i=[rl(r[3].call(null,e)),Ln(e,"click",r[9]),Ln(e,"contextmenu",r[10]),Ln(e,"pointerup",r[13]),Ln(e,"pointerdown",r[11]),Ln(e,"pointermove",r[12]),Ln(e,"pointerenter",r[31]),Ln(e,"pointerleave",r[32])],n=!0)},p(o,a){o[2]?s?(s.p(o,a),a[0]&4&&ye(s,1)):(s=Ja(o),s.c(),ye(s,1),s.m(e,null)):s&&(es(),Ae(s,1,1,()=>{s=null}),ts())},i(o){t||(ye(s),t=!0)},o(o){Ae(s),t=!1},d(o){o&&Dt(e),s&&s.d(),r[30](null),n=!1,sl(i)}}}const fs=new Set,kp=r=>{fs.forEach(e=>e(r))};function Gp(r,e,t){let n,i,s,o,{$$slots:a={},$$scope:l}=e,{dpr:c=kn?window.devicePixelRatio:1}=e,{flat:f=!1}=e,{linear:d=!1}=e,{frameloop:u="demand"}=e,{debugFrameloop:m=!1}=e,{shadows:x=!0}=e,{shadowMapType:p=mo}=e,{size:h=void 0}=e,{rendererParameters:g=void 0}=e,b,v=!1;const S=pt(h),{parentSize:w,parentSizeAction:L}=zp(),F=Lp(d,f,c,S,w,m,u),{getCtx:_,renderCtx:C,disposalCtx:T}=F,{ctx:G,rootCtx:K,audioCtx:P}=F;Cp(G),fs.add(G.invalidate),Xe(()=>{fs.delete(G.invalidate)});const{size:N,scene:X}=G;ot(r,N,ce=>t(26,i=ce));const{flat:Z,linear:J,dpr:j}=K;ot(r,Z,ce=>t(27,s=ce)),ot(r,J,ce=>t(28,o=ce)),ot(r,j,ce=>t(25,n=ce)),kt("threlte-parent",pt(X)),ho(()=>{b&&(gp(G,b,g),Ya(G,o,s),Za(G,i,n),Ka(G,x,p),t(2,v=!0))}),Tp(G,K,C,T);const{onClick:$,onContextMenu:Y,onPointerDown:D,onPointerMove:k,onPointerUp:ie}=vp(G,K,C);Xe(()=>{T.dispose(!0)});function ee(ce){ar[ce?"unshift":"push"](()=>{b=ce,t(1,b)})}const se=()=>_().pointerOverCanvas.set(!0),I=()=>_().pointerOverCanvas.set(!1);return r.$$set=ce=>{"dpr"in ce&&t(14,c=ce.dpr),"flat"in ce&&t(15,f=ce.flat),"linear"in ce&&t(16,d=ce.linear),"frameloop"in ce&&t(17,u=ce.frameloop),"debugFrameloop"in ce&&t(18,m=ce.debugFrameloop),"shadows"in ce&&t(19,x=ce.shadows),"shadowMapType"in ce&&t(20,p=ce.shadowMapType),"size"in ce&&t(21,h=ce.size),"rendererParameters"in ce&&t(22,g=ce.rendererParameters),"$$scope"in ce&&t(33,l=ce.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&2097152&&S.set(h),r.$$.dirty[0]&65536&&xr(J,o=d,o),r.$$.dirty[0]&32768&&xr(Z,s=f,s),r.$$.dirty[0]&16384&&xr(j,n=c,n),r.$$.dirty[0]&402653184&&Ya(_(),o,s),r.$$.dirty[0]&100663296&&Za(_(),i,n),r.$$.dirty[0]&1572864&&Ka(_(),x,p)},[G,b,v,L,_,N,Z,J,j,$,Y,D,k,ie,c,f,d,u,m,x,p,h,g,K,P,n,i,s,o,a,ee,se,I,l]}class Vp extends mt{constructor(e){super(),gt(this,e,Gp,Bp,_t,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const Ss=()=>Kt("threlte-root"),Hp=()=>Kt("threlte-disposal-context");function Wp(r){let e;const t=r[9].default,n=fn(t,r,r[8],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&256)&&dn(n,t,i,i[8],e?pn(t,i[8],s,null):hn(i[8]),null)},i(i){e||(ye(n,i),e=!0)},o(i){Ae(n,i),e=!1},d(i){n&&n.d(i)}}}const Qa="threlte-disposable-object-context";function jp(r,e,t){let n,i,{$$slots:s={},$$scope:o}=e;const{collectDisposableObjects:a,addDisposableObjects:l,removeDisposableObjects:c}=Hp();let{object:f=void 0}=e,d=f,{dispose:u=void 0}=e;const m=Kt(Qa);ot(r,m,h=>t(7,i=h));const x=pt(u??i??!0);ot(r,x,h=>t(6,n=h)),kt(Qa,x);let p=n?a(f):[];return l(p),Xe(()=>{c(p)}),r.$$set=h=>{"object"in h&&t(2,f=h.object),"dispose"in h&&t(3,u=h.dispose),"$$scope"in h&&t(8,o=h.$$scope)},r.$$.update=()=>{r.$$.dirty&136&&x.set(u??i??!0),r.$$.dirty&116&&f!==d&&(c(p),t(5,p=n?a(f):[]),l(p),t(4,d=f))},[m,x,f,u,d,p,n,i,o,s]}class ys extends mt{constructor(e){super(),gt(this,e,jp,Wp,_t,{object:2,dispose:3})}}function Xp(r,e,t){let n,i,{object:s}=e;const o=hr(s);ot(r,o,c=>t(4,i=c));const a=Kt("threlte-layers");ot(r,a,c=>t(3,n=c));const{invalidate:l}=Qt();return r.$$set=c=>{"object"in c&&t(2,s=c.object)},r.$$.update=()=>{if(r.$$.dirty&4&&o.set(s),r.$$.dirty&24){if(n==="all")i.layers.enableAll();else if(n==="none")i.layers.disableAll();else if(Array.isArray(n))for(let c=0;c<32;c+=1){const f=c;n.includes(f)?i.layers.enable(c):i.layers.disable(c)}else n!==void 0&&i.layers.set(n);l("LayerableObject")}},[o,a,s,n,i]}class qp extends mt{constructor(e){super(),gt(this,e,Xp,null,_t,{object:2})}}const ws=(r,e)=>{if(!kn)return{start:()=>{},stop:()=>{},started:ul(!1)};const t=Kt("threlte-render-context"),n={fn:r,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},i=pt(!1),s=()=>{t.frameHandlers.delete(n),i.set(!1)},o=()=>{t.frameHandlers.add(n),i.set(!0)};return((e==null?void 0:e.autostart)??!0)&&o(),Xe(()=>{s()}),{start:o,stop:s,started:{subscribe:i.subscribe}}},qo=()=>{const r=pt(!1);return(async()=>{await Ti(),r.set(!0)})(),r};function Yp(r,e,t){let n,i,{object:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const f=new B,d=or(),{invalidate:u}=Qt(),m=qo();ot(r,m,v=>t(8,i=v));const x=async()=>{i||await Ti(),d("transform")},p=async()=>{u("TransformableObject: transformed"),await x()};Yt(s).onTransform=p;const{start:h,stop:g}=ws(async()=>{c&&!l&&c instanceof ut&&(c.getWorldPosition(f),s.lookAt(f),await x())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),b=hr(s);return ot(r,b,v=>t(7,n=v)),r.$$set=v=>{"object"in v&&t(2,s=v.object),"position"in v&&t(3,o=v.position),"scale"in v&&t(4,a=v.scale),"rotation"in v&&t(5,l=v.rotation),"lookAt"in v&&t(6,c=v.lookAt)},r.$$.update=()=>{r.$$.dirty&4&&b.set(s),r.$$.dirty&232&&(o&&(n.position.set(o.x??0,o.y??0,o.z??0),p()),c&&!l&&(c instanceof ut?h():(g(),n.lookAt(c.x??0,c.y??0,c.z??0),p())),c||g()),r.$$.dirty&144&&a&&(typeof a=="number"?n.scale.set(a,a,a):n.scale.set(a.x??1,a.y??1,a.z??1),p()),r.$$.dirty&160&&l&&(n.rotation.set(l.x??0,l.y??0,l.z??0,l.order??"XYZ"),p())},[m,b,s,o,a,l,c,n]}class Yo extends mt{constructor(e){super(),gt(this,e,Yp,null,_t,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function Zp(r,e,t){let n,i,s,{object:o}=e,{viewportAware:a=!1}=e;const l=or(),{camera:c,invalidate:f}=Qt();ot(r,c,L=>t(8,s=L));const d=new xs,u=new et,m=L=>L.type==="Mesh",x=new B,p=()=>s?(u.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),d.setFromProjectionMatrix(u),m(o)?d.intersectsObject(o):(o.getWorldPosition(x),d.containsPoint(x))):!0,h=qo();ot(r,h,L=>t(7,i=L));let{inViewport:g=p()}=e;const b=async L=>{L?(i||await Ti(),l("viewportenter",o)):(i||await Ti(),l("viewportleave",o))},{start:v,stop:S,started:w}=ws(()=>{const L=p();g===void 0?(t(3,g=p()),b(g)):L!==g&&(b(L),t(3,g=L))},{autostart:a,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return ot(r,w,L=>t(6,n=L)),f("ViewportAwareObject"),r.$$set=L=>{"object"in L&&t(4,o=L.object),"viewportAware"in L&&t(5,a=L.viewportAware),"inViewport"in L&&t(3,g=L.inViewport)},r.$$.update=()=>{r.$$.dirty&96&&(a&&!n?v():!a&&n&&S())},[c,h,w,g,o,a,n]}class Kp extends mt{constructor(e){super(),gt(this,e,Zp,null,_t,{object:4,viewportAware:5,inViewport:3})}}function Jp(r){let e;const t=r[14].default,n=fn(t,r,r[18],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&262144)&&dn(n,t,i,i[18],e?pn(t,i[18],s,null):hn(i[18]),null)},i(i){e||(ye(n,i),e=!0)},o(i){Ae(n,i),e=!1},d(i){n&&n.d(i)}}}function Qp(r){let e,t;return e=new Ms({props:{object:r[1],$$slots:{default:[Jp]},$$scope:{ctx:r}}}),{c(){Ve(e.$$.fragment)},l(n){He(e.$$.fragment,n)},m(n,i){We(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.object=n[1]),i&262144&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){Ae(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function $p(r){let e,t,n,i,s,o,a,l,c;e=new qp({props:{object:r[1]}}),n=new Yo({props:{object:r[1],position:r[2],rotation:r[4],scale:r[3],lookAt:r[5]}}),s=new ys({props:{object:r[1],dispose:r[7],$$slots:{default:[Qp]},$$scope:{ctx:r}}});function f(u){r[15](u)}let d={object:r[1],viewportAware:r[6]};return r[0]!==void 0&&(d.inViewport=r[0]),a=new Kp({props:d}),ar.push(()=>ds(a,"inViewport",f)),a.$on("viewportenter",r[16]),a.$on("viewportleave",r[17]),{c(){Ve(e.$$.fragment),t=bn(),Ve(n.$$.fragment),i=bn(),Ve(s.$$.fragment),o=bn(),Ve(a.$$.fragment)},l(u){He(e.$$.fragment,u),t=Mn(u),He(n.$$.fragment,u),i=Mn(u),He(s.$$.fragment,u),o=Mn(u),He(a.$$.fragment,u)},m(u,m){We(e,u,m),Ht(u,t,m),We(n,u,m),Ht(u,i,m),We(s,u,m),Ht(u,o,m),We(a,u,m),c=!0},p(u,[m]){const x={};m&2&&(x.object=u[1]),e.$set(x);const p={};m&2&&(p.object=u[1]),m&4&&(p.position=u[2]),m&16&&(p.rotation=u[4]),m&8&&(p.scale=u[3]),m&32&&(p.lookAt=u[5]),n.$set(p);const h={};m&2&&(h.object=u[1]),m&128&&(h.dispose=u[7]),m&262146&&(h.$$scope={dirty:m,ctx:u}),s.$set(h);const g={};m&2&&(g.object=u[1]),m&64&&(g.viewportAware=u[6]),!l&&m&1&&(l=!0,g.inViewport=u[0],hs(()=>l=!1)),a.$set(g)},i(u){c||(ye(e.$$.fragment,u),ye(n.$$.fragment,u),ye(s.$$.fragment,u),ye(a.$$.fragment,u),c=!0)},o(u){Ae(e.$$.fragment,u),Ae(n.$$.fragment,u),Ae(s.$$.fragment,u),Ae(a.$$.fragment,u),c=!1},d(u){je(e,u),u&&Dt(t),je(n,u),u&&Dt(i),je(s,u),u&&Dt(o),je(a,u)}}}function em(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:f=!1}=e,{inViewport:d=!1}=e,{castShadow:u=void 0}=e,{receiveShadow:m=void 0}=e,{frustumCulled:x=void 0}=e,{renderOrder:p=void 0}=e,{visible:h=void 0}=e,{dispose:g=void 0}=e,{userData:b=void 0}=e;const{invalidate:v}=Qt(),S=()=>s;function w(_){d=_,t(0,d)}function L(_){ui.call(this,r,_)}function F(_){ui.call(this,r,_)}return r.$$set=_=>{"object"in _&&t(1,s=_.object),"position"in _&&t(2,o=_.position),"scale"in _&&t(3,a=_.scale),"rotation"in _&&t(4,l=_.rotation),"lookAt"in _&&t(5,c=_.lookAt),"viewportAware"in _&&t(6,f=_.viewportAware),"inViewport"in _&&t(0,d=_.inViewport),"castShadow"in _&&t(8,u=_.castShadow),"receiveShadow"in _&&t(9,m=_.receiveShadow),"frustumCulled"in _&&t(10,x=_.frustumCulled),"renderOrder"in _&&t(11,p=_.renderOrder),"visible"in _&&t(12,h=_.visible),"dispose"in _&&t(7,g=_.dispose),"userData"in _&&t(13,b=_.userData),"$$scope"in _&&t(18,i=_.$$scope)},r.$$.update=()=>{r.$$.dirty&16128&&(h!==void 0&&(S().visible=h),u!==void 0&&(S().castShadow=u),m!==void 0&&(S().receiveShadow=m),x!==void 0&&(S().frustumCulled=x),p!==void 0&&(S().renderOrder=p),b!==void 0&&(S().userData={...S().userData,...b}),v("Object3DInstance: props changed"))},[d,s,o,a,l,c,f,g,u,m,x,p,h,b,n,w,L,F,i]}class tm extends mt{constructor(e){super(),gt(this,e,em,$p,_t,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:8,receiveShadow:9,frustumCulled:10,renderOrder:11,visible:12,dispose:7,userData:13})}}function nm(r){let e;const t=r[17].default,n=fn(t,r,r[21],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&2097152)&&dn(n,t,i,i[21],e?pn(t,i[21],s,null):hn(i[21]),null)},i(i){e||(ye(n,i),e=!0)},o(i){Ae(n,i),e=!1},d(i){n&&n.d(i)}}}function im(r){let e,t,n;function i(o){r[18](o)}let s={object:r[1],lookAt:r[5],castShadow:r[7],receiveShadow:r[8],frustumCulled:r[9],renderOrder:r[10],position:r[2],scale:r[3],rotation:r[4],viewportAware:r[6],visible:r[11],userData:r[12],dispose:r[13],$$slots:{default:[nm]},$$scope:{ctx:r}};return r[0]!==void 0&&(s.inViewport=r[0]),e=new tm({props:s}),ar.push(()=>ds(e,"inViewport",i)),e.$on("viewportenter",r[19]),e.$on("viewportleave",r[20]),{c(){Ve(e.$$.fragment)},l(o){He(e.$$.fragment,o)},m(o,a){We(e,o,a),n=!0},p(o,[a]){const l={};a&2&&(l.object=o[1]),a&32&&(l.lookAt=o[5]),a&128&&(l.castShadow=o[7]),a&256&&(l.receiveShadow=o[8]),a&512&&(l.frustumCulled=o[9]),a&1024&&(l.renderOrder=o[10]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.viewportAware=o[6]),a&2048&&(l.visible=o[11]),a&4096&&(l.userData=o[12]),a&8192&&(l.dispose=o[13]),a&2097152&&(l.$$scope={dirty:a,ctx:o}),!t&&a&1&&(t=!0,l.inViewport=o[0],hs(()=>t=!1)),e.$set(l)},i(o){n||(ye(e.$$.fragment,o),n=!0)},o(o){Ae(e.$$.fragment,o),n=!1},d(o){je(e,o)}}}function rm(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{camera:o}=e,{position:a=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:f=void 0}=e,{viewportAware:d=!1}=e,{inViewport:u=!1}=e,{castShadow:m=void 0}=e,{receiveShadow:x=void 0}=e,{frustumCulled:p=void 0}=e,{renderOrder:h=void 0}=e,{visible:g=void 0}=e,{userData:b=void 0}=e,{dispose:v=void 0}=e,{useCamera:S=!1}=e;const w=hr(o);ot(r,w,T=>t(16,n=T));const{setCamera:L}=Ss();function F(T){u=T,t(0,u)}function _(T){ui.call(this,r,T)}function C(T){ui.call(this,r,T)}return r.$$set=T=>{"camera"in T&&t(1,o=T.camera),"position"in T&&t(2,a=T.position),"scale"in T&&t(3,l=T.scale),"rotation"in T&&t(4,c=T.rotation),"lookAt"in T&&t(5,f=T.lookAt),"viewportAware"in T&&t(6,d=T.viewportAware),"inViewport"in T&&t(0,u=T.inViewport),"castShadow"in T&&t(7,m=T.castShadow),"receiveShadow"in T&&t(8,x=T.receiveShadow),"frustumCulled"in T&&t(9,p=T.frustumCulled),"renderOrder"in T&&t(10,h=T.renderOrder),"visible"in T&&t(11,g=T.visible),"userData"in T&&t(12,b=T.userData),"dispose"in T&&t(13,v=T.dispose),"useCamera"in T&&t(15,S=T.useCamera),"$$scope"in T&&t(21,s=T.$$scope)},r.$$.update=()=>{r.$$.dirty&2&&w.set(o),r.$$.dirty&98304&&S&&L(n)},[u,o,a,l,c,f,d,m,x,p,h,g,b,v,w,S,n,i,F,_,C,s]}class sm extends mt{constructor(e){super(),gt(this,e,rm,im,_t,{camera:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,useCamera:15})}}function am(r){let e;const t=r[20].default,n=fn(t,r,r[24],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16777216)&&dn(n,t,i,i[24],e?pn(t,i[24],s,null):hn(i[24]),null)},i(i){e||(ye(n,i),e=!0)},o(i){Ae(n,i),e=!1},d(i){n&&n.d(i)}}}function om(r){let e,t,n;function i(o){r[21](o)}let s={camera:r[0],position:r[2],scale:r[3],rotation:r[4],castShadow:r[6],receiveShadow:r[7],frustumCulled:r[8],renderOrder:r[9],visible:r[10],userData:r[11],dispose:r[12],viewportAware:r[13],lookAt:r[5],useCamera:r[14],$$slots:{default:[am]},$$scope:{ctx:r}};return r[1]!==void 0&&(s.inViewport=r[1]),e=new sm({props:s}),ar.push(()=>ds(e,"inViewport",i)),e.$on("viewportenter",r[22]),e.$on("viewportleave",r[23]),{c(){Ve(e.$$.fragment)},l(o){He(e.$$.fragment,o)},m(o,a){We(e,o,a),n=!0},p(o,[a]){const l={};a&1&&(l.camera=o[0]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.castShadow=o[6]),a&128&&(l.receiveShadow=o[7]),a&256&&(l.frustumCulled=o[8]),a&512&&(l.renderOrder=o[9]),a&1024&&(l.visible=o[10]),a&2048&&(l.userData=o[11]),a&4096&&(l.dispose=o[12]),a&8192&&(l.viewportAware=o[13]),a&32&&(l.lookAt=o[5]),a&16384&&(l.useCamera=o[14]),a&16777216&&(l.$$scope={dirty:a,ctx:o}),!t&&a&2&&(t=!0,l.inViewport=o[1],hs(()=>t=!1)),e.$set(l)},i(o){n||(ye(e.$$.fragment,o),n=!0)},o(o){Ae(e.$$.fragment,o),n=!1},d(o){je(e,o)}}}function lm(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{castShadow:f=void 0}=e,{receiveShadow:d=void 0}=e,{frustumCulled:u=void 0}=e,{renderOrder:m=void 0}=e,{visible:x=void 0}=e,{userData:p=void 0}=e,{dispose:h=void 0}=e,{viewportAware:g=!1}=e,{inViewport:b=!1}=e,{useCamera:v=!0}=e,{near:S=void 0}=e,{far:w=void 0}=e,{fov:L=void 0}=e;const{size:F,invalidate:_}=Qt();ot(r,F,P=>t(19,n=P));const C=new Lt(L,n.width/n.height,S,w);function T(P){b=P,t(1,b)}function G(P){ui.call(this,r,P)}function K(P){ui.call(this,r,P)}return r.$$set=P=>{"position"in P&&t(2,o=P.position),"scale"in P&&t(3,a=P.scale),"rotation"in P&&t(4,l=P.rotation),"lookAt"in P&&t(5,c=P.lookAt),"castShadow"in P&&t(6,f=P.castShadow),"receiveShadow"in P&&t(7,d=P.receiveShadow),"frustumCulled"in P&&t(8,u=P.frustumCulled),"renderOrder"in P&&t(9,m=P.renderOrder),"visible"in P&&t(10,x=P.visible),"userData"in P&&t(11,p=P.userData),"dispose"in P&&t(12,h=P.dispose),"viewportAware"in P&&t(13,g=P.viewportAware),"inViewport"in P&&t(1,b=P.inViewport),"useCamera"in P&&t(14,v=P.useCamera),"near"in P&&t(16,S=P.near),"far"in P&&t(17,w=P.far),"fov"in P&&t(18,L=P.fov),"$$scope"in P&&t(24,s=P.$$scope)},r.$$.update=()=>{r.$$.dirty&524289&&(t(0,C.aspect=n.width/n.height,C),C.updateProjectionMatrix(),_("PerspectiveCamera: aspect changed")),r.$$.dirty&458753&&(S!==void 0&&t(0,C.near=S,C),w!==void 0&&t(0,C.far=w,C),L!==void 0&&t(0,C.fov=L,C),C.updateProjectionMatrix(),_("PerspectiveCamera: props changed"))},[C,b,o,a,l,c,f,d,u,m,x,p,h,g,v,F,S,w,L,n,i,T,G,K,s]}class cm extends mt{constructor(e){super(),gt(this,e,lm,om,_t,{position:2,scale:3,rotation:4,lookAt:5,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,viewportAware:13,inViewport:1,useCamera:14,near:16,far:17,fov:18,camera:0})}get camera(){return this.$$.ctx[0]}}const $a=[],um=(r,e)=>{const t=$a.find(i=>i instanceof r);if(t)return t;const n=e();return $a.push(n),n},eo={type:"change"},Jr={type:"start"},to={type:"end"};let fm=class extends Hn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wn.ROTATE,MIDDLE:Wn.DOLLY,RIGHT:Wn.PAN},this.touches={ONE:jn.ROTATE,TWO:jn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",St),this._domElementKeyEvents=A},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(eo),n.update(),s=i.NONE},this.update=function(){const A=new B,O=new Vn().setFromUnitVectors(e.up,new B(0,1,0)),le=O.clone().invert(),fe=new B,oe=new Vn,me=2*Math.PI;return function(){const Le=n.object.position;A.copy(Le).sub(n.target),A.applyQuaternion(O),a.setFromVector3(A),n.autoRotate&&s===i.NONE&&C(F()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Pe=n.minAzimuthAngle,Ue=n.maxAzimuthAngle;return isFinite(Pe)&&isFinite(Ue)&&(Pe<-Math.PI?Pe+=me:Pe>Math.PI&&(Pe-=me),Ue<-Math.PI?Ue+=me:Ue>Math.PI&&(Ue-=me),Pe<=Ue?a.theta=Math.max(Pe,Math.min(Ue,a.theta)):a.theta=a.theta>(Pe+Ue)/2?Math.max(Pe,a.theta):Math.min(Ue,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(f,n.dampingFactor):n.target.add(f),A.setFromSpherical(a),A.applyQuaternion(le),Le.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,f.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),f.set(0,0,0)),c=1,d||fe.distanceToSquared(n.object.position)>o||8*(1-oe.dot(n.object.quaternion))>o?(n.dispatchEvent(eo),fe.copy(n.object.position),oe.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",V),n.domElement.removeEventListener("pointerdown",it),n.domElement.removeEventListener("pointercancel",xt),n.domElement.removeEventListener("wheel",Rt),n.domElement.removeEventListener("pointermove",Je),n.domElement.removeEventListener("pointerup",Qe),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",St)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Xa,l=new Xa;let c=1;const f=new B;let d=!1;const u=new Ee,m=new Ee,x=new Ee,p=new Ee,h=new Ee,g=new Ee,b=new Ee,v=new Ee,S=new Ee,w=[],L={};function F(){return 2*Math.PI/60/60*n.autoRotateSpeed}function _(){return Math.pow(.95,n.zoomSpeed)}function C(A){l.theta-=A}function T(A){l.phi-=A}const G=function(){const A=new B;return function(le,fe){A.setFromMatrixColumn(fe,0),A.multiplyScalar(-le),f.add(A)}}(),K=function(){const A=new B;return function(le,fe){n.screenSpacePanning===!0?A.setFromMatrixColumn(fe,1):(A.setFromMatrixColumn(fe,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(le),f.add(A)}}(),P=function(){const A=new B;return function(le,fe){const oe=n.domElement;if(n.object.isPerspectiveCamera){const me=n.object.position;A.copy(me).sub(n.target);let pe=A.length();pe*=Math.tan(n.object.fov/2*Math.PI/180),G(2*le*pe/oe.clientHeight,n.object.matrix),K(2*fe*pe/oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(G(le*(n.object.right-n.object.left)/n.object.zoom/oe.clientWidth,n.object.matrix),K(fe*(n.object.top-n.object.bottom)/n.object.zoom/oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function N(A){n.object.isPerspectiveCamera?c/=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*A)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(A){n.object.isPerspectiveCamera?c*=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/A)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(A){u.set(A.clientX,A.clientY)}function J(A){b.set(A.clientX,A.clientY)}function j(A){p.set(A.clientX,A.clientY)}function $(A){m.set(A.clientX,A.clientY),x.subVectors(m,u).multiplyScalar(n.rotateSpeed);const O=n.domElement;C(2*Math.PI*x.x/O.clientHeight),T(2*Math.PI*x.y/O.clientHeight),u.copy(m),n.update()}function Y(A){v.set(A.clientX,A.clientY),S.subVectors(v,b),S.y>0?N(_()):S.y<0&&X(_()),b.copy(v),n.update()}function D(A){h.set(A.clientX,A.clientY),g.subVectors(h,p).multiplyScalar(n.panSpeed),P(g.x,g.y),p.copy(h),n.update()}function k(A){A.deltaY<0?X(_()):A.deltaY>0&&N(_()),n.update()}function ie(A){let O=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,n.keyPanSpeed),O=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,-n.keyPanSpeed),O=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?C(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(n.keyPanSpeed,0),O=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?C(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(-n.keyPanSpeed,0),O=!0;break}O&&(A.preventDefault(),n.update())}function ee(){if(w.length===1)u.set(w[0].pageX,w[0].pageY);else{const A=.5*(w[0].pageX+w[1].pageX),O=.5*(w[0].pageY+w[1].pageY);u.set(A,O)}}function se(){if(w.length===1)p.set(w[0].pageX,w[0].pageY);else{const A=.5*(w[0].pageX+w[1].pageX),O=.5*(w[0].pageY+w[1].pageY);p.set(A,O)}}function I(){const A=w[0].pageX-w[1].pageX,O=w[0].pageY-w[1].pageY,le=Math.sqrt(A*A+O*O);b.set(0,le)}function ce(){n.enableZoom&&I(),n.enablePan&&se()}function he(){n.enableZoom&&I(),n.enableRotate&&ee()}function xe(A){if(w.length==1)m.set(A.pageX,A.pageY);else{const le=be(A),fe=.5*(A.pageX+le.x),oe=.5*(A.pageY+le.y);m.set(fe,oe)}x.subVectors(m,u).multiplyScalar(n.rotateSpeed);const O=n.domElement;C(2*Math.PI*x.x/O.clientHeight),T(2*Math.PI*x.y/O.clientHeight),u.copy(m)}function de(A){if(w.length===1)h.set(A.pageX,A.pageY);else{const O=be(A),le=.5*(A.pageX+O.x),fe=.5*(A.pageY+O.y);h.set(le,fe)}g.subVectors(h,p).multiplyScalar(n.panSpeed),P(g.x,g.y),p.copy(h)}function Oe(A){const O=be(A),le=A.pageX-O.x,fe=A.pageY-O.y,oe=Math.sqrt(le*le+fe*fe);v.set(0,oe),S.set(0,Math.pow(v.y/b.y,n.zoomSpeed)),N(S.y),b.copy(v)}function Se(A){n.enableZoom&&Oe(A),n.enablePan&&de(A)}function ve(A){n.enableZoom&&Oe(A),n.enableRotate&&xe(A)}function it(A){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",Je),n.domElement.addEventListener("pointerup",Qe)),te(A),A.pointerType==="touch"?E(A):qe(A))}function Je(A){n.enabled!==!1&&(A.pointerType==="touch"?M(A):ze(A))}function Qe(A){ne(A),w.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",Je),n.domElement.removeEventListener("pointerup",Qe)),n.dispatchEvent(to),s=i.NONE}function xt(A){ne(A)}function qe(A){let O;switch(A.button){case 0:O=n.mouseButtons.LEFT;break;case 1:O=n.mouseButtons.MIDDLE;break;case 2:O=n.mouseButtons.RIGHT;break;default:O=-1}switch(O){case Wn.DOLLY:if(n.enableZoom===!1)return;J(A),s=i.DOLLY;break;case Wn.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;j(A),s=i.PAN}else{if(n.enableRotate===!1)return;Z(A),s=i.ROTATE}break;case Wn.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;Z(A),s=i.ROTATE}else{if(n.enablePan===!1)return;j(A),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Jr)}function ze(A){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;$(A);break;case i.DOLLY:if(n.enableZoom===!1)return;Y(A);break;case i.PAN:if(n.enablePan===!1)return;D(A);break}}function Rt(A){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(A.preventDefault(),n.dispatchEvent(Jr),k(A),n.dispatchEvent(to))}function St(A){n.enabled===!1||n.enablePan===!1||ie(A)}function E(A){switch(ae(A),w.length){case 1:switch(n.touches.ONE){case jn.ROTATE:if(n.enableRotate===!1)return;ee(),s=i.TOUCH_ROTATE;break;case jn.PAN:if(n.enablePan===!1)return;se(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case jn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ce(),s=i.TOUCH_DOLLY_PAN;break;case jn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;he(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Jr)}function M(A){switch(ae(A),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;xe(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;de(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Se(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ve(A),n.update();break;default:s=i.NONE}}function V(A){n.enabled!==!1&&A.preventDefault()}function te(A){w.push(A)}function ne(A){delete L[A.pointerId];for(let O=0;O<w.length;O++)if(w[O].pointerId==A.pointerId){w.splice(O,1);return}}function ae(A){let O=L[A.pointerId];O===void 0&&(O=new Ee,L[A.pointerId]=O),O.set(A.pageX,A.pageY)}function be(A){const O=A.pointerId===w[0].pointerId?w[1]:w[0];return L[O.pointerId]}n.domElement.addEventListener("contextmenu",V),n.domElement.addEventListener("pointerdown",it),n.domElement.addEventListener("pointercancel",xt),n.domElement.addEventListener("wheel",Rt,{passive:!1}),this.update()}};function dm(r){let e,t,n,i;return e=new ys({props:{dispose:r[2],object:r[0]}}),n=new Yo({props:{object:r[4],position:r[1]}}),n.$on("transform",r[5]),{c(){Ve(e.$$.fragment),t=bn(),Ve(n.$$.fragment)},l(s){He(e.$$.fragment,s),t=Mn(s),He(n.$$.fragment,s)},m(s,o){We(e,s,o),Ht(s,t,o),We(n,s,o),i=!0},p(s,o){const a={};o[0]&4&&(a.dispose=s[2]),o[0]&1&&(a.object=s[0]),e.$set(a);const l={};o[0]&2&&(l.position=s[1]),n.$set(l)},i(s){i||(ye(e.$$.fragment,s),ye(n.$$.fragment,s),i=!0)},o(s){Ae(e.$$.fragment,s),Ae(n.$$.fragment,s),i=!1},d(s){je(e,s),s&&Dt(t),je(n,s)}}}function hm(r,e,t){let n,{autoRotate:i=void 0}=e,{autoRotateSpeed:s=void 0}=e,{dampingFactor:o=void 0}=e,{enableDamping:a=void 0}=e,{enabled:l=void 0}=e,{enablePan:c=void 0}=e,{enableRotate:f=void 0}=e,{enableZoom:d=void 0}=e,{keyPanSpeed:u=void 0}=e,{keys:m=void 0}=e,{maxAzimuthAngle:x=void 0}=e,{maxDistance:p=void 0}=e,{maxPolarAngle:h=void 0}=e,{maxZoom:g=void 0}=e,{minAzimuthAngle:b=void 0}=e,{minDistance:v=void 0}=e,{minPolarAngle:S=void 0}=e,{minZoom:w=void 0}=e,{mouseButtons:L=void 0}=e,{panSpeed:F=void 0}=e,{rotateSpeed:_=void 0}=e,{screenSpacePanning:C=void 0}=e,{touches:T=void 0}=e,{zoomSpeed:G=void 0}=e,{target:K=void 0}=e,{dispose:P=void 0}=e;const N=Xo();ot(r,N,I=>t(30,n=I));const{renderer:X,invalidate:Z}=Qt();if(!X)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(n instanceof _s))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const J=or(),j=()=>{Z("Orbitcontrols: change event"),J("change")},$=()=>J("start"),Y=()=>J("end"),D=new fm(n,X.domElement);Yt(n).orbitControls=D,D.addEventListener("change",j),D.addEventListener("start",$),D.addEventListener("end",Y),Xe(()=>{n&&delete Yt(n).orbitControls,D.removeEventListener("change",j),D.removeEventListener("start",$),D.removeEventListener("end",Y)});const{start:k,stop:ie}=ws(()=>D.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),ee=new ut,se=()=>{t(0,D.target=ee.position,D),D.update(),Z("OrbitControls: target changed")};return r.$$set=I=>{"autoRotate"in I&&t(6,i=I.autoRotate),"autoRotateSpeed"in I&&t(7,s=I.autoRotateSpeed),"dampingFactor"in I&&t(8,o=I.dampingFactor),"enableDamping"in I&&t(9,a=I.enableDamping),"enabled"in I&&t(10,l=I.enabled),"enablePan"in I&&t(11,c=I.enablePan),"enableRotate"in I&&t(12,f=I.enableRotate),"enableZoom"in I&&t(13,d=I.enableZoom),"keyPanSpeed"in I&&t(14,u=I.keyPanSpeed),"keys"in I&&t(15,m=I.keys),"maxAzimuthAngle"in I&&t(16,x=I.maxAzimuthAngle),"maxDistance"in I&&t(17,p=I.maxDistance),"maxPolarAngle"in I&&t(18,h=I.maxPolarAngle),"maxZoom"in I&&t(19,g=I.maxZoom),"minAzimuthAngle"in I&&t(20,b=I.minAzimuthAngle),"minDistance"in I&&t(21,v=I.minDistance),"minPolarAngle"in I&&t(22,S=I.minPolarAngle),"minZoom"in I&&t(23,w=I.minZoom),"mouseButtons"in I&&t(24,L=I.mouseButtons),"panSpeed"in I&&t(25,F=I.panSpeed),"rotateSpeed"in I&&t(26,_=I.rotateSpeed),"screenSpacePanning"in I&&t(27,C=I.screenSpacePanning),"touches"in I&&t(28,T=I.touches),"zoomSpeed"in I&&t(29,G=I.zoomSpeed),"target"in I&&t(1,K=I.target),"dispose"in I&&t(2,P=I.dispose)},r.$$.update=()=>{r.$$.dirty[0]&1073741761&&(i!==void 0&&t(0,D.autoRotate=i,D),s!==void 0&&t(0,D.autoRotateSpeed=s,D),o!==void 0&&t(0,D.dampingFactor=o,D),a!==void 0&&t(0,D.enableDamping=a,D),l!==void 0&&t(0,D.enabled=l,D),c!==void 0&&t(0,D.enablePan=c,D),f!==void 0&&t(0,D.enableRotate=f,D),d!==void 0&&t(0,D.enableZoom=d,D),u!==void 0&&t(0,D.keyPanSpeed=u,D),m!==void 0&&t(0,D.keys=m,D),x!==void 0&&t(0,D.maxAzimuthAngle=x,D),p!==void 0&&t(0,D.maxDistance=p,D),h!==void 0&&t(0,D.maxPolarAngle=h,D),g!==void 0&&t(0,D.maxZoom=g,D),b!==void 0&&t(0,D.minAzimuthAngle=b,D),v!==void 0&&t(0,D.minDistance=v,D),S!==void 0&&t(0,D.minPolarAngle=S,D),w!==void 0&&t(0,D.minZoom=w,D),L!==void 0&&t(0,D.mouseButtons=L,D),F!==void 0&&t(0,D.panSpeed=F,D),_!==void 0&&t(0,D.rotateSpeed=_,D),C!==void 0&&t(0,D.screenSpacePanning=C,D),T!==void 0&&t(0,D.touches=T,D),G!==void 0&&t(0,D.zoomSpeed=G,D),D.update(),Z("OrbitControls: props changed")),r.$$.dirty[0]&576&&(i||a?k():ie())},[D,K,P,N,ee,se,i,s,o,a,l,c,f,d,u,m,x,p,h,g,b,v,S,w,L,F,_,C,T,G]}class pm extends mt{constructor(e){super(),gt(this,e,hm,dm,_t,{autoRotate:6,autoRotateSpeed:7,dampingFactor:8,enableDamping:9,enabled:10,enablePan:11,enableRotate:12,enableZoom:13,keyPanSpeed:14,keys:15,maxAzimuthAngle:16,maxDistance:17,maxPolarAngle:18,maxZoom:19,minAzimuthAngle:20,minDistance:21,minPolarAngle:22,minZoom:23,mouseButtons:24,panSpeed:25,rotateSpeed:26,screenSpacePanning:27,touches:28,zoomSpeed:29,target:1,dispose:2,controls:0},null,[-1,-1])}get controls(){return this.$$.ctx[0]}}const Zo=new ut;Zo.scale.set(0,0,0);Zo.matrix;new et().fromArray(new Array(16).fill(0));new ke(16777215);const Ko=(r,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)r=r[t[i]];return{target:r,key:n}}else return{target:r,key:e}},Qr=Symbol("initialValueBeforeAttach"),mm=()=>{const{invalidate:r}=Qt();let e=!1,t=Qr,n,i,s;const o=(l,c,f)=>{if(a(),!f){const d=l;((d==null?void 0:d.isMaterial)||!1)&&(f="material"),((d==null?void 0:d.isBufferGeometry)||(d==null?void 0:d.isGeometry)||!1)&&(f="geometry")}if(f){if(typeof f=="function")n=f(c,l);else{const{target:d,key:u}=Ko(c,f);t=d[u],d[u]=l,i=d,s=u}e=!0,r()}},a=()=>{e&&(n?(n(),n=void 0):i&&s&&t!==Qr&&(i[s]=t,t=Qr,i=void 0,s=void 0),e=!1,r())};return Xe(()=>{a()}),{update:o}},gm=r=>r&&r.isCamera,Jo=r=>r&&r.isOrthographicCamera,Qo=r=>r&&r.isPerspectiveCamera,_m=r=>Qo(r)||Jo(r),xm=()=>{const{invalidate:r,size:e}=Qt(),{setCamera:t}=Ss();let n,i;Xe(()=>{i==null||i()});const s=l=>{n&&(Jo(n)?(n.left=l.width/-2,n.right=l.width/2,n.top=l.height/2,n.bottom=l.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()):Qo(n)&&(n.aspect=l.width/l.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()))};return{update:(l,c)=>{if(i==null||i(),c||!_m(l)){n=void 0;return}n=l,i=e.subscribe(s)},makeDefaultCamera:(l,c)=>{!gm(l)||!c||(t(l),r())}}},no=r=>!!(r!=null&&r.addEventListener),vm=()=>{const r=or(),e=al(),t=u=>{u!=null&&u.type&&r(u.type,u)},n=(u,m)=>{no(u)&&m.forEach(x=>{u.removeEventListener(x,t)})},i=(u,m)=>{no(u)&&m.forEach(x=>{u.addEventListener(x,t)})};let s=[],o;const a=pt([]),l=a.subscribe(u=>{n(o,s),i(o,u),s=u});Xe(l);const c=pt(),f=c.subscribe(u=>{n(o,s),i(u,s),o=u});return Xe(f),Xe(()=>{n(o,s)}),ho(()=>{a.set(Object.keys(e.$$.callbacks))}),{updateRef:u=>{c.set(u)}}},bm=["$$scope","$$slots","type","args","attach","instance"],Mm=["fov","aspect","near","far","left","right","top","bottom","zoom"],Sm=r=>typeof r=="string"||typeof r=="number"||typeof r=="boolean"||typeof r>"u"||r===null,ym=()=>{const{invalidate:r}=Qt(),e=new Map,t=(i,s,o,a)=>{var f,d;if(Sm(o)){const u=e.get(s);if(u&&u.instance===i&&u.value===o)return;e.set(s,{instance:i,value:o})}const{key:l,target:c}=Ko(i,s);if(!Array.isArray(o)&&typeof o=="number"&&typeof((f=c[l])==null?void 0:f.setScalar)=="function")c[l].setScalar(o);else if(typeof((d=c[l])==null?void 0:d.set)=="function")Array.isArray(o)?c[l].set(...o):c[l].set(o);else{if(c[l]=o,a.manualCamera)return;Mm.includes(l)&&(c.isPerspectiveCamera||c.isOrthographicCamera)&&c.updateProjectionMatrix()}};return{updateProps:(i,s,o)=>{for(const a in s)bm.includes(a)||t(i,a,s[a],o),r()}}},wm=r=>({ref:r&1}),io=r=>({ref:r[0]}),Em=r=>({ref:r&1}),ro=r=>({ref:r[0]});function so(r){let e,t;return e=new ys({props:{object:r[0],dispose:r[1]}}),{c(){Ve(e.$$.fragment)},l(n){He(e.$$.fragment,n)},m(n,i){We(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.object=n[0]),i&2&&(s.dispose=n[1]),e.$set(s)},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){Ae(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function Tm(r){let e;const t=r[12].default,n=fn(t,r,r[13],io);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&8193)&&dn(n,t,i,i[13],e?pn(t,i[13],s,wm):hn(i[13]),io)},i(i){e||(ye(n,i),e=!0)},o(i){Ae(n,i),e=!1},d(i){n&&n.d(i)}}}function Am(r){let e,t;return e=new Ms({props:{object:r[0],$$slots:{default:[Cm]},$$scope:{ctx:r}}}),{c(){Ve(e.$$.fragment)},l(n){He(e.$$.fragment,n)},m(n,i){We(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.object=n[0]),i&8193&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){Ae(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function Cm(r){let e;const t=r[12].default,n=fn(t,r,r[13],ro);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&8193)&&dn(n,t,i,i[13],e?pn(t,i[13],s,Em):hn(i[13]),ro)},i(i){e||(ye(n,i),e=!0)},o(i){Ae(n,i),e=!1},d(i){n&&n.d(i)}}}function Lm(r){let e=r[4](r[0]),t,n,i,s,o,a,l=e&&so(r);const c=[Am,Tm],f=[];function d(u,m){return m&1&&(n=null),n==null&&(n=!!u[3](u[0])),n?0:1}return i=d(r,-1),s=f[i]=c[i](r),{c(){l&&l.c(),t=bn(),s.c(),o=Cs()},l(u){l&&l.l(u),t=Mn(u),s.l(u),o=Cs()},m(u,m){l&&l.m(u,m),Ht(u,t,m),f[i].m(u,m),Ht(u,o,m),a=!0},p(u,[m]){m&1&&(e=u[4](u[0])),e?l?(l.p(u,m),m&1&&ye(l,1)):(l=so(u),l.c(),ye(l,1),l.m(t.parentNode,t)):l&&(es(),Ae(l,1,1,()=>{l=null}),ts());let x=i;i=d(u,m),i===x?f[i].p(u,m):(es(),Ae(f[x],1,1,()=>{f[x]=null}),ts(),s=f[i],s?s.p(u,m):(s=f[i]=c[i](u),s.c()),ye(s,1),s.m(o.parentNode,o))},i(u){a||(ye(l),ye(s),a=!0)},o(u){Ae(l),Ae(s),a=!1},d(u){l&&l.d(u),u&&Dt(t),f[i].d(u),u&&Dt(o)}}}function Pm(r,e,t){const n=["type","args","attach","manual","makeDefault","dispose","ref"];let i=Ls(e,n),s,{$$slots:o={},$$scope:a}=e,{type:l}=e,{args:c=void 0}=e,{attach:f=void 0}=e,{manual:d=void 0}=e,{makeDefault:u=void 0}=e,{dispose:m=void 0}=e;const x=Kt("threlte-hierarchical-parent-context");ot(r,x,T=>t(11,s=T));const p=T=>typeof T=="function"&&/^\s*class\s+/.test(T.toString()),h=T=>Array.isArray(T);let{ref:g=p(l)&&h(c)?new l(...c):p(l)?new l:l}=e,b=!1;const v=pt(g);kt("threlte-hierarchical-parent-context",v);const S=ym(),w=xm(),L=mm(),F=vm(),_=T=>!!T.isObject3D,C=T=>T.dispose!==void 0;return r.$$set=T=>{e=Ps(Ps({},e),ol(T)),t(21,i=Ls(e,n)),"type"in T&&t(5,l=T.type),"args"in T&&t(6,c=T.args),"attach"in T&&t(7,f=T.attach),"manual"in T&&t(8,d=T.manual),"makeDefault"in T&&t(9,u=T.makeDefault),"dispose"in T&&t(1,m=T.dispose),"ref"in T&&t(0,g=T.ref),"$$scope"in T&&t(13,a=T.$$scope)},r.$$.update=()=>{r.$$.dirty&1120&&(b?t(0,g=p(l)&&h(c)?new l(...c):p(l)?new l:l):t(10,b=!0)),r.$$.dirty&1&&v.set(g),S.updateProps(g,i,{manualCamera:d}),r.$$.dirty&257&&w.update(g,d),r.$$.dirty&513&&w.makeDefaultCamera(g,u),r.$$.dirty&2177&&L.update(g,s,f),r.$$.dirty&1&&F.updateRef(g)},[g,m,x,_,C,l,c,f,d,u,b,s,o,a]}class Ri extends mt{constructor(e){super(),gt(this,e,Pm,Lm,_t,{type:5,args:6,attach:7,manual:8,makeDefault:9,dispose:1,ref:0})}}function Dm(r){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class ao extends mt{constructor(e){super(),gt(this,e,Dm,null,_t,{})}}new Proxy(ao,{get(r,e){return r[e]||ao}});const Rm=um(Ha,()=>new Ha(Go)),$r=(r,e)=>Rm.load(r,t=>{var n;kp("useTexture"),(n=e==null?void 0:e.onLoad)==null||n.call(e,t)},t=>{var n;(n=e==null?void 0:e.onProgress)==null||n.call(e,t)},t=>{var n;(n=e==null?void 0:e.onError)==null||n.call(e,t)}),Im=r=>typeof r=="string",Fm=r=>Array.isArray(r),oo=r=>{try{const e=Ss();if(!e)return r;ln(e.linear)||(r.encoding=Be)}catch{console.warn("Calling useTexture outside component initialization does not support color correction.")}return r};function Om(r,e){return Im(r)?kn?oo($r(r,e)):new ct:Fm(r)?kn?r.map(t=>oo($r(t,e))):r.map(()=>new ct):Object.entries(r).reduce((i,[s,o])=>(i[s]=kn?$r(o,e):new ct,i),{})}const Nm=`
  uniform float uUvScale;

  attribute vec3 aPosition;
  attribute vec2 aUvOffset;

  varying vec2 vUv;

  void main() {
    vec3 pos = position;

    pos += aPosition;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    vUv = uv * uUvScale + aUvOffset;
  }
`,zm=`
  uniform sampler2D uTexture;

  varying vec2 vUv;

  void main() {
    gl_FragColor = texture2D(uTexture, vUv);
  }
`;function Um(r){let e,t,n,i;return e=new Ri({props:{type:Ga,attach:"attributes.aPosition",args:[r[1],3,1]}}),n=new Ri({props:{type:Ga,attach:"attributes.aUvOffset",args:[r[6],2,1]}}),{c(){Ve(e.$$.fragment),t=bn(),Ve(n.$$.fragment)},l(s){He(e.$$.fragment,s),t=Mn(s),He(n.$$.fragment,s)},m(s,o){We(e,s,o),Ht(s,t,o),We(n,s,o),i=!0},p(s,o){const a={};o&2&&(a.args=[s[1],3,1]),e.$set(a)},i(s){i||(ye(e.$$.fragment,s),ye(n.$$.fragment,s),i=!0)},o(s){Ae(e.$$.fragment,s),Ae(n.$$.fragment,s),i=!1},d(s){je(e,s),s&&Dt(t),je(n,s)}}}function Bm(r){let e,t,n,i;return e=new Ri({props:{type:Jt,uniforms:{uTexture:{value:r[3]},uUvScale:{value:1/r[0]}},vertexShader:Nm,fragmentShader:zm,transparent:!0,depthWrite:!1,side:r[2]?Ai:un}}),n=new Ri({props:{type:lp,instanceCount:r[4],"attributes.position":r[5].getAttribute("position"),"attributes.uv":r[5].getAttribute("uv"),index:r[5].index,$$slots:{default:[Um]},$$scope:{ctx:r}}}),{c(){Ve(e.$$.fragment),t=bn(),Ve(n.$$.fragment)},l(s){He(e.$$.fragment,s),t=Mn(s),He(n.$$.fragment,s)},m(s,o){We(e,s,o),Ht(s,t,o),We(n,s,o),i=!0},p(s,o){const a={};o&9&&(a.uniforms={uTexture:{value:s[3]},uUvScale:{value:1/s[0]}}),o&4&&(a.side=s[2]?Ai:un),e.$set(a);const l={};o&514&&(l.$$scope={dirty:o,ctx:s}),n.$set(l)},i(s){i||(ye(e.$$.fragment,s),ye(n.$$.fragment,s),i=!0)},o(s){Ae(e.$$.fragment,s),Ae(n.$$.fragment,s),i=!1},d(s){je(e,s),s&&Dt(t),je(n,s)}}}function km(r){let e,t;return e=new Ri({props:{type:qt,frustumCulled:!1,$$slots:{default:[Bm]},$$scope:{ctx:r}}}),{c(){Ve(e.$$.fragment)},l(n){He(e.$$.fragment,n)},m(n,i){We(e,n,i),t=!0},p(n,[i]){const s={};i&527&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){Ae(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function Gm(r,e,t){let{atlasPath:n}=e,{numAtlasColumns:i}=e,{positions:s}=e,{doubleSide:o=!1}=e,{magFilter:a=!0}=e;const l=i**2,c=Om(n);a||(c.magFilter=ht);const f=new ur(1,1),d=new Float32Array(l*2);for(let u=0;u<l;u++)d.set([u%i/i,Math.floor(u/i)/i],u*2);return r.$$set=u=>{"atlasPath"in u&&t(7,n=u.atlasPath),"numAtlasColumns"in u&&t(0,i=u.numAtlasColumns),"positions"in u&&t(1,s=u.positions),"doubleSide"in u&&t(2,o=u.doubleSide),"magFilter"in u&&t(8,a=u.magFilter)},[i,s,o,c,l,f,d,n,a]}class Vm extends mt{constructor(e){super(),gt(this,e,Gm,km,_t,{atlasPath:7,numAtlasColumns:0,positions:1,doubleSide:2,magFilter:8})}}function Hm(r){let e,t;return e=new pm({props:{enableDamping:!0}}),{c(){Ve(e.$$.fragment)},l(n){He(e.$$.fragment,n)},m(n,i){We(e,n,i),t=!0},p:ll,i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){Ae(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function Wm(r){let e,t,n,i;return e=new cm({props:{position:{x:0,y:0,z:10},$$slots:{default:[Hm]},$$scope:{ctx:r}}}),n=new Vm({props:{atlasPath:"atlas.png",numAtlasColumns:$o,positions:r[0],doubleSide:!0,magFilter:!1}}),{c(){Ve(e.$$.fragment),t=bn(),Ve(n.$$.fragment)},l(s){He(e.$$.fragment,s),t=Mn(s),He(n.$$.fragment,s)},m(s,o){We(e,s,o),Ht(s,t,o),We(n,s,o),i=!0},p(s,[o]){const a={};o&4&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){i||(ye(e.$$.fragment,s),ye(n.$$.fragment,s),i=!0)},o(s){Ae(e.$$.fragment,s),Ae(n.$$.fragment,s),i=!1},d(s){je(e,s),s&&Dt(t),je(n,s)}}}const $o=32;function jm(r){const e=$o**2,t=new Float32Array(e*3);for(let n=0;n<e;n++){const s=Math.random()*2*Math.PI,o=(Math.random()-.5)*2,a=Math.random(),l=Math.acos(o),c=9*Math.cbrt(a),f=c*Math.sin(l)*Math.cos(s),d=c*Math.sin(l)*Math.sin(s),u=c*Math.cos(l);t.set([f,d,u],n*3)}return[t]}class Xm extends mt{constructor(e){super(),gt(this,e,jm,Wm,_t,{})}}function qm(r){let e,t;return e=new Xm({}),{c(){Ve(e.$$.fragment)},l(n){He(e.$$.fragment,n)},m(n,i){We(e,n,i),t=!0},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){Ae(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function Ym(r){let e,t,n;return t=new Vp({props:{linear:!0,flat:!0,$$slots:{default:[qm]},$$scope:{ctx:r}}}),{c(){e=lo("div"),Ve(t.$$.fragment),this.h()},l(i){e=co(i,"DIV",{class:!0});var s=uo(e);He(t.$$.fragment,s),s.forEach(Dt),this.h()},h(){fo(e,"class","wrapper svelte-109jkt4")},m(i,s){Ht(i,e,s),We(t,e,null),n=!0},p(i,[s]){const o={};s&1&&(o.$$scope={dirty:s,ctx:i}),t.$set(o)},i(i){n||(ye(t.$$.fragment,i),n=!0)},o(i){Ae(t.$$.fragment,i),n=!1},d(i){i&&Dt(e),je(t)}}}class eg extends mt{constructor(e){super(),gt(this,e,null,Ym,_t,{})}}export{eg as default};
