"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _animation = require("../../libraries/animation");

var _credLogo = _interopRequireDefault(require("../../resources/logo/cred-logo.svg"));

require("./main.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Main extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      logoBobble: false,
      linkBobble: false
    };
    this.mouseOverLogo = this.mouseOverLogo.bind(this);
    this.mouseOverLink = this.mouseOverLink.bind(this);
    this.clickLogo = this.clickLogo.bind(this);
    this.clickLink = this.clickLink.bind(this);
  } // life-cycle functions


  componentDidMount() {
    (0, _animation.fadeIn)('.Main p#title', 2000);
    (0, _animation.zipUp)('.Main div#description', 3000);
    (0, _animation.zipDown)('.Main div#title', 3000);
    setTimeout(() => {
      (0, _animation.expandFadeInBobble)('.Main img#logo', 4000);
    }, 1500);
    setTimeout(() => {
      this.setState({
        logoBobble: true
      });
    }, 5000); // 243 0 67 0.8 0.3

    (0, _animation.radialBackgroundFadeIn)('.Main div#description', 'ellipse at top', 255, 0, 70, 203, 0, 118, 1, 1, 2500);
    (0, _animation.radialBackgroundFadeIn)('.Main div#title', 'ellipse at bottom', 255, 0, 70, 203, 0, 118, 1, 1, 2500);
    (0, _animation.radialBackgroundFadeIn)('.Main p#description', 'closest-side', 243, 0, 67, 0.2, 0, 8000);
    (0, _animation.fadeIn)('.Main p#description', 3000);
    setTimeout(() => {
      (0, _animation.fadeIn)('.Main a#join-discord', 3000);
      (0, _animation.zipUp)('.Main a#join-discord', 2000);
      setTimeout(() => {
        this.setState({
          linkBobble: true
        });
      }, 2000);
    }, 2500);
  } // event handlers


  mouseOverLogo() {
    if (this.state.logoBobble) {
      (0, _animation.bobble)('.Main img#logo', 3000);
    }
  }

  mouseOverLink() {
    if (this.state.linkBobble) {
      (0, _animation.bobble)('.Main a#join-discord', 1500);
    }
  }

  clickLogo() {
    (0, _animation.bobble)('.Main img#logo', 1000);
  }

  clickLink() {
    (0, _animation.bobble)('.Main a#join-discord', 800);
  }

  render() {
    return dom("div", {
      className: "Main"
    }, dom("div", {
      id: "Main-Body"
    }, dom("div", {
      id: "title"
    }, dom("p", {
      id: "title"
    }, "credDAO")), dom("img", {
      id: "logo",
      src: _credLogo.default,
      alt: "logo",
      onMouseOver: this.mouseOverLogo,
      onClick: this.clickLogo
    }), dom("div", {
      id: "description"
    }, dom("p", {
      id: "description"
    }, dom("span", null, "A community-driven blockchain project who seeks to connect & empower artists, specialists, professionals, & audiences. Built on the Solana blockchain.")), dom("a", {
      id: "join-discord",
      href: "https://discord.gg/uQnCHDy7bP",
      target: "_blank",
      onMouseOver: this.mouseOverLink,
      onClick: this.clickLink
    }, "Join our Discord"))));
  }

}

var _default = Main;
exports.default = _default;