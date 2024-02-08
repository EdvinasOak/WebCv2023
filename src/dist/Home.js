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
            React.createElement("div", { className: Home_module_css_1["default"].homeGridColumnItem1 },
                React.createElement("span", { className: Home_module_css_1["default"].curlyBrace }, '{ }'),
                React.createElement("span", { className: Home_module_css_1["default"].notEqualMobile }, '!='),
                React.createElement("span", { className: Home_module_css_1["default"].dblApostrophe }, '" "')),
            React.createElement("div", { className: Home_module_css_1["default"].homeGridColumnItem2 },
                React.createElement("div", { className: Home_module_css_1["default"].homeHeroTextContainer },
                    React.createElement("a", { className: Home_module_css_1["default"].homeHeroText1 }, "Hi, I\u2019m Ed."),
                    React.createElement("br", null)),
                React.createElement("div", { className: Home_module_css_1["default"].svgContainer },
                    React.createElement("svg", { className: Home_module_css_1["default"].knockoutTextContainer, style: { borderRadius: '16px' }, viewBox: '0 0 980 145', preserveAspectRatio: 'xMidYMid meet' },
                        React.createElement("rect", { className: Home_module_css_1["default"].knockoutTextBg, fillOpacity: '1', mask: 'url(#knockout-text)' }),
                        React.createElement("mask", { id: 'knockout-text' },
                            React.createElement("rect", { width: '100%', height: '100%', fill: '#fff', x: '0', y: '0' }),
                            React.createElement("text", { x: '50%', y: '55%', fill: '#000', textAnchor: 'middle', dominantBaseline: 'middle' }, "Web Developer."))),
                    React.createElement("a", { className: Home_module_css_1["default"].homeHeroText3 },
                        React.createElement(react_typed_1.ReactTyped, { strings: [
                                '^800 I convert coffee into ^400 lines of code ^1000',
                                'I convert coffee into ^400 digital solutions ^1000',
                                'I convert coffee into ^400 seamless web experience ^1000',
                                'I convert ^400 ideas into ^500 reality ^10000',
                            ], typeSpeed: 40, backSpeed: 50, loop: true, smartBackspace: true })))),
            React.createElement("div", { className: Home_module_css_1["default"].homeGridColumnItem3 },
                React.createElement("span", { className: Home_module_css_1["default"].squareBrackets }, '[ ]'),
                React.createElement("span", { className: Home_module_css_1["default"].and2 }, '&&'),
                React.createElement("span", { className: Home_module_css_1["default"].semicolonMobile }, ';')),
            React.createElement("div", { className: Home_module_css_1["default"].homeGridColumn2Item1 },
                React.createElement("span", { className: Home_module_css_1["default"].and }, '&&'),
                React.createElement("span", { className: Home_module_css_1["default"].notEqual }, '!=')),
            React.createElement("div", { className: Home_module_css_1["default"].homeGridColumn2Item2 },
                React.createElement("span", { className: Home_module_css_1["default"].dollarSign }, '$')),
            React.createElement("div", { className: Home_module_css_1["default"].homeGridColumn2Item3 },
                React.createElement("span", { className: Home_module_css_1["default"].backticks }, "' '")),
            React.createElement("div", { className: Home_module_css_1["default"].homeGridColumn3Item1 },
                React.createElement("span", { className: Home_module_css_1["default"].equal }, '=='),
                React.createElement("span", { className: Home_module_css_1["default"].closingTag }, '</>')),
            React.createElement("div", { className: Home_module_css_1["default"].homeGridColumn3Item2 },
                React.createElement("span", { className: Home_module_css_1["default"].semicolon }, ';')),
            React.createElement("div", { className: Home_module_css_1["default"].homeGridColumn3Item3 },
                React.createElement("span", { className: Home_module_css_1["default"].lessOrEqual }, '<=')))));
});
exports["default"] = Home;
