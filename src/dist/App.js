"use strict";
exports.__esModule = true;
// App.jsx
require("./App.css");
var Home_1 = require("./Home");
var About_1 = require("./About");
var Navbar_1 = require("./Navbar");
var Skills_1 = require("./Skills");
var Experience_1 = require("./Experience");
var Contact_1 = require("./Contact");
var react_1 = require("react");
function App() {
    var homeRef = react_1.useRef(null);
    var aboutRef = react_1.useRef(null);
    var experienceRef = react_1.useRef(null);
    var contactRef = react_1.useRef(null);
    return (React.createElement(React.Fragment, null,
        React.createElement(Navbar_1["default"], { homeRef: homeRef, aboutRef: aboutRef, contactRef: contactRef, experienceRef: experienceRef }),
        React.createElement(Home_1["default"], { ref: homeRef }),
        React.createElement(About_1["default"], { ref: aboutRef }),
        React.createElement(Skills_1["default"], null),
        React.createElement(Experience_1["default"], { ref: experienceRef }),
        React.createElement(Contact_1["default"], { ref: contactRef })));
}
exports["default"] = App;
