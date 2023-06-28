import styled from "styled-components";
import "../../style/App.css";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase";
import { auth } from "../../firebase";
import Modal from "component/Modal/Modal";
import InputBamboo from "component/Form/InputBamboo";

const Main = () => {
  const user = auth.currentUser;
  const [userId, setUserId] = useState("");
  useEffect(() => {
    if (user === null) {
      setUserId("");
    } else {
      setUserId(user.uid);
    }
  }, [user]);
  const [bamboos, setBamboos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // collection 이름이 bamboos인 collection의 모든 document를 가져옵니다.
      const q = query(collection(db, "bamboos"));
      const querySnapshot = await getDocs(q);

      const initialTodos = [];

      // document의 id와 데이터를 initialTodos에 저장합니다.
      // doc.id의 경우 따로 지정하지 않는 한 자동으로 생성되는 id입니다.
      // doc.data()를 실행하면 해당 document의 데이터를 가져올 수 있습니다.
      querySnapshot.forEach(doc => {
        initialTodos.push({ id: doc.id, ...doc.data() });
      });

      // firestore에서 가져온 데이터를 state에 전달
      setBamboos(initialTodos);
    };

    fetchData();
  }, []);

  return (
    <StMain>
      <div>
        <Modal>
          <InputBamboo auth={auth} db={db} bamboos={bamboos} setBamboos={setBamboos}></InputBamboo>
        </Modal>
      </div>
      <article>
        {bamboos.map((bamboo, index) => {
          return (
            <StBambooCard key={index}>
              <div>
                <p>{bamboo.title}</p>
                <p>{bamboo.contents}</p>
              </div>
              {userId === bamboo.uid && (
                <div>
                  <button>수정</button>
                  <button>삭제</button>
                </div>
              )}
              {/* <div>
                <button>수정</button>
                <button>삭제</button>
              </div> */}
            </StBambooCard>
          );
        })}
      </article>
    </StMain>
  );
};

const StMain = styled.div`
  padding: 20px;
  width: auto;
`;

const StBambooCard = styled.div`
  padding: 20px;
  width: 680px;
  height: 678px;
  border-radius: 70px;
  background-color: var(--color-main2);
`;

export default Main;
