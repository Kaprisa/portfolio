webpackJsonp([2],{13:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bling__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animate__ = __webpack_require__(3);\n\r\n\r\n\r\nfunction hamburger() {\r\n\tconst popup = Object(__WEBPACK_IMPORTED_MODULE_0__bling__[\"a\" /* $ */])('.popup-menu')\r\n\tpopup.style.display = 'none';\r\n\tObject(__WEBPACK_IMPORTED_MODULE_0__bling__[\"a\" /* $ */])('.header__hamburger').on('click', function(){\r\n\t\tthis.classList.toggle('on')\r\n\t\tObject(__WEBPACK_IMPORTED_MODULE_1__animate__[\"d\" /* fadeToggle */])(popup);\r\n\t\tlet animationDelay = 0;\r\n\t\tpopup.querySelectorAll('.menu__item').forEach( item => {\r\n\t\t\tanimationDelay ++;\r\n\t\t\titem.style.cssText = \r\n\t\t\t\t`animation-name: bounceIn;\r\n\t\t\t\tanimation-duration: .5s;\r\n\t\t\t\tanimation-fill-mode: both;\r\n\t\t\t\tanimation-delay: ${animationDelay/10}s;`\r\n\t\t})\r\n\t});\r\n}\r\n\r\n/* unused harmony default export */ var _unused_webpack_default_export = (hamburger());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2pzL21vZHVsZXMvaGFtYnVyZ2VyLmpzP2VmOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgJCB9IGZyb20gJy4vYmxpbmcnO1xyXG5pbXBvcnQgeyBmYWRlVG9nZ2xlIH0gZnJvbSAnLi9hbmltYXRlJztcclxuXHJcbmZ1bmN0aW9uIGhhbWJ1cmdlcigpIHtcclxuXHRjb25zdCBwb3B1cCA9ICQoJy5wb3B1cC1tZW51JylcclxuXHRwb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdCQoJy5oZWFkZXJfX2hhbWJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ29uJylcclxuXHRcdGZhZGVUb2dnbGUocG9wdXApO1xyXG5cdFx0bGV0IGFuaW1hdGlvbkRlbGF5ID0gMDtcclxuXHRcdHBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51X19pdGVtJykuZm9yRWFjaCggaXRlbSA9PiB7XHJcblx0XHRcdGFuaW1hdGlvbkRlbGF5ICsrO1xyXG5cdFx0XHRpdGVtLnN0eWxlLmNzc1RleHQgPSBcclxuXHRcdFx0XHRgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluO1xyXG5cdFx0XHRcdGFuaW1hdGlvbi1kdXJhdGlvbjogLjVzO1xyXG5cdFx0XHRcdGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcblx0XHRcdFx0YW5pbWF0aW9uLWRlbGF5OiAke2FuaW1hdGlvbkRlbGF5LzEwfXM7YFxyXG5cdFx0fSlcclxuXHR9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFtYnVyZ2VyKCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2pzL21vZHVsZXMvaGFtYnVyZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n")},14:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bling__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__smoothScroll__ = __webpack_require__(4);\n\r\n\r\n\r\nfunction arrows() {\r\nif (Object(__WEBPACK_IMPORTED_MODULE_0__bling__[\"a\" /* $ */])('.arrow-down')) {\r\n\tObject(__WEBPACK_IMPORTED_MODULE_0__bling__[\"a\" /* $ */])('.arrow-down').on('click', function(){\r\n\t\tconst h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);\r\n\t\tObject(__WEBPACK_IMPORTED_MODULE_1__smoothScroll__[\"a\" /* default */])(document.body, h, 2000);\r\n\t});\r\n}\r\n\r\nif (Object(__WEBPACK_IMPORTED_MODULE_0__bling__[\"a\" /* $ */])('.arrow-up')) {\r\n\tObject(__WEBPACK_IMPORTED_MODULE_0__bling__[\"a\" /* $ */])('.arrow-up').on('click', function(){\r\n\t\tObject(__WEBPACK_IMPORTED_MODULE_1__smoothScroll__[\"a\" /* default */])(document.body, 0, 2000);\r\n\t});\r\n}\r\n\r\n}\r\n\r\n\r\n\r\n/* unused harmony default export */ var _unused_webpack_default_export = (arrows());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2pzL21vZHVsZXMvYXJyb3dzLmpzPzVjZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgJCB9IGZyb20gJy4vYmxpbmcnO1xyXG5pbXBvcnQgc21vb3RoX3Njcm9sbF90byBmcm9tICcuL3Ntb290aFNjcm9sbCc7XHJcblxyXG5mdW5jdGlvbiBhcnJvd3MoKSB7XHJcbmlmICgkKCcuYXJyb3ctZG93bicpKSB7XHJcblx0JCgnLmFycm93LWRvd24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0Y29uc3QgaCA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKTtcclxuXHRcdHNtb290aF9zY3JvbGxfdG8oZG9jdW1lbnQuYm9keSwgaCwgMjAwMCk7XHJcblx0fSk7XHJcbn1cclxuXHJcbmlmICgkKCcuYXJyb3ctdXAnKSkge1xyXG5cdCQoJy5hcnJvdy11cCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHRzbW9vdGhfc2Nyb2xsX3RvKGRvY3VtZW50LmJvZHksIDAsIDIwMDApO1xyXG5cdH0pO1xyXG59XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFycm93cygpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9qcy9tb2R1bGVzL2Fycm93cy5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n")},4:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/**\r\n    Smoothly scroll element to the given target (element.scrollTop)\r\n    for the given duration\r\n\r\n    Returns a promise that\'s fulfilled when done, or rejected if\r\n    interrupted\r\n */\r\nconst smooth_scroll_to = function(element, target, duration) {\r\n    target = Math.round(target);\r\n    duration = Math.round(duration);\r\n    if (duration < 0) {\r\n        return Promise.reject("bad duration");\r\n    }\r\n    if (duration === 0) {\r\n        element.scrollTop = target;\r\n        return Promise.resolve();\r\n    }\r\n\r\n    const start_time = Date.now();\r\n    const end_time = start_time + duration;\r\n\r\n    const start_top = element.scrollTop;\r\n    const distance = target - start_top;\r\n\r\n    // based on http://en.wikipedia.org/wiki/Smoothstep\r\n    const smooth_step = function(start, end, point) {\r\n        if(point <= start) { return 0; }\r\n        if(point >= end) { return 1; }\r\n        let x = (point - start) / (end - start); // interpolation\r\n        return x*x*(3 - 2*x);\r\n    }\r\n\r\n    return new Promise(function(resolve, reject) {\r\n        // This is to keep track of where the element\'s scrollTop is\r\n        // supposed to be, based on what we\'re doing\r\n        let previous_top = element.scrollTop;\r\n\r\n        // This is like a think function from a game loop\r\n        const scroll_frame = function() {\r\n            if(element.scrollTop != previous_top) {\r\n                reject("interrupted");\r\n                return;\r\n            }\r\n\r\n            // set the scrollTop for this frame\r\n            const now = Date.now();\r\n            const point = smooth_step(start_time, end_time, now);\r\n            const frameTop = Math.round(start_top + (distance * point));\r\n            element.scrollTop = frameTop;\r\n\r\n            // check if we\'re done!\r\n            if(now >= end_time) {\r\n                resolve();\r\n                return;\r\n            }\r\n\r\n            // If we were supposed to scroll but didn\'t, then we\r\n            // probably hit the limit, so consider it done; not\r\n            // interrupted.\r\n            if(element.scrollTop === previous_top\r\n                && element.scrollTop !== frameTop) {\r\n                resolve();\r\n                return;\r\n            }\r\n            previous_top = element.scrollTop;\r\n\r\n            // schedule next frame for execution\r\n            setTimeout(scroll_frame, 0);\r\n        }\r\n\r\n        // boostrap the animation process\r\n        setTimeout(scroll_frame, 0);\r\n    });\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__["a"] = (smooth_scroll_to);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvanMvbW9kdWxlcy9zbW9vdGhTY3JvbGwuanM/ODM3MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICAgIFNtb290aGx5IHNjcm9sbCBlbGVtZW50IHRvIHRoZSBnaXZlbiB0YXJnZXQgKGVsZW1lbnQuc2Nyb2xsVG9wKVxyXG4gICAgZm9yIHRoZSBnaXZlbiBkdXJhdGlvblxyXG5cclxuICAgIFJldHVybnMgYSBwcm9taXNlIHRoYXQncyBmdWxmaWxsZWQgd2hlbiBkb25lLCBvciByZWplY3RlZCBpZlxyXG4gICAgaW50ZXJydXB0ZWRcclxuICovXHJcbmNvbnN0IHNtb290aF9zY3JvbGxfdG8gPSBmdW5jdGlvbihlbGVtZW50LCB0YXJnZXQsIGR1cmF0aW9uKSB7XHJcbiAgICB0YXJnZXQgPSBNYXRoLnJvdW5kKHRhcmdldCk7XHJcbiAgICBkdXJhdGlvbiA9IE1hdGgucm91bmQoZHVyYXRpb24pO1xyXG4gICAgaWYgKGR1cmF0aW9uIDwgMCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcImJhZCBkdXJhdGlvblwiKTtcclxuICAgIH1cclxuICAgIGlmIChkdXJhdGlvbiA9PT0gMCkge1xyXG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gdGFyZ2V0O1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGFydF90aW1lID0gRGF0ZS5ub3coKTtcclxuICAgIGNvbnN0IGVuZF90aW1lID0gc3RhcnRfdGltZSArIGR1cmF0aW9uO1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0X3RvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgY29uc3QgZGlzdGFuY2UgPSB0YXJnZXQgLSBzdGFydF90b3A7XHJcblxyXG4gICAgLy8gYmFzZWQgb24gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TbW9vdGhzdGVwXHJcbiAgICBjb25zdCBzbW9vdGhfc3RlcCA9IGZ1bmN0aW9uKHN0YXJ0LCBlbmQsIHBvaW50KSB7XHJcbiAgICAgICAgaWYocG9pbnQgPD0gc3RhcnQpIHsgcmV0dXJuIDA7IH1cclxuICAgICAgICBpZihwb2ludCA+PSBlbmQpIHsgcmV0dXJuIDE7IH1cclxuICAgICAgICBsZXQgeCA9IChwb2ludCAtIHN0YXJ0KSAvIChlbmQgLSBzdGFydCk7IC8vIGludGVycG9sYXRpb25cclxuICAgICAgICByZXR1cm4geCp4KigzIC0gMip4KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgLy8gVGhpcyBpcyB0byBrZWVwIHRyYWNrIG9mIHdoZXJlIHRoZSBlbGVtZW50J3Mgc2Nyb2xsVG9wIGlzXHJcbiAgICAgICAgLy8gc3VwcG9zZWQgdG8gYmUsIGJhc2VkIG9uIHdoYXQgd2UncmUgZG9pbmdcclxuICAgICAgICBsZXQgcHJldmlvdXNfdG9wID0gZWxlbWVudC5zY3JvbGxUb3A7XHJcblxyXG4gICAgICAgIC8vIFRoaXMgaXMgbGlrZSBhIHRoaW5rIGZ1bmN0aW9uIGZyb20gYSBnYW1lIGxvb3BcclxuICAgICAgICBjb25zdCBzY3JvbGxfZnJhbWUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYoZWxlbWVudC5zY3JvbGxUb3AgIT0gcHJldmlvdXNfdG9wKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoXCJpbnRlcnJ1cHRlZFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gc2V0IHRoZSBzY3JvbGxUb3AgZm9yIHRoaXMgZnJhbWVcclxuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgY29uc3QgcG9pbnQgPSBzbW9vdGhfc3RlcChzdGFydF90aW1lLCBlbmRfdGltZSwgbm93KTtcclxuICAgICAgICAgICAgY29uc3QgZnJhbWVUb3AgPSBNYXRoLnJvdW5kKHN0YXJ0X3RvcCArIChkaXN0YW5jZSAqIHBvaW50KSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gZnJhbWVUb3A7XHJcblxyXG4gICAgICAgICAgICAvLyBjaGVjayBpZiB3ZSdyZSBkb25lIVxyXG4gICAgICAgICAgICBpZihub3cgPj0gZW5kX3RpbWUpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgd2Ugd2VyZSBzdXBwb3NlZCB0byBzY3JvbGwgYnV0IGRpZG4ndCwgdGhlbiB3ZVxyXG4gICAgICAgICAgICAvLyBwcm9iYWJseSBoaXQgdGhlIGxpbWl0LCBzbyBjb25zaWRlciBpdCBkb25lOyBub3RcclxuICAgICAgICAgICAgLy8gaW50ZXJydXB0ZWQuXHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnQuc2Nyb2xsVG9wID09PSBwcmV2aW91c190b3BcclxuICAgICAgICAgICAgICAgICYmIGVsZW1lbnQuc2Nyb2xsVG9wICE9PSBmcmFtZVRvcCkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByZXZpb3VzX3RvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cclxuICAgICAgICAgICAgLy8gc2NoZWR1bGUgbmV4dCBmcmFtZSBmb3IgZXhlY3V0aW9uXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoc2Nyb2xsX2ZyYW1lLCAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGJvb3N0cmFwIHRoZSBhbmltYXRpb24gcHJvY2Vzc1xyXG4gICAgICAgIHNldFRpbWVvdXQoc2Nyb2xsX2ZyYW1lLCAwKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzbW9vdGhfc2Nyb2xsX3RvO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9qcy9tb2R1bGVzL3Ntb290aFNjcm9sbC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n')},45:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sass_pages_blog_sass__ = __webpack_require__(46);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sass_pages_blog_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__sass_pages_blog_sass__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_bling__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_preloader__ = __webpack_require__(15);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_hamburger__ = __webpack_require__(13);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_arrows__ = __webpack_require__(14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_smoothScroll__ = __webpack_require__(4);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst sidebar = Object(__WEBPACK_IMPORTED_MODULE_1__modules_bling__[\"a\" /* $ */])('.blog-sidebar');\r\nwindow.scrollTo(0, 0);\r\nconst articles = Object(__WEBPACK_IMPORTED_MODULE_1__modules_bling__[\"b\" /* $$ */])('.blog-article');\r\nconst articleLinks = Object(__WEBPACK_IMPORTED_MODULE_1__modules_bling__[\"b\" /* $$ */])('.blog-sidebar__link');\r\n\r\nif (screen.width > 1200){\r\n\tsidebar.style.position = 'fixed';\r\n\tconst fixedWidth = sidebar.clientWidth;\r\n\tsidebar.style.position = 'static';\r\n\tconst sidebarRect = sidebar.getBoundingClientRect();\r\n\tconst sidebarPaddingRight = parseInt(getComputedStyle(sidebar, null).getPropertyValue('padding-right'));\r\n\tconst left = sidebarRect.width - fixedWidth - sidebarPaddingRight;\r\n\twindow.onscroll = function() {\r\n\t\tconst paddingTop = getComputedStyle(Object(__WEBPACK_IMPORTED_MODULE_1__modules_bling__[\"a\" /* $ */])('.blog__main'), null).getPropertyValue('padding-top');\r\n\t\tif (window.scrollY-Object(__WEBPACK_IMPORTED_MODULE_1__modules_bling__[\"a\" /* $ */])('.blog__main').offsetTop+parseInt(paddingTop)> 0){\r\n\t\t\t\tsidebar.style.cssText = \r\n\t\t\t\t\t`position: fixed;\r\n\t\t\t\t\ttop: 0;\r\n\t\t\t\t\tleft: ${left}px;`; \r\n\t\t}else{\r\n\t\t\tif(sidebar.style.position === 'fixed'){\r\n\t\t\t\tsidebar.style.position = 'static';\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n} else {\r\n\t\t\tconst body = Object(__WEBPACK_IMPORTED_MODULE_1__modules_bling__[\"a\" /* $ */])('body');\r\n\t\tlet\r\n\t    touchStartX = 0,\r\n\t    touchEndX = 0,\r\n\t    threshold = 100;\r\n\r\n\t  body.on('touchstart', function (event) {\r\n\t    if (window.clientWidth >= 1200) return;\r\n\t    console.log(event);\r\n\t    const touch = event.touches[0] || event.changedTouches[0];\r\n\r\n\t    touchStartX = touch.pageX;\r\n\t  });\r\n\r\n\t  body.on('touchend', function (event) {\r\n\t    if (window.clientWidth >= 1200) return;\r\n\r\n\t    const touch = event.touches[0] || event.changedTouches[0];//.originalEvent\r\n\r\n\t    touchEndX = touch.pageX;\r\n\r\n\t    if (touchEndX - touchStartX > threshold && !sidebar.classList.contains('blog-sidebar_open')) \r\n\t    \tsidebar.classList.add('blog-sidebar_open');\r\n\t    else if (touchEndX - touchStartX < -threshold && sidebar.classList.contains('blog-sidebar_open'))\r\n\t      sidebar.classList.remove('blog-sidebar_open');\r\n\t  });\r\n}\r\n\tarticles.on('wheel', function(){\r\n\t\tconst currentIndex= articles.indexOf(this);\r\n\r\n\t\tif (Object(__WEBPACK_IMPORTED_MODULE_1__modules_bling__[\"a\" /* $ */])('.blog-sidebar__link_active')) {\r\n\t\t\tObject(__WEBPACK_IMPORTED_MODULE_1__modules_bling__[\"a\" /* $ */])('.blog-sidebar__link_active').classList.remove('blog-sidebar__link_active');\r\n\t\t}\r\n\t\tarticleLinks[currentIndex].classList.add('blog-sidebar__link_active');\r\n\r\n\t});\t\r\n\r\n\r\narticleLinks.on('click', function(e) {\r\n\te.preventDefault();\r\n\tif (Object(__WEBPACK_IMPORTED_MODULE_1__modules_bling__[\"a\" /* $ */])('.blog-sidebar__link_active')) {\r\n\t\tObject(__WEBPACK_IMPORTED_MODULE_1__modules_bling__[\"a\" /* $ */])('.blog-sidebar__link_active').classList.remove('blog-sidebar__link_active');\r\n\t}\r\n\tthis.classList.add('blog-sidebar__link_active');\r\n\tconst h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);\r\n\tObject(__WEBPACK_IMPORTED_MODULE_5__modules_smoothScroll__[\"a\" /* default */])(document.body, articles[articleLinks.indexOf(this)].offsetTop, 1000);\r\n})\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2pzL2Jsb2cuanM/MzAzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3Nhc3MvcGFnZXMvYmxvZy5zYXNzJztcclxuaW1wb3J0IHsgJCwgJCQgfSBmcm9tICcuL21vZHVsZXMvYmxpbmcnO1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9wcmVsb2FkZXInO1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9oYW1idXJnZXInO1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9hcnJvd3MnO1xyXG5pbXBvcnQgc21vb3RoX3Njcm9sbF90byBmcm9tICcuL21vZHVsZXMvc21vb3RoU2Nyb2xsJztcclxuXHJcbmNvbnN0IHNpZGViYXIgPSAkKCcuYmxvZy1zaWRlYmFyJyk7XHJcbndpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuY29uc3QgYXJ0aWNsZXMgPSAkJCgnLmJsb2ctYXJ0aWNsZScpO1xyXG5jb25zdCBhcnRpY2xlTGlua3MgPSAkJCgnLmJsb2ctc2lkZWJhcl9fbGluaycpO1xyXG5cclxuaWYgKHNjcmVlbi53aWR0aCA+IDEyMDApe1xyXG5cdHNpZGViYXIuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG5cdGNvbnN0IGZpeGVkV2lkdGggPSBzaWRlYmFyLmNsaWVudFdpZHRoO1xyXG5cdHNpZGViYXIuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcclxuXHRjb25zdCBzaWRlYmFyUmVjdCA9IHNpZGViYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0Y29uc3Qgc2lkZWJhclBhZGRpbmdSaWdodCA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoc2lkZWJhciwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpKTtcclxuXHRjb25zdCBsZWZ0ID0gc2lkZWJhclJlY3Qud2lkdGggLSBmaXhlZFdpZHRoIC0gc2lkZWJhclBhZGRpbmdSaWdodDtcclxuXHR3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcclxuXHRcdGNvbnN0IHBhZGRpbmdUb3AgPSBnZXRDb21wdXRlZFN0eWxlKCQoJy5ibG9nX19tYWluJyksIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctdG9wJyk7XHJcblx0XHRpZiAod2luZG93LnNjcm9sbFktJCgnLmJsb2dfX21haW4nKS5vZmZzZXRUb3ArcGFyc2VJbnQocGFkZGluZ1RvcCk+IDApe1xyXG5cdFx0XHRcdHNpZGViYXIuc3R5bGUuY3NzVGV4dCA9IFxyXG5cdFx0XHRcdFx0YHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRcdGxlZnQ6ICR7bGVmdH1weDtgOyBcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRpZihzaWRlYmFyLnN0eWxlLnBvc2l0aW9uID09PSAnZml4ZWQnKXtcclxuXHRcdFx0XHRzaWRlYmFyLnN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYyc7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IGJvZHkgPSAkKCdib2R5Jyk7XHJcblx0XHRsZXRcclxuXHQgICAgdG91Y2hTdGFydFggPSAwLFxyXG5cdCAgICB0b3VjaEVuZFggPSAwLFxyXG5cdCAgICB0aHJlc2hvbGQgPSAxMDA7XHJcblxyXG5cdCAgYm9keS5vbigndG91Y2hzdGFydCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdCAgICBpZiAod2luZG93LmNsaWVudFdpZHRoID49IDEyMDApIHJldHVybjtcclxuXHQgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG5cdCAgICBjb25zdCB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF0gfHwgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcblxyXG5cdCAgICB0b3VjaFN0YXJ0WCA9IHRvdWNoLnBhZ2VYO1xyXG5cdCAgfSk7XHJcblxyXG5cdCAgYm9keS5vbigndG91Y2hlbmQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHQgICAgaWYgKHdpbmRvdy5jbGllbnRXaWR0aCA+PSAxMjAwKSByZXR1cm47XHJcblxyXG5cdCAgICBjb25zdCB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF0gfHwgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07Ly8ub3JpZ2luYWxFdmVudFxyXG5cclxuXHQgICAgdG91Y2hFbmRYID0gdG91Y2gucGFnZVg7XHJcblxyXG5cdCAgICBpZiAodG91Y2hFbmRYIC0gdG91Y2hTdGFydFggPiB0aHJlc2hvbGQgJiYgIXNpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdibG9nLXNpZGViYXJfb3BlbicpKSBcclxuXHQgICAgXHRzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ2Jsb2ctc2lkZWJhcl9vcGVuJyk7XHJcblx0ICAgIGVsc2UgaWYgKHRvdWNoRW5kWCAtIHRvdWNoU3RhcnRYIDwgLXRocmVzaG9sZCAmJiBzaWRlYmFyLmNsYXNzTGlzdC5jb250YWlucygnYmxvZy1zaWRlYmFyX29wZW4nKSlcclxuXHQgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2Jsb2ctc2lkZWJhcl9vcGVuJyk7XHJcblx0ICB9KTtcclxufVxyXG5cdGFydGljbGVzLm9uKCd3aGVlbCcsIGZ1bmN0aW9uKCl7XHJcblx0XHRjb25zdCBjdXJyZW50SW5kZXg9IGFydGljbGVzLmluZGV4T2YodGhpcyk7XHJcblxyXG5cdFx0aWYgKCQoJy5ibG9nLXNpZGViYXJfX2xpbmtfYWN0aXZlJykpIHtcclxuXHRcdFx0JCgnLmJsb2ctc2lkZWJhcl9fbGlua19hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdibG9nLXNpZGViYXJfX2xpbmtfYWN0aXZlJyk7XHJcblx0XHR9XHJcblx0XHRhcnRpY2xlTGlua3NbY3VycmVudEluZGV4XS5jbGFzc0xpc3QuYWRkKCdibG9nLXNpZGViYXJfX2xpbmtfYWN0aXZlJyk7XHJcblxyXG5cdH0pO1x0XHJcblxyXG5cclxuYXJ0aWNsZUxpbmtzLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0aWYgKCQoJy5ibG9nLXNpZGViYXJfX2xpbmtfYWN0aXZlJykpIHtcclxuXHRcdCQoJy5ibG9nLXNpZGViYXJfX2xpbmtfYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYmxvZy1zaWRlYmFyX19saW5rX2FjdGl2ZScpO1xyXG5cdH1cclxuXHR0aGlzLmNsYXNzTGlzdC5hZGQoJ2Jsb2ctc2lkZWJhcl9fbGlua19hY3RpdmUnKTtcclxuXHRjb25zdCBoID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xyXG5cdHNtb290aF9zY3JvbGxfdG8oZG9jdW1lbnQuYm9keSwgYXJ0aWNsZXNbYXJ0aWNsZUxpbmtzLmluZGV4T2YodGhpcyldLm9mZnNldFRvcCwgMTAwMCk7XHJcbn0pXHJcblxyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2pzL2Jsb2cuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///45\n")},46:function(module,exports){eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL3Nhc3MvcGFnZXMvYmxvZy5zYXNzPzQ3N2QiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvc2Fzcy9wYWdlcy9ibG9nLnNhc3Ncbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///46\n")}},[45]);