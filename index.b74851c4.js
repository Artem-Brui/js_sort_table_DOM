function r(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=Array(t);e<t;e++)n[e]=r[e];return n}function t(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var e=document.querySelector("table"),n=document.querySelector("tbody");e.addEventListener("click",function(r){"TH"===r.target.tagName&&function(r,e){function n(r){return Number(r.replace(/[$,]/g,""))}var o=t(r.children);r.innerHTML="",o.sort(function(r,o){var i=t(r.children)[e].innerText,a=t(o.children)[e].innerText;return isNaN(n(i))?i.localeCompare(a):n(i)-n(a)}).forEach(function(t){return r.appendChild(t)})}(n,t(r.target.parentNode.children).indexOf(r.target,0))},!0);
//# sourceMappingURL=index.b74851c4.js.map
