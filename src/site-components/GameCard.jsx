import React from "react";
import styled from "styled-components";

import Card from "../styled-components/Card";
import ColumnContainer from "../styled-components/ColumnContrainer";
import RowContainer from "../styled-components/RowContainer";

const BaseCard = styled.div`
  width: 90%;
  height: 540px;
  background-color: white;

  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(48, 48, 48, 0.2);
`;

const GameDetailsSection = styled.div`
  width: 70%;
  height: 100%;

  text-align: left;
  padding: 2rem;

  .topdetails {
    padding-left: 2rem;
    color: #4b4b4b;
  }
  .logo {
    width: 100px;
    height: 100px;
  }
`;

const FactSection = styled.div`
  width: 30%;
  height: 100%;
  background-color: green;
`;

export default function GameCard(props) {
  return (
    <React.Fragment>
      <BaseCard>
        <RowContainer width="100%" height="100%">
          <GameDetailsSection>
            <ColumnContainer width="100%">
              <RowContainer className="topdetails" width="100%">
                <img
                  className="logo"
                  src={process.env.PUBLIC_URL + "/zenformsappicon.png"}
                  alt="app-icon"
                />
                <ColumnContainer padding="0px 0px 0px 1rem">
                  <h2>ZENFORMS: Protectors</h2>
                  <p>
                    A 2D RPG for iOS, Android.
                    <br /> Capture monsters, battle others, and go on an amazing
                    adventure.
                  </p>
                </ColumnContainer>
              </RowContainer>
            </ColumnContainer>
          </GameDetailsSection>

          <FactSection />
        </RowContainer>
      </BaseCard>
    </React.Fragment>
  );
}
