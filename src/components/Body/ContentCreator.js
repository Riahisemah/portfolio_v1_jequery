import React, {useRef } from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import {AiOutlinePlayCircle} from "react-icons/ai"
import ScrollTriggeredSection from '../Body/ScrollSection';
import {useDarkMode } from '../Body/DarkModeContext.js';



const ContentCreator = () => {
    
    const videoRefs = [useRef(null), useRef(null), useRef(null)];
    
    const isDarkMode = useDarkMode();
    
  
    const handleVideoClick = (index) => {
      if (videoRefs[index].current) {
        const video = videoRefs[index].current;
        const playIcon = video.parentElement.querySelector('.play-icon');
        if (video.paused) {
          video.play();
          video.volume = 0.30; 
          if (playIcon) {
            playIcon.style.display = 'none';
            video.style.filter = "none"
          }
        } else {
          video.pause();
          playIcon.style.display = 'block';
          video.style.filter = "brightness(0.7)"
        }
      }
    };

    
    return (
      <ScrollTriggeredSection sectionId={'fourth-section'}>
        <Row>
               <section className='content-creator' style={{marginBottom: "50px", marginTop:"100px"}}>
            <h1 className={`content-creator-title ${isDarkMode ? "" : "light-text-content-creator"}`}>Content creator</h1>
          </section>


          <Col lg={6} style={{margin:"auto"}}>
                <h1 className='tik-tok-header'><span className={`tik ${isDarkMode ? "" : "tik-light-mode"}`}>Tik</span><span className={`tok ${isDarkMode ? "" : "tok-light-mode"}`}>Tok</span></h1>
                <p className={`tik-tok-des ${isDarkMode ? "" : "tik-tok-des-light"}`}>
                  As I mentioned earlier I'm a Content creator on TikTok.
                  You can visit my account by clicking <Button href='https://www.tiktok.com/@samerpro_' rel='noreferrer' target='_blank' className='tiktok-button'>here..</Button> 
                </p>
            </Col>

          <Col lg={6} className='videos'>
          <Carousel interval={null}>
      {videoRefs.map((videoRef, index) => (
        <Carousel.Item key={index}>
          <div style={{ position: 'relative' }}>
          <video 
            ref={videoRef}
            onClick={() => handleVideoClick(index)}
            style={{position: "relative", borderRadius: "30px"}}
            className='video'
            preload='metadata'
            poster={`/th-${index + 1}.png`}
          >
            <source src={`/v-${index + 1}.mp4`} type='video/mp4' />
          </video>
          <AiOutlinePlayCircle onClick={() => handleVideoClick(index)} className='play-icon' />
          </div>
         
          <Carousel.Caption>
        </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
            </Col>
           
        </Row>
        </ScrollTriggeredSection>
    );
}

export default ContentCreator;