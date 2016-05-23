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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// require('!style!css!./style.css');

	// document.write(require('./public/scripts/main.js'));
	document.write(__webpack_require__(1));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ImageLoader = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Loader2 = __webpack_require__(2);

	var _Loader3 = _interopRequireDefault(_Loader2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ImageLoader = exports.ImageLoader = function (_Loader) {
	  _inherits(ImageLoader, _Loader);

	  function ImageLoader() {
	    _classCallCheck(this, ImageLoader);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ImageLoader).call(this));

	    _this._store = {};
	    return _this;
	  }

	  _createClass(ImageLoader, [{
	    key: 'load',
	    value: function load(images) {
	      var _this2 = this;

	      return new Promise(function (resolve, reject) {
	        var total = 0;
	        var finish = 0;
	        var loadFinish = function loadFinish() {
	          return total === finish;
	        };
	        Object.getOwnPropertyNames(images).forEach(function (key) {
	          total++;
	          // let url = images[key];
	          var img = new Image();
	          img.src = images[key];
	          img.onload = function () {
	            _this2._store[key] = img;
	            finish++;
	            console.log('image:' + key + ' load finish.');
	            if (loadFinish()) {
	              resolve();
	            }
	          };
	          img.onerror = function () {
	            reject();
	          };
	        });
	      });
	    }
	  }]);

	  return ImageLoader;
	}(_Loader3.default);

	var images = {
	  "Gallery": "https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/leisa_christmas_false_color.png?itok=Jxf0IlS4",
	  "Gallery2": "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg",
	  "Star Clusters": "http://cdn.spacetelescope.org/archives/images/large/heic1509a.jpg",
	  "King Fisher": "http://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
	};

	// let loader = new ImageLoader();
	// loader.load(images).then(()=>{
	//   console.log('load finish.');
	// },()=>{
	//   console.log('error');
	// });

	// loader.on('progress',(current,total)=>{
	//   console.log(`${current} of ${total} completed`);
	// })

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Loader = function () {
	  function Loader() {
	    _classCallCheck(this, Loader);
	  }

	  _createClass(Loader, [{
	    key: "load",
	    value: function load(url) {}
	  }]);

	  return Loader;
	}();

	exports.default = Loader;

/***/ }
/******/ ]);