import styled from "styled-components";

// ***
// colors from theme variables passed from App.js
// ***

const RowContainer = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || ""};
  min-height: min-content;
  background-color: ${(props) => props.backgroundColor || ""};
  color: ${(props) => props.fontColor || "black"};

  padding: ${(props) => props.padding || ""};
  margin: ${(props) => props.margin || ""};

  position: ${(props) => props.position || "relative"};
  bottom: ${(props) => props.bottom || ""};

  display: flex;
  flex-wrap: nowrap;
  flex: 1, 1, 0;

  align-items: ${(props) => props.alignItems || ""};
  justify-content: ${(props) => props.justifyContent || ""};

  overflow-x: auto;
  overflow-y: hidden;

  /* All children keep their size */
  > * {
    flex: 0 0 auto;
    /* shorthand for 
    flex-grow 0 
    flex-shrink 0
    flex-basis auto */
  }

  /* Needed to keep padding on X overflow, right-side */
  > div:last-child::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 2rem;
    display: inline-block;
    margin-left: 2rem;
  }
`;

export default RowContainer;
