import React, {Suspense} from 'react';
import './styles/index.scss'
import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "6_shared/lib/classNames/classNames";
import {AppRouter} from "./providers/router";
import {Navbar} from "3_widgets/Navbar";
import {Sidebar} from "3_widgets/Sidebar";
import {useTranslation} from "react-i18next";

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;