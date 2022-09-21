import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";

type Button = {
  text:string,
  path:string,
}

const NavbarButtons = ({btns}: { btns: Button[] }) => {

  return (
    <>
      {btns.map((btn, index) => (
        <Link
          key={index}
          to={btn.path}
          style={{ textDecoration: "none", margin: "5px 0" }}
        >
          <Btn>{btn.text}</Btn>
        </Link>
      ))}
    </>
  );
};

const Btn = styled.button`
  all: unset;
  color: #e4e4e4;
  padding: 5px 0;
  width: 80%;
  font-family: "Mukta";
  font-size: 18px;
  //padding: 5px 0;
  transition: 400ms;
  &:hover {
    color: #949494;
    transform: scale(1.2);
  }
`;
export default NavbarButtons;
