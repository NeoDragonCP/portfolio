import React, { useEffect, useRef } from "react";
import ReactTooltip from "react-tooltip";

export default function RightNav(props) {
  // Destructuring props - the passed refs for each section
  const { homeRef, aboutMeRef, webProjectsRef, gamesRef, contactMeRef } = props;

  // Close Nav on click function (resets open state in parent/app.js)
  const { open, closeNav } = props;

  // Theme changing
  const { switchTheme } = props;

  // Ref to the UL container
  const container = useRef(null);

  // Allow for outside click
  useEffect(() => {
    function handleOutsideClick(event) {
      if (!container.current.contains(event.target)) {
        if (!open) return;
        closeNav();
      }
    }

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [open, container, closeNav]); // add in the dependencies

  // Jump to ref
  function handleScrollToRef(ref) {
    const scrollOptions = {
      top: ref.current.offsetTop,
      behavior: "smooth",
    }; // for smooth scrolling
    window.scroll(scrollOptions);

    closeNav();
  }

  return (
    <React.Fragment>
      <ReactTooltip />
      <ul id="nav" ref={container}>
        <li
          id="theme-button"
          onClick={switchTheme}
          data-tip="Toggle Theme"
          data-place="left"
        >
          {props.theme.name === "light" ? (
            <i className="fas fa-moon"></i>
          ) : (
            <i className="fas fa-sun"></i>
          )}
        </li>
        <li onClick={handleScrollToRef.bind(this, homeRef)}>Home</li>
        <li onClick={handleScrollToRef.bind(this, aboutMeRef)}>About Me</li>
        <li onClick={handleScrollToRef.bind(this, webProjectsRef)}>
          Web Projects
        </li>
        <li onClick={handleScrollToRef.bind(this, gamesRef)}>Games</li>
        <li
          id="contactme-button"
          onClick={handleScrollToRef.bind(this, contactMeRef)}
        >
          Contact Me
        </li>
      </ul>
    </React.Fragment>
  );
}
