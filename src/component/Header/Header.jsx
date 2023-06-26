import { styled } from "styled-components";
import "style/color.css";
import bamboo_logo from "asset/bamboo_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StHeader>
      <div>
        <Logo src={bamboo_logo} alt="로고이미지" />
        <h1>BAMBOO</h1>
      </div>
      <Link to={"signin"}>
        <Btn>로그인</Btn>
      </Link>
    </StHeader>
  );
};

export default Header;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 5px;
`;

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-main3);
  color: white;
  padding: 20px;
`;

const Btn = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 5px;
  background-color: var(--color-main1);
`;
