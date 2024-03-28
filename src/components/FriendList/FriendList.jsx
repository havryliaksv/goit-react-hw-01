import FriendListItem from '../FriendListItem/FriendListItem.jsx';

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <FriendListItem friendItem={friend} />
          </li>
        );
      })}
    </ul>
  );
}
