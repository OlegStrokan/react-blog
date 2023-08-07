import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import styles from './PageLoader.module.scss';

interface IPageLoader {
    className?: string;
}
export const PageLoader = ({ className }: IPageLoader) => (
    <div className={classNames(styles.pageLoader, {}, [className])}>
        <Loader />
    </div>
);
