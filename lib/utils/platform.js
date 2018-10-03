"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
function getPlatform() {
    return react_native_1.Platform.OS;
}
exports.getPlatform = getPlatform;
function isIOS() {
    if (react_native_1.Platform.OS === "ios") {
        return true;
    }
    else {
        return false;
    }
}
exports.isIOS = isIOS;
function isAndroid() {
    if (react_native_1.Platform.OS === "android") {
        return true;
    }
    else {
        return false;
    }
}
exports.isAndroid = isAndroid;
//# sourceMappingURL=platform.js.map