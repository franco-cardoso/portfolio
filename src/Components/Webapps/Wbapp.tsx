import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";

const Wbapp = (props: { img: string; title: string; desc: string }) => {
  const { img, title, desc } = props;
  const [xPos, setXPOS] = useState(0);

  return (
    <MainContainer
      img={img}
      whileHover={{ x: "30px" }}
      transition={{ duration: 0.5 }}
      onClick={() => setXPOS(300)}
      animate={{ x: `${xPos}px` }}
    >
      <div>
        <h1 className="appTitle">{title}</h1>
        <p className="appDesc">{desc}</p>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled(motion.div)<{ img: string }>`
  height: 300px;
  width: 100%;
  background-image: linear-gradient(
      270deg,
      rgba(0, 0, 0, 1) 9%,
      rgba(0, 0, 0, 0.35898109243697474) 100%
    ),
    url(${(props) => props.img});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 3px;
`;

export default Wbapp;
