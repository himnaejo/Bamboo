import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "component/Header/Header";
import Nav from "component/Nav/Nav";
import Main from "component/Main/Main";
import Content from "pages/Content";
import Profile from "pages/Profile";
import Search from "pages/Search";
import Recommend from "pages/Recommend";
import Share from "pages/Share";
import Community from "pages/Community";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="content/:contentId" element={<Content />} />
        <Route path="profile/:uid" element={<Profile />} />
        <Route path="search/:prams" element={<Search />} /> {/* 검색 */}
        <Route path="recommend" element={<Recommend />} /> {/* 추천 */}
        <Route path="share" element={<Share />} /> {/* 공유해요 */}
        <Route path="comm" element={<Community />} /> {/* 억울해요 */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
