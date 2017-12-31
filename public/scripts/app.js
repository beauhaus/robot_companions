"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*



*/

var RightLinks = function (_React$Component) {
    _inherits(RightLinks, _React$Component);

    function RightLinks() {
        _classCallCheck(this, RightLinks);

        return _possibleConstructorReturn(this, (RightLinks.__proto__ || Object.getPrototypeOf(RightLinks)).apply(this, arguments));
    }

    _createClass(RightLinks, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "ul",
                { className: "header-right-links" },
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "#" },
                        "OUR PARTNERSHIP"
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "#" },
                        "OUR PROFILE"
                    )
                )
            );
        }
    }]);

    return RightLinks;
}(React.Component);

var Nav = function (_React$Component2) {
    _inherits(Nav, _React$Component2);

    function Nav() {
        _classCallCheck(this, Nav);

        return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
    }

    _createClass(Nav, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "nav",
                null,
                React.createElement(
                    "div",
                    { className: "inner-nav-grid-container" },
                    React.createElement("img", { id: "header-left-icon", src: "img/top-left-header-icon.svg", alt: "brand-icon" }),
                    React.createElement(RightLinks, null)
                )
            );
        }
    }]);

    return Nav;
}(React.Component);

var HeroVid = function (_React$Component3) {
    _inherits(HeroVid, _React$Component3);

    function HeroVid(props) {
        _classCallCheck(this, HeroVid);

        var _this3 = _possibleConstructorReturn(this, (HeroVid.__proto__ || Object.getPrototypeOf(HeroVid)).call(this, props));

        _this3.state = {
            videoURL: 'https://dl.dropbox.com/s/ln84nmt3ty2zy2v/lipstickrobot.mp4?dl=0'
        };
        return _this3;
    }

    _createClass(HeroVid, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "video",
                { id: "hero-bg-vid", loop: true, autoPlay: true },
                React.createElement("source", { src: this.state.videoURL, type: "video/mp4" }),
                React.createElement("source", { src: this.state.videoURL, type: "video/ogg" }),
                "Your browser does not support the video tag."
            );
        }
    }]);

    return HeroVid;
}(React.Component);

var Hero = function (_React$Component4) {
    _inherits(Hero, _React$Component4);

    function Hero() {
        _classCallCheck(this, Hero);

        return _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).apply(this, arguments));
    }

    _createClass(Hero, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "hero-section" },
                React.createElement(
                    "div",
                    { className: "hero-overlay-text" },
                    "OUR ROBOT COMPANIONS"
                ),
                React.createElement(
                    "button",
                    { id: "watch-vid-btn" },
                    "WATCH VIDEO"
                ),
                React.createElement(HeroVid, null)
            );
        }
    }]);

    return Hero;
}(React.Component);

var CarVid = function (_React$Component5) {
    _inherits(CarVid, _React$Component5);

    function CarVid() {
        _classCallCheck(this, CarVid);

        return _possibleConstructorReturn(this, (CarVid.__proto__ || Object.getPrototypeOf(CarVid)).apply(this, arguments));
    }

    _createClass(CarVid, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "carousel-inner-container" },
                this.props.carvids.filter(function (item, idx) {
                    return idx <= 3;
                }).map(function (item) {
                    return React.createElement(
                        "section",
                        { className: "vid-container", key: item },
                        React.createElement("img", { src: "./img/carousel-" + item + ".png", alt: "carousel-" + item })
                    );
                })
            );
        }
    }]);

    return CarVid;
}(React.Component);

var CarouselInner = function (_React$Component6) {
    _inherits(CarouselInner, _React$Component6);

    function CarouselInner(props) {
        _classCallCheck(this, CarouselInner);

        var _this6 = _possibleConstructorReturn(this, (CarouselInner.__proto__ || Object.getPrototypeOf(CarouselInner)).call(this, props));

        _this6.incrementVid = _this6.incrementVid.bind(_this6);
        _this6.decrementVid = _this6.decrementVid.bind(_this6);
        _this6.state = {
            count: 0
        };
        return _this6;
    }

    _createClass(CarouselInner, [{
        key: "incrementVid",
        value: function incrementVid() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: "decrementVid",
        value: function decrementVid() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var carvids = ["vid1", "vid2", "vid3", "vid4", "vid5", "vid6", "vid7", "vid8", "vid9", "vid10", "vid11", "vid12", "vid13", "vid14", "vid15"];
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.incrementVid, className: "unicodeBtn", id: "fwd-arrow" },
                    ">"
                ),
                React.createElement(CarVid, { carvids: carvids }),
                React.createElement(
                    "button",
                    { onClick: this.decrementVid, className: "unicodeBtn", id: "rwd-arrow" },
                    "<"
                )
            );
        }
    }]);

    return CarouselInner;
}(React.Component);

