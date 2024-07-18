import React, { useState, useEffect } from "react";

function ScrollTriggeredSection({ children, sectionId }) {
  const [, setIsScrolled] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(`#${sectionId}`);
      if (section) {
        const sectionRect = section.getBoundingClientRect();
        if (sectionRect.top < window.innerHeight && sectionRect.bottom >= 0) {
          setIsScrolled(true);
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, [sectionId]);

  return (
    <div
      className={`${hasAnimated ? "animate__animated animate__fadeIn" : ""}`}
      id={sectionId}
    >
      {children}
    </div>
  );
}

export default ScrollTriggeredSection;
