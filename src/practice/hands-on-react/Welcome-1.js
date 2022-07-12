"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DateComp = void 0;

class Welcome extends Component {
  // IMPLEMENT YOUR CODE HERE
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Welcome User"), /*#__PURE__*/React.createElement("p", null, "React is a declarative, efficient, and flexible JavaScript library for building interactive user interfaces. It lets you compose complex UIs from small and isolated pieces of code called \u2018components\u2019."), /*#__PURE__*/React.createElement(DateComp, null));
  }

}

class DateComp extends Component {
  // IMPLEMENT YOUR CODE HERE
  constructor(props) {
    super(props);
    var today = new Date();
    const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    this.state = {
      date
    };
  }

  render() {
    const align = {
      marginRight: 0,
      textAlign: 'right'
    };
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: align
    }, "Dated: ", this.state.date));
  }

}

exports.DateComp = DateComp;
ReactDOM.render( /*#__PURE__*/React.createElement(Welcome, null), document.getElementById('app'));
var _default = Welcome;
exports.default = _default;