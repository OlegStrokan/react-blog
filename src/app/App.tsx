import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={classNames("app", { hovered: true, selected: false }, [theme])}
    >
      <button onClick={() => toggleTheme()}>Toggle</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <AppRouter />
    </div>
  );
};
