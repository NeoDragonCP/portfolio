import React from "react";
import styled from "styled-components";

import Button from "../styled-components/Button";
import Card from "../styled-components/Card";
import ColumnContainer from "../styled-components/ColumnContrainer";
import RowContainer from "../styled-components/RowContainer";

const BaseDiv = styled.div`
  position: relative;
  transition: all 0.3s;

  :hover {
    transform: translateY(-1rem) scale(1.05);

    .card {
      -webkit-box-shadow: 0px 10px 17px 0px rgba(38, 175, 237, 0.3);
      -moz-box-shadow: 0px 10px 17px 0px rgba(38, 175, 237, 0.3);
      box-shadow: 0px 10px 17px 0px rgba(38, 175, 237, 0.3);
    }

    h4 {
      background: linear-gradient(to right, #26afed, #016e9f);
      text-shadow: none;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

const ProjectScreenshot = styled.div`
  width: 100%;
  height: 270px;

  background-color: #016e9f; /* fall back */
  background: linear-gradient(to right, #26afed, #016e9f);

  position: relative;
  top: 0;
  left: 0;

  img {
    width: 100%;
    height: 100%;

    /* Fit and position it */
    object-fit: cover;
    object-position: 60% 0px;
  }
`;

const ProjectTag = styled.div`
  margin: 0.5rem 0.3rem 0.5rem 0;
  padding: 4px 8px 4px 8px;

  background-color: #b83b5e;
  color: white;
  border-radius: 50vh;
  font-size: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectDetailsContainer = styled(ColumnContainer)`
  margin-top: 1rem;
  padding: 0 0.5rem 0.5rem 0.5rem;
  text-align: left;
  h4 {
    font-size: 24px;
  }
  p {
    margin-bottom: 1rem;
    height: 80px;
  }
`;

const ButtonGithub = styled(Button)`
  background-color: transparent;
  border: 2px solid #6a2c70;
  color: #6a2c70;

  :hover {
    filter: brightness(140%);
  }
`;

const ButtonYoutube = styled(Button)`
  background-color: transparent;
  border: 2px solid #ec0101;
  color: #ec0101;

  :hover {
    filter: brightness(140%);
  }
`;

export default function ProjectCard(props) {
  // Destructuring props
  const { title, description, tags, imageURL } = props;

  // * * * * *
  // Button presses
  function handleDemoClick() {
    if (props.demoURL !== undefined) {
      openURLIfPossible(props.demoURL);
    } else {
      console.log("Demo URL is undefined, checking if Youtube URL was passed");

      if (props.youtubeURL) {
        openURLIfPossible(props.youtubeURL);
      }
    }
  }

  function handleGithubClick() {
    if (props.githubURL !== undefined) {
      openURLIfPossible(props.githubURL);
    } else {
      console.log("View On Github URL is undefined");
    }
  }

  function openURLIfPossible(urlToOpen) {
    if (urlToOpen.length >= 1) {
      window.open(urlToOpen, "_blank");
    } else {
      console.log("URL to open has a length of 0.");
    }
  }

  // * * * * *

  return (
    <BaseDiv>
      <Card
        width="340px"
        height="570px"
        fontColor="#016e9f"
        padding="0.5rem"
        backgroundColor={props.theme.cardBG}
        className="card"
      >
        <ProjectScreenshot>
          <img src={process.env.PUBLIC_URL + imageURL} alt="screenshot" />
        </ProjectScreenshot>
        <ProjectDetailsContainer>
          <h4>{title}</h4>
          <RowContainer>
            {tags !== undefined
              ? tags.map((tag) => <ProjectTag key={tag}>{tag}</ProjectTag>)
              : ""}
          </RowContainer>
          <p style={{ display: "flex", flex: "1,1,0", marginBottom: "1rem" }}>
            {description}
          </p>
        </ProjectDetailsContainer>
        <RowContainer bottom="-30px" justifyContent="space-evenly">
          {props.demoURL ? (
            <Button type="primary" onClick={handleDemoClick}>
              Demo
            </Button>
          ) : (
            <React.Fragment />
          )}
          {props.youtubeURL ? (
            <ButtonYoutube onClick={handleDemoClick}>Video</ButtonYoutube>
          ) : (
            <React.Fragment />
          )}
          {props.githubURL ? (
            <ButtonGithub onClick={handleGithubClick}>
              View On Github
            </ButtonGithub>
          ) : (
            <React.Fragment />
          )}
        </RowContainer>
      </Card>
    </BaseDiv>
  );
}
