import React from "react";

export default function RightNav(props) {
  function clickedHome() {
    console.log("Clicked Home");
  }
  function clickedWebProjects() {
    console.log("Clicked WebProjects");
  }
  function clickedGames() {
    console.log("Clicked Games");
  }
  function clickedSkills() {
    console.log("Clicked Skills");
  }
  function clickedContact() {
    console.log("Clicked Contact");
  }

  return (
    <ul id="nav">
      <li onClick={() => clickedHome()}>Home</li>
      <li onClick={() => clickedWebProjects()}>Web Projects</li>
      <li onClick={() => clickedGames()}>Games</li>
      <li onClick={() => clickedSkills()}>Skills</li>
      <li id="contactme-button" onClick={() => clickedContact()}>
        Contact Me
      </li>
    </ul>
  );
}
