import Aside from "component/Aside/Aside";
import Header from "component/Header/Header";
import Main from "component/Main/Main";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <Aside />
      <Main />
      <Aside />
    </div>
  );
};

export default Home;
