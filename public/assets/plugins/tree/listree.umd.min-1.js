!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).listree=t()}(this,(function(){"use strict";return function(){const e=document.getElementsByClassName("listree-submenu-heading");Array.from(e).forEach((function(e){e.classList.add("collapsed"),e.nextElementSibling.style.display="none",e.addEventListener("click",(function(t){t.preventDefault();const n=t.target.nextElementSibling;"none"==n.style.display?(e.classList.remove("collapsed"),e.classList.add("expanded"),n.style.display="block"):(e.classList.remove("expanded"),e.classList.add("collapsed"),n.style.display="none"),t.stopPropagation()}))}))}}));