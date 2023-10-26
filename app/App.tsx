import React, { FC } from 'react';
import { classNames } from 'shared/helpers/lib';
import { Navbar } from 'components/NavBar';
import { Content } from 'components/Content/';
import { useTheme } from './providers/themeProvider';

const App: FC = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className="content_wrapper">
                <Content />
            </div>
        </div>
    );
};

export default App;
