import Aside from "component/Aside/Aside";
import Footer from "component/Footer/Footer";
import Header from "component/Header/Header";
import Main from "component/Main/Main";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <Aside />
      <Main />
      <Aside />
      <Footer />
    </div>
  );
};

export default Home;
