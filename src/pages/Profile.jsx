import { styled } from "styled-components";

import basic from "assets/basic.jpg";
import Form from "component/Form/Form";
import List from "component/List/List";
import PostModal from "component/Modal/PostModal";
import { useState } from "react";
import { Button } from "component/Button/Button.style";
// import { useParams } from "react-router";
import { useSelector } from "react-redux";

// 유저정보를 적용...
const Profile = () => {
  // const param = useParams();
  // const { uid, photoURL, displayName } = useSelector(state => state.userInfo);
  const { photoURL, displayName } = useSelector(state => state.userInfo);

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <ProfileLayout>
      <ProfileBox>
        {photoURL === null ? (
          // 스타일 컴포넌트 이름 수정
          <DefaultImg src={basic} alt="기본이미지" />
        ) : (
          <DefaultImg src={photoURL} alt="프로필이미지" />
        )}

        <MyInfoBox>
          <UpperLine>
            <p>{displayName}</p>
            <div>
              <Btn>Follow</Btn>
              <Btn>•••</Btn>
            </div>
          </UpperLine>
          <p>자기소개</p>
        </MyInfoBox>
      </ProfileBox>

      <FeedBox>
        <Button position={"main"} onClick={openModal}>
          지금 무슨 생각을 하고 계신가요?
        </Button>
        {isOpen && <PostModal setIsOpen={setIsOpen} />}

        <Form />
        <List />
      </FeedBox>
    </ProfileLayout>
  );
};

export default Profile;

const ProfileLayout = styled.div`
  width: 840px;
  margin-top: 150px;
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  padding: 40px;
  border-bottom: 1px solid lightgray;
`;

const DefaultImg = styled.img`
  width: 200px;
  height: 200px;
  clip-path: circle(50%);
`;

const MyInfoBox = styled.div`
  width: 100%;
  margin-left: 20px;
`;

const UpperLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Btn = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 5px;
  background-color: #eeeeee;
  margin-left: 10px;
`;

const FeedBox = styled.div`
  padding: 40px;
`;
