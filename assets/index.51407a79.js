import{B as V,h as P,E as _,L as R,aa as A}from"./index.757ffe30.js";/**
 * Vue Currency Input 3.0.2
 * (c) 2018-2022 Matthias Stiller
 * @license MIT
 */var F;(function(s){s.symbol="symbol",s.narrowSymbol="narrowSymbol",s.code="code",s.name="name",s.hidden="hidden"})(F||(F={}));var y;(function(s){s.precision="precision",s.thousands="thousands",s.millions="millions",s.billions="billions"})(y||(y={}));const x=s=>s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),N=s=>s.replace(/^0+(0$|[^0])/,"$1"),E=(s,i)=>(s.match(new RegExp(x(i),"g"))||[]).length,L=(s,i)=>s.substring(0,s.indexOf(i)),$=[",",".","\u066B"],M="(0|[1-9]\\d*)";class C{constructor(i){var t,e,n,h,a,m;const{currency:l,currencyDisplay:g,locale:r,precision:o,accountingSign:c}=i;this.locale=r,this.options={style:"currency",currency:l,currencySign:c?"accounting":void 0,currencyDisplay:g!==F.hidden?g:void 0};const u=new Intl.NumberFormat(r,this.options),f=u.formatToParts(123456);this.currency=(t=f.find(({type:d})=>d==="currency"))===null||t===void 0?void 0:t.value,this.digits=[0,1,2,3,4,5,6,7,8,9].map(d=>d.toLocaleString(r)),this.decimalSymbol=(e=f.find(({type:d})=>d==="decimal"))===null||e===void 0?void 0:e.value,this.groupingSymbol=(n=f.find(({type:d})=>d==="group"))===null||n===void 0?void 0:n.value,this.minusSign=(h=u.formatToParts(-1).find(({type:d})=>d==="minusSign"))===null||h===void 0?void 0:h.value,this.decimalSymbol===void 0?this.minimumFractionDigits=this.maximumFractionDigits=0:typeof o=="number"?this.minimumFractionDigits=this.maximumFractionDigits=o:(this.minimumFractionDigits=(a=o==null?void 0:o.min)!==null&&a!==void 0?a:u.resolvedOptions().minimumFractionDigits,this.maximumFractionDigits=(m=o==null?void 0:o.max)!==null&&m!==void 0?m:u.resolvedOptions().maximumFractionDigits);const b=d=>L(d,this.digits[1]),S=d=>d.substring(d.lastIndexOf(this.decimalSymbol?this.digits[0]:this.digits[1])+1);this.prefix=b(u.format(1)),this.suffix=S(u.format(1)),this.negativePrefix=b(u.format(-1)),this.negativeSuffix=S(u.format(-1))}parse(i){if(i){const t=this.isNegative(i);i=this.normalizeDigits(i),i=this.stripCurrency(i,t),i=this.stripSignLiterals(i);const e=this.decimalSymbol?`(?:${x(this.decimalSymbol)}(\\d*))?`:"",n=this.stripGroupingSeparator(i).match(new RegExp(`^${M}${e}$`));if(n&&this.isValidIntegerFormat(this.decimalSymbol?i.split(this.decimalSymbol)[0]:i,Number(n[1])))return Number(`${t?"-":""}${this.onlyDigits(n[1])}.${this.onlyDigits(n[2]||"")}`)}return null}isValidIntegerFormat(i,t){const e={...this.options,minimumFractionDigits:0};return[this.stripCurrency(this.normalizeDigits(t.toLocaleString(this.locale,{...e,useGrouping:!0})),!1),this.stripCurrency(this.normalizeDigits(t.toLocaleString(this.locale,{...e,useGrouping:!1})),!1)].includes(i)}format(i,t={minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits}){return i!=null?i.toLocaleString(this.locale,{...this.options,...t}):""}toFraction(i){return`${this.digits[0]}${this.decimalSymbol}${this.onlyLocaleDigits(i.substr(1)).substr(0,this.maximumFractionDigits)}`}isFractionIncomplete(i){return!!this.normalizeDigits(this.stripGroupingSeparator(i)).match(new RegExp(`^${M}${x(this.decimalSymbol)}$`))}isNegative(i){return i.startsWith(this.negativePrefix)||this.minusSign===void 0&&(i.startsWith("(")||i.startsWith("-"))||this.minusSign!==void 0&&i.replace("-",this.minusSign).startsWith(this.minusSign)}insertCurrency(i,t){return`${t?this.negativePrefix:this.prefix}${i}${t?this.negativeSuffix:this.suffix}`}stripGroupingSeparator(i){return this.groupingSymbol!==void 0?i.replace(new RegExp(x(this.groupingSymbol),"g"),""):i}stripSignLiterals(i){return this.minusSign!==void 0?i.replace("-",this.minusSign).replace(this.minusSign,""):i.replace(/[-()]/g,"")}stripCurrency(i,t){return i.replace(t?this.negativePrefix:this.prefix,"").replace(t?this.negativeSuffix:this.suffix,"")}normalizeDecimalSeparator(i,t){return $.forEach(e=>{i=i.substr(0,t)+i.substr(t).replace(e,this.decimalSymbol)}),i}normalizeDigits(i){return this.digits[0]!=="0"&&this.digits.forEach((t,e)=>{i=i.replace(new RegExp(t,"g"),String(e))}),i}onlyDigits(i){return this.normalizeDigits(i).replace(/\D+/g,"")}onlyLocaleDigits(i){return i.replace(new RegExp(`[^${this.digits.join("")}]*`,"g"),"")}}class O{constructor(i){this.currencyFormat=i}}class w extends O{conformToMask(i,t=""){const e=this.currencyFormat.isNegative(i),n=f=>f===""&&e&&!(this.currencyFormat.minusSign===void 0?t===this.currencyFormat.negativePrefix+this.currencyFormat.negativeSuffix:t===this.currencyFormat.negativePrefix),h=f=>{if(n(f))return"";if(this.currencyFormat.maximumFractionDigits>0){if(this.currencyFormat.isFractionIncomplete(f))return f;if(f.startsWith(this.currencyFormat.decimalSymbol))return this.currencyFormat.toFraction(f)}return null};let a=i;a=this.currencyFormat.stripCurrency(a,e),a=this.currencyFormat.stripSignLiterals(a);const m=h(a);if(m!=null)return this.currencyFormat.insertCurrency(m,e);const[l,...g]=a.split(this.currencyFormat.decimalSymbol),r=N(this.currencyFormat.onlyDigits(l)),o=this.currencyFormat.onlyDigits(g.join("")).substr(0,this.currencyFormat.maximumFractionDigits),c=g.length>0&&o.length===0,u=r===""&&e&&(this.currencyFormat.minusSign===void 0?t===i.slice(0,-2)+this.currencyFormat.negativeSuffix:t===i.slice(0,-1));return c||u||n(r)?t:r.match(/\d+/)?{numberValue:Number(`${e?"-":""}${r}.${o}`),fractionDigits:o}:""}}class G extends O{conformToMask(i,t=""){if(i===""||this.currencyFormat.parse(t)===0&&this.currencyFormat.stripCurrency(t,!0).slice(0,-1)===this.currencyFormat.stripCurrency(i,!0))return"";const e=this.currencyFormat.isNegative(i),n=this.currencyFormat.stripSignLiterals(i)===""?-0:Number(`${e?"-":""}${N(this.currencyFormat.onlyDigits(i))}`)/Math.pow(10,this.currencyFormat.maximumFractionDigits);return{numberValue:n,fractionDigits:n.toFixed(this.currencyFormat.maximumFractionDigits).slice(-this.currencyFormat.maximumFractionDigits)}}}const T={locale:void 0,currency:void 0,currencyDisplay:void 0,hideGroupingSeparatorOnFocus:!0,hideCurrencySymbolOnFocus:!0,hideNegligibleDecimalDigitsOnFocus:!0,precision:void 0,autoDecimalDigits:!1,valueRange:void 0,useGrouping:!0,valueScaling:void 0};class k{constructor(i){this.el=i.el,this.onInput=i.onInput,this.onChange=i.onChange,this.addEventListener(),this.init(i.options)}setOptions(i){this.init(i),this.applyFixedFractionFormat(this.numberValue,!0)}getValue(){return{number:this.valueScaling&&this.numberValue!=null?this.toInteger(this.numberValue,this.valueScaling):this.numberValue,formatted:this.formattedValue}}setValue(i){const t=this.valueScaling!==void 0&&i!=null?this.toFloat(i,this.valueScaling):i;t!==this.numberValue&&this.applyFixedFractionFormat(t)}init(i){this.options={...T,...i},this.options.autoDecimalDigits?(this.options.hideNegligibleDecimalDigitsOnFocus=!1,this.el.setAttribute("inputmode","numeric")):this.el.setAttribute("inputmode","decimal"),this.currencyFormat=new C(this.options),this.numberMask=this.options.autoDecimalDigits?new G(this.currencyFormat):new w(this.currencyFormat);const t={[y.precision]:this.currencyFormat.maximumFractionDigits,[y.thousands]:3,[y.millions]:6,[y.billions]:9};this.valueScaling=this.options.valueScaling?t[this.options.valueScaling]:void 0,this.valueScalingFractionDigits=this.valueScaling!==void 0&&this.options.valueScaling!==y.precision?this.valueScaling+this.currencyFormat.maximumFractionDigits:this.currencyFormat.maximumFractionDigits,this.minValue=this.getMinValue(),this.maxValue=this.getMaxValue()}getMinValue(){var i,t;let e=this.toFloat(-Number.MAX_SAFE_INTEGER);return((i=this.options.valueRange)===null||i===void 0?void 0:i.min)!==void 0&&(e=Math.max((t=this.options.valueRange)===null||t===void 0?void 0:t.min,this.toFloat(-Number.MAX_SAFE_INTEGER))),e}getMaxValue(){var i,t;let e=this.toFloat(Number.MAX_SAFE_INTEGER);return((i=this.options.valueRange)===null||i===void 0?void 0:i.max)!==void 0&&(e=Math.min((t=this.options.valueRange)===null||t===void 0?void 0:t.max,this.toFloat(Number.MAX_SAFE_INTEGER))),e}toFloat(i,t){return i/Math.pow(10,t!=null?t:this.valueScalingFractionDigits)}toInteger(i,t){return Number(i.toFixed(t!=null?t:this.valueScalingFractionDigits).split(".").join(""))}validateValueRange(i){return i!=null?Math.min(Math.max(i,this.minValue),this.maxValue):i}applyFixedFractionFormat(i,t=!1){this.format(this.currencyFormat.format(this.validateValueRange(i))),(i!==this.numberValue||t)&&this.onChange(this.getValue())}format(i,t=!1){if(i!=null){this.decimalSymbolInsertedAt!==void 0&&(i=this.currencyFormat.normalizeDecimalSeparator(i,this.decimalSymbolInsertedAt),this.decimalSymbolInsertedAt=void 0);const e=this.numberMask.conformToMask(i,this.formattedValue);let n;if(typeof e=="object"){const{numberValue:h,fractionDigits:a}=e;let{maximumFractionDigits:m,minimumFractionDigits:l}=this.currencyFormat;this.focus?l=t?a.replace(/0+$/,"").length:Math.min(m,a.length):Number.isInteger(h)&&!this.options.autoDecimalDigits&&(this.options.precision===void 0||l===0)&&(l=m=0),n=this.toInteger(Math.abs(h))>Number.MAX_SAFE_INTEGER?this.formattedValue:this.currencyFormat.format(h,{useGrouping:this.options.useGrouping&&!(this.focus&&this.options.hideGroupingSeparatorOnFocus),minimumFractionDigits:l,maximumFractionDigits:m})}else n=e;this.maxValue<=0&&!this.currencyFormat.isNegative(n)&&this.currencyFormat.parse(n)!==0&&(n=n.replace(this.currencyFormat.prefix,this.currencyFormat.negativePrefix)),this.minValue>=0&&(n=n.replace(this.currencyFormat.negativePrefix,this.currencyFormat.prefix)),(this.options.currencyDisplay===F.hidden||this.focus&&this.options.hideCurrencySymbolOnFocus)&&(n=n.replace(this.currencyFormat.negativePrefix,this.currencyFormat.minusSign!==void 0?this.currencyFormat.minusSign:"(").replace(this.currencyFormat.negativeSuffix,this.currencyFormat.minusSign!==void 0?"":")").replace(this.currencyFormat.prefix,"").replace(this.currencyFormat.suffix,"")),this.el.value=n,this.numberValue=this.currencyFormat.parse(n)}else this.el.value="",this.numberValue=null;this.formattedValue=this.el.value,this.onInput(this.getValue())}addEventListener(){this.el.addEventListener("input",i=>{const{value:t,selectionStart:e}=this.el,n=i;if(e&&n.data&&$.includes(n.data)&&(this.decimalSymbolInsertedAt=e-1),this.format(t),this.focus&&e!=null){const h=()=>{const{prefix:a,suffix:m,decimalSymbol:l,maximumFractionDigits:g,groupingSymbol:r}=this.currencyFormat;let o=t.length-e;const c=this.formattedValue.length;if(this.currencyFormat.minusSign===void 0&&(t.startsWith("(")||t.startsWith("-"))&&!t.endsWith(")"))return c-this.currencyFormat.negativeSuffix.length>1?this.formattedValue.substring(e).length:1;if(this.formattedValue.substr(e,1)===r&&E(this.formattedValue,r)===E(t,r)+1)return c-o-1;if(c<o)return e;if(l!==void 0&&t.indexOf(l)!==-1){const u=t.indexOf(l)+1;if(Math.abs(c-t.length)>1&&e<=u)return this.formattedValue.indexOf(l)+1;!this.options.autoDecimalDigits&&e>u&&this.currencyFormat.onlyDigits(t.substr(u)).length-1===g&&(o-=1)}return this.options.hideCurrencySymbolOnFocus||this.options.currencyDisplay===F.hidden?c-o:Math.max(c-Math.max(o,m.length),a.length)};this.setCaretPosition(h())}}),this.el.addEventListener("focus",()=>{this.focus=!0,setTimeout(()=>{const{value:i,selectionStart:t,selectionEnd:e}=this.el;if(this.format(i,this.options.hideNegligibleDecimalDigitsOnFocus),t!=null&&e!=null&&Math.abs(t-e)>0)this.setCaretPosition(0,this.el.value.length);else if(t!=null){const n=this.getCaretPositionOnFocus(i,t);this.setCaretPosition(n)}})}),this.el.addEventListener("blur",()=>{this.focus=!1,this.applyFixedFractionFormat(this.numberValue)}),this.el.addEventListener("change",()=>{this.onChange(this.getValue())})}getCaretPositionOnFocus(i,t){if(this.numberValue==null)return t;const{prefix:e,negativePrefix:n,suffix:h,negativeSuffix:a,groupingSymbol:m,currency:l}=this.currencyFormat,g=this.numberValue<0,r=g?n:e,o=r.length;if(this.options.hideCurrencySymbolOnFocus||this.options.currencyDisplay===F.hidden){if(g){if(t<=1)return 1;if(i.endsWith(")")&&t>i.indexOf(")"))return this.formattedValue.length-1}}else{const u=g?a.length:h.length;if(t>=i.length-u)return this.formattedValue.length-u;if(t<o)return o}let c=t;return this.options.hideCurrencySymbolOnFocus&&this.options.currencyDisplay!==F.hidden&&t>=o&&l!==void 0&&r.includes(l)&&(c-=o,g&&(c+=1)),this.options.hideGroupingSeparatorOnFocus&&m!==void 0&&(c-=E(i.substring(0,t),m)),c}setCaretPosition(i,t=i){this.el.setSelectionRange(i,t)}}const z=s=>s!=null&&s.matches("input")?s:s==null?void 0:s.querySelector("input");function X(s,i){var t,e,n,h;let a;const m=V(null),l=V(null),g=V(null),r=R(),o=(r==null?void 0:r.emit)||((e=(t=r==null?void 0:r.proxy)===null||t===void 0?void 0:t.$emit)===null||e===void 0?void 0:e.bind(r==null?void 0:r.proxy)),c=(r==null?void 0:r.props)||((n=r==null?void 0:r.proxy)===null||n===void 0?void 0:n.$props),u=A.startsWith("3"),f=u&&((h=r==null?void 0:r.attrs.modelModifiers)===null||h===void 0?void 0:h.lazy),b=P(()=>c==null?void 0:c[u?"modelValue":"value"]),S=u?"update:modelValue":"input",d=f?"update:modelValue":"change";return _(m,p=>{var D;if(p){const I=z((D=p==null?void 0:p.$el)!==null&&D!==void 0?D:p);I?(a=new k({el:I,options:s,onInput:v=>{!f&&i!==!1&&b.value!==v.number&&(o==null||o(S,v.number)),g.value=v.number,l.value=v.formatted},onChange:v=>{o==null||o(d,v.number)}}),a.setValue(b.value)):console.error('No input element found. Please make sure that the "inputRef" template ref is properly assigned.')}else a=null}),{inputRef:m,numberValue:g,formattedValue:l,setValue:p=>a==null?void 0:a.setValue(p),setOptions:p=>a==null?void 0:a.setOptions(p)}}export{X as u};
