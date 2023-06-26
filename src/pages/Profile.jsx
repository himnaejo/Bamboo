import { styled } from "styled-components";
import basic from "assets/basic.jpg";

const Profile = () => {
  return (
    <>
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

      <ListBox>
        <div>
          <span>어떤 생각을 하고 계신가요?</span>
        </div>
        <Contents>
          <section>게시글들</section>
        </Contents>
      </ListBox>
    </>
  );
};

export default Profile;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  padding: 40px;
  border-bottom: 1px solid lightgray;
`;

const DefaultImg = styled.img`
  width: 150px;
  height: 150px;
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

const ListBox = styled.div`
  padding: 40px;
`;

const Contents = styled.div`
  margin-top: 20px;
`;
