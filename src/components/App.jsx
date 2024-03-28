import userData from '../userData.json';
import friendList from '../friends.json';
import Profile from './Profile/Profile.jsx';
import FriendList from './FriendList/FriendList.jsx';
function App() {
  return (
    <>
      <Profile profile={userData} />
      <FriendList friends={friendList} />
    </>
  );
}

export default App;
