import styled from "styled-components";

const Navbar = styled.div`
  width: 100vw;
  height: 60px;
  z-index: 1000; /*Layered on top of everything */

  background: ${(props) =>
    props.theme.headerGradientLight ||
    "#26afed"}; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    ${(props) => props.theme.headerGradientLight},
    ${(props) => props.theme.headerGradientDark}
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    ${(props) => props.theme.headerGradientLight},
    ${(props) => props.theme.headerGradientDark}
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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
        text-shadow: 0px 4px 4px rgba(15, 76, 117, 0.4);
      }
    }

    /* fake button */
    #contactme-button {
      padding: 0.6rem 1.5rem 0.6rem 1.5rem;
      background-color: #e41b4d;
      /*
      border: 2px solid #e41b4d;
      */
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s;

      :hover {
        color: white;
        filter: brightness(120%);

        /*
        background-color: white;
        border: 2px solid #e41b4d;
        color: #e41b4d;
        */
      }
    }

    @media (max-width: 768px) {
      flex-flow: column nowrap;

      background: ${(props) => props.theme.headerGradientDark || "#26afed"};

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
`;

export default Navbar;
