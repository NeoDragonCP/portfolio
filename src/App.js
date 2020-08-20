import React, { useState, useRef } from "react";
import "./App.css"; /* Basic app styling */

import styled, { ThemeProvider } from "styled-components";

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

import ScrollToTopButton from "./site-components/ScrollToTopButton.jsx";

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

/* Themes */
// * * * * *

const themeColors = {
  blueSuperLight: "#E3F4FF",
  blueLight: "#BBE1FA",
  blueMedium: "#26AFED",
  blueDark: "#016E9F",
  blueDark2: "#002837",
  blueDark3: "#01161E",

  redLight: "#E41B4D",
  redDark: "#B83B5E",

  purple: "#6A2C70",
  orange: "#FF7700",

  white: "#FFFFFF",
  gray: "#F2F2F2",
  grayDark: "#BBBBBB",
  black: "#4B4B4B",
};

const themeLight = {
  gradient1: `linear-gradient(
    to right,
    ${themeColors.blueMedium},
    ${themeColors.blueDark});`,
  gradient2: `linear-gradient(
    to right,
    ${themeColors.blueDark},
    ${themeColors.blueDark2});`,

  gradientHeader: `linear-gradient(
    to right,
    ${themeColors.blueMedium},
    ${themeColors.blueDark});`,

  bgMain: `${themeColors.gray}`,
  bgBlueLight: `${themeColors.blueLight}`,
  cardBG: `${themeColors.white}`,
  gameCardBG: `${themeColors.white}`,

  socialIconBG: `${themeColors.blueLight}`,
  socialIconColor: `${themeColors.blueMedium}`,

  fontPrimary: `${themeColors.black}`,
  fontSecondary: `${themeColors.grayDark}`,
  fontInvert: `${themeColors.white}`,

  linkColor: `${themeColors.redLight}`,

  baseColors: themeColors,
};

const themeDark = {
  gradient1: `linear-gradient(
    to right,
    ${themeColors.blueDark},
    ${themeColors.blueDark2});`,

  gradient2: `linear-gradient(
    to right,
    ${themeColors.blueDark2},
    ${themeColors.blueDark3});`,

  gradientHeader: `linear-gradient(
    to right,
    ${themeColors.blueDark2},
    ${themeColors.blueDark3});`,

  bgMain: `${themeColors.blueDark3}`,
  bgBlueLight: `${themeColors.blueDark2}`,
  cardBG: `${themeColors.blueDark3}`,
  gameCardBG: `${themeColors.blueDark2}`,

  socialIconBG: `${themeColors.blueDark2}`,
  socialIconColor: `${themeColors.blueDark}`,

  fontPrimary: `${themeColors.gray}`,
  fontSecondary: `${themeColors.grayDark}`,
  fontInvert: `${themeColors.white}`,

  linkColor: `${themeColors.redLight}`,

  baseColors: themeColors,
};

// * * * * *

