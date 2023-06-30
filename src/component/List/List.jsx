import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { collection, getDocs, query, deleteDoc, doc } from "firebase/firestore";
import { db } from "modules/firebase";

const List = ({ feeds, setFeeds }) => {
  // 피드 불러오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "bamboos"));
        const querySnapshot = await getDocs(q);

        const initialFeed = [];

        querySnapshot.forEach(doc => {
          initialFeed.push({ id: doc.id, ...doc.data() });
        });

        setFeeds(initialFeed);
      } catch (error) {
        console.error("데이터 가져오기 중 오류가 발생했습니다: ", error);
      }
    };

    fetchData();
  }, [setFeeds]);

  if (feeds === undefined) {
    return null; // bamboos가 undefined인 경우에는 null을 반환하여 아무것도 렌더링하지 않도록 합니다.
  }

  // 피드 삭제
  const onDeleteHandler = async id => {
    const confirmDelete = window.confirm("정말로 삭제하시겠습니까?");
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, "bamboos", id));
        console.log("데이터가 성공적으로 삭제되었습니다!");
        const updatedFeeds = feeds.filter(item => item.id !== id);
        setFeeds(updatedFeeds);
        console.log(updatedFeeds);
      } catch (error) {
        console.error("데이터 삭제 중 오류가 발생했습니다: ", error);
      }
    }
  };

  return (
    <>
      {feeds.map(item => {
        return (
          <StDiv key={item.id}>
            <StSpan>
              <StTitle>{item.title}</StTitle>
              <StP>{item.contents}</StP>
            </StSpan>

            <StBtns>
              <Link to={`/content/${item.id}`}>자세히</Link>
              <StDeleteBtn onClick={() => onDeleteHandler(item.id)}>삭제</StDeleteBtn>
            </StBtns>
          </StDiv>
        );
      })}
    </>
  );
};

export default List;

const StDiv = styled.div`
  display: flex;
  width: 650px;
  height: 650px;
  padding: 40px;
  margin-bottom: 20px;
  border-radius: 70px;
  background-color: var(--color-main2);
`;

const StSpan = styled.span`
  margin-left: 20px;
  margin-right: 20px;
  line-height: 25px;
`;

const StTitle = styled.p`
  font-weight: bold;
  font-size: 18px;
`;

const StP = styled.p`
  opacity: 0.7;
`;

const StBtns = styled.div`
  margin-left: auto;
`;

const StDeleteBtn = styled.button`
  margin-left: 5px;
  border: none;
  cursor: pointer;
`;
