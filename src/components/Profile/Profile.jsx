import css from './Profile.module.css';
export default function Profile({
  profile: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css.container}>
      <div className={css.profile}>
        <img src={avatar} alt="User avatar" />
        <p className={css.title}>{username}</p>
        <p className={css.subtitle}>@{tag}</p>
        <p className={css.subtitle}>{location}</p>
      </div>

      <ul className={css.listStat}>
        <li className={css.listStatItem}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.listStatItem}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <l className={css.listStatItem}>
          <span>Likes</span>
          <span>{likes}</span>
        </l>
      </ul>
    </div>
  );
}
