import React from "react";
import styled from "styled-components";

import Card from "../styled-components/Card";
import ColumnContainer from "../styled-components/ColumnContrainer";
import RowContainer from "../styled-components/RowContainer";

const BaseCard = styled.div`
  width: 90%;
  background-color: white;

  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(48, 48, 48, 0.2);

  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    width: 99%;
    flex-direction: column;
  }
`;

const GameDetailsSection = styled.div`
  width: 70%;
  height: 100%;

  text-align: left;
  padding: 2rem;

  .topdetails {
    width: 100%;
    padding-left: 2rem;
    color: #4b4b4b;

    display: flex;
    flex-direction: row;

    align-items: center;
    overflow-wrap: break-word;

    a {
      padding: 0 1rem 0 0;
      margin: 0;
      bottom: 0;
    }
  }
  .logo {
    width: 100px;
    height: 100px;
  }

  .screenshots {
    display: flex;
    flex: row;

    overflow-x: auto;

    img {
      padding-right: 2rem;
      padding-bottom: 1rem;
      width: 480px;
      height: 320px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 0 1rem 0;

    .topdetails {
      padding: 0;
      flex-direction: column;
      text-align: center;
    }
  }
`;

const FactSection = styled.div`
  width: 30%;
  background-color: #016e9f;
  color: white;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 30%;
  }
`;

export default function GameCard(props) {
  const {
    appIcon,
    title,
    facebookLink,
    twitterLink,
    wikiLink,
    youtubeLink,
  } = props;

  return (
    <React.Fragment>
      <BaseCard>
        <GameDetailsSection>
          <ColumnContainer width="100%">
            <div className="topdetails">
              <img
                className="logo"
                src={process.env.PUBLIC_URL + appIcon}
                alt="app-icon"
              />
              <ColumnContainer padding="0px 1rem 0px 1rem">
                <h2>{title}</h2>
                <p style={{ paddingBottom: "1rem" }}>
                  A 2D RPG for iOS, Android.
                  <br /> Capture monsters, battle others, and go on an amazing
                  adventure.
                  <br />
                  A great single player story to experience and robust online
                  features, <br />
                  known as the CP Garden, allowing you to interact with a huge
                  community of players
                  <br /> and participate in online trades, battles, and events.
                </p>
                <p>
                  <a
                    href={twitterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>

                  <a
                    href={youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Youtube
                  </a>
                  <a
                    href={facebookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                  <a href={wikiLink} target="_blank" rel="noopener noreferrer">
                    Wiki
                  </a>
                </p>
                <p style={{ color: "#FF7700", padding: "1rem 0 1rem 0" }}>
                  Note: Game was removed from sale in May 2020.
                </p>
              </ColumnContainer>
            </div>
            <p
              style={{
                color: "#26afed",
                textAlign: "center",
                fontSize: "0.8rem",
              }}
            >
              <i>Scroll to view screenshots</i>
            </p>
            <div className="screenshots">
              <img
                src={process.env.PUBLIC_URL + "/zpscreen4.gif"}
                alt="volcano-battle"
              />

              <img
                src={process.env.PUBLIC_URL + "/zpscreen2.png"}
                alt="talking-to-abel"
              />
              <img
                src={process.env.PUBLIC_URL + "/zpscreen3.png"}
                alt="picking-your-starter"
              />
              <img
                src={process.env.PUBLIC_URL + "/zpscreen1.png"}
                alt="2-v-1"
              />
              <img
                src={process.env.PUBLIC_URL + "/zpscreen5.png"}
                alt="online-mode"
              />
            </div>
          </ColumnContainer>
        </GameDetailsSection>

        <FactSection>
          <h3 style={{ color: "#BBE1FA", padding: "0.6rem 0 0.2rem 0" }}>
            Facts
          </h3>
          <p>
            First release: September 2012
            <br />
            Updates and support: For 4 years+
          </p>
          <h3 style={{ color: "#BBE1FA", padding: "0.6rem 0 0.2rem 0" }}>
            Tech Used
          </h3>
          <p>
            Objective-C
            <br />
            PHP + MySQL for online backend service
            <br />
            Xcode
            <br />
            Photoshop
          </p>
        </FactSection>
      </BaseCard>
    </React.Fragment>
  );
}
