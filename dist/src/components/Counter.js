import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import classes from "./Counter.module.scss";
export var Counter = function () {
    var _a = React.useState(0), count = _a[0], setCount = _a[1];
    return (_jsxs("div", { children: [_jsx("button", { className: classes.button, onClick: function () { return setCount(count + 1); }, children: "increment" }), _jsx("button", { onClick: function () { return setCount(count - 1); }, children: "decrement" }), count] }));
};
