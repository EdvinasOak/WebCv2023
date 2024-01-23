"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Experience = react_1.forwardRef(function (props, ref) {
    var experienceRef = react_1.useRef(null);
    console.log('props', props);
    react_1.useEffect(function () {
        if (ref) {
            if (typeof ref === 'function') {
                ref(experienceRef.current);
            }
            else {
                ref.current = experienceRef.current;
            }
        }
    }, [ref]);
    return (React.createElement("div", { ref: experienceRef, className: 'Experience' },
        React.createElement("div", { className: 'grid-container' },
            React.createElement("div", { className: 'heroTxtItem' },
                React.createElement("a", { className: 'experienceHeroTxt' }, "Experience")),
            React.createElement("div", { className: 'jobItem' },
                "Front-End Developer, Avaya",
                React.createElement("br", null),
                "Jun 2018 -"),
            React.createElement("div", { className: 'jobItem2' },
                "Intern, AFK Digital Agency",
                React.createElement("br", null),
                "Oct 2017 - Jan 2018"),
            React.createElement("div", { className: 'jobLine' },
                React.createElement("span", { className: 'circle' }),
                React.createElement("span", { className: 'dotCircle' }),
                React.createElement("span", { className: 'verticalLine' })),
            React.createElement("div", { className: 'jobLine2' },
                React.createElement("span", { className: 'circleTwo' }),
                React.createElement("span", { className: 'dotCircle' }),
                React.createElement("span", { className: 'verticalLine' })),
            React.createElement("div", { className: 'descriptionItem' },
                React.createElement("li", null, "Developed and maintained a browser-based Contact Centre (SPA), along with administrative and data visualisation applications, employing Angular 2+, TypeScript, and SCSS. This effort resulted in creating applications used by thousands of agents and supervisors, offering exceptional user experiences, trusted, and utilized by global industry leaders."),
                React.createElement("p", null),
                React.createElement("li", null, "Conducted code reviews to maintain code quality, readability, and adherence to coding standards."),
                React.createElement("p", null),
                React.createElement("li", null, "Conducted code reviews to maintain code quality, readability, and adherence to coding standards."),
                React.createElement("p", null),
                React.createElement("li", null, "Implemented automated and unit tests across a variety of projects, identifying software shortcomings before they could impact the customer."),
                React.createElement("p", null),
                React.createElement("li", null, "Documented new features and critical project details to ensure that developers, testers, and other stakeholders possessed a clear comprehension of the intended functionality of the feature."),
                React.createElement("p", null),
                React.createElement("li", null, "Supervised licenses for open and proprietary source libraries via Blackduck. This ensured licence compliance, mitigation of security vulnerabilities, and reduction of potential code-quality risks.")),
            React.createElement("div", { className: 'descriptionItem2' },
                React.createElement("li", null, "Transformed designs into digital user experiences for renowned brands like Mini and BMW. In the process, learned about DOM, JavaScript, stylesheet manipulation and version control."),
                React.createElement("p", null),
                React.createElement("li", null, "Conducted cross-browser testing and promptly resolved any issues highlighted by the QA team, ensuring the delivery of high-quality products."),
                React.createElement("p", null),
                React.createElement("li", null, "Additionally, gained exposure to day-to-day software development activities, such as participating in stand-up meetings, code reviews, and task management tools like Trello, while also building interpersonal skills by collaborating with team members, whether locally or remotely, through Slack.")))));
});
exports["default"] = Experience;
