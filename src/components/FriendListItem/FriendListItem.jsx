import clsx from 'clsx';
import css from './FriendListItem.module.css';
export default function FriendListItem({
  friendItem: { avatar, name, isOnline, id },
}) {
  return (
    <div className={css.friendListItem}>
      <img className={css.imgFriend} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendItemTitle}>{name}</p>
      <p
        className={clsx(
          css.friendItemStatus,
          isOnline ? css.isOnline : css.isOffline
        )}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
