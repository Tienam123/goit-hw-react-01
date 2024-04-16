/* Default imports */
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
// Code...
import { MainStyled } from './Main.styled';
import { Profile } from '../../components/Profile/Profile';
import { StatsMenu } from '../../components/Stats/StatsMenu';
import { FriendsList } from '../../components/Friends/FriendsList';
import { TrasactionHistory } from '../../components/Transaction/TrasactionHistory';

export const Main = () => {
  return (
    <MainStyled>
      <Profile avatar={user.avatar}
               stats={user.stats}
               username={user.username}
               location={user.location}
               tag={user.tag} />
      <StatsMenu data={data} />
      <FriendsList friends={friends} />
      <TrasactionHistory transactions={transactions}/>
    </MainStyled>
  );
};

