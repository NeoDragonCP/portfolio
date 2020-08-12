import React from "react";

export default function RightNav(props) {
  // Destructuring props - the passed refs for each section
  const { homeRef, aboutMeRef, webProjectsRef, gamesRef, contactMeRef } = props;

  // Jump to ref
  function handleScrollToRef(ref) {
    window.scrollTo(0, ref.current.offsetTop);
  }

  return (
    <ul id="nav">
      <li onClick={handleScrollToRef.bind(this, homeRef)}>Home</li>
      <li onClick={handleScrollToRef.bind(this, aboutMeRef)}>About Me</li>
      <li oonClick={handleScrollToRef.bind(this, webProjectsRef)}>
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
  );
}
