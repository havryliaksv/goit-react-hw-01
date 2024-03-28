import userData from '../userData.json';
import friendList from '../friends.json';
import transactions from '../transactions.json';
import Profile from './Profile/Profile.jsx';
import FriendList from './FriendList/FriendList.jsx';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';
function App() {
  return (
    <>
      <Profile profile={userData} />
      <FriendList friends={friendList} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
