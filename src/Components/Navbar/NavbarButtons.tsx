import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";

type Button = {
  text: string;
  path: string;
};

const NavbarButtons = (props: {
  btns: Button[];
  setShowMenu: Function | null;
}) => {
  const { btns, setShowMenu } = props;

  return (
    <>
      {btns.map((btn, index) => (
        <div key={index}>
          <Link
            to={btn.path}
            style={{ textDecoration: "none", margin: "5px 0", width: "max-content" }}
          >
            <Btn
              onClick={() => {
                if (setShowMenu !== null) {
                  setShowMenu(false);
                }
              }}
            >
              {btn.text}
            </Btn>
          </Link>
        </div>
      ))}
    </>
  );
};

export const Btn = styled.button`
  all: unset;
  color: #e4e4e4;
  padding: 5px;
  cursor: pointer;
  font-family: "Mukta";
  font-size: 18px;
  transition: 400ms;
  &:hover {
    color: #949494;
    transform: scale(1.2);
  }
`;
export default NavbarButtons;
