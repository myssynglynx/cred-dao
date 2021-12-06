"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _main = _interopRequireDefault(require("../main/main"));

require("./app.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return dom("div", {
    className: "App"
  }, dom(_main.default, null));
}

var _default = App;
exports.default = _default;