var Carousel = function (_React$Component7) {
    _inherits(Carousel, _React$Component7);

    function Carousel() {
        _classCallCheck(this, Carousel);

        return _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).apply(this, arguments));
    }

    _createClass(Carousel, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "carousel" },
                React.createElement(CarouselInner, null)
            );
        }
    }]);

    return Carousel;
}(React.Component);

var Partnership = function (_React$Component8) {
    _inherits(Partnership, _React$Component8);

    function Partnership() {
        _classCallCheck(this, Partnership);

        return _possibleConstructorReturn(this, (Partnership.__proto__ || Object.getPrototypeOf(Partnership)).apply(this, arguments));
    }

    _createClass(Partnership, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "partnership" },
                React.createElement(
                    "article",
                    { className: "partnership-inner-grid" },
                    React.createElement(
                        "section",
                        null,
                        React.createElement(
                            "h1",
                            null,
                            "HEADLINE"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus tempora, officiis a sit nulla harum reprehenderit ipsa assumenda ratione nobis laborum, consectetur temporibus quos, sint rerum dolore neque error."
                        )
                    )
                )
            );
        }
    }]);

    return Partnership;
}(React.Component);

var Groups = function (_React$Component9) {
    _inherits(Groups, _React$Component9);

    function Groups() {
        _classCallCheck(this, Groups);

        return _possibleConstructorReturn(this, (Groups.__proto__ || Object.getPrototypeOf(Groups)).apply(this, arguments));
    }

    _createClass(Groups, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "groups" },
                React.createElement(
                    "p",
                    null,
                    "groups"
                )
            );
        }
    }]);

    return Groups;
}(React.Component);

var Profile = function (_React$Component10) {
    _inherits(Profile, _React$Component10);

    function Profile() {
        _classCallCheck(this, Profile);

        return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
    }

    _createClass(Profile, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "profile" },
                React.createElement(
                    "p",
                    null,
                    "profile"
                )
            );
        }
    }]);

    return Profile;
}(React.Component);

var SignUpModal = function (_React$Component11) {
    _inherits(SignUpModal, _React$Component11);

    function SignUpModal() {
        _classCallCheck(this, SignUpModal);

        return _possibleConstructorReturn(this, (SignUpModal.__proto__ || Object.getPrototypeOf(SignUpModal)).apply(this, arguments));
    }

    _createClass(SignUpModal, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "simple-modal", className: "modal" },
                React.createElement(
                    "div",
                    { className: "modal-content" },
                    React.createElement(
                        "button",
                        { className: "unicodeBtn", id: "close-btn" },
                        "\xD7"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Hello...I'm a modal"
                    )
                )
            );
        }
    }]);

    return SignUpModal;
}(React.Component);

var Footer = function (_React$Component12) {
    _inherits(Footer, _React$Component12);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "footer",
                    null,
                    React.createElement(
                        "button",
                        { id: "modal-btn", className: "button" },
                        "click here"
                    ),
                    React.createElement(SignUpModal, null)
                )
            );
        }
    }]);

    return Footer;
}(React.Component);

var JSX = function (_React$Component13) {
    _inherits(JSX, _React$Component13);

    function JSX() {
        _classCallCheck(this, JSX);

        return _possibleConstructorReturn(this, (JSX.__proto__ || Object.getPrototypeOf(JSX)).apply(this, arguments));
    }

    _createClass(JSX, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Nav, null),
                React.createElement(Hero, null),
                React.createElement(Carousel, null),
                React.createElement(Partnership, null),
                React.createElement(Groups, null),
                React.createElement(Profile, null),
                React.createElement(Footer, null)
            );
        }
    }]);

    return JSX;
}(React.Component);

ReactDOM.render(React.createElement(JSX, null), document.getElementById('app'));
