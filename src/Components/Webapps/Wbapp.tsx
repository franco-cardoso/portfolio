import styled from "styled-components";
import { motion } from "framer-motion";

const Wbapp = (props: { img: string; title: string; subTitle: string; desc: string }) => {
  const { img, title,subTitle , desc } = props;

  return (
    <MainContainer className="mainContainer" img={img}>
      <div className="textWrapperWb">
        <div>
          <h1 className="appTitle">{title}</h1>
          <h2 className="appSub">{subTitle}</h2>
          <p className="appDesc">{desc}</p>
        </div>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled(motion.div)<{ img: string }>`
  // height: 300px;
  width: 100%;
  background-image: linear-gradient(
      270deg,
      rgba(0, 0, 0, 1) 18%,
      rgba(0, 0, 0, 0.35898109243697474) 100%
    ),
    url(${(props) => props.img});
  background-size: 100%;
  background-position: center; 
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 3px;
  transition: 1s;
  &:hover {
  background-size: 103%;
    backdrop-filter: brightness(150%);
  }
`;

export default Wbapp;
