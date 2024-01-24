"use strict";
exports.__esModule = true;
var react_1 = require("react");
var browser_1 = require("@emailjs/browser");
var Contact_module_css_1 = require("./styles/Contact.module.css");
var Contact = react_1.forwardRef(function (props, ref) {
    var contactRef = react_1.useRef(null);
    var _a = react_1.useState(''), email = _a[0], setEmail = _a[1];
    var _b = react_1.useState(''), subject = _b[0], setSubject = _b[1];
    var _c = react_1.useState(''), message = _c[0], setMessage = _c[1];
    var _d = react_1.useState(null), emailError = _d[0], setEmailError = _d[1];
    console.log('props', props);
    var validateEmail = function (email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    var sendEmail = function () {
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
            return;
        }
        var parameters = {
            subject: subject,
            senderEmail: email,
            message: message
        };
        console.log('parameters', parameters);
        browser_1["default"]
            .send('service_3wh3nzf', 'template_nkymbvj', parameters, 'euVcuBEjUXWTQjOgf')
            .then(function (res) {
            if (res.status === 200) {
                alert('Email sent successfully.');
                setEmail('');
                setSubject('');
                setMessage('');
            }
            else {
                alert('Encountered issue. Email was not sent.');
            }
        });
    };
    var handleEmailChange = function (e) {
        setEmail(e.target.value);
        setEmailError(null); // Reset the email error when the user types
    };
    react_1.useEffect(function () {
        if (ref) {
            if (typeof ref === 'function') {
                ref(contactRef.current);
            }
            else {
                ref.current = contactRef.current;
            }
        }
    }, [ref]);
    return (React.createElement("div", { ref: contactRef, className: Contact_module_css_1["default"].Contact },
        React.createElement("div", { className: Contact_module_css_1["default"].contactGridContainer },
            React.createElement("div", { className: Contact_module_css_1["default"].contactHeroTxtItem },
                React.createElement("a", { className: Contact_module_css_1["default"].contactHeroTxt }, "Contact")),
            React.createElement("div", { className: Contact_module_css_1["default"].contactFormItem },
                React.createElement("form", { className: Contact_module_css_1["default"].contactForm },
                    emailError && (React.createElement("div", { className: Contact_module_css_1["default"].error }, emailError)),
                    React.createElement("input", { className: Contact_module_css_1["default"].email, type: 'text', placeholder: 'Email', name: 'email', value: email, onChange: handleEmailChange }),
                    React.createElement("br", null),
                    React.createElement("input", { className: Contact_module_css_1["default"].subject, type: 'text', placeholder: 'Subject', name: 'subject', value: subject, onChange: function (e) {
                            return setSubject(e.target.value);
                        } }),
                    React.createElement("br", null),
                    React.createElement("textarea", { className: Contact_module_css_1["default"].message, placeholder: 'Message', name: 'message', value: message, onChange: function (e) {
                            return setMessage(e.target.value);
                        } })),
                React.createElement("button", { onClick: sendEmail, type: 'button' }, "Submit")),
            React.createElement("div", { className: Contact_module_css_1["default"].contactBlobContainer },
                React.createElement("div", { className: Contact_module_css_1["default"].blobContact }),
                React.createElement("span", { className: Contact_module_css_1["default"].blobContact2 })),
            React.createElement("div", { className: Contact_module_css_1["default"].contactSocialsItem },
                React.createElement("div", { className: Contact_module_css_1["default"].socialsContainer },
                    React.createElement("a", { href: 'https://www.linkedin.com/in/edvinasaukstakalnis/', target: '_blank', rel: 'noopener noreferrer' },
                        React.createElement("svg", { href: 'https://www.linkedin.com/in/edvinasaukstakalnis/', width: '56', height: '63', viewBox: '0 0 56 63', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: Contact_module_css_1["default"].socialsLogo },
                            React.createElement("path", { d: 'M49.3333 0H6.66667C2.98667 0 0 3.36 0 7.5V55.5C0 59.64 2.98667 63 6.66667 63H49.3333C53.0133 63 56 59.64 56 55.5V7.5C56 3.36 53.0133 0 49.3333 0ZM17.3333 24V52.5H9.33333V24H17.3333ZM9.33333 15.705C9.33333 13.605 10.9333 12 13.3333 12C15.7333 12 17.24 13.605 17.3333 15.705C17.3333 17.805 15.84 19.5 13.3333 19.5C10.9333 19.5 9.33333 17.805 9.33333 15.705ZM46.6667 52.5H38.6667C38.6667 52.5 38.6667 38.61 38.6667 37.5C38.6667 34.5 37.3333 31.5 34 31.44H33.8933C30.6667 31.44 29.3333 34.53 29.3333 37.5C29.3333 38.865 29.3333 52.5 29.3333 52.5H21.3333V24H29.3333V27.84C29.3333 27.84 31.9067 24 37.08 24C42.3733 24 46.6667 28.095 46.6667 36.39V52.5Z' }))),
                    React.createElement("a", { href: 'https://codepen.io/EdOak2225', target: '_blank', rel: 'noopener noreferrer' },
                        React.createElement("svg", { width: '67', height: '75', viewBox: '0 0 67 75', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: Contact_module_css_1["default"].socialsLogo },
                            React.createElement("path", { d: 'M33.5001 6L5.36011 26.0156V48.9785L33.5001 69L61.6401 48.9844V26.0156L33.5001 6ZM33.5001 43.7754L25.5491 37.6055L33.5001 31.5352L41.4511 37.6055L33.5001 43.7754ZM36.1801 26.4082V14.9238L54.1759 27.7266L46.1097 33.9844L36.1801 26.4082ZM30.8201 26.4082L20.8905 33.9844L12.8243 27.7266L30.8201 14.9238V26.4082ZM16.2057 37.5645L10.7201 41.7481V33.3047L16.2057 37.5645ZM20.8643 41.1797L30.8201 48.9082V60.0762L12.8505 47.291L20.8643 41.1797ZM36.1801 48.9082L46.1359 41.1797L54.1497 47.291L36.1801 60.0762V48.9082ZM50.7945 37.5645L56.2801 33.3047V41.7481L50.7945 37.5645Z' }))),
                    React.createElement("a", { href: 'https://dribbble.com/SanDanGlokta', target: '_blank', rel: 'noopener noreferrer' },
                        React.createElement("svg", { width: '56', height: '63', viewBox: '0 0 56 63', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: Contact_module_css_1["default"].socialsLogo },
                            React.createElement("path", { d: 'M10.08 5.04004C6.98878 5.04004 4.47998 7.86244 4.47998 11.34V51.66C4.47998 55.1376 6.98878 57.96 10.08 57.96H45.92C49.0112 57.96 51.52 55.1376 51.52 51.66V11.34C51.52 7.86244 49.0112 5.04004 45.92 5.04004H10.08ZM29.3103 13.86C31.5167 13.86 33.6 16.0902 33.6 27.09C33.6 31.0212 33.0054 36.7301 30.9334 41.4299C31.8294 42.7403 32.7264 43.155 33.32 42.84C35 41.9328 36.0745 38.7453 37.0825 35.2677C37.3625 34.3227 38.2938 33.8065 39.1562 34.0963C40.0298 34.3987 40.5212 35.4058 40.2412 36.3382C39.39 39.2866 37.0051 46.5954 33.3987 46.5954C32.2563 46.5954 30.7206 46.5446 29.2534 44.9318C27.607 47.4518 25.5588 49.14 23.1284 49.14C17.9876 49.14 15.68 44.7436 15.68 40.384C15.68 35.7598 17.7865 30.304 22.5465 30.304C23.3529 30.304 24.0913 30.4679 24.7297 30.7199C24.6401 29.4599 24.64 28.4519 24.64 26.9399C24.64 26.8013 24.6847 13.86 29.3103 13.86ZM29.4437 17.704C28.7605 19.0144 27.9562 22.8428 27.9562 26.9252C27.9562 31.3604 28.4146 34.7632 29.109 37.2832C30.1506 34.045 30.2837 30.2778 30.2837 27.09C30.2837 21.0924 29.9701 18.5356 29.4437 17.704ZM22.5334 34.02C18.9718 34.02 19.04 40.2308 19.04 40.4702C19.04 42.0326 19.3638 45.36 23.0934 45.36C24.527 45.36 25.9849 44.0744 27.2169 41.8064C26.4665 40.2314 25.7601 37.7622 25.2897 35.28C25.2001 35.2044 25.1099 35.1295 25.0315 35.0413C25.0315 35.0413 23.9446 34.02 22.5334 34.02Z' }))),
                    React.createElement("a", { href: 'https://github.com/EdvinasOak', target: '_blank', rel: 'noopener noreferrer' },
                        React.createElement("svg", { className: Contact_module_css_1["default"].socialsLogo, width: '56', height: '63', viewBox: '0 0 56 63', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
                            React.createElement("path", { d: 'M19.9259 59.0134C20.7222 58.6278 21.28 57.737 21.28 56.7V49.896C21.28 49.6478 21.2979 49.3895 21.3259 49.1274C21.3102 49.1325 21.2957 49.1362 21.28 49.14C21.28 49.14 17.92 49.14 17.248 49.14C15.568 49.14 14.112 48.384 13.44 46.872C12.656 45.234 12.32 42.462 10.304 40.95C9.96799 40.698 10.192 40.32 10.864 40.32C11.536 40.446 12.992 41.454 13.888 42.84C14.896 44.226 15.904 45.36 17.696 45.36C20.4814 45.36 21.9744 45.2025 22.8726 44.6607C23.9187 42.9106 25.3669 41.58 26.88 41.58V41.5485C20.5318 41.3192 16.4763 38.9454 14.588 35.28C10.4832 35.3329 6.90927 35.7903 4.86975 36.1708C4.80479 35.7588 4.74879 35.3443 4.70063 34.9272C6.71327 34.5543 10.1248 34.112 14.047 34.0276C13.9216 33.6798 13.813 33.3232 13.7211 32.9578C9.78879 32.7336 6.39519 32.9087 4.55167 33.0801C4.52927 32.6617 4.49903 32.2447 4.49455 31.8213C6.34143 31.6512 9.64319 31.4811 13.4747 31.6815C13.3862 31.0515 13.3291 30.4076 13.3291 29.7373C13.3291 27.5953 14.0011 25.3273 15.2331 23.4373C14.6731 21.2953 13.8891 16.7593 15.4571 15.1213C18.4811 15.1213 20.6091 16.7593 21.6171 17.7673C23.52 16.884 25.648 16.38 28 16.38C30.352 16.38 32.48 16.884 34.272 17.766C35.28 16.758 37.408 15.12 40.432 15.12C42.112 16.884 41.216 21.42 40.656 23.436C41.888 25.326 42.56 27.468 42.448 29.736C42.448 30.3459 42.3976 30.9343 42.3248 31.5114C46.2437 31.2946 49.635 31.4685 51.5133 31.6399C51.511 32.0645 51.4763 32.479 51.4562 32.8986C49.5846 32.7247 46.1082 32.5458 42.0941 32.7865C41.9944 33.2098 41.8734 33.6219 41.7301 34.0213C45.7016 34.0792 49.1949 34.5114 51.3038 34.8894C51.2557 35.3077 51.1997 35.7223 51.1347 36.133C48.9933 35.7475 45.3432 35.2964 41.1902 35.2737C39.3254 38.9 35.3438 41.265 29.12 41.541V41.58C32.032 41.58 34.72 46.494 34.72 49.896V56.7C34.72 57.737 35.2777 58.6278 36.0741 59.0134C46.3344 55.1931 53.76 44.3067 53.76 31.5C53.76 15.5207 42.2049 2.52002 28 2.52002C13.795 2.52002 2.23999 15.5207 2.23999 31.5C2.23999 44.3067 9.66559 55.1931 19.9259 59.0134Z' }))),
                    React.createElement("a", { href: 'https://www.behance.net/edvinasaukstak', target: '_blank', rel: 'noopener noreferrer' },
                        React.createElement("svg", { href: '', width: '56', height: '63', viewBox: '0 0 56 63', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: Contact_module_css_1["default"].socialsLogo },
                            React.createElement("path", { d: 'M10.08 5.04004C6.98878 5.04004 4.47998 7.86244 4.47998 11.34V51.66C4.47998 55.1376 6.98878 57.96 10.08 57.96H45.92C49.0112 57.96 51.52 55.1376 51.52 51.66V11.34C51.52 7.86244 49.0112 5.04004 45.92 5.04004H10.08ZM13.44 22.68H20.9781C21.7957 22.68 26.2194 22.6174 26.2194 27.1786C26.2194 29.5978 24.7517 30.416 24.0909 30.7814C25.0765 31.1342 26.88 32.1552 26.88 35.28C26.88 40.1058 21.9627 40.32 21.3019 40.32H13.44V22.68ZM32.48 22.68H40.32V25.2H32.48V22.68ZM16.8 25.7414V29.8758H20.4072C20.9 29.8758 22.5334 29.5722 22.5334 27.72C22.5334 25.8678 20.406 25.7414 20.0812 25.7414H16.8ZM36.6581 26.46C41.0261 26.46 42.2123 30.2901 42.3915 31.1973C42.5595 32.1171 42.56 32.9238 42.56 34.02H33.7115C33.7115 35.1162 34.2279 37.5859 36.8375 37.5859C37.5319 37.5859 38.0458 37.3976 38.5722 37.0322C39.0874 36.6668 39.2682 36.3124 39.4362 35.947H42.3806C41.8654 37.396 41.1713 38.4941 40.1297 39.2249C39.0881 39.9557 37.8785 40.32 36.4897 40.32C35.6161 40.32 34.7536 40.1317 33.88 39.7663C33.1856 39.4009 32.4921 38.8586 31.9769 38.3168C31.4617 37.7624 31.1144 37.0313 30.7672 36.1241C30.42 35.3933 30.24 34.2972 30.24 33.39C30.24 32.4828 30.5653 26.46 36.6581 26.46ZM36.6581 29.017C34.1269 29.017 33.7115 31.7518 33.7115 31.9282H39.2678C39.0886 31.021 38.3605 29.017 36.6581 29.017ZM16.8 32.3958V37.2586H20.5537C20.8774 37.2586 23.1612 37.146 23.1612 34.9158C23.1612 32.6982 21.3668 32.3958 20.5537 32.3958H16.8Z' }))))))));
});
exports["default"] = Contact;
