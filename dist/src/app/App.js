import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "../pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "../pages/MainPage/MainPage.async";
import { Suspense } from "react";
import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "../helpers/classNames/classNames";
export var App = function () {
    var _a = useTheme(), theme = _a.theme, toggleTheme = _a.toggleTheme;
    return (_jsxs("div", { className: classNames("app", { hovered: true, selected: false }, [theme]), children: [_jsx("button", { onClick: function () { return toggleTheme(); }, children: "Toggle" }), _jsx(Link, { to: "/", children: "Main" }), _jsx(Link, { to: "/about", children: "About" }), _jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsxs(Routes, { children: [_jsx(Route, { path: "/about", element: _jsx(AboutPageAsync, {}) }), _jsx(Route, { path: "/", element: _jsx(MainPageAsync, {}) })] }) })] }));
};
