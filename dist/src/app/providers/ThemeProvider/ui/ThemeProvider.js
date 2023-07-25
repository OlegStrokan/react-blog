import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, } from "../../../../shared/config/theme/ThemeContext";
var defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.LIGHT;
var ThemeProvider = function (_a) {
    var children = _a.children;
    var _b = useState(defaultTheme), theme = _b[0], setTheme = _b[1];
    var toggleTheme = function () {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
    };
    var defaultProps = useMemo(function () { return ({
        theme: theme,
        setTheme: setTheme,
    }); }, [theme, setTheme]);
    return (_jsx("div", { children: _jsx(ThemeContext.Provider, { value: defaultProps, children: children }) }));
};
export default ThemeProvider;
