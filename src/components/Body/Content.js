import React from 'react';
import {useDarkMode } from '../Body/DarkModeContext.js';

const Content = (props) => {

  const isDarkMode = useDarkMode();

    
    return (
        <div className={`App ${isDarkMode ? "" : "light-mode-theme"}`}>
            {props.children}
        </div>
    )
}


export default Content;