import React, { useState, useRef } from "react";
import styled from "styled-components";
import Button from "../styled-components/Button";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

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
  width: 200px;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;

  :disabled {
    background-color: gray;
  }
`;

const LoadingButton = styled(SubmitButton)`
  cursor: default;
  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;

const SucessMessage = styled(motion.div)`
  position: relative;
  width: 50%;
  padding: 4rem 0 4rem 0;
  margin: 5rem 0 5rem 0;

  background-color: ${(props) => props.theme.cardBG || "#88a2ac"};
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(48, 48, 48, 0.2);
  color: ${(props) => props.theme.fontPrimary || "black"};

  perspective: 3000;

  transition: all 0.3s;

  i {
    font-size: 3rem;
    color: #04b07e;
    margin: 0rem 0 2rem 0;
  }

  :hover {
    box-shadow: 0px 8px 20px rgba(255, 255, 255, 0.4);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

function ContactSuccess(props) {
  return (
    <SucessMessage
      animate={{
        scale: [0.5, 1.2, 1],
        opacity: [0, 1, 1],
        rotateX: [-30, -30, 10, 0],
        rotateY: [-30, -30, 10, 0],
      }}
      transition={{ delay: 0, duration: 0.3, ease: "easeIn" }}
      whileHover={{ rotateY: -20, rotateX: -20 }}
      whileTap={{ rotateY: -20, rotateX: -20 }}
    >
      <span>
        <i className="far fa-check-circle"></i>
      </span>
      <h2>Message Sent</h2>
      <p>Thank you for reaching out to me. I'll be in touch shortly.</p>
    </SucessMessage>
  );
}

export default function ContactMe(props) {
  const colorRed = "#FC1E56";
  const colorBlue = "#016e9f";

  const submitButtonRef = useRef(null);

  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  const [messageSentSuccess, setMessageSentSuccess] = useState(false);

  const [submitButtonLoading, setSubmitButtonLoading] = useState(false);

  function checkFormIsValid() {
    // Ignore if no text is in the fields
    if (fullName.length <= 1) return false;
    if (email.length <= 1) return false;
    if (message.length <= 1) return false;

    // Make sure name is just a name and no numbers or strange characters
    if (!fullName.match(/^[ A-Za-z]+$/)) {
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

    // Set the button to loading state
    setSubmitButtonLoading(true);

    // EmailJS
    let template_params = {
      reply_to: `${email}`,
      from_name: `${fullName}`,
      to_name: "Stephen",
      message_html: `${message}`,
    };

    emailjs
      .send(
        "default_service",
        "template_Tx4TTtW7",
        template_params,
        "user_sFnGucXI5lFx4sbHyoaEn"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setMessageSentSuccess(true);
          setSubmitButtonLoading(false);
        },
        (err) => {
          console.log("FAILED...", err);
          setMessageSentSuccess(false);
          setSubmitButtonLoading(false);
        }
      );
  }

  return (
    <Base>
      <p style={{ color: props.theme.fontInvert, marginBottom: "1rem" }}>
        I'm currently open to job offers so get in touch!
        <br />
        Email: mcvickerstephen@gmail.com
      </p>

      {messageSentSuccess === true ? (
        <ContactSuccess />
      ) : (
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
              inputMode="email"
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
          {submitButtonLoading === true ? (
            <LoadingButton backgroundColor={colorRed}>
              <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </LoadingButton>
          ) : (
            <SubmitButton
              backgroundColor={colorRed}
              onClick={handleSubmit}
              ref={submitButtonRef}
            >
              Contact Me
            </SubmitButton>
          )}
        </form>
      )}
    </Base>
  );
}
