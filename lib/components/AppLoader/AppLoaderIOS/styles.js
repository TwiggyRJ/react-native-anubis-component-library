"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var native_1 = require("styled-components/native");
exports.Loader = native_1.default.View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: 1;\n"], ["\n  flex: 1;\n"])));
exports.LoaderCenteredContent = native_1.default.View(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n"], ["\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n"])));
var AbsoluteFill = native_1.default.View(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n"])));
exports.LoaderSplashScreenLayer = AbsoluteFill.extend(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: ", ";\n"], ["\n  background-color: ", ";\n"])), function (props) { return props.background ? props.background : '#4276ba'; });
exports.LoaderWhiteLayer = AbsoluteFill.extend(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: #fff;\n"], ["\n  background-color: #fff;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=styles.js.map