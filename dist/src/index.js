import { jsx as _jsx } from "react/jsx-runtime";
import { render } from "react-dom";
import { Counter } from "./components/Counter";
render(_jsx("div", { children: _jsx(Counter, {}) }), document.getElementById("root"));
