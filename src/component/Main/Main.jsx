import * as St from "./Main.style";
import { useEffect, useState } from "react";
import { db } from "modules/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import { Button } from "component/Button/Button.style";
import PostModal from "component/Modal/PostModal";
import Post from "component/Post/Post";

const Main = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const openModal = () => {
    SetIsOpen(true);
  };

  const [bamboos, setBamboos] = useState([]);
  console.log("🚀 ~ file: Main.jsx:16 ~ Main ~ bamboos:", bamboos);
  useEffect(() => {
    const fetchData = async () => {
      const initialValue = [];

      const q = query(collection(db, "bamboos"));

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(doc => {
        initialValue.push({ id: doc.id, ...doc.data() });
      });

      setBamboos(initialValue);
    };

    fetchData();
  }, []);

  return (
    <St.Main>
      <Button position={"main"} onClick={openModal}>
        작성하기
      </Button>
      {isOpen && <PostModal bamboos={bamboos} setBamboos={setBamboos} setIsOpen={SetIsOpen} />}

      {bamboos.map(bamboo => (
        <Post
          key={bamboo.id}
          title={bamboo.title}
          content={bamboo.content}
          contentId={bamboo.id}
          uid={bamboo.uid}
          displayName={bamboo.displayName}
          photoURL={bamboo.photoURL}
        />
      ))}
    </St.Main>
  );
};

export default Main;
