import styled from "styled-components";

// ***
// colors from theme variables passed from App.js
// ***

const Card = styled.div`
  width: ${(props) => props.width || "200px"};
  min-height: ${(props) => props.height || "250px"};
  cursor: ${(props) => props.cursorStyle || "default"};

  padding: ${(props) => props.padding || "0.4rem 0 0 1rem"};
  margin: ${(props) => props.margin || "0.0rem 1rem 1rem 0"};

  background-color: ${(props) => props.backgroundColor || "white"};
  color: ${(props) => props.fontColor || "rgb(33, 33, 33)"};
  border-radius: 6px;

  box-shadow: 0px 4px 4px rgba(48, 48, 48, 0.2);

  overflow: hidden;

  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    /*Show hover effects if clickable / cursor=pointer*/
    filter: ${({ cursorStyle }) =>
      (cursorStyle === "pointer" && "brightness(98%)") || ""};

    box-shadow: ${({ cursorStyle }) =>
      cursorStyle === "pointer" ? "0 6px 12px rgba(0, 0, 0, 0.25)" : ""};
  }
`;

Card.defaultProps = {
  cursorStyle: "default",
};

export default Card;
