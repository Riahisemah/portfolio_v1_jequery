import ScrollTriggeredSection from '../Body/ScrollSection';
import {useDarkMode } from '../Body/DarkModeContext.js';




const WhatIUseInCoding = () => {
  const isDarkMode = useDarkMode();
   

    return (
        <ScrollTriggeredSection sectionId={'second-section'}>
       <section className={` materials-I-use ${isDarkMode ? "" : "light-text"}`}>
        <h1 className='material-I-use-title'>What I use in coding</h1>
        <p className='materials-I-use-des mt-4'>
            JavaScript<img src='/javascript.png' className='image' style={{"marginTop": "-6px"}} width={"25px"} alt='javascript'/>
        </p>
        <p className='materials-I-use-des'>
            Html<img src='/html.png' className='image' style={{"marginTop": "-6px"}} width={"25px"} alt='javascript'/>
            </p>
            <p className='materials-I-use-des'>
            Css<img src='/css.png' className='image' style={{"marginTop": "-6px"}} width={"25px"} alt='javascript'/>
            </p>
            <p className='materials-I-use-des'>
            Bootstrap <img src='/bootstrap.png' className='image' style={{"marginTop": "-6px"}} width={"25px"} alt='javascript'/>
            </p>
            <p className='materials-I-use-des'>
            Jquery <img src='/jquery.png' className='image' style={{"marginTop": "-6px"}} width={"25px"} alt='javascript'/>
            </p>
            <p className='materials-I-use-des'>
            Node.js <img src='/node-js.png' className='image' style={{"marginTop": "-6px"}} width={"25px"} alt='javascript'/>
            </p>
            <p className='materials-I-use-des'>
            Express.js
            </p>
            <p className='materials-I-use-des'>
            MongoDB <img src='/mongodb.png' className='image' style={{"marginTop": "-6px"}} width={"25px"} alt='javascript'/>
            </p>
    </section>
    </ScrollTriggeredSection>
      
    );
}

export default WhatIUseInCoding;

