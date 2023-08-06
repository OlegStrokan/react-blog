import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader/Loader';
import styles from './PageLoader.module.scss';

interface IPageLoader {
    className?: string;
}
export const PageLoader = ({ className }: IPageLoader) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.pageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
