/* Default imports */
import styles from './Friends.module.scss'
// Code...
import { FriendsListItem } from './FriendsListItem';

export const FriendsList = ({friends}) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((el,idx) => <FriendsListItem avatar={el.avatar} name={el.name} key={el.id} isOnline={el.isOnline}/>)}
    </ul>
  );
};
