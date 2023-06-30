import * as St from "./Nav.style";
import { Link } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/home-icon.svg";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { ReactComponent as BusinessIcon } from "../../assets/business-icon.svg";
import { ReactComponent as LikeIcon } from "../../assets/like-icon.svg";
import { ReactComponent as DepressedIcon } from "../../assets/depressed-icon.svg";

const Nav = () => {
  return (
    <St.Nav>
      <Link to={"/"}>
        <St.Button>
          <HomeIcon />
          HOME
        </St.Button>
      </Link>
      <Link to={"/search"}>
        <St.Button>
          <SearchIcon />
          검색
        </St.Button>
      </Link>
      <Link to={"recommend"}>
        <St.Button>
          <LikeIcon />
          추천
        </St.Button>
      </Link>
      <Link to={"/share"}>
        <St.Button>
          <BusinessIcon />
          공유해요
        </St.Button>
      </Link>
      <Link to={"/comm"}>
        <St.Button>
          <DepressedIcon />
          억울해요
        </St.Button>
      </Link>
    </St.Nav>
  );
};

export default Nav;
