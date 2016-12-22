/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

eval("/*\r\n\tMinimaxing by HTML5 UP\r\n\thtml5up.net | @ajlkn\r\n\tFree for personal and commercial use under the CCA 3.0 license (html5up.net/license)\r\n*/\r\n\r\n(function($) {\r\n\r\n\tskel\r\n\t\t.breakpoints({\r\n\t\t\tdesktop: '(min-width: 737px)',\r\n\t\t\ttablet: '(min-width: 737px) and (max-width: 1200px)',\r\n\t\t\tmobile: '(max-width: 736px)'\r\n\t\t})\r\n\t\t.viewport({\r\n\t\t\tbreakpoints: {\r\n\t\t\t\ttablet: {\r\n\t\t\t\t\twidth: 1080\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t$(function() {\r\n\r\n\t\tvar $window = $(window),\r\n\t\t\t$body = $('body');\r\n\r\n\t\t// Fix: Placeholder polyfill.\r\n\t\t\t$('form').placeholder();\r\n\r\n\t\t// Prioritize \"important\" elements on mobile.\r\n\t\t\tskel.on('+mobile -mobile', function() {\r\n\t\t\t\t$.prioritize(\r\n\t\t\t\t\t'.important\\\\28 mobile\\\\29',\r\n\t\t\t\t\tskel.breakpoint('mobile').active\r\n\t\t\t\t);\r\n\t\t\t});\r\n\r\n\t\t// Off-Canvas Navigation.\r\n\r\n\t\t\t// Title Bar.\r\n\t\t\t\t$(\r\n\t\t\t\t\t'<div id=\"titleBar\">' +\r\n\t\t\t\t\t\t'<a href=\"#navPanel\" class=\"toggle\"></a>' +\r\n\t\t\t\t\t\t'<span class=\"title\">' + $('#logo').html() + '</span>' +\r\n\t\t\t\t\t'</div>'\r\n\t\t\t\t)\r\n\t\t\t\t\t.appendTo($body);\r\n\r\n\t\t\t// Navigation Panel.\r\n\t\t\t\t$(\r\n\t\t\t\t\t'<div id=\"navPanel\">' +\r\n\t\t\t\t\t\t'<nav>' +\r\n\t\t\t\t\t\t\t$('#nav').navList() +\r\n\t\t\t\t\t\t'</nav>' +\r\n\t\t\t\t\t'</div>'\r\n\t\t\t\t)\r\n\t\t\t\t\t.appendTo($body)\r\n\t\t\t\t\t.panel({\r\n\t\t\t\t\t\tdelay: 500,\r\n\t\t\t\t\t\thideOnClick: true,\r\n\t\t\t\t\t\thideOnSwipe: true,\r\n\t\t\t\t\t\tresetScroll: true,\r\n\t\t\t\t\t\tresetForms: true,\r\n\t\t\t\t\t\tside: 'left',\r\n\t\t\t\t\t\ttarget: $body,\r\n\t\t\t\t\t\tvisibleClass: 'navPanel-visible'\r\n\t\t\t\t\t});\r\n\r\n\t\t\t// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).\r\n\t\t\t\tif (skel.vars.os == 'wp' && skel.vars.osVersion < 10)\r\n\t\t\t\t\t$('#titleBar, #navPanel, #page-wrapper')\r\n\t\t\t\t\t\t.css('transition', 'none');\r\n\r\n\t});\r\n\r\n})(jQuery);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL21haW4uanM/NmU0YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5cdE1pbmltYXhpbmcgYnkgSFRNTDUgVVBcclxuXHRodG1sNXVwLm5ldCB8IEBhamxrblxyXG5cdEZyZWUgZm9yIHBlcnNvbmFsIGFuZCBjb21tZXJjaWFsIHVzZSB1bmRlciB0aGUgQ0NBIDMuMCBsaWNlbnNlIChodG1sNXVwLm5ldC9saWNlbnNlKVxyXG4qL1xyXG5cclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcblx0c2tlbFxyXG5cdFx0LmJyZWFrcG9pbnRzKHtcclxuXHRcdFx0ZGVza3RvcDogJyhtaW4td2lkdGg6IDczN3B4KScsXHJcblx0XHRcdHRhYmxldDogJyhtaW4td2lkdGg6IDczN3B4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KScsXHJcblx0XHRcdG1vYmlsZTogJyhtYXgtd2lkdGg6IDczNnB4KSdcclxuXHRcdH0pXHJcblx0XHQudmlld3BvcnQoe1xyXG5cdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdHRhYmxldDoge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDEwODBcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHQkKGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdHZhciAkd2luZG93ID0gJCh3aW5kb3cpLFxyXG5cdFx0XHQkYm9keSA9ICQoJ2JvZHknKTtcclxuXHJcblx0XHQvLyBGaXg6IFBsYWNlaG9sZGVyIHBvbHlmaWxsLlxyXG5cdFx0XHQkKCdmb3JtJykucGxhY2Vob2xkZXIoKTtcclxuXHJcblx0XHQvLyBQcmlvcml0aXplIFwiaW1wb3J0YW50XCIgZWxlbWVudHMgb24gbW9iaWxlLlxyXG5cdFx0XHRza2VsLm9uKCcrbW9iaWxlIC1tb2JpbGUnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkLnByaW9yaXRpemUoXHJcblx0XHRcdFx0XHQnLmltcG9ydGFudFxcXFwyOCBtb2JpbGVcXFxcMjknLFxyXG5cdFx0XHRcdFx0c2tlbC5icmVha3BvaW50KCdtb2JpbGUnKS5hY3RpdmVcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHQvLyBPZmYtQ2FudmFzIE5hdmlnYXRpb24uXHJcblxyXG5cdFx0XHQvLyBUaXRsZSBCYXIuXHJcblx0XHRcdFx0JChcclxuXHRcdFx0XHRcdCc8ZGl2IGlkPVwidGl0bGVCYXJcIj4nICtcclxuXHRcdFx0XHRcdFx0JzxhIGhyZWY9XCIjbmF2UGFuZWxcIiBjbGFzcz1cInRvZ2dsZVwiPjwvYT4nICtcclxuXHRcdFx0XHRcdFx0JzxzcGFuIGNsYXNzPVwidGl0bGVcIj4nICsgJCgnI2xvZ28nKS5odG1sKCkgKyAnPC9zcGFuPicgK1xyXG5cdFx0XHRcdFx0JzwvZGl2PidcclxuXHRcdFx0XHQpXHJcblx0XHRcdFx0XHQuYXBwZW5kVG8oJGJvZHkpO1xyXG5cclxuXHRcdFx0Ly8gTmF2aWdhdGlvbiBQYW5lbC5cclxuXHRcdFx0XHQkKFxyXG5cdFx0XHRcdFx0JzxkaXYgaWQ9XCJuYXZQYW5lbFwiPicgK1xyXG5cdFx0XHRcdFx0XHQnPG5hdj4nICtcclxuXHRcdFx0XHRcdFx0XHQkKCcjbmF2JykubmF2TGlzdCgpICtcclxuXHRcdFx0XHRcdFx0JzwvbmF2PicgK1xyXG5cdFx0XHRcdFx0JzwvZGl2PidcclxuXHRcdFx0XHQpXHJcblx0XHRcdFx0XHQuYXBwZW5kVG8oJGJvZHkpXHJcblx0XHRcdFx0XHQucGFuZWwoe1xyXG5cdFx0XHRcdFx0XHRkZWxheTogNTAwLFxyXG5cdFx0XHRcdFx0XHRoaWRlT25DbGljazogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0aGlkZU9uU3dpcGU6IHRydWUsXHJcblx0XHRcdFx0XHRcdHJlc2V0U2Nyb2xsOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRyZXNldEZvcm1zOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRzaWRlOiAnbGVmdCcsXHJcblx0XHRcdFx0XHRcdHRhcmdldDogJGJvZHksXHJcblx0XHRcdFx0XHRcdHZpc2libGVDbGFzczogJ25hdlBhbmVsLXZpc2libGUnXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIEZpeDogUmVtb3ZlIG5hdlBhbmVsIHRyYW5zaXRpb25zIG9uIFdQPDEwIChwb29yL2J1Z2d5IHBlcmZvcm1hbmNlKS5cclxuXHRcdFx0XHRpZiAoc2tlbC52YXJzLm9zID09ICd3cCcgJiYgc2tlbC52YXJzLm9zVmVyc2lvbiA8IDEwKVxyXG5cdFx0XHRcdFx0JCgnI3RpdGxlQmFyLCAjbmF2UGFuZWwsICNwYWdlLXdyYXBwZXInKVxyXG5cdFx0XHRcdFx0XHQuY3NzKCd0cmFuc2l0aW9uJywgJ25vbmUnKTtcclxuXHJcblx0fSk7XHJcblxyXG59KShqUXVlcnkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL21haW4uanMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);