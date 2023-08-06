import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import styles from './LangSwitcher.module.scss';

interface ILangSwitcher {
    className?: string;
}

export const LangSwitcher = ({ className }: ILangSwitcher) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div className={classNames(styles.langSwitcher, {}, [className])}>
            <Button theme={ThemeButton.CLEAR} onClick={toggle}>{t('Язык')}</Button>
            {t('Тестовый пример')}
        </div>
    );
};
