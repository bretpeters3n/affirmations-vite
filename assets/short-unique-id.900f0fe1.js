import{e as j}from"./vendor.9c205b7b.js";var y={exports:{}};(function(C){var f=(()=>{var u=Object.defineProperty,P=Object.getOwnPropertyDescriptor,$=Object.getOwnPropertyNames,I=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,m=(h,e,a)=>e in h?u(h,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):h[e]=a,D=(h,e)=>{for(var a in e||(e={}))w.call(e,a)&&m(h,a,e[a]);if(I)for(var a of I(e))S.call(e,a)&&m(h,a,e[a]);return h},O=(h,e)=>{for(var a in e)u(h,a,{get:e[a],enumerable:!0})},q=(h,e,a,g)=>{if(e&&typeof e=="object"||typeof e=="function")for(let d of $(e))!w.call(h,d)&&d!==a&&u(h,d,{get:()=>e[d],enumerable:!(g=P(e,d))||g.enumerable});return h},B=h=>q(u({},"__esModule",{value:!0}),h),i=(h,e,a)=>(m(h,typeof e!="symbol"?e+"":e,a),a),x={};O(x,{DEFAULT_OPTIONS:()=>v,DEFAULT_UUID_LENGTH:()=>c,default:()=>M});var L="5.0.3",c=6,v={dictionary:"alphanum",shuffle:!0,debug:!1,length:c,counter:0},U=class{constructor(e={}){i(this,"counter"),i(this,"debug"),i(this,"dict"),i(this,"version"),i(this,"dictIndex",0),i(this,"dictRange",[]),i(this,"lowerBound",0),i(this,"upperBound",0),i(this,"dictLength",0),i(this,"uuidLength"),i(this,"_digit_first_ascii",48),i(this,"_digit_last_ascii",58),i(this,"_alpha_lower_first_ascii",97),i(this,"_alpha_lower_last_ascii",123),i(this,"_hex_last_ascii",103),i(this,"_alpha_upper_first_ascii",65),i(this,"_alpha_upper_last_ascii",91),i(this,"_number_dict_ranges",{digits:[this._digit_first_ascii,this._digit_last_ascii]}),i(this,"_alpha_dict_ranges",{lowerCase:[this._alpha_lower_first_ascii,this._alpha_lower_last_ascii],upperCase:[this._alpha_upper_first_ascii,this._alpha_upper_last_ascii]}),i(this,"_alpha_lower_dict_ranges",{lowerCase:[this._alpha_lower_first_ascii,this._alpha_lower_last_ascii]}),i(this,"_alpha_upper_dict_ranges",{upperCase:[this._alpha_upper_first_ascii,this._alpha_upper_last_ascii]}),i(this,"_alphanum_dict_ranges",{digits:[this._digit_first_ascii,this._digit_last_ascii],lowerCase:[this._alpha_lower_first_ascii,this._alpha_lower_last_ascii],upperCase:[this._alpha_upper_first_ascii,this._alpha_upper_last_ascii]}),i(this,"_alphanum_lower_dict_ranges",{digits:[this._digit_first_ascii,this._digit_last_ascii],lowerCase:[this._alpha_lower_first_ascii,this._alpha_lower_last_ascii]}),i(this,"_alphanum_upper_dict_ranges",{digits:[this._digit_first_ascii,this._digit_last_ascii],upperCase:[this._alpha_upper_first_ascii,this._alpha_upper_last_ascii]}),i(this,"_hex_dict_ranges",{decDigits:[this._digit_first_ascii,this._digit_last_ascii],alphaDigits:[this._alpha_lower_first_ascii,this._hex_last_ascii]}),i(this,"_dict_ranges",{_number_dict_ranges:this._number_dict_ranges,_alpha_dict_ranges:this._alpha_dict_ranges,_alpha_lower_dict_ranges:this._alpha_lower_dict_ranges,_alpha_upper_dict_ranges:this._alpha_upper_dict_ranges,_alphanum_dict_ranges:this._alphanum_dict_ranges,_alphanum_lower_dict_ranges:this._alphanum_lower_dict_ranges,_alphanum_upper_dict_ranges:this._alphanum_upper_dict_ranges,_hex_dict_ranges:this._hex_dict_ranges}),i(this,"log",(...t)=>{const s=[...t];if(s[0]=`[short-unique-id] ${t[0]}`,this.debug===!0&&typeof console<"u"&&console!==null)return console.log(...s)}),i(this,"setDictionary",(t,s)=>{let r;if(t&&Array.isArray(t)&&t.length>1)r=t;else{r=[];let n;this.dictIndex=n=0;const o=`_${t}_dict_ranges`,_=this._dict_ranges[o];Object.keys(_).forEach(l=>{const b=l;for(this.dictRange=_[b],this.lowerBound=this.dictRange[0],this.upperBound=this.dictRange[1],this.dictIndex=n=this.lowerBound;this.lowerBound<=this.upperBound?n<this.upperBound:n>this.upperBound;this.dictIndex=this.lowerBound<=this.upperBound?n+=1:n-=1)r.push(String.fromCharCode(this.dictIndex))})}s&&(r=r.sort(()=>Math.random()-.5)),this.dict=r,this.dictLength=this.dict.length,this.setCounter(0)}),i(this,"seq",()=>this.sequentialUUID()),i(this,"sequentialUUID",()=>{let t,s,r="";t=this.counter;do s=t%this.dictLength,t=Math.trunc(t/this.dictLength),r+=this.dict[s];while(t!==0);return this.counter+=1,r}),i(this,"rnd",(t=this.uuidLength||c)=>this.randomUUID(t)),i(this,"randomUUID",(t=this.uuidLength||c)=>{let s,r,n;if(t===null||typeof t>"u"||t<1)throw new Error("Invalid UUID Length Provided");for(s="",n=0;n<t;n+=1)r=parseInt((Math.random()*this.dictLength).toFixed(0),10)%this.dictLength,s+=this.dict[r];return s}),i(this,"fmt",(t,s)=>this.formattedUUID(t,s)),i(this,"formattedUUID",(t,s)=>{const r={$r:this.randomUUID,$s:this.sequentialUUID,$t:this.stamp};return t.replace(/\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g,o=>{const _=o.slice(0,2),l=parseInt(o.slice(2),10);return _==="$s"?r[_]().padStart(l,"0"):_==="$t"&&s?r[_](l,s):r[_](l)})}),i(this,"availableUUIDs",(t=this.uuidLength)=>parseFloat(Math.pow([...new Set(this.dict)].length,t).toFixed(0))),i(this,"approxMaxBeforeCollision",(t=this.availableUUIDs(this.uuidLength))=>parseFloat(Math.sqrt(Math.PI/2*t).toFixed(20))),i(this,"collisionProbability",(t=this.availableUUIDs(this.uuidLength),s=this.uuidLength)=>parseFloat((this.approxMaxBeforeCollision(t)/this.availableUUIDs(s)).toFixed(20))),i(this,"uniqueness",(t=this.availableUUIDs(this.uuidLength))=>{const s=parseFloat((1-this.approxMaxBeforeCollision(t)/t).toFixed(20));return s>1?1:s<0?0:s}),i(this,"getVersion",()=>this.version),i(this,"stamp",(t,s)=>{const r=Math.floor(+(s||new Date)/1e3).toString(16);if(typeof t=="number"&&t===0)return r;if(typeof t!="number"||t<10)throw new Error(["Param finalLength must be a number greater than or equal to 10,","or 0 if you want the raw hexadecimal timestamp"].join(`
`));const n=t-9,o=Math.round(Math.random()*(n>15?15:n)),_=this.randomUUID(n);return`${_.substring(0,o)}${r}${_.substring(o)}${o.toString(16)}`}),i(this,"parseStamp",(t,s)=>{if(s&&!/t0|t[1-9]\d{1,}/.test(s))throw new Error("Cannot extract date from a formated UUID with no timestamp in the format");const r=s?s.replace(/\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g,o=>{const _={$r:p=>[...Array(p)].map(()=>"r").join(""),$s:p=>[...Array(p)].map(()=>"s").join(""),$t:p=>[...Array(p)].map(()=>"t").join("")},l=o.slice(0,2),b=parseInt(o.slice(2),10);return _[l](b)}).replace(/^(.*?)(t{8,})(.*)$/g,(o,_,l)=>t.substring(_.length,_.length+l.length)):t;if(r.length===8)return new Date(parseInt(r,16)*1e3);if(r.length<10)throw new Error("Stamp length invalid");const n=parseInt(r.substring(r.length-1),16);return new Date(parseInt(r.substring(n,n+8),16)*1e3)}),i(this,"setCounter",t=>{this.counter=t});const a=D(D({},v),e);this.counter=0,this.debug=!1,this.dict=[],this.version=L;const{dictionary:g,shuffle:d,length:F,counter:E}=a;return this.uuidLength=F,this.setDictionary(g,d),this.setCounter(E),this.debug=a.debug,this.log(this.dict),this.log(`Generator instantiated with Dictionary Size ${this.dictLength} and counter set to ${this.counter}`),this.log=this.log.bind(this),this.setDictionary=this.setDictionary.bind(this),this.setCounter=this.setCounter.bind(this),this.seq=this.seq.bind(this),this.sequentialUUID=this.sequentialUUID.bind(this),this.rnd=this.rnd.bind(this),this.randomUUID=this.randomUUID.bind(this),this.fmt=this.fmt.bind(this),this.formattedUUID=this.formattedUUID.bind(this),this.availableUUIDs=this.availableUUIDs.bind(this),this.approxMaxBeforeCollision=this.approxMaxBeforeCollision.bind(this),this.collisionProbability=this.collisionProbability.bind(this),this.uniqueness=this.uniqueness.bind(this),this.getVersion=this.getVersion.bind(this),this.stamp=this.stamp.bind(this),this.parseStamp=this.parseStamp.bind(this),this}};i(U,"default",U);var M=U;return B(x)})();C.exports=f.default,typeof window<"u"&&(f=f.default)})(y);const N=j(y.exports);export{N as S};
