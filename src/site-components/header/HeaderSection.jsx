import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeaderBanner = styled.div`
  position: relative;
  width: 100%;
  height: 740px;
  left: 0px;
  top: 0px;

  background: ${(props) => props.theme.gradientHeader || "#26afed"};

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

const HeaderFlavorText = styled(motion.div)`
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
    font-size: 52px;
    font-weight: bold;
    color: #bbe1fa;
  }

  p {
    /*
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    */

    font-size: 30px;
    line-height: 50px;

    text-shadow: 0px 4px 4px rgba(15, 76, 117, 0.4);
  }

  @media (max-width: 768px) {
    left: 20px;
    top: 50%;
    justify-content: flex-start;
    align-items: flex-start;
    p {
      font-size: 28px;
      line-height: 40px;
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
  background-color: ${(props) => props.theme.socialIconBG || "#26afed"};
  color: ${(props) => props.theme.socialIconColor || "#bbe1fa"};
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
        <motion.div
          animate={{ scale: [0.5, 1.2, 1], opacity: [0, 1, 1] }}
          transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
        >
          <span>Stephen McVicker</span>
        </motion.div>

        <motion.p
          animate={{ scale: [0.5, 1], opacity: [0, 1] }}
          transition={{ delay: 0.5 * 1, duration: 0.2, ease: "easeOut" }}
        >
          UI Developer
        </motion.p>
        <motion.p
          animate={{ scale: [0.5, 1], opacity: [0, 1] }}
          transition={{ delay: 0.5 + 0.2 * 1, duration: 0.2, ease: "easeOut" }}
        >
          Game Designer
        </motion.p>
        <motion.p
          animate={{ scale: [0.5, 1], opacity: [0, 1] }}
          transition={{ delay: 0.5 + 0.2 * 2, duration: 0.2, ease: "easeOut" }}
        >
          Software Engineer
        </motion.p>
      </HeaderFlavorText>
    </HeaderBanner>
  );
}
