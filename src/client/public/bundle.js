/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************************!*\
  !*** ./src/client/app/index.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 2);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 3);
	
	__webpack_require__(/*! ./../styles/app.scss */ 4);
	
	var _header = __webpack_require__(/*! ./header.jsx */ 8);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _slider = __webpack_require__(/*! ./slider.jsx */ 9);
	
	var _slider2 = _interopRequireDefault(_slider);
	
	var _about = __webpack_require__(/*! ./about.jsx */ 10);
	
	var _about2 = _interopRequireDefault(_about);
	
	var _episodes = __webpack_require__(/*! ./episodes.jsx */ 11);
	
	var _episodes2 = _interopRequireDefault(_episodes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = _react2.default.createClass({
	  displayName: 'App',
	  getInitialState: function getInitialState() {
	    return {
	      index: 0,
	      direction: null,
	      recentFive: [{ soundcloud: '' }, {}, {}, {}, {}],
	      allEpisodes: [{ soundcloud: '' }, {}, {}, {}, {}],
	      episodes: []
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.getAllEpisodes();
	  },
	  getAllEpisodes: function getAllEpisodes() {
	    var _this = this;
	
	    $.ajax({
	      url: '/episodes',
	      method: "GET",
	      dataType: "json",
	      success: function success(data) {
	        _this.setState({
	          episodes: data
	        });
	        _this.getRecentFive();
	        _this.sortEpisodes();
	      },
	      failure: function failure(err) {
	        console.log(err);
	      }
	    });
	  },
	  getRecentFive: function getRecentFive() {
	    var recentFive = this.state.episodes.sort(function (a, b) {
	      if (parseInt(a.episode) > parseInt(b.episode)) {
	        return -1;
	      } else {
	        return 1;
	      }
	    }).slice(0, 5);
	
	    this.setState({
	      recentFive: recentFive
	    });
	  },
	  sortEpisodes: function sortEpisodes() {
	    // ajax call to server.js
	    var allEpisodes = this.state.episodes.sort(function (a, b) {
	      if (parseInt(a.episode) > parseInt(b.episode)) {
	        return -1;
	      } else {
	        return 1;
	      }
	    });
	
	    this.setState({
	      allEpisodes: allEpisodes
	    });
	  },
	  toggleSlide: function toggleSlide(selectedIndex, e) {
	    this.setState({
	      index: selectedIndex,
	      direction: e.direction
	    });
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_header2.default, null),
	      _react2.default.createElement(GridInstance, {
	        index: this.state.index,
	        direction: this.state.direction,
	        recentFive: this.state.recentFive,
	        allEpisodes: this.state.allEpisodes,
	        toggleSlide: this.toggleSlide
	      })
	    );
	  }
	});
	
	var GridInstance = _react2.default.createClass({
	  displayName: 'GridInstance',
	  render: function render() {
	    return _react2.default.createElement(
	      _reactBootstrap.Grid,
	      {
	        className: 'grid'
	      },
	      _react2.default.createElement(
	        _reactBootstrap.Row,
	        { className: 'show-grid' },
	        _react2.default.createElement(
	          _reactBootstrap.Col,
	          { xs: 10, xsOffset: 1 },
	          _react2.default.createElement(_slider2.default, {
	            index: this.props.index,
	            direction: this.props.direction,
	            episodes: this.props.recentFive,
	            toggleSlide: this.props.toggleSlide
	          })
	        )
	      ),
	      ' ',
	      _react2.default.createElement(
	        _reactBootstrap.Row,
	        { className: 'show-grid' },
	        _react2.default.createElement(
	          _reactBootstrap.Col,
	          { xs: 10, xsOffset: 1 },
	          _react2.default.createElement(_episodes2.default, {
	            episodes: this.props.allEpisodes
	          })
	        )
	      ),
	      ' ',
	      _react2.default.createElement(
	        _reactBootstrap.Row,
	        { className: 'show-grid' },
	        _react2.default.createElement(
	          _reactBootstrap.Col,
	          { xs: 6, xsOffset: 1 },
	          _react2.default.createElement(_about2.default, null)
	        )
	      )
	    );
	  }
	});
	
	(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('app'));
	
	//  <Col xs={4}>
	//   <InfoSlider
	//     index={this.props.index}
	//     direction={this.props.direction}
	//     episodes={this.props.episodes}
	//     toggleSlide={this.props.toggleSlide}
	//   />
	// </Col>

	// <Row className="show-grid">
	//   <Col xs={10} xsOffset={1}>
	//     <Player />
	//   </Col>
	// </Row>&nbsp;

/***/ },
/* 1 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/*!*********************************!*\
  !*** external "ReactBootstrap" ***!
  \*********************************/
/***/ function(module, exports) {

	module.exports = ReactBootstrap;

/***/ },
/* 4 */
/*!************************************!*\
  !*** ./src/client/styles/app.scss ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader!./app.scss */ 5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./app.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/*!*******************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader!./src/client/styles/app.scss ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 6)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 6 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 8 */
