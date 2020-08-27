import styled from "styled-components";

const Navbar = styled.div`
  width: 100vw;
  height: 60px;
  z-index: 1000; /*Layered on top of everything */
  background: ${(props) => props.theme.gradientHeader || "#26afed"};
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  position: relative;
  display: flex;
  align-items: center;
  /* flex-end without name in Navbar, space-between if name is in navbar */
  justify-content: flex-end;
  /* My Name */
  > h4 {
    padding-left: 0.5rem;
    color: #bbe1fa;
    font-weight: bold;
    font-size: 24px;
  }

  #nav {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    font-weight: bold;
    font-size: 16px;
    color: white;
    transition: transform 0.2s;
    li {
      padding: 0.3rem;
      margin-right: 1.7rem;
      cursor: pointer;
      transition: all 0.2s;
      :hover {
        color: #e41b4d;
        text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.4);
      }
    }
    /* fake button */
    #contactme-button {
      padding: 0.6rem 1.5rem 0.6rem 1.5rem;
      background-color: #e41b4d;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s;
      :hover {
        color: white;
        filter: brightness(120%);
      }
    }

    #theme-button {
      width: 40px;
      height: 40px;
      background: ${(props) => props.theme.themeSwitcherBG || "black"};
      color: ${(props) => props.theme.themeSwitcherColor || "white"};

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 50vh;
      cursor: pointer;
      transition: all 0.2s;
      :hover {
        filter: brightness(120%);
      }
    }

    #toggle {
      padding-right: 2rem;
    }
    #toggle-emoji {
      position: relative;
      font-size: 1.3rem;
    }

    /* Mobile Scaling */
    @media (max-width: 768px) {
      flex-flow: column nowrap;
      background: ${(props) => props.theme.gradientHeader || "#26afed"};
      border-left: solid 1px
        ${(props) => props.theme.baseColors.blueLight || "#26afed"};
      box-shadow: ${({ open }) =>
        open ? "-2px 0px 10px rgba(255, 255, 255, 0.4);" : ""};
      position: fixed;
      top: 0;
      right: 0;
      width: 300px;
      height: 110%;
      padding-top: 3rem;
      transform: ${({ open }) =>
        open ? "translateX(0%)" : "translateX(100%)"};
      li {
        margin: 1.5rem 1.5rem 1.5rem 0;
        font-size: 1.5rem;
      }
    }
  }

  #darkoverlay {
    @media (max-width: 768px) {
      width: 100vw;
      height: 100vh;
      background-color: ${(props) => props.theme.baseColors.black || "black"};
      z-index: -999;

      position: fixed;
      top: 0;
      left: 0;

      opacity: ${({ open }) => (open ? "60%" : "0")};

      transition: all 0.4s;
    }
  }
`;

export default Navbar;
