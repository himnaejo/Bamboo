import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Content from "pages/Content";
import Profile from "pages/Profile";
import Search from "pages/Search";
import Recommend from "pages/Recommend";
import Share from "pages/Share";
import Community from "pages/Community";

import Header from "component/Header/Header";
import Nav from "component/Nav/Nav";

import Signin from "component/Sign/Signin";
import Signup from "component/Sign/Signup";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="content/:id" element={<Content />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="search/:prams" element={<Search />} /> {/* 검색 */}
        <Route path="recommend" element={<Recommend />} /> {/* 추천 */}
        <Route path="share" element={<Share />} /> {/* 공유해요 */}
        <Route path="comm" element={<Community />} /> {/* 억울해요 */}
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
