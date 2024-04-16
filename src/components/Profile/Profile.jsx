/* Default imports */
import { ProfileStyled } from './Profile.styled.js';
import style from './Profile.module.css';

// Code...
const Profile = ({name,tag,location,stats,image}) => {
  return (<ProfileStyled className={style.profile}>
    <div className={style.description}>
      <img
          src={image}
          width={150}
          alt="User avatar"
          className={style.avatar}
      />
      <p className={style.name}>{name}</p>
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
export default Profile;