/*!***********************************!*\
  !*** ./src/client/app/header.jsx ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var tooltip = _react2.default.createElement(
	  _reactBootstrap.Tooltip,
	  { id: 'tooltip' },
	  'Coming Soon!'
	);
	
	var Header = function (_React$Component) {
	  _inherits(Header, _React$Component);
	
	  function Header() {
	    _classCallCheck(this, Header);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
	  }
	
	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _reactBootstrap.Navbar,
	          { fixedTop: true, inverse: true },
	          _react2.default.createElement(
	            _reactBootstrap.Navbar.Header,
	            null,
	            _react2.default.createElement(
	              _reactBootstrap.Navbar.Brand,
	              null,
	              _react2.default.createElement(
	                'a',
	                { 'class': 'page-scroll', href: '#' },
	                'The Grind'
	              )
	            ),
	            _react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Navbar.Collapse,
	            null,
	            _react2.default.createElement(
	              _reactBootstrap.Nav,
	              null,
	              _react2.default.createElement(
	                _reactBootstrap.OverlayTrigger,
	                { placement: 'right', overlay: tooltip },
	                _react2.default.createElement(
	                  _reactBootstrap.NavItem,
	                  { eventKey: 1, href: '#' },
	                  'SoundCloud Player'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.Nav,
	              { pullRight: true },
	              _react2.default.createElement(
	                _reactBootstrap.NavItem,
	                { eventKey: 1, href: 'https://www.twitter.com/thegrindwithkev', target: '_blank', className: '' },
	                _react2.default.createElement('span', { className: 'fa fa-2x fa-twitter' })
	              ),
	              _react2.default.createElement(
	                _reactBootstrap.NavItem,
	                { eventKey: 2, href: 'https://instagram.com/thegrindwithkevin', target: '_blank', className: '' },
	                _react2.default.createElement('span', { className: 'fa fa-2x fa-instagram' })
	              ),
	              _react2.default.createElement(
	                _reactBootstrap.NavItem,
	                { eventKey: 3, href: 'https://www.facebook.com/thegrindwithkevin', target: '_blank', className: '' },
	                _react2.default.createElement('span', { className: 'fa fa-2x fa-facebook' })
	              ),
	              _react2.default.createElement(
	                _reactBootstrap.NavItem,
	                { eventKey: 4, 'class': 'page-scroll', href: '#episodes' },
	                'Episodes'
	              ),
	              _react2.default.createElement(
	                _reactBootstrap.NavItem,
	                { eventKey: 6, 'class': 'page-scroll', href: '#about' },
	                'About'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Header;
	}(_react2.default.Component);
	
	exports.default = Header;
	// <NavItem eventKey={1} href="#">Link</NavItem>

	// <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
	//   <MenuItem eventKey={3.1}>Action</MenuItem>
	//   <MenuItem eventKey={3.2}>Another action</MenuItem>
	//   <MenuItem eventKey={3.3}>Something else here</MenuItem>
	//   <MenuItem divider />
	//   <MenuItem eventKey={3.3}>Separated link</MenuItem>
	// </NavDropdown>

/***/ },
/* 9 */
/*!***********************************!*\
  !*** ./src/client/app/slider.jsx ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PictureSlider = _react2.default.createClass({
	  displayName: 'PictureSlider',
	  getInitialState: function getInitialState() {
	    return {
	      index: 0,
	      direction: null
	    };
	  },
	  handleSelect: function handleSelect(selectedIndex, e) {
	    // alert('selected=' + selectedIndex + ', direction=' + e.direction);
	    console.log(this.props);
	    this.setState({
	      index: selectedIndex,
	      direction: e.direction
	    });
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'slider' },
	      _react2.default.createElement(
	        'h2',
	        null,
	        'Recent Episodes'
	      ),
	      _react2.default.createElement(
	        _reactBootstrap.Carousel,
	        { activeIndex: this.props.index, direction: this.props.direction, onSelect: this.props.toggleSlide, slide: true, interval: 3000 },
	        _react2.default.createElement(
	          _reactBootstrap.Carousel.Item,
	          null,
	          _react2.default.createElement(
	            'a',
	            { href: this.props.episodes[0].soundcloud },
	            _react2.default.createElement('img', { width: 950, height: 600, alt: '950x600', src: this.props.episodes[0].img })
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Carousel.Caption,
	            null,
	            _react2.default.createElement(
	              'h1',
	              null,
	              this.props.episodes[0].episode,
	              ' - ',
	              this.props.episodes[0].name,
	              ' - ',
	              this.props.episodes[0].date
	            ),
	            _react2.default.createElement(
	              'h4',
	              null,
	              this.props.episodes[0].info
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Carousel.Item,
	          null,
	          _react2.default.createElement(
	            'a',
	            { href: this.props.episodes[1].soundcloud },
	            _react2.default.createElement('img', { width: 950, height: 600, alt: '950x600', src: this.props.episodes[1].img })
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Carousel.Caption,
	            null,
	            _react2.default.createElement(
	              'h1',
	              null,
	              this.props.episodes[1].episode,
	              ' - ',
	              this.props.episodes[1].name,
	              ' - ',
	              this.props.episodes[1].date
	            ),
	            _react2.default.createElement(
	              'h4',
	              null,
	              this.props.episodes[1].info
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Carousel.Item,
	          null,
	          _react2.default.createElement('img', { width: 950, height: 600, alt: '950x600', src: this.props.episodes[2].img }),
	          _react2.default.createElement(
	            _reactBootstrap.Carousel.Caption,
	            null,
	            _react2.default.createElement(
	              'h1',
	              null,
	              this.props.episodes[2].episode,
	              ' - ',
	              this.props.episodes[2].name,
	              ' - ',
	              this.props.episodes[2].date
	            ),
	            _react2.default.createElement(
	              'h4',
	              null,
	              this.props.episodes[2].info
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Carousel.Item,
	          null,
	          _react2.default.createElement('img', { width: 950, height: 600, alt: '950x600', src: this.props.episodes[3].img }),
	          _react2.default.createElement(
	            _reactBootstrap.Carousel.Caption,
	            null,
	            _react2.default.createElement(
	              'h1',
	              null,
	              this.props.episodes[3].episode,
	              ' - ',
	              this.props.episodes[3].name,
	              ' - ',
	              this.props.episodes[3].date
	            ),
	            _react2.default.createElement(
	              'h4',
	              null,
	              this.props.episodes[3].info
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Carousel.Item,
	          null,
	          _react2.default.createElement('img', { width: 950, height: 600, alt: '950x600', src: this.props.episodes[4].img }),
	          _react2.default.createElement(
	            _reactBootstrap.Carousel.Caption,
	            null,
	            _react2.default.createElement(
	              'h1',
	              null,
	              this.props.episodes[4].episode,
	              ' - ',
	              this.props.episodes[4].name,
	              ' - ',
	              this.props.episodes[4].date
	            ),
	            _react2.default.createElement(
	              'h4',
	              null,
	              this.props.episodes[4].info
	            )
	          )
	        )
	      )
	    );
	  }
	});
	
	// const PictureSlide = React.createClass({
	//   render() {
	//     console.log(this.props);
	//     return (
	//       <div>
	//         <Carousel.Item>
	//           <img width={900} height={600} alt="900x600" src={this.props.slide.img}/>
	//           <Carousel.Caption>
	//             <h3>{this.props.slide.name}</h3>
	//             <p>{this.props.slide.info}</p>
	//           </Carousel.Caption>
	//         </Carousel.Item>
	//       </div>
	//     );
	//   }
	// });
	
	exports.default = PictureSlider;

/***/ },
/* 10 */
/*!**********************************!*\
  !*** ./src/client/app/about.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var title = _react2.default.createElement(
	  'h2',
	  null,
	  'About the Podcast'
	);
	
	var About = _react2.default.createClass({
	  displayName: 'About',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { id: 'about' },
	      _react2.default.createElement(
	        _reactBootstrap.Panel,
	        { header: title },
	        _react2.default.createElement(
	          'i',
	          null,
	          'The Grind with Kevin'
	        ),
	        ' is my project to start generating conversations with the many interesting people I\'ve met on this life\'s journey. I\'ve been inspired by many of the conversational podcasts out there, but they also tend to be the domain of various celebrity personalities. I am interested in hearing and sharing what everyday people have to say about the various topics that interest them. My goal is to share a cup of coffee with each of them, prevaricate on the issues of the day, and inject a bit of humor and personal growth where I can. Thanks for listening!'
	      )
	    );
	  }
	});
	
	exports.default = About;

/***/ },
/* 11 */
/*!*************************************!*\
  !*** ./src/client/app/episodes.jsx ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Episodes = _react2.default.createClass({
	  displayName: 'Episodes',
	  componentDidMount: function componentDidMount() {},
	  componentDidUpdate: function componentDidUpdate() {},
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { id: 'episodes' },
	      _react2.default.createElement(
	        'h2',
	        null,
	        'All Episodes'
	      ),
	      this.props.episodes.map(function (episode, i) {
	        return _react2.default.createElement(
	          'div',
	          { key: i },
	          _react2.default.createElement(
	            _reactBootstrap.Media,
	            null,
	            _react2.default.createElement(
	              _reactBootstrap.Media.Left,
	              null,
	              _react2.default.createElement('img', { width: 150, height: 150, src: episode.sqimg, alt: 'Image' })
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.Media.Body,
	              null,
	              _react2.default.createElement(
	                'a',
	                { href: episode.soundcloud, target: '_blank' },
	                _react2.default.createElement(
	                  _reactBootstrap.Media.Heading,
	                  null,
	                  episode.episode,
	                  ' - ',
	                  episode.name,
	                  ' - ',
	                  episode.date
	                )
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                episode.description
	              ),
	              _react2.default.createElement(
	                'h4',
	                null,
	                _react2.default.createElement(
	                  'a',
	                  { href: episode.url },
	                  episode.label
	                )
	              )
	            )
	          ),
	          _react2.default.createElement('hr', null)
	        );
	      })
	    );
	  }
	});
	
	exports.default = Episodes;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map