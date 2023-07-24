import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import "./index.scss";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
export var App = function () {
    return (_jsxs("div", { className: "app", children: [_jsx(Link, { to: "/", children: "Main" }), _jsx(Link, { to: "/about", children: "About" }), _jsxs(Routes, { children: [_jsx(Route, { path: "/about", element: _jsx(AboutPageAsync, {}) }), _jsx(Route, { path: "/", element: _jsx(MainPageAsync, {}) })] }), _jsx(Counter, {})] }));
};
