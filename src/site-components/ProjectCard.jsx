import React from "react";
import styled from "styled-components";

import Button from "../styled-components/Button";
import Card from "../styled-components/Card";
import ColumnContainer from "../styled-components/ColumnContrainer";
import RowContainer from "../styled-components/RowContainer";

/* project images */
import ProjectScreenshotPassword from "../images/PasswordGeneratorDesktop.png";

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
  margin: 0.2rem 0.2rem 0.2rem 0;
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
  padding: 0 0 0.5rem 0.5rem;
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

export default function ProjectCard(props) {
  // Destructuring props
  const { title, description, tags } = props;

  // * * * * *
  // Button presses
  function handleDemoClick() {
    if (props.demoURL !== undefined) {
      openURLIfPossible(props.demoURL);
    } else {
      console.log("Demo URL is undefined");
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
    <React.Fragment>
      <Card width="320px" height="510px" fontColor="#016e9f" padding="0 0 0 0">
        <ProjectScreenshot>
          <img src={ProjectScreenshotPassword} alt="project screenshot" />
        </ProjectScreenshot>
        <ProjectDetailsContainer>
          <h4>{title}</h4>
          <RowContainer>
            {tags !== undefined
              ? tags.map((tag) => <ProjectTag key={tag}>{tag}</ProjectTag>)
              : ""}
          </RowContainer>
          <p>{description}</p>
        </ProjectDetailsContainer>
        <RowContainer justifyContent="space-evenly">
          <Button type="primary" onClick={handleDemoClick}>
            Demo
          </Button>
          <ButtonGithub onClick={handleGithubClick}>
            View On Github
          </ButtonGithub>
        </RowContainer>
      </Card>
    </React.Fragment>
  );
}
