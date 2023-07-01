import { styled } from "styled-components";

import basic from "assets/basic.jpg";
import edit from "assets/edit.png";
import PostModal from "component/Modal/PostModal";
import { useEffect, useState } from "react";
import { Button } from "component/Button/Button.style";
import { collection, getDocs, query } from "firebase/firestore";
import { useSelector } from "react-redux";
import Post from "component/Post/Post";
import { auth, db } from "modules/firebase";
import UserDataEditModal from "component/Modal/UserDataEditModal";

const Profile = () => {
  // const param = useParams();
  // const { uid, photoURL, displayName } = useSelector(state => state.userInfo);
  const { photoURL, displayName } = useSelector(state => state.userInfo);

  const PostOpenModal = () => setPostIsOpen(true);
  const [postIsOpen, setPostIsOpen] = useState(false);

  const EditOpenModal = () => setEditIsOpen(true);
  const [editIsOpen, setEditIsOpen] = useState(false);

  const [bamboos, setBamboos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const initialValue = [];

      const q = query(collection(db, "feeds"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
        initialValue.push({ ...doc.data(), id: doc.id });
      });
      setBamboos(initialValue);
    };
    fetchData();
  }, []);

  const { uid } = useSelector(state => state.userInfo);

  const filterBamboos = bamboos.filter(bamboo => bamboo.uid === uid);

  return (
    <ProfileLayout>
      <ProfileBox>
        {photoURL === null ? (
          // 스타일 컴포넌트 이름 수정
          <ProfileImg src={basic} alt="기본이미지" />
        ) : (
          <ProfileImg src={photoURL} alt="프로필이미지" />
        )}

        <MyInfoBox>
          <UpperLine>
            <UserNameBox>
              <DisplayName>{displayName}</DisplayName>
              <Email>{auth.currentUser.email}</Email>
            </UserNameBox>
            <div>
              <Button onClick={EditOpenModal} background={"none"}>
                <EditBtnImg src={edit} alt="수정" />
              </Button>
              {editIsOpen && <UserDataEditModal setIsOpen={setEditIsOpen} />}
            </div>
          </UpperLine>
        </MyInfoBox>
      </ProfileBox>

      <FeedBox>
        <Button position={"main"} onClick={PostOpenModal} hoverStyle={"shadow"}>
          지금 무슨 생각을 하고 계신가요?
        </Button>
        {postIsOpen && (
          <PostModal bamboos={bamboos} setBamboos={setBamboos} setIsOpen={setPostIsOpen} />
        )}

        {filterBamboos.map(bamboo => (
          <Post
            key={bamboo.id}
            photoURL={bamboo.photoURL}
            bamboo={bamboo}
            setBamboos={setBamboos}
          />
        ))}
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

const UserNameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const EditBtnImg = styled.img`
  width: 40px;
  height: 40px;
  filter: contrast(0);
`;

const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
  clip-path: circle(50%); /* = border-radius:100%; */
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

const DisplayName = styled.p`
  font-size: 30px;
  font-weight: 600;
`;

const Email = styled.p`
  color: var(--color-gray4);
  font-size: 20px;
  font-weight: 600;
`;

const FeedBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;
