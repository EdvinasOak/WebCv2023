"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Home_module_css_1 = require("./styles/Home.module.css");
var react_typed_1 = require("react-typed");
var Home = react_1.forwardRef(function (props, ref) {
    var homeRef = react_1.useRef(null);
    console.log('props', props);
    react_1.useEffect(function () {
        if (ref) {
            if (typeof ref === 'function') {
                ref(homeRef.current);
            }
            else {
                ref.current = homeRef.current;
            }
        }
    }, [ref]);
    return (React.createElement("div", { ref: homeRef, className: Home_module_css_1["default"].Home },
        React.createElement("div", { className: Home_module_css_1["default"].homeGridContainer },
            React.createElement("div", { className: Home_module_css_1["default"].homeGridColumnItem1 }),
            React.createElement("div", { className: Home_module_css_1["default"].homeGridColumnItem2 },
                React.createElement("div", { className: Home_module_css_1["default"].homeHeroTextContainer },
                    React.createElement("a", { className: Home_module_css_1["default"].homeHeroText1 }, "Hi, I\u2019m Ed."),
                    React.createElement("br", null),
                    React.createElement("a", { className: Home_module_css_1["default"].homeHeroText2 }, "Web Developer."),
                    React.createElement("br", null),
                    React.createElement("a", { className: Home_module_css_1["default"].homeHeroText3 },
                        React.createElement(react_typed_1.ReactTyped, { strings: [
                                'I convert coffee into ^400 lines of code ^1000',
                                'I convert coffee into ^400 digital solutions ^1000',
                                'I convert coffee into ^400 seamless web experience ^1000',
                                'I convert ^400 ideas into ^500 products ^10000',
                            ], typeSpeed: 40, backSpeed: 50, loop: true, smartBackspace: true }))),
                React.createElement("div", { className: Home_module_css_1["default"].homeGridColumnItem3 }),
                React.createElement("div", { className: Home_module_css_1["default"].homeGridColumn2Item1 }),
                React.createElement("div", { className: Home_module_css_1["default"].homeGridColumn2Item2 }),
                React.createElement("div", { className: Home_module_css_1["default"].homeGridColumn2Item3 }),
                React.createElement("div", { className: Home_module_css_1["default"].homeGridColumn3Item1 }),
                React.createElement("div", { className: Home_module_css_1["default"].homeGridColumn3Item2 }),
                React.createElement("div", { className: Home_module_css_1["default"].homeGridColumn3Item3 })))));
});
exports["default"] = Home;
