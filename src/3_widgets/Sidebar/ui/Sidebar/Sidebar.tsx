import {classNames} from "6_shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import {useState} from "react";
import {ThemeSwitcher} from "6_shared/ui/ThemeSwitcher";
import LangSwitcher from "3_widgets/LangSwitcher/ui/LangSwitcher";

interface SidebarProps {
    className?: string;
}

const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const onToggle= () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};

export default Sidebar;