import styled from "styled-components";
import { motion } from "framer-motion";

const Wbapp = (props: { img: string; title: string; desc: string }) => {
  const { img, title, desc } = props;

  return (
    <MainContainer className="mainContainer" img={img}>
      <div className="textWrapperWb">
        <div>
          <h1 className="appTitle">{title}</h1>
          <p className="appDesc">{desc}</p>
        </div>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled(motion.div)<{ img: string }>`
  height: 300px;
  width: 100%;
  background-image: linear-gradient(
      270deg,
      rgba(0, 0, 0, 1) 18%,
      rgba(0, 0, 0, 0.35898109243697474) 100%
    ),
    url(${(props) => props.img});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 3px;
  transition: 1s;
  &:hover {
    translate: 60px;
    scale: 1.02;
    backdrop-filter: brightness(150%);
  }
`;

export default Wbapp;
