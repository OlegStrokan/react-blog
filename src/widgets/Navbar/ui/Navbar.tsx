import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import classes from './Navbar.module.scss';

interface INavbar {
  className?: string;
}

export const Navbar = ({ className }: INavbar) => (
    <div className={classNames(classes.navbar, {}, [className])}>
        <div className={classes.links}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to="/"
                className={classes.mainLink}
            >
                Main
            </AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                About
            </AppLink>
        </div>
    </div>
);
