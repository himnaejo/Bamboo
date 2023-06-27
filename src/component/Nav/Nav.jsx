import { Link } from "react-router-dom";

import { ReactComponent as HomeIcon } from "../../assets/home-icon.svg";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { ReactComponent as BusinessIcon } from "../../assets/business-icon.svg";
import { ReactComponent as LikeIcon } from "../../assets/like-icon.svg";
import { ReactComponent as DepressedIcon } from "../../assets/depressed-icon.svg";

import { StButton, StAside } from "./StNav";

const Nav = ({ position }) => {
  // switch (position) {
  //   case "left":
  return (
    <StAside f={position}>
      <Link to={"/"}>
        <StButton>
          <HomeIcon />
          HOME
        </StButton>
      </Link>
      <Link to={"/search"}>
        <StButton>
          <SearchIcon />
          검색
        </StButton>
      </Link>
      <Link to={"recommend"}>
        <StButton>
          <LikeIcon />
          추천
        </StButton>
      </Link>
      <Link to={"/share"}>
        <StButton>
          <BusinessIcon />
          공유해요
        </StButton>
      </Link>
      <Link to={"/comm"}>
        <StButton>
          <DepressedIcon />
          억울해요
        </StButton>
      </Link>
    </StAside>
  );
  // case "right":
  //   return <StAside f={position}>false</StAside>;
  // default:
  //   break;
  // }
};

export default Nav;
