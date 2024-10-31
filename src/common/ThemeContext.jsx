import React, {createContext, useContext, useEffect, useState} from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') || 'light'
    );

    const    toggleTheme = () => {
        console.log('theme switched');
            setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light' ));
        };

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        console.log('Theme set to ${theme}');
    }, [theme]);

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};