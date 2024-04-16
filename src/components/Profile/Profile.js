/* Default imports */
import { ProfileStyled } from './Profile.styled';

import { iconSize } from 'constants';
import style from './Profile.module.scss';

// Code...
export const Profile = ({avatar, location, stats, tag, username}) => {
  return (<ProfileStyled className={style.profile}>
    <div className={style.description}>
      <img
        src={avatar}
        width={iconSize.logoProfile}
        alt="User avatar"
        className={style.avatar}
      />
      <p className={style.name}>{username}</p>
      <p className={style.tag}>{tag}</p>
      <p className={style.location}>{location}</p>
    </div>

    <ul className={style.stats}>
      <li>
        <span className={style.label}>Followers</span>
        <span className={style.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={style.label}>Views</span>
        <span className={style.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={style.label}>Likes</span>
        <span className={style.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </ProfileStyled>);
};
