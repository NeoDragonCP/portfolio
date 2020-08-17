import React from "react";
import styled from "styled-components";

import ColumnContainer from "../styled-components/ColumnContrainer";

const BaseCard = styled.div`
  width: 90%;
  background-color: white;

  margin: 1rem 0 3rem 0;

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
    border-radius: 10px;
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

  hr.solid {
    border-top: 2px solid #016e9f;
    margin-bottom: 1rem;
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
  padding: 2rem;
  background-color: #016e9f;
  color: white;

  display: flex;
  flex-direction: column;

  justify-content: center;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
    height: 30%;
  }
`;

export default function GameCard(props) {
  const {
    appIcon,
    title,
    description,
    facebookLink,
    twitterLink,
    wikiLink,
    youtubeLink,
    facts,
    tech,
    screenshots,
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
              <ColumnContainer padding="0px 1.2rem 0px 1.2rem">
                <h2>{title}</h2>
                <hr className="solid"></hr>
                <p style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
                  {description}
                </p>

                <p>
                  {/* Conditionally render out links if they were passed */}
                  {twitterLink !== undefined && (
                    <a
                      href={twitterLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  )}

                  {youtubeLink !== undefined && (
                    <a
                      href={youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Youtube
                    </a>
                  )}

                  {facebookLink !== undefined && (
                    <a
                      href={facebookLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  )}

                  {wikiLink !== undefined && (
                    <a
                      href={wikiLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wiki
                    </a>
                  )}
                </p>
                <p style={{ color: "#FF7700", padding: "3rem 0 2rem 0" }}>
                  Note: Game was removed from sale in May 2020.
                </p>
              </ColumnContainer>
            </div>

            {screenshots !== undefined && (
              <React.Fragment>
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
                  {screenshots !== undefined
                    ? screenshots.map((shot) => (
                        <img
                          src={process.env.PUBLIC_URL + shot.url}
                          alt={shot.alt}
                        />
                      ))
                    : ""}
                </div>
              </React.Fragment>
            )}
          </ColumnContainer>
        </GameDetailsSection>

        <FactSection>
          <h3 style={{ color: "#BBE1FA", padding: "0.6rem 0 0.2rem 0" }}>
            Facts
          </h3>
          <ul>
            {facts !== undefined ? facts.map((fact) => <li>{fact}</li>) : ""}
          </ul>
          <h3 style={{ color: "#BBE1FA", padding: "4.6rem 0 0.2rem 0" }}>
            Tech Used
          </h3>
          <ul>{tech !== undefined ? tech.map((t) => <li>{t}</li>) : ""}</ul>
        </FactSection>
      </BaseCard>
    </React.Fragment>
  );
}
