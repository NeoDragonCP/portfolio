import React from "react";
import styled from "styled-components";

const HeaderBanner = styled.div`
  position: relative;
  width: 100%;
  height: 740px;
  left: 0px;
  top: 0px;

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

  @media (max-width: 768px) {
    overflow-x: hidden;
  }
`;

const HeaderImage = styled.div`
  position: absolute;
  width: 460px;
  height: 460px;
  left: 815px;
  top: 50%;
  transform: translateY(-50%);

  border-radius: 50%;

  overflow: hidden;

  /* Reposition on mobile */
  @media (max-width: 768px) {
    left: 45%;
    top: 32%;
  }

  img {
    width: 100%;
    height: 800px;

    /* Fit and position it */
    object-fit: cover;
    object-position: 60% -80px;

    @media (max-width: 768px) {
      object-position: 70% 0;
    }
  }
`;

const HeaderFlavorText = styled.div`
  position: absolute;
  height: 50%;

  left: 150px;
  top: 190px;

  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  span {
    font-size: 48px;
    font-weight: bold;
    color: #bbe1fa;
  }

  p {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    font-size: 36px;
    line-height: 60px;

    text-shadow: 0px 4px 4px rgba(15, 76, 117, 0.4);
  }

  @media (max-width: 768px) {
    left: 20px;
    top: 50%;
    justify-content: flex-start;
    align-items: flex-start;
    p {
      font-size: 30px;
      padding-top: 0.1rem;
      padding-bottom: 0.1rem;
    }
  }
`;

const SocialMediaIcon = styled.div`
  position: relative;

  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #42c3ff;
  color: #bbe1fa;
  font-size: 40px;

  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  left: 886px;
  top: 154px;

  transition: all 0.2s;

  :hover {
    transform: scale(1.1);
    filter: brightness(140%);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  }

  /* Strip the a tag of it's default styling (pass it's color from parent) */
  a {
    color: inherit;
  }

  /* Position of buttons */

  @media (max-width: 768px) {
    left: 54%;
    top: 50px;
  }

  &.social-linkedin {
    left: 820px;
    top: 160px;

    @media (max-width: 768px) {
      left: 44%;
      top: 50px;
    }
  }

  &.social-twitter {
    left: 786px;
    top: 190px;

    @media (max-width: 768px) {
      left: 38%;
      top: 70px;
    }
  }
`;

export default function HeaderSection() {
  return (
    <HeaderBanner>
      <HeaderImage>
        <img src={process.env.PUBLIC_URL + "/Me2.jpg"} alt="profile-pic" />
      </HeaderImage>
      <SocialMediaIcon>
        {/* using target=_blank without rel="noopener noreferrer" gives a security warning */}
        <a
          href="https://github.com/NeoDragonCP"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" />
        </a>
      </SocialMediaIcon>
      <SocialMediaIcon className="social-linkedin">
        <a
          href="https://www.linkedin.com/in/stephen-mcvicker-739362180/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </SocialMediaIcon>
      <SocialMediaIcon className="social-twitter">
        <a
          href="https://twitter.com/stephenmcvicker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </SocialMediaIcon>
      <HeaderFlavorText>
        <span>Stephen McVicker</span>
        <p>
          UI Developer
          <br />
          Game Designer
          <br />
          Software Engineer
        </p>
      </HeaderFlavorText>
    </HeaderBanner>
  );
}
