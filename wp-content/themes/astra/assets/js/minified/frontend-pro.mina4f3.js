astraToggleSetupPro=function(e,a,t){var l,o;if(0<(o="off-canvas"===e||"full-width"===e?(l=document.querySelectorAll("#ast-mobile-popup, #ast-mobile-header"),a.classList.contains("ast-header-break-point")?document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle"):document.querySelectorAll("#ast-desktop-header .main-header-menu-toggle")):a.classList.contains("ast-header-break-point")?(l=document.querySelectorAll("#ast-mobile-header"),document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle")):(l=document.querySelectorAll("#ast-desktop-header"),document.querySelectorAll("#ast-desktop-header .main-header-menu-toggle"))).length)for(var n=0;n<o.length;n++)if(o[n].setAttribute("data-index",n),t[n]||(t[n]=o[n],o[n].addEventListener("click",astraNavMenuToggle,!1)),void 0!==l[n])for(var r,s=0;s<l.length;s++)if(0<(r=document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link")?l[s].querySelectorAll("ul.main-header-menu .menu-item-has-children > .menu-link, ul.main-header-menu .ast-menu-toggle"):l[s].querySelectorAll("ul.main-header-menu .ast-menu-toggle")).length)for(var d=0;d<r.length;d++)r[d].addEventListener("click",AstraToggleSubMenu,!1)},astraNavMenuTogglePro=function(e,a,t,l){e.preventDefault();var o=e.target.closest("#ast-desktop-header"),n=document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content");r=null!=o&&""!==o?o.querySelector(".main-header-menu-toggle"):document.querySelector("#masthead > #ast-desktop-header .main-header-menu-toggle");o=document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content .main-header-bar-navigation");if("desktop"===e.currentTarget.trigger_type)return null!==o&&""!==o&&void 0!==o&&(astraToggleClass(o,"toggle-on"),o.classList.contains("toggle-on")?o.style.display="block":o.style.display=""),astraToggleClass(r,"toggled"),void(r.classList.contains("toggled")?(a.classList.add("ast-main-header-nav-open"),"dropdown"===t&&(n.style.display="block")):(a.classList.remove("ast-main-header-nav-open"),n.style.display="none"));var r=document.querySelectorAll("#masthead > #ast-mobile-header .main-header-bar-navigation");menu_toggle_all=document.querySelectorAll("#masthead > #ast-mobile-header .main-header-menu-toggle");t="0",n=!1;if(null!==l.closest("#ast-fixed-header")&&(r=document.querySelectorAll("#ast-fixed-header > #ast-mobile-header .main-header-bar-navigation"),menu_toggle_all=document.querySelectorAll("#ast-fixed-header .main-header-menu-toggle"),t="0",n=!0),void 0===r[t])return!1;for(var s=r[t].querySelectorAll(".menu-item-has-children"),d=0;d<s.length;d++){s[d].classList.remove("ast-submenu-expanded");for(var i=s[d].querySelectorAll(".sub-menu"),g=0;g<i.length;g++)i[g].style.display="none"}-1!==(l.getAttribute("class")||"").indexOf("main-header-menu-toggle")&&(astraToggleClass(r[t],"toggle-on"),astraToggleClass(menu_toggle_all[t],"toggled"),n&&1<menu_toggle_all.length&&astraToggleClass(menu_toggle_all[1],"toggled"),r[t].classList.contains("toggle-on")?(r[t].style.display="block",a.classList.add("ast-main-header-nav-open")):(r[t].style.display="",a.classList.remove("ast-main-header-nav-open")))};