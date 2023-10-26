import React, { FunctionComponent } from 'react';
import { useTheme, ThemeEnum } from 'app/providers/themeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { Button, ThemeButtonEnum } from 'shared/ui/Button';
import { classNames } from '../../../helpers/lib';

interface ThemeSwitcherProps {
    className?: string,
}

export const ThemeSwitcher: FunctionComponent = ({ className }: ThemeSwitcherProps) => {
    const {
        theme,
        toggleTheme,
    } = useTheme();

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
            theme={ThemeButtonEnum.CLEAR}
        >
            {theme === ThemeEnum.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
