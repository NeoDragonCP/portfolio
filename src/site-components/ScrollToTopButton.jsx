import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ScrollButton = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;

  width: ${(props) => props.size || "60px"};
  height: ${(props) => props.size || "60px"};
  border-radius: 50%;

  background-color: ${(props) => props.backgroundColor};
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  z-index: 1000;

  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  opacity: 0.5;

  :hover {
    opacity: 1;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default function ScrollToTopButton(props) {
  const [showScroll, setShowScroll] = useState(false);
  const { refToJumpTo } = props;

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);

  // Jump to ref
  function handleScrollToTop() {
    const scrollOptions = {
      top: refToJumpTo.current.offsetTop,
      behavior: "smooth",
    }; // for smooth scrolling
    window.scroll(scrollOptions);
  }

  // Ignore/don't render if showScroll is false
  if (showScroll === false) return null;

  // if true, render the button
  return (
    <ScrollButton
      size="50px"
      backgroundColor={props.theme.baseColors.blueDark}
      onClick={handleScrollToTop}
      aria-label="scroll to top"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.7 }}
    >
      <i className="fas fa-arrow-up"></i>
    </ScrollButton>
  );
}
