import React from 'react';
import {Navbar} from 'react-bootstrap'
import {useDarkModeUpdate, useDarkMode } from '../Body/DarkModeContext.js';
import {FaMoon} from "react-icons/fa";
import {BsMoon} from "react-icons/bs";




const DarkMood = () => {

  const toggleMode = useDarkModeUpdate();
  const isDarkMode = useDarkMode();


    
    return (
        <Navbar.Brand className='animate__animated animate__backInDown' href='#' onClick={toggleMode}>
              {isDarkMode ? <FaMoon color="white" />: <BsMoon color="gray" />  }
        </Navbar.Brand>
    )
}


export default DarkMood;