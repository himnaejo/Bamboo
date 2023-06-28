import { auth } from "modules/firebase";

const UserInfo = () => {
  console.log("🚀 ~ file: Header.jsx:22 ~ logOut ~ auth:", auth.currentUser.accessToken);

  return <div></div>;
};

export default UserInfo;
