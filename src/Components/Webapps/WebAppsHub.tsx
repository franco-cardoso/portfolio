import styled from "styled-components";
import { motion } from "framer-motion";
import "./WebApps.css";
import Wbapp from "./Wbapp";

const WebApps = () => {
  return (
    <div className="container">
      <a href="https://franco-cardoso.github.io/react-group-project/#/home">
        <Wbapp
          img="https://raw.githubusercontent.com/franco-cardoso/portfolio/main/src/Assets/wbappbakery.webp"
          title='"Premium Bakery" React Project'
          desc="An online bakery store app, made for a group project"
        />
      </a>
    </div>
  );
};

export default WebApps;
