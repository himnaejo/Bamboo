import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { collection, getDocs, query } from "firebase/firestore";
import { auth, db } from "modules/firebase";

import InputBamboo from "component/Form/InputBamboo";

import * as St from "./Main.style";

const Main = () => {
  const navigate = useNavigate();
  const [bamboos, setBamboos] = useState([]);

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
      {/* 모달 */}
      {/* <Modal></Modal> */}
      <InputBamboo auth={auth} db={db} bamboos={bamboos} setBamboos={setBamboos}></InputBamboo>
      {bamboos.map((bamboo, index) => {
        return (
          <St.BambooCard key={index}>
            <St.SampleProfile></St.SampleProfile>
            <St.Title>{bamboo.title}</St.Title>
            <St.Content>{bamboo.contents}</St.Content>
            <p>{bamboo.userEmail}</p>
            <St.Button
              onClick={() => {
                navigate(`/content/${bamboo.id}`);
              }}
            ></St.Button>
            {/* {userId === bamboo.uid && (
              <>
                <St.Button></St.Button>
              </>
            )} */}
          </St.BambooCard>
        );
      })}
    </St.Main>
  );
};

export default Main;
