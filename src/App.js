import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "animate.css";
import DarkModeButton from "./components/Navbar/DarkModeButton";
import Body from "./components/Body/Body.js";
import Header from "./components/Body/Header.js";
import AboutMe from "./components/Body/AboutMe.js";
import WhatIUseInCoding from "./components/Body/WhatIUseInCoding.js";
import Works from "./components/Body/Works";
import Contact from "./components/Body/Contact";
import Animation from "./components/Body/Animation";
import Content from "./components/Body/Content.js";
import { DarkModeProvider } from "./components/Body/DarkModeContext.js";

function App() {
  return (
    <DarkModeProvider>
      <Content>
        <Animation />
        <Navbar expand="lg">
          <Container className="mt-3">
            <DarkModeButton />
          </Container>
        </Navbar>
        <Body>
          <Header />
          <AboutMe />
          <WhatIUseInCoding />
          <Works />
          <Contact />
        </Body>
      </Content>
    </DarkModeProvider>
  );
}

export default App;
