import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { classNames } from '../../../helpers/lib';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: string
}

export enum ThemeButtonEnum {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
    const {
        className,
        children,
        theme,
        ...rest
    } = props;
    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...rest}
        >
            {children}
        </button>
    );
};
