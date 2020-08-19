import React from "react";

export default function RightNav(props) {
  // Destructuring props - the passed refs for each section
  const { homeRef, aboutMeRef, webProjectsRef, gamesRef, contactMeRef } = props;

  // Close Nav on click function (resets open state in parent/app.js)
  const { closeNav } = props;

  // Theme changing
  const { switchTheme } = props;

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
      <ul id="nav">
        <li onClick={switchTheme}>Switch Theme</li>
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
