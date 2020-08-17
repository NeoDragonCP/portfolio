import styled from "styled-components";

const SectionContent = styled.div`
  position: relative;
  width: 100%;
  min-height: ${(props) => props.minHeight || ""};
  padding: ${(props) => props.padding || ""};
  background: ${(props) => props.backgroundColor || ""};

  color: ${(props) => props.color};

  text-align: ${(props) => props.textAlign || "center"};

  display: flex;
  flex-direction: ${(props) => (props.flexRow ? "row" : "column")};
  align-items: center;
  justify-content: ${(props) => props.justifyContent || "center"};

  font-size: 16px;

  a {
    position: relative;
    bottom: -30px;

    color: #e41b4d;
    font-size: 18px;
  }

  span {
    color: #4286f4;
  }
`;

export default SectionContent;
