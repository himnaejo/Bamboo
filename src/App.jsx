import "style/App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Router from "shared/Router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "modules/firebase";
import { currentUser } from "redux/modules/userInfo";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        const { uid, displayName, photoURL } = user;
        dispatch(currentUser({ uid, displayName, photoURL }));
      } else {
      }
      return;
    });
  }, [dispatch]);

  return <Router />;
};

export default App;
