import {classNames} from "6_shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import {Theme, useTheme} from "1_app/providers/ThemeProvider";
import {Button, ThemeButton} from "../../Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
        >
            {theme === Theme.DARK ? "Сверт" : "Ночь"}
        </Button>
    );
};

export default ThemeSwitcher;