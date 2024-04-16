/* Default imports */
import style from './Friends.module.css'
import { StyledFriendsList,StyledIsOnline } from './Friends.styled';

export const FriendsListItem = ({avatar,id,isOnline,name}) => {
  return (
      <StyledFriendsList useronline={isOnline.toString()}>
      <span className={style.status}></span>
      <img src={avatar}
           width={100}
           alt="User avatar" />
      <p className={style.name}>{name}</p>
     <StyledIsOnline status={isOnline.toString()}>{isOnline?'Online':'Offline'}</StyledIsOnline>
    </StyledFriendsList>
  );
};
