import styled from "styled-components";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import useWindowSize from "../Utility/useWindowSize";

const SocialMedia = () => {
  return (
    <Container>
      <IconWrapper href="/">
        <FaGithub color="#e4e4e4" size={20} />
      </IconWrapper>
      <IconWrapper href="/">
        <FaLinkedinIn color="#e4e4e4" size={20} />
      </IconWrapper>
    </Container>
  );
};

const IconWrapper = styled.a`
    text-decoration: none;
    margin: 5px;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export default SocialMedia;
