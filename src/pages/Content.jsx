import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { collection, getDocs, query } from "firebase/firestore";
import { db, auth } from "modules/firebase";

import UpdateBamboo from "component/Form/UpdateBamboo";

import styled from "styled-components";

const Content = () => {
  const param = useParams();
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

  const bamboo = bamboos.filter(function (element) {
    return element.id === param.id;
  });

  return (
    <StMain>
      {/* useEffect에서 비동기 함수로 인해 임시로 조치 */}
      {bamboo[0] !== undefined && (
        <>
          <UpdateBamboo
            auth={auth}
            db={db}
            bamboos={bamboos}
            setBamboos={setBamboos}
            bamboo={bamboo[0]}
          ></UpdateBamboo>
          <StBambooCard>
            <StSampleProfile></StSampleProfile>
            <StTitle>{bamboo[0].title}</StTitle>
            <StBody>{bamboo[0].contents}</StBody>
            <p>{bamboo[0].userEmail}</p>
          </StBambooCard>
        </>
      )}
    </StMain>
  );
};

const StMain = styled.main`
  display: flex;
  flex-direction: column;

  margin-top: 190px;
`;

const StBambooCard = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(12, 50px);
  grid-template-rows: repeat(12, 50px);

  width: 650px;
  height: 650px;

  margin: 50px;
  padding: 25px;

  background-color: var(--color-main2);
  border-radius: 70px;
`;

const StSampleProfile = styled.p`
  width: 90px;
  height: 90px;

  grid-column: 1/3;
  grid-row: 1/3;

  background-color: #ffffff;
  border-radius: 100%;
`;

const StTitle = styled.h3`
  grid-column: 4/10;
  grid-row: 2/3;

  font-size: 48px;
  transform: translateY(-50%);
`;

const StBody = styled.p`
  width: 100%;
  height: 100%;

  grid-column: 2/12;
  grid-row: 4/12;

  font-size: 48px;
`;

export default Content;
