import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Content from "pages/Content";
import Signin from "component/Sign/Signin";
import Signup from "component/Sign/Signup";
import Profile from "pages/Profile";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="content" element={<Content />} />
        <Route path="content/:id" element={<Content />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
