import { styled } from "styled-components";
import basic from "assets/basic.jpg";
import Form from "component/Form/Form";
import List from "component/List/List";
import Modal from "component/Modal/Modal";

const Profile = () => {
  return (
    <ProfileLayout>
      <ProfileBox>
        <DefaultImg src={basic} alt="기본이미지" />
        <MyInfoBox>
          <UpperLine>
            <p>닉네임</p>
            <div>
              <Btn>Follow</Btn>
              <Btn>•••</Btn>
            </div>
          </UpperLine>
          <p>자기소개</p>
        </MyInfoBox>
      </ProfileBox>

      <FeedBox>
        <OpenBtn>지금 무슨 생각을 하고 계신가요?</OpenBtn>
        <Modal />
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

const OpenBtn = styled.span`
  display: flex;
  width: 630px;
  height: 70px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 70px;
  background: #d9d9d9;
  cursor: pointer;
`;
