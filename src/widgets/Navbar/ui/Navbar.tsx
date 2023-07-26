import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface INavbar {
  className?: string;
}

export const Navbar = ({ className }: INavbar) => {
  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={classes.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={"/"}
          className={classes.mainLink}
        >
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          Main
        </AppLink>
      </div>
    </div>
  );
};
