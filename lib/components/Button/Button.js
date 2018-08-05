"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
var Button = function (_a) {
    var children = _a.children, customStyles = _a.customStyles, platformProps = _a.platformProps, textStyles = _a.textStyles, text = _a.text, type = _a.type, onPress = _a.onPress;
    var containerStyles = platformProps.containerStyles, isHighlight = platformProps.isHighlight, ripple = platformProps.ripple, rippleBorder = platformProps.rippleBorder;
    if (type === 'component') {
        if (react_native_1.Platform.OS === 'android' && ripple) {
            return (React.createElement(styles_1.ButtonContainerAndroidOuterView, { styling: containerStyles },
                React.createElement(react_native_1.TouchableNativeFeedback, { onPress: onPress, background: react_native_1.TouchableNativeFeedback.Ripple(ripple, rippleBorder) },
                    React.createElement(styles_1.ButtonContainerAndroidInnerView, { styling: customStyles }, children))));
        }
        if (isHighlight) {
            return (React.createElement(styles_1.ButtonContainerHighlight, { styling: customStyles, onPress: onPress }, children));
        }
        return (React.createElement(styles_1.ButtonContainerOpacity, { styling: customStyles, onPress: onPress }, children));
    }
    else if (type === 'container') {
        if (react_native_1.Platform.OS === 'android' && ripple) {
            return (React.createElement(styles_1.ButtonContainerAndroidOuterView, { styling: containerStyles },
                React.createElement(react_native_1.TouchableNativeFeedback, { onPress: onPress, background: react_native_1.TouchableNativeFeedback.Ripple(ripple, rippleBorder) }, children)));
        }
        if (isHighlight) {
            return (React.createElement(react_native_1.TouchableHighlight, { onPress: onPress }, children));
        }
        return (React.createElement(react_native_1.TouchableOpacity, { onPress: onPress }, children));
    }
    if (react_native_1.Platform.OS === 'android' && ripple) {
        return (React.createElement(styles_1.ButtonContainerAndroidOuterView, { styling: containerStyles },
            React.createElement(react_native_1.TouchableNativeFeedback, { onPress: onPress, background: react_native_1.TouchableNativeFeedback.Ripple(ripple, rippleBorder) },
                React.createElement(styles_1.ButtonContainerAndroidInnerView, { styling: customStyles },
                    React.createElement(styles_1.ButtonText, { styling: textStyles }, text)))));
    }
    if (isHighlight) {
        return (React.createElement(styles_1.ButtonContainerHighlight, { styling: customStyles, onPress: onPress },
            React.createElement(react_native_1.View, null,
                React.createElement(styles_1.ButtonText, { styling: textStyles }, text))));
    }
    return (React.createElement(styles_1.ButtonContainerOpacity, { styling: customStyles, onPress: onPress },
        React.createElement(styles_1.ButtonText, { styling: textStyles }, text)));
};
Button.defaultProps = {
    customStyles: '',
    text: 'Button Text',
    onPress: function () { return false; },
};
exports.default = Button;
//# sourceMappingURL=Button.js.map