"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
var AppLoaderIOS = (function (_super) {
    __extends(AppLoaderIOS, _super);
    function AppLoaderIOS(props) {
        var _this = _super.call(this, props) || this;
        _this.started = false;
        _this.state = {
            appLoader: new react_native_1.Animated.Value(0),
            animationComplete: false,
        };
        return _this;
    }
    AppLoaderIOS.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        if (this.props.isAppLoaded && !(prevProps.isAppLoaded !== this.props.isAppLoaded) && !this.started) {
            this.started = true;
            react_native_1.Animated.timing(this.state.appLoader, {
                toValue: this.props.animateTo,
                duration: this.props.duration,
                useNativeDriver: true,
            }).start(function () {
                _this.setState({
                    animationComplete: true,
                });
            });
        }
    };
    AppLoaderIOS.prototype.render = function () {
        var opacityClearToVisible = {
            opacity: this.state.appLoader.interpolate({
                inputRange: [0, 15, 30],
                outputRange: [0, 0, 1],
                extrapolate: 'clamp',
            }),
        };
        var imageScale = {
            transform: [
                {
                    scale: this.state.appLoader.interpolate({
                        inputRange: [0, 10, 100],
                        outputRange: [1, 0.8, 70],
                    }),
                },
            ],
        };
        var appScale = {
            transform: [
                {
                    scale: this.state.appLoader.interpolate({
                        inputRange: [0, 7, 100],
                        outputRange: [1.1, 1.13, 1],
                    }),
                },
            ],
        };
        return (React.createElement(styles_1.Loader, null,
            React.createElement(react_native_1.StatusBar, { animated: true, hidden: !this.state.animationComplete }),
            !this.state.animationComplete ?
                React.createElement(styles_1.LoaderSplashScreenLayer, { background: this.props.splashscreenBackground })
                :
                    null,
            React.createElement(react_native_1.MaskedViewIOS, { style: { flex: 1 }, maskElement: React.createElement(styles_1.LoaderCenteredContent, null,
                    React.createElement(react_native_1.Animated.Image, { style: [{ height: 100, width: 100 }, imageScale], source: this.props.image })) },
                !this.state.animationComplete ?
                    React.createElement(styles_1.LoaderWhiteLayer, null)
                    : null,
                React.createElement(react_native_1.Animated.View, { style: [opacityClearToVisible, appScale, { flex: 1 }] }, this.props.children))));
    };
    AppLoaderIOS.defaultProps = {
        animateTo: 100,
        duration: 1000,
        image: 'https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536847_1280.png',
        type: 'image',
        splashscreenBackground: '#551a8b',
        isAppLoaded: false,
    };
    return AppLoaderIOS;
}(React.Component));
exports.default = AppLoaderIOS;
//# sourceMappingURL=AppLoaderIOS.js.map