function App() {
  // Nav bar state
  const [open, setOpen] = useState(false);

  // Section Refs Navbar will scroll too
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const webProjectsRef = useRef(null);
  const gamesRef = useRef(null);
  const contactMeRef = useRef(null);

  // * * *
  // Theme can be saved to local storage - check if it's already there
  let savedTheme = window.localStorage.getItem("theme") || "light"; // get the string or set "light"
  if (savedTheme === "light") savedTheme = themeLight;
  if (savedTheme === "dark") savedTheme = themeDark;

  // Theme
  const [currentTheme, setTheme] = useState(savedTheme);

  // * * *

  return (
    <ThemeProvider theme={currentTheme}>
      <div className="App" ref={homeRef}>
        <Navbar open={open}>
          <div>
            <RightNav
              theme={currentTheme}
              open={open}
              homeRef={homeRef}
              aboutMeRef={aboutMeRef}
              webProjectsRef={webProjectsRef}
              gamesRef={gamesRef}
              contactMeRef={contactMeRef}
              closeNav={() => setOpen(false)}
              switchTheme={() => {
                let themeUsing;
                if (currentTheme === themeLight) {
                  setTheme(themeDark);
                  themeUsing = "dark";
                } else {
                  setTheme(themeLight);
                  themeUsing = "light";
                }
                // Save which theme using to local storage
                window.localStorage.setItem("theme", themeUsing);
              }}
            />
            <Burger open={open} onClick={() => setOpen(!open)} />
          </div>
        </Navbar>
        <HeaderSection />
        <SectionHeader
          ref={aboutMeRef}
          backgroundColor={currentTheme.bgBlueLight}
          color={currentTheme.baseColors.blueDark}
        >
          About Me
        </SectionHeader>
        <SectionContent
          padding="2rem 1rem 2rem 1rem"
          backgroundColor={currentTheme.bgMain}
          color={currentTheme.fontPrimary}
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
                <br /> 3+ years experience as a UI/UX Developer with modern
                React and JavaScript.
                <br />
                Excellent focus, communication, and ability to learn rapidly.
                <br />
                <span>Born and raised in Dublin, Ireland.</span>
                <br />
                <br />
                <span
                  style={{
                    fontWeight: "bold",
                    color: currentTheme.fontSecondary,
                  }}
                >
                  Calis Projects (logo pictured)
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
                <span
                  style={{
                    fontWeight: "bold",
                    color: currentTheme.fontSecondary,
                  }}
                >
                  Actively looking for work in Front End development
                </span>
                <br />
                My love for visual design, combined with my desire to constantly
                learn and improve has led me to want to work with a passionate
                team in web development. I really enjoy using React library and
                strive to make simple, reusable components, and not pass props
                all over the place. 😆
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
        <SectionHeader
          backgroundColor={currentTheme.bgBlueLight}
          color={currentTheme.fontPrimary}
          ref={webProjectsRef}
        >
          Web Projects
        </SectionHeader>
        <SectionContent
          padding="5rem 0 5rem 0"
          backgroundColor={currentTheme.bgBlueLight}
        >
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
              theme={currentTheme}
            />
            <ProjectCard
              title="Currency Convertor"
              description="External API for fetching price. Uses ES6 Map and Set to store the currency symbols. Dark theme included."
              tags={["#React", "#Fetch"]}
              imageURL="/CurrencyConverterScreenshot.png"
              demoURL="https://neodragoncp.github.io/currency-converter/"
              githubURL="https://github.com/NeoDragonCP/currency-converter"
              theme={currentTheme}
            />
            <ProjectCard
              title="This website."
              description="Custom made, reusable, styled-components. Easily change styles and expand elements using props."
              tags={["#React", "#Components"]}
              imageURL="/WebsiteCodeScreenshot.png"
              demoURL="https://neodragoncp.github.io/portfolio/index.html"
              githubURL="https://github.com/NeoDragonCP/portfolio"
              theme={currentTheme}
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
        <SectionHeader
          backgroundColor={currentTheme.baseColors.blueDark}
          color={currentTheme.bgBlueLight}
          ref={gamesRef}
        >
          Games
        </SectionHeader>
        <SectionContent backgroundColor={currentTheme.bgMain}>
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
              theme={currentTheme}
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
          backgroundColor={currentTheme.gradient1}
          minHeight="300px"
          color={currentTheme.fontInvert}
          padding="2rem 1rem 1rem 1rem"
        >
          <h2>Contact Me</h2>
          <ContactMe theme={currentTheme} />
        </SectionContent>
        <SectionContent backgroundColor={currentTheme.gradient2}>
          {/* Footer */}
          <ColumnContainer
            width="100%"
            padding="1rem"
            justifyContent="center"
            alignItems="center"
            fontColor="white"
          >
            <p>
              Handcrafted by me, Stephen McVicker.
              <br /> Original design in Figma.
              <br /> Created with React, my own custom styled-components, and
              love ❤️. View source on{" "}
              <span
                style={{
                  textDecoration: "underline",
                  color: `${currentTheme.linkColor}`,
                  cursor: "pointer",
                }}
              >
                Github
              </span>
              .
            </p>
          </ColumnContainer>
        </SectionContent>
        <ScrollToTopButton refToJumpTo={homeRef} theme={currentTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
