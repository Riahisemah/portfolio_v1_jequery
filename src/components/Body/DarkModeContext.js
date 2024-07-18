import React, { useState, useContext } from 'react';

export const DarkModeContext = React.createContext();
export const DarkModeUpdateContext = React.createContext();

export function useDarkMode() {
    return useContext(DarkModeContext);
}

export function useDarkModeUpdate() {
    return useContext(DarkModeUpdateContext);
}

export function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(true);

    function toggleMode() {
        setDarkMode(prevDarkMode => !prevDarkMode);
    }

    return (
        <DarkModeContext.Provider value={darkMode}>
            <DarkModeUpdateContext.Provider value={toggleMode}>
                {children}
            </DarkModeUpdateContext.Provider>
        </DarkModeContext.Provider>
    );
}
