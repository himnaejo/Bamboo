import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "component/Header/Header";
import Nav from "component/Nav/Nav";
import Main from "component/Main/Main";
import Content from "pages/Content";
import Profile from "pages/Profile";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="content/:contentId" element={<Content />} />
        <Route path="profile/:uid" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
