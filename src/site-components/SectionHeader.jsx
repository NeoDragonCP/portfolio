import styled from "styled-components";

const SectionHeader = styled.div`
  width: 100%;
  padding: 10px 0 10px 0;

  background-color: ${(props) => (props.invert ? "#0f4c75" : "#bbe1fa")};
  color: ${(props) => (props.invert ? "#bbe1fa" : "#0f4c75")};

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  font-size: 22px;
`;

export default SectionHeader;
