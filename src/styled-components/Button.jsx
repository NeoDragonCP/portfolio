import styled from "styled-components";

// ***
// colors from theme variables passed from App.js
// ***

const Button = styled.button`
  width: ${(props) => props.width || ""};

  border: none;
  color: white;

  display: inline-block;

  /* if disabled, change cursor/fontcolor */
  cursor: ${({ type }) => (type === "disabled" && "default") || "pointer"};
  color: ${({ type }) =>
    (type === "disabled" && "rgb(220,220,220)") || "white"};

  margin: ${(props) => props.margin};
  padding: 12px 18px;
  border-radius: 6px;
  background-color: #016e9f; /* default/fallback */

  /* Theme based colors */
  background-color: ${(props) =>
    props.type === "primary" ? props.theme.colorPrimary : ""};
  background-color: ${(props) =>
    props.type === "secondary" ? props.theme.colorSecondary : ""};
  background-color: ${(props) =>
    props.type === "warning" ? props.theme.colorWarning : ""};
  background-color: ${(props) =>
    props.type === "disabled" ? props.theme.colorDisabled : ""};

  background-color: ${(props) => props.backgroundColor};

  color: ${(props) =>
    props.type === "primary" ? props.theme.buttonFontColorPrimary : ""};
  color: ${(props) =>
    props.type === "secondary" ? props.theme.buttonFontColorSecondary : ""};
  color: ${(props) =>
    props.type === "warning" ? props.theme.buttonFontColorWarning : ""};

  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;

  outline: none;

  transition: all 0.3s ease;

  > i {
    margin-right: 0.5rem;
  }

  :hover {
    /* no hover effect for disabled button */
    /* different brightness for secondary (weaker) */

    filter: ${(props) => (props.type === "disabled" ? "" : "brightness(120%)")};
  }
`;

export default Button;
