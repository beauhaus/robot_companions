"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RightLinks = function RightLinks() {
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
};

var Nav = function Nav() {
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
};

var HeroVid = function (_React$Component) {
    _inherits(HeroVid, _React$Component);

    function HeroVid(props) {
        _classCallCheck(this, HeroVid);

        var _this = _possibleConstructorReturn(this, (HeroVid.__proto__ || Object.getPrototypeOf(HeroVid)).call(this, props));

        _this.state = {
            videoURL: 'https://dl.dropbox.com/s/ln84nmt3ty2zy2v/lipstickrobot.mp4?dl=0'
        };
        return _this;
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

var Hero = function Hero() {
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
};

var SliderVid = function (_React$Component2) {
    _inherits(SliderVid, _React$Component2);

    function SliderVid() {
        _classCallCheck(this, SliderVid);

        return _possibleConstructorReturn(this, (SliderVid.__proto__ || Object.getPrototypeOf(SliderVid)).apply(this, arguments));
    }

    _createClass(SliderVid, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "slider-inner-container" },
                this.props.sliderVids.filter(function (item, idx) {
                    return idx <= 3;
                }).map(function (item) {
                    return React.createElement(
                        "section",
                        { className: "vid-container", key: item },
                        React.createElement("img", { src: "./img/slider-" + item + ".png", alt: "slider-" + item })
                    );
                })
            );
        }
    }]);

    return SliderVid;
}(React.Component);

var SliderInner = function (_React$Component3) {
    _inherits(SliderInner, _React$Component3);

    function SliderInner(props) {
        _classCallCheck(this, SliderInner);

        var _this3 = _possibleConstructorReturn(this, (SliderInner.__proto__ || Object.getPrototypeOf(SliderInner)).call(this, props));

        _this3.incrementVid = _this3.incrementVid.bind(_this3);
        _this3.decrementVid = _this3.decrementVid.bind(_this3);
        _this3.state = {
            count: 0
        };
        return _this3;
    }

    _createClass(SliderInner, [{
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
            var sliderVids = ["vid1", "vid2", "vid3", "vid4", "vid5", "vid6", "vid7", "vid8", "vid9", "vid10", "vid11", "vid12", "vid13", "vid14", "vid15"];
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.incrementVid, className: "unicodeBtn", id: "fwd-arrow" },
                    ">"
                ),
                React.createElement(
                    "span",
                    { className: "range" },
                    "Range: "
                ),
                React.createElement(SliderVid, { sliderVids: sliderVids }),
                React.createElement(
                    "button",
                    { onClick: this.decrementVid, className: "unicodeBtn", id: "rwd-arrow" },
                    "<"
                )
            );
        }
    }]);

    return SliderInner;
}(React.Component);

var Slider = function (_React$Component4) {
    _inherits(Slider, _React$Component4);

    function Slider() {
        _classCallCheck(this, Slider);

        return _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).apply(this, arguments));
    }

    _createClass(Slider, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "slider" },
                React.createElement(SliderInner, null)
            );
        }
    }]);

    return Slider;
}(React.Component);

var Partnership = function Partnership() {
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
};

var Groups = function Groups() {
    return React.createElement(
        "div",
        { className: "groups" },
        React.createElement(
            "p",
            null,
            "groups"
        )
    );
};

var Profile = function Profile() {
    return React.createElement(
        "div",
        { className: "profile" },
        React.createElement(
            "p",
            null,
            "profile"
        )
    );
};

var SignUpModal = function (_React$Component5) {
    _inherits(SignUpModal, _React$Component5);

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
// {/***************** ONBOARDING MODAL DEPRECATE **************** */}
// <button id="modal-btn" className="button">click here</button>
// <SignUpModal />


var Footer = function Footer() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "footer",
            null,
            React.createElement(
                "p",
                null,
                "A Fine space for a footer"
            )
        )
    );
};

var RobotCompanions = function (_React$Component6) {
    _inherits(RobotCompanions, _React$Component6);

    function RobotCompanions() {
        _classCallCheck(this, RobotCompanions);

        return _possibleConstructorReturn(this, (RobotCompanions.__proto__ || Object.getPrototypeOf(RobotCompanions)).apply(this, arguments));
    }

    _createClass(RobotCompanions, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Nav, null),
                React.createElement(Hero, null),
                React.createElement(Slider, null),
                React.createElement(Partnership, null),
                React.createElement(Groups, null),
                React.createElement(Profile, null),
                React.createElement(Footer, null)
            );
        }
    }]);

    return RobotCompanions;
}(React.Component);

ReactDOM.render(React.createElement(RobotCompanions, null), document.getElementById('app'));
