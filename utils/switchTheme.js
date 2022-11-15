import React from 'react';
import { useTheme } from 'next-themes';
import { CheckTheme } from './helper';

const SwitchTheme = () => {
    const { setTheme } = useTheme();
    const darkMode = CheckTheme();

    if (darkMode === "dark") {
        return (
            <i onClick={() => setTheme('light')} className="fa-regular fa-sun"></i>
        )
    }
    else {
        return (
            <i onClick={() => setTheme('dark')} className="fa-solid fa-moon"></i>

        )
    }

};

export default SwitchTheme;