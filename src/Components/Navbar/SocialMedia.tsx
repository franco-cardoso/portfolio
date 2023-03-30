import styled from "styled-components";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
    return (
        <Container>
            <a className="social-icons" href="https://github.com/franco-cardoso" rel="noreferrer" target={"_blank"}>
                <FaGithub color="#e4e4e4" size={20} aria-label="Github icon" />
            </a>
            <a className="social-icons" href="https://www.linkedin.com/in/franco-cardoso-854442241/" rel="noreferrer" target={"_blank"}>
                <FaLinkedinIn color="#e4e4e4" size={20} aria-label="LinkedIn icon" />
            </a>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export default SocialMedia;
