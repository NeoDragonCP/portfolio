import React, { useState, useRef } from "react";
import "./App.css"; /* Basic app styling */

import styled from "styled-components";

/* Youtube Video Player */
import ReactPlayer from "react-player";

/* My styled Elements */
import SectionHeader from "./site-components/SectionHeader.jsx";
import SectionContent from "./site-components/SectionContent.jsx";

import ProjectCard from "./site-components/ProjectCard.jsx";
import GameCard from "./site-components/GameCard.jsx";

import ColumnContainer from "./styled-components/ColumnContrainer.jsx";
import RowContainer from "./styled-components/RowContainer.jsx";

/* Navbar */
import Navbar from "./site-components/navbar/Navbar";
import RightNav from "./site-components/navbar/RightNav";
import Burger from "./site-components/navbar/Burger";

/* Header */
import HeaderSection from "./site-components/header/HeaderSection";

import ContactMe from "./site-components/ContactMe.jsx";

const AboutMeSection = styled.div`
  width: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

function App() {
  // Nav bar state
  const [open, setOpen] = useState(false);

  // Section Refs Navbar will scroll too
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const webProjectsRef = useRef(null);
  const gamesRef = useRef(null);
  const contactMeRef = useRef(null);

  return (
    <div className="App" ref={homeRef}>
      <Navbar open={open}>
        <div>
          <RightNav
            open={open}
            homeRef={homeRef}
            aboutMeRef={aboutMeRef}
            webProjectsRef={webProjectsRef}
            gamesRef={gamesRef}
            contactMeRef={contactMeRef}
            closeNav={() => setOpen(false)}
          />
          <Burger open={open} onClick={() => setOpen(!open)} />
        </div>
      </Navbar>
      <HeaderSection />
      <SectionHeader ref={aboutMeRef}>About Me</SectionHeader>
      <SectionContent
        padding="2rem 1rem 2rem 1rem"
        backgroundColor="white"
        textAlign="left"
      >
        <AboutMeSection>
          <img
            src={process.env.PUBLIC_URL + "/CPMaskLogo2.png"}
            alt="Calis Projects Logo"
            width="420px"
            height="260px"
          />
          <ColumnContainer
            width="100%"
            alignItems="center"
            justifyContent="center"
          >
            <p style={{ fontSize: "1.1rem", paddingBottom: "4rem" }}>
              Creative software developer with 8 years of expertise across
              mobile and web games and applications.
              <br /> 3+ years experience as a UI/UX Developer with modern React
              and JavaScript.
              <br />
              Excellent focus, communication, and ability to learn rapidly.
              <br />
              <span>Born and raised in Dublin, Ireland.</span>
              <br />
              <br />
              <span style={{ fontWeight: "bold", color: "#4B4B4B" }}>
                Calis Projects (logo pictured above)
              </span>
              <br />
              In 2012 I started my own business upon the release of my first
              mobile game.
              <br />
              Aside from the development work, I maintained social media
              channels, personal websites,
              <br /> and worked remotely with excellent people from around the
              world.
              <br />
              <br />
              <span style={{ fontWeight: "bold", color: "#4B4B4B" }}>
                Actively looking for work in Front End development
              </span>
              <br />
              My love for visual design, combined with my desire to constantly
              learn and improve has led me to want to work with a passionate
              team in web development. I really enjoy using React library and
              strive to make simple, reusable components, and not pass props all
              over the place. 😆
              <br />
              <span>Full Resume available upon request</span>
            </p>
            <RowContainer alignItems="center" justifyContent="flex-start">
              <img
                src={process.env.PUBLIC_URL + "/logoreact.png"}
                alt="react-logo"
                width="80px"
                height="80px"
              />
              <img
                src={process.env.PUBLIC_URL + "/logojs.png"}
                alt="javascript-logo"
                width="80px"
                height="80px"
              />
              <img
                src={process.env.PUBLIC_URL + "/logocss.png"}
                alt="css-logo"
                width="80px"
                height="80px"
              />
              <img
                src={process.env.PUBLIC_URL + "/logounity.png"}
                alt="unity-game-engine-logo"
                width="80px"
                height="80px"
              />
            </RowContainer>
          </ColumnContainer>
        </AboutMeSection>
      </SectionContent>
      <SectionHeader invert ref={webProjectsRef}>
        Web Projects
      </SectionHeader>
      <SectionContent padding="5rem 0 5rem 0" backgroundColor="#E3F4FF">
        <RowContainer
          padding="0.5rem 2rem 0.5rem 2rem"
          justifyContent="space-between"
          alignItems="center"
        >
          <ProjectCard
            title="Password Generator"
            description="Using styled-components, along with the ability to select custom themes, I wanted to create a React version of a tutorial by Florin Poppin."
            tags={["#React", "#Themes"]}
            imageURL="/PasswordGeneratorDesktop.png"
            demoURL="https://neodragoncp.github.io/password-generator/"
            githubURL="https://github.com/NeoDragonCP/password-generator"
          />
          <ProjectCard
            title="Currency Convertor"
            description="External API for fetching price. Uses ES6 Map and Set to store the currency symbols. Dark theme included."
            tags={["#React", "#Fetch"]}
            imageURL="/CurrencyConverterScreenshot.png"
            demoURL="https://neodragoncp.github.io/currency-converter/"
            githubURL="https://github.com/NeoDragonCP/currency-converter"
          />
          <ProjectCard
            title="This website."
            description="Custom made, reusable, styled-components. Easily change styles and expand elements using props."
            tags={["#React", "#Components"]}
            imageURL="/WebsiteCodeScreenshot.png"
            demoURL="https://neodragoncp.github.io/portfolio/index.html"
            githubURL="https://github.com/NeoDragonCP/portfolio"
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
      <SectionHeader ref={gamesRef}>Games</SectionHeader>
      <SectionContent>
        <ColumnContainer
          width="100%"
          padding="2rem"
          alignItems="center"
          justifyContent="center"
        >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=XxNpuetG8qI"
            style={{ margin: "4rem 0 0 0" }}
          />
          ZENFORMS: Protectors launch trailer.
          <br />
          <br />
          <GameCard
            appIcon="/zenformsappicon.png"
            title="ZENFORMS: Protectors"
            description="A 2D RPG for iOS, Android.
Capture monsters, battle others, and go on an amazing adventure.
A great single player story to experience and robust online features,
known as the CP Garden, allowing you to interact with a huge community of players
and participate in online trades, battles, and events."
            facebookLink="https://www.facebook.com/zenforms/"
            twitterLink="https://twitter.com/zenforms"
            wikiLink="https://zenforms.fandom.com/wiki/ZENFORMS:_Protectors_Wiki"
            youtubeLink="https://www.youtube.com/user/CalisProjectsOffical"
            facts={[
              "First release: September 2012",
              "Updates and support: For 4 years+",
              "Dedicated online community",
              "Over 250,000 players during it's lifetime",
            ]}
            tech={[
              "Objective-C",
              "PHP + MySQL for online backend service",
              "Cocos2D",
              "Xcode",
              "Photoshop",
              "Various handcrafted tools by me such as a particle effect editor and attack creator",
            ]}
            screenshots={[
              { url: "/zpscreen6.gif", alt: "rain-battle" },
              { url: "/zpscreen2.png", alt: "talking-to-abel" },
              { url: "/zpscreen3.png", alt: "picking-your-starter" },
              { url: "/zpscreen1.png", alt: "2-v-1" },
              { url: "/zpscreen5.png", alt: "online-mode" },
              { url: "/zpscreen4.gif", alt: "volcano-battle" },
            ]}
          />
          <ReactPlayer
            url="https://www.youtube.com/watch?v=xZjCAs_0-I8"
            style={{ margin: "4rem 0 0 0" }}
          />
          ShapeShip launch trailer.
          <br />
          <br />
          <GameCard
            appIcon="/shapeshipappicon.png"
            title="ShapeShip"
            description="Shape Ship is easy to learn but difficult to master.
It's also a ton of fun!

How far can you guide your ship through the endless void that is space?
Be careful not to crash or you'll have to start again.

Collect Stars and spend them on boosts and shields to help you go further."
            facebookLink="https://www.facebook.com/CalisProjects"
            twitterLink="https://twitter.com/CalisProjects"
            youtubeLink="https://www.youtube.com/channel/UCdTFAAia9DLfMuH2cCdoL0Q"
            facts={[
              "My first project created in Unity game engine",
              "The goal was to learn Unity and implement mobile features such as ad viewing and in-app purchases",
              "Created and completed in just 1 month",
            ]}
            tech={["C#", "Unity", "In-App Purchases", "Unity Ads"]}
          />
        </ColumnContainer>
      </SectionContent>
      <SectionContent
        ref={contactMeRef}
        backgroundColor="#016e9f"
        minHeight="300px"
        color="#E3F4FF"
        padding="2rem 1rem 1rem 1rem"
      >
        <h2>Contact Me</h2>
        <ContactMe />

        {/* Footer */}
        <ColumnContainer
          width="100%"
          justifyContent="center"
          alignItems="center"
          fontColor="white"
          padding="6rem 1rem 0rem 1rem"
        >
          <p>
            Handcrafted by me, Stephen McVicker.
            <br /> Original design in Figma.
            <br /> Created with React, my own custom styled-components, and love
            ❤️. View source on{" "}
            <span
              style={{
                textDecoration: "underline",
                color: "#FC1E56",
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
