export default function FriendListItem({
  friendItem: { avatar, name, isOnline, id },
}) {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}