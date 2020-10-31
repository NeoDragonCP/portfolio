import React, { useState, useRef } from "react";
import "./App.css"; /* Basic app styling */

import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";

/* Youtube Video Player */
import YoutubeEmbedVideo from "youtube-embed-video";

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
  name: "light",
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

  themeSwitcherColor: `${themeColors.blueDark2}`,
  themeSwitcherBG: `${themeColors.blueMedium}`,

  fontPrimary: `${themeColors.black}`,
  fontSecondary: `${themeColors.grayDark}`,
  fontInvert: `${themeColors.white}`,

  linkColor: `${themeColors.redLight}`,

  baseColors: themeColors,
};

const themeDark = {
  name: "dark",
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

  socialIconBG: `${themeColors.blueDark}`,
  socialIconColor: `${themeColors.blueDark2}`,

  themeSwitcherColor: `${themeColors.blueLight}`,
  themeSwitcherBG: `${themeColors.blueDark3}`,

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
  let themeToUseOnStartUp = themeLight; // default

  if (savedTheme === "light") themeToUseOnStartUp = themeLight;
  if (savedTheme === "dark") themeToUseOnStartUp = themeDark;

  // Theme
  const [currentTheme, setTheme] = useState(themeToUseOnStartUp);

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
            <div id="darkoverlay"></div>
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
              <p
                style={{
                  fontSize: "1.1rem",
                  paddingTop: "3rem",
                  paddingBottom: "4rem",
                }}
              >
                Creative software developer with 8 years of expertise across
                mobile and web games and applications.
                <br /> 3+ years experience as a UI/UX Developer with React, Vue
                and JavaScript.
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
                  Currently working as a Frontend Developer
                </span>
                <br />
                My love for visual design, combined with my desire to constantly
                learn and improve has led me to working with a great Irish
                Fintech company,
                <a
                  style={{ position: "inherit", marginLeft: "0.5rem" }}
                  href="https://bonkers.ie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bonkers.ie
                </a>
                .
                <br />I started in October 2020 with my main tech stack using
                Vue.
              </p>
              <RowContainer
                alignItems="center"
                justifyContent="flex-start"
                overflowX="hidden"
              >
                <motion.div
                  whileHover={{ rotate: 10, y: 10 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/logovue.png"}
                    alt="react-logo"
                    width="80px"
                    height="80px"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ rotate: 180, y: -10, scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/logoreact.png"}
                    alt="react-logo"
                    width="80px"
                    height="80px"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 0.8  }}
                  whileTap={{ scale: 1.1 }}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/logojs.png"}
                    alt="javascript-logo"
                    width="80px"
                    height="80px"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ rotate: -10, y: 6 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/logocss.png"}
                    alt="css-logo"
                    width="80px"
                    height="80px"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/logounity.png"}
                    alt="unity-game-engine-logo"
                    width="80px"
                    height="80px"
                  />
                </motion.div>
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
          padding="2rem 0 5rem 0"
          backgroundColor={currentTheme.bgBlueLight}
        >
          <RowContainer
            padding="2rem 2rem 0.5rem 2rem"
            justifyContent="space-between"
            alignItems="center"
          >
            <ProjectCard
              title="The Random Beer App"
              description="A private project using the BreweryDB API. Fetches a random beer and stores brewery info. Designed with mobile as a focus."
              tags={[
                { value: "#Router", color: "" },
                { value: "#Fetch", color: "" },
                { value: "#FramerMotion", color: "#A826EB" },
              ]}
              imageURL="/BeerScreenshot.png"
              youtubeURL="https://youtu.be/f2kSzna6f7o"
              theme={currentTheme}
            />
            <ProjectCard
              title="Password Generator"
              description="Using styled-components, along with the ability to select custom themes, I wanted to create a React version of a tutorial by Florin Poppin."
              tags={[
                { value: "#React", color: "#4D9BE3" },
                { value: "#Themes", color: "" },
              ]}
              imageURL="/PasswordGeneratorDesktop.png"
              demoURL="https://stephenmcvicker.github.io/password-generator/"
              githubURL="https://github.com/stephenmcvicker/password-generator"
              theme={currentTheme}
            />
            <ProjectCard
              title="Currency Convertor"
              description="External API for fetching price. Uses ES6 Map and Set to store the currency symbols. Dark theme included."
              tags={[
                { value: "#React", color: "#4D9BE3" },
                { value: "#Fetch", color: "" },
              ]}
              imageURL="/CurrencyConverterScreenshot.png"
              demoURL="https://stephenmcvicker.github.io/currency-converter/"
              githubURL="https://github.com/stephenmcvicker/currency-converter"
              theme={currentTheme}
            />
            <ProjectCard
              title="This website"
              description="Custom made, reusable, styled-components. Easily change styles and expand elements using props."
              tags={[
                { value: "#React", color: "#4D9BE3" },
                { value: "#Components", color: "" },
              ]}
              imageURL="/WebsiteCodeScreenshot.png"
              demoURL="https://stephenmcvicker.github.io/portfolio/index.html"
              githubURL="https://github.com/stephenmcvicker/portfolio"
              theme={currentTheme}
            />
          </RowContainer>
          <a
            href="https://github.com/stephenmcvicker"
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
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/XxNpuetG8qI"
              srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/XxNpuetG8qI?autoplay=1><img src=https://img.youtube.com/vi/XxNpuetG8qI/hqdefault.jpg alt='Video ZENFORMS: Protectors Trailer'><span>▶</span></a>"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="ZENFORMS: Protectors Trailer"
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
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/xZjCAs_0-I8"
              srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/xZjCAs_0-I8?autoplay=1><img src=https://img.youtube.com/vi/xZjCAs_0-I8/hqdefault.jpg alt='Video Shapeship Launch Trailer'><span>▶</span></a>"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="Shapeship Launch Trailer"
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
              <a
                href="https://github.com/stephenmcvicker/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                style={{ position: "initial" }}
              >
                Github
              </a>
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
