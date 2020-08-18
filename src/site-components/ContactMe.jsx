import React from "react";
import styled from "styled-components";

import ColumnContainer from "../styled-components/ColumnContrainer";
import RowContainer from "../styled-components/RowContainer";
import Button from "../styled-components/Button";

const Base = styled.div`
  width: 100%;
  height: 100%;

  margin: 4rem 1rem 4rem 1rem;

  color: white;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;

    margin: 4rem 1rem 0rem 1rem;
  }

  form {
    width: 50%;
    padding: 2rem;
    background-color: #88a2ac;
    border-radius: 16px;
    box-shadow: 0px 4px 4px rgba(48, 48, 48, 0.2);

    text-align: left;

    @media (max-width: 768px) {
      width: 98%;
    }

    > h3 {
      color: ${(props) => props.colorRed || "#FC1E56"};
    }
  }
`;

const InputBox = styled.div`
  position: relative;
  width: 100%;
  margin-top: 1rem;

  input,
  textarea {
    width: 100%;
    padding: 0.5rem 0 0.5rem 0.3rem;
    margin: 1rem 0;
    border: none;
    border-bottom: 2px solid ${(props) => props.colorBlue || "yellow"};
    outline: none;
    resize: none;

    font-size: 1.2rem;
    color: #4b4b4b;
  }

  span {
    position: absolute;
    left: 0;
    padding: 0.5rem 0;
    margin: 1rem 0 0 0.2rem;
    pointer-events: none;
    transition: all 0.3s;

    color: ${(props) => props.colorBlue};
  }

  input:focus ~ span,
  input:valid ~ span,
  textarea:focus ~ span,
  textarea:valid ~ span {
    color: white;
    font-size: 0.8rem;
    transform: translateY(-2rem);
  }
`;

export default function ContactMe() {
  const colorRed = "#FC1E56";
  const colorBlue = "#016e9f";

  return (
    <Base>
      <p style={{ color: "#bbe1fa", marginBottom: "1rem" }}>
        I'm currently open to job offers so get in touch!
        <br />
        Email: mcvickerstephen@gmail.com
      </p>

      <form>
        <h3>Send Message</h3>
        <InputBox colorBlue={colorBlue} colorRed={colorRed}>
          <input type="text" required="required" />
          <span>Full Name</span>
        </InputBox>
        <InputBox colorBlue={colorBlue} colorRed={colorRed}>
          <input type="text" required="required" />
          <span>Email</span>
        </InputBox>
        <InputBox colorBlue={colorBlue} colorRed={colorRed}>
          <textarea required="required" rows="5" />
          <span>Type your message....</span>
        </InputBox>
        <Button backgroundColor={colorRed}>Contact Me</Button>
      </form>
    </Base>
  );
}
