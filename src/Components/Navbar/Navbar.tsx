import { motion } from "framer-motion";
import styled from "styled-components";
import NavbarButtons from "./NavbarButtons";
import SocialMedia from "./SocialMedia";

const navbar = () => {
  return (
    <motion.div style={{ position:'relative' }} initial={{ left:-600 }} animate={{ left:0 }} transition={{ duration:1.2 }}>
      <Container>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          something
        </div>
        <NavbarButtons
          btns={[
            { text: "About", path: "/portfolio" },
            { text: "Web Apps Portfolio", path: "/portfolio" },
            { text: "Work", path: "/portfolio" },
            { text: "Contact", path: "/portfolio/contact" },
          ]}
        />
        <SocialMedia />
      </Container>
    </motion.div>
  );
};

const Container = styled.div`
  background-color: rgb(2, 3, 3);
  box-shadow: 1px 1px 10px 10px rgb(2, 3, 3, 0.5);
  display: grid;
  grid-template-rows: 10% 80% 10%;
  width: 100%;
  height: 100%;
`;

export default navbar;
