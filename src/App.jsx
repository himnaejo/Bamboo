import { onAuthStateChanged } from "firebase/auth";
import { auth } from "modules/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentUser } from "redux/modules/userInfo";
import Router from "shared/Router";
import "style/App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        const { uid, displayName, photoURL } = user;
        dispatch(currentUser({ uid, displayName, photoURL }));
        console.log("유저 정보 변경");
      } else {
        console.log("🚀App.jsx:19 ~ user:", user);
      }
      return;
    });
  }, [dispatch]);

  return <Router />;
};

export default App;
