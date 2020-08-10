import React from "react";

import styled from "styled-components";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 14px;
  right: 20px;

  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: white;
    border-radius: 50vh; /* perfectly round corners */

    box-shadow: 0px 4px 4px rgba(48, 48, 48, 0.6);

    /*animation */
    transform-origin: 1px;
    transition: transform 0.2s;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }

    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export default function Burger(props) {
  return (
    <StyledBurger open={props.open} onClick={props.onClick}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}
