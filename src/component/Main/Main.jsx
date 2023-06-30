import { useEffect, useState } from "react";

import { collection, getDocs, query } from "firebase/firestore";
import { db, auth } from "modules/firebase";

// import Modal from "component/Modal/Modal";
import InputBamboo from "component/Form/InputBamboo";

import * as St from "./Main.style";

const Main = () => {
  const [bamboos, setBamboos] = useState([]);

  // 유저 정보 리덕스로 전역 관리
  const [userId, setUserId] = useState("");
  const user = auth.currentUser;
  useEffect(() => {
    if (user === null) {
      setUserId("");
    } else {
      setUserId(user.uid);
    }
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      const initialValue = [];

      const q = query(collection(db, "bamboos"));

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(doc => {
        initialValue.push({ id: doc.id, ...doc.data() });
      });

      setBamboos(initialValue);
      console.log("메인", initialValue);
    };

    fetchData();
  }, []);

  return (
    <St.Main>
      {/* 모달 */}
      {/* <Modal></Modal> */}
      <InputBamboo auth={auth} db={db} bamboos={bamboos} setBamboos={setBamboos}></InputBamboo>
      {bamboos.map((bamboo, index) => {
        return (
          <St.BambooCard key={index}>
            <St.SampleProfile></St.SampleProfile>
            <St.Title>{bamboo.title}</St.Title>
            <St.Content>{bamboo.contents}</St.Content>

            {userId === bamboo.uid && (
              <>
                <St.Button></St.Button>
                {/* <button>수정</button> */}
                {/* <button>삭제</button> */}
              </>
            )}
          </St.BambooCard>
        );
      })}
    </St.Main>
  );
};

export default Main;
