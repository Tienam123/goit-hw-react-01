/* Default imports */
import style from './Friends.module.scss'
// Code...
import { StyledFriendsList } from './Friends.styled';

export const FriendsListItem = ({avatar,id,isOnline,name}) => {
  return (
    <StyledFriendsList useronline={isOnline.toString()}>
      <span className={style.status}></span>
      <img src={avatar}
           width={48}
           alt="User avatar" />
      <p className={style.name}>{name}</p>
    </StyledFriendsList>
  );
};
