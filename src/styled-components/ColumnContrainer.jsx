import styled from "styled-components";

// ***
// colors from theme variables passed from App.js
// ***

const ColumnContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};

  padding: ${(props) => props.padding || ""};

  position: relative;
  display: flex;
  flex-direction: column;

  align-items: ${(props) => props.alignItems || ""};
  justify-content: ${(props) => props.justifyContent || ""};

  flex-wrap: nowrap;

  text-align: ${(props) => props.textAlign || ""};

  overflow-x: ${(props) => props.overflowX || "hidden"};
  overflow-y: ${(props) => props.overflowY || "auto"};

  > div {
    flex: 0 0 auto;
    /* shorthand for 
    flex-grow 0 
    flex-shrink 0
    flex-basis auto */
  }
`;

export default ColumnContainer;
