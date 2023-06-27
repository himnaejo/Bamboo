import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase";
import Modal from "component/Modal/Modal";

const Main = () => {
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
        console.log(`${doc.id}=>${doc.data()}`);
        initialTodos.push({ id: doc.id, ...doc.data() });
      });

      // firestore에서 가져온 데이터를 state에 전달
      setBamboos(initialTodos);
    };

    fetchData();
  }, []);

  return (
    <main>
      <article>
        <Modal db={db} bamboos={bamboos} setBamboos={setBamboos} />
        {bamboos.map((bamboo, index) => {
          return (
            <StBambooCard key={index}>
              <p>{bamboo.title}</p>
              <p>{bamboo.contents}</p>
            </StBambooCard>
          );
        })}
      </article>
    </main>
  );
};

const StBambooCard = styled.div`
  margin: 50px;
`;

export default Main;
