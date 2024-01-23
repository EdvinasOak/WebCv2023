"use strict";
exports.__esModule = true;
var react_1 = require("react");
var About = react_1.forwardRef(function (props, ref) {
    var aboutRef = react_1.useRef(null);
    console.log('props', props);
    react_1.useEffect(function () {
        if (ref) {
            if (typeof ref === 'function') {
                ref(aboutRef.current);
            }
            else {
                ref.current = aboutRef.current;
            }
        }
    }, [ref]);
    return (React.createElement("div", { ref: aboutRef, className: 'about' },
        React.createElement("div", { className: 'aboutGridContainer' },
            React.createElement("div", { className: 'aboutImageItem' },
                React.createElement("div", { className: 'aboutImageGridContainer' },
                    React.createElement("div", { className: 'aboutDescriptionItem2' },
                        React.createElement("a", { className: 'aboutHeroTxt' }, "About Me"),
                        React.createElement("div", { className: 'aboutText' },
                            "A highly skilled and motivated Front-End Developer with extensive experience building and maintaining enterprise software in the Contact Center sector. Expertise in HTML, CSS/SCSS, JavaScript/Typescript, and various modern frameworks to turn ideas into responsive, robust, and accessible websites. Seeking to collaborate with experienced teams to deliver an exceptional user experience.",
                            React.createElement("p", null))),
                    React.createElement("div", { className: 'topImageItem' },
                        React.createElement("img", { className: 'blobAbout2', src: 'src/assets/blobAbout2.svg', alt: 'My Happy SVG' })),
                    React.createElement("div", { className: 'centerImageItem' },
                        React.createElement("img", { className: 'blobAbout', src: 'src/assets/aboutBlob1.svg', alt: 'My Happy SVG' })),
                    React.createElement("div", { className: 'bottomImageItem' },
                        React.createElement("img", { className: 'leftBlob', src: 'src/assets/blobAbout2.svg', alt: 'My Happy SVG' })),
                    React.createElement("div", { className: 'bottomImageItemLeft' },
                        React.createElement("img", { className: 'blobAbout3', src: 'src/assets/smallBlob.svg', alt: 'My Happy SVG' })))))));
});
exports["default"] = About;
