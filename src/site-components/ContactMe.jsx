import React, { useState, useRef } from "react";
import styled from "styled-components";
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
    margin: 2rem 0 2rem 0;
    background-color: ${(props) => props.theme.cardBG || "#88a2ac"};
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
    color: #04b07e;
    font-size: 0.8rem;
    transform: translateY(-2rem);
  }
  input:invalid ~ span,
  textarea:invalid ~ span {
    color: ${(props) => props.colorRed || "red"};
  }
`;

const SubmitButton = styled(Button)`
  :disabled {
    background-color: gray;
  }
`;

export default function ContactMe(props) {
  const colorRed = "#FC1E56";
  const colorBlue = "#016e9f";

  const submitButtonRef = useRef(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  function checkFormIsValid() {
    // Ignore if no text is in the fields
    if (fullName.length <= 1) return false;
    if (email.length <= 1) return false;
    if (message.length <= 1) return false;

    // Make sure name is just a name and no numbers or strange characters
    if (!fullName.match(/^[a-zA-Z]+$/)) {
      console.log("Error: Name must be only letters");
      return false;
    }

    // Now check email
    let lastAtPos = email.lastIndexOf("@");
    let lastDotPos = email.lastIndexOf(".");
    if (
      !(
        lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        email.indexOf("@@") === -1 &&
        lastDotPos > 2 &&
        email.length - lastDotPos > 2
      )
    ) {
      console.log("Error: Not a valid Email");
      return false;
    }

    // if made it this far, form is valid
    setFormIsValid(true);

    return true;
  }

  function isFormValid() {
    let isFormValid = checkFormIsValid();
    setFormIsValid(isFormValid);
    if (isFormValid === true) {
      submitButtonRef.current.removeAttribute("disabled");
    } else {
      submitButtonRef.current.setAttribute("disabled", true);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (checkFormIsValid() === false) {
      console.log("Form is invalid");
      return;
    }

    // Organize the data to an object
    let dataToSubmit = { fullName: fullName, email: email, message: message };
    console.log(dataToSubmit);
  }

  return (
    <Base>
      <p style={{ color: props.theme.fontInvert, marginBottom: "1rem" }}>
        I'm currently open to job offers so get in touch!
        <br />
        Email: mcvickerstephen@gmail.com
      </p>

      <form>
        <h3>Send Message</h3>
        <InputBox colorBlue={colorBlue} colorRed={colorRed}>
          <input
            type="text"
            required="required"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              isFormValid();
            }}
          />
          <span>Full Name</span>
        </InputBox>
        <InputBox colorBlue={colorBlue} colorRed={colorRed}>
          <input
            type="email"
            required="required"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              isFormValid();
            }}
          />
          <span>Email</span>
        </InputBox>
        <InputBox colorBlue={colorBlue} colorRed={colorRed}>
          <textarea
            required="required"
            rows="5"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              isFormValid();
            }}
          />
          <span>Type your message....</span>
        </InputBox>
        <SubmitButton
          backgroundColor={colorRed}
          onClick={handleSubmit}
          ref={submitButtonRef}
        >
          Contact Me
        </SubmitButton>
      </form>
    </Base>
  );
}
