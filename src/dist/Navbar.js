"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Navbar_module_css_1 = require("./styles/Navbar.module.css");
var Navbar = function (_a) {
    var homeRef = _a.homeRef, aboutRef = _a.aboutRef, experienceRef = _a.experienceRef, contactRef = _a.contactRef;
    var _b = react_1.useState(false), burgerMenuActive = _b[0], setBurgerMenuActive = _b[1];
    var activateLasers = function () {
        setBurgerMenuActive(!burgerMenuActive);
        console.log(burgerMenuActive);
    };
    var scrollTo = function (position) {
        var _a, _b, _c, _d;
        switch (position) {
            case 'Home':
                (_a = homeRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'About':
                (_b = aboutRef.current) === null || _b === void 0 ? void 0 : _b.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'Skills':
                break;
            case 'Experience':
                (_c = experienceRef.current) === null || _c === void 0 ? void 0 : _c.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'Contact':
                (_d = contactRef.current) === null || _d === void 0 ? void 0 : _d.scrollIntoView({ behavior: 'smooth' });
                break;
            default:
        }
    };
    return (react_1["default"].createElement("div", { className: Navbar_module_css_1["default"].Navbar + " " + (burgerMenuActive ? Navbar_module_css_1["default"].open : '') },
        react_1["default"].createElement("div", { onClick: activateLasers, className: Navbar_module_css_1["default"].NavbarDesktop },
            react_1["default"].createElement("div", { className: Navbar_module_css_1["default"].burgerMenu + " " + (burgerMenuActive ? Navbar_module_css_1["default"].active : '') },
                react_1["default"].createElement("span", { className: Navbar_module_css_1["default"].bar1 }),
                react_1["default"].createElement("span", { className: Navbar_module_css_1["default"].bar2 }),
                react_1["default"].createElement("span", { className: Navbar_module_css_1["default"].bar3 })),
            react_1["default"].createElement("li", { onClick: function () { return scrollTo('Home'); }, id: Navbar_module_css_1["default"].menuItem }, "Home"),
            react_1["default"].createElement("li", { onClick: function () { return scrollTo('About'); }, id: Navbar_module_css_1["default"].menuItem }, "About Me"),
            react_1["default"].createElement("li", { onClick: function () { return scrollTo('Experience'); }, id: Navbar_module_css_1["default"].menuItem }, "Experience"),
            react_1["default"].createElement("li", { onClick: function () { return scrollTo('Contact'); }, id: Navbar_module_css_1["default"].menuItem }, "Contact Me"))));
};
exports["default"] = Navbar;
