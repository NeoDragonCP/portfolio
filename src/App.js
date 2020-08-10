import React, { useState } from "react";
import "./App.css"; /* Basic app styling */
import styled from "styled-components";

/* My styled Elements */
import SectionHeader from "./site-components/SectionHeader.jsx";
import SectionContent from "./site-components/SectionContent.jsx";

import ProjectCard from "./site-components/ProjectCard.jsx";

import Card from "./styled-components/Card";
import Button from "./styled-components/Button";
import ColumnContainer from "./styled-components/ColumnContrainer.jsx";
import RowContainer from "./styled-components/RowContainer.jsx";

/* Navbar */
import Navbar from "./site-components/navbar/Navbar";
import RightNav from "./site-components/navbar/RightNav";
import Burger from "./site-components/navbar/Burger";

/* Header */
import HeaderSection from "./site-components/header/HeaderSection";

/* CP Logo */
import CPLogoPic from "./images/CPMaskLogo2.png";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <Navbar open={open}>
        <div>
          {/*Dont need to pass props since RightNav is part of Navbar */}
          <RightNav />
          <Burger open={open} onClick={() => setOpen(!open)} />
        </div>
      </Navbar>
      <HeaderSection />
      <SectionHeader>About Me</SectionHeader>
      <SectionContent padding="2rem" backgroundColor="white" textAlign="left">
        <ColumnContainer
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          <img src={CPLogoPic} alt="Calis Projects Logo" />
          <p style={{ fontSize: "1.1rem", paddingBottom: "4rem" }}>
            Creative software developer with 8 years of expertise across mobile
            and web games and applications.
            <br /> 3+ years experience as a UI/UX Developer with modern React
            and JavaScript.
            <br />
            Excellent focus, communication, and ability to learn rapidly.
            <br />
            <span>Born and raised in Dublin, Ireland.</span>
          </p>
        </ColumnContainer>
      </SectionContent>
      <SectionHeader invert>Web Projects</SectionHeader>
      <SectionContent padding="5rem 0 5rem 0">
        <RowContainer
          padding="0.5rem 2rem 0.5rem 2rem"
          justifyContent="space-between"
          alignItems="center"
        >
          <ProjectCard
            title="Password Generator"
            description="About the project goes here. Maybe tech stack used."
            tags={["#React", "#Javascript"]}
            imageURL=""
            demoURL="https://neodragoncp.github.io/password-generator/"
            githubURL="https://github.com/NeoDragonCP/password-generator"
          />
          <ProjectCard
            title="Password Generator"
            description="About the project goes here. Maybe tech stack used."
            imageURL=""
            demoURL="https://neodragoncp.github.io/password-generator/"
            githubURL="https://github.com/NeoDragonCP/password-generator"
          />
          <ProjectCard
            title="Password Generator"
            description="About the project goes here. Maybe tech stack used."
            imageURL=""
            demoURL="https://neodragoncp.github.io/password-generator/"
            githubURL="https://github.com/NeoDragonCP/password-generator"
          />
        </RowContainer>
        <a
          href="https://github.com/NeoDragonCP"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Out My Github For More
        </a>
      </SectionContent>
      <SectionHeader>Games</SectionHeader>
      <SectionContent backgroundColor="white">
        <p>Games go here...</p>
      </SectionContent>
      <SectionContent backgroundColor="#016e9f" minHeight="300px">
        <ColumnContainer
          width="400px"
          height="300px"
          justifyContent="space-evenly"
          padding="1rem"
          fontColor="white"
        >
          <h3>Contact Me</h3>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Message" />
        </ColumnContainer>
        <Button backgroundColor="#e41b4d">Contact Me</Button>

        <ColumnContainer
          width="100%"
          justifyContent="center"
          alignItems="center"
          fontColor="white"
          padding="1rem"
        >
          <p>
            Handcrafted by me, Stephen McVicker.
            <br /> Original design in Figma.
            <br /> Created with React, my own custom styled-components, and love
            ❤️. View source on{" "}
            <span
              style={{
                textDecoration: "underline",
                color: "#e41b4d",
                cursor: "pointer",
              }}
            >
              Github
            </span>
            .
          </p>
        </ColumnContainer>
      </SectionContent>
    </div>
  );
}

export default App;
