webpackHotUpdate(0,{

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(13);

var _redux = __webpack_require__(7);

var _reactRouterDom = __webpack_require__(25);

var _pokemonAdded = __webpack_require__(198);

var _App = __webpack_require__(8);

var _App2 = _interopRequireDefault(_App);

var _Button = __webpack_require__(33);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pokemon = function pokemon(props) {
  var name = props.name,
      url = props.url;

  return _react2.default.createElement(
    'div',
    { className: _App2.default.pokemonCard },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { className: _App2.default.gridContainer, to: {
          pathname: '/pokemon',
          state: { name: name, url: url }
        } },
      _react2.default.createElement('img', { className: _App2.default.itemCentralized, src: 'images/pokemons/' + name + '.png', alt: name }),
      _react2.default.createElement(
        'span',
        { className: _App2.default.itemCentralized },
        name
      )
    ),
    _react2.default.createElement(_Button2.default, { label: 'Adicionar Pokemon', onClick: true })
  );
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ pokemonAdd: _pokemonAdded.pokemonAdd, pokemonRemove: _pokemonAdded.pokemonRemove }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapDispatchToProps)(pokemon);

/***/ })

})
//# sourceMappingURL=0.9eb1b79506219b9a21b5.hot-update.js.map