import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderText>304호 하숙생의 게시판</HeaderText>
      </Link>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  /* border: 1px solid red; */
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: rgb(0 0 0 / 40%) 0px 0px 4px 0px;
  margin: 0 0 40px 0;
  position: sticky;
  top: 0px;

  a {
    text-decoration: none;
    color: black;
  }
`;

const HeaderText = styled.div`
  font-size: 50px;
`;
