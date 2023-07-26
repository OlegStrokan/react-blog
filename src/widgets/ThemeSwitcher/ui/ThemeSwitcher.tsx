import React from "react";
import styles from "ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";

interface IThemeSwitcher {
  className?: string;
}

export const ThemeSwitcher = ({ className }: IThemeSwitcher) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={}
      className={classNames(styles.themeSwither, {}, [className])}
    >
      Toggle
    </button>
  );
};
