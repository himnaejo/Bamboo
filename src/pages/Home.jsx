import Aside from "component/Aside/Aside";
import Main from "component/Main/Main";

const Home = () => {
  return (
    <div className="App">
      {/* 왼쪽 사이드 만들기 */}
      <Aside position={"left"} />
      {/* CRUD 구현 */}
      <Main />
      {/* 오른쪽 사이드 만들기 */}
      <Aside />
    </div>
  );
};

export default Home;
