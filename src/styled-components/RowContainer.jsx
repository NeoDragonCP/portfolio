import styled from "styled-components";

// ***
// colors from theme variables passed from App.js
// ***

const RowContainer = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  min-height: min-content;
  background-color: ${(props) => props.backgroundColor || ""};
  color: ${(props) => props.fontColor || "black"};

  padding: ${(props) => props.padding || ""};
  margin: ${(props) => props.margin || ""};

  position: relative;

  display: flex;
  flex-wrap: nowrap;

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
