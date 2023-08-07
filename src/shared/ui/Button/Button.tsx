import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<IButton> = ({
    className,
    children,
    theme,
    ...props
}) => (
    <button
        type="button"
        className={classNames(styles.button, { [styles[theme]]: true }, [
            className,
        ])}
        {...props}
    >
        {children}
    </button>
);
