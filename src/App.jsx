import Profile from '@/components/Profile/Profile.jsx';
import user from '@/data/user.json';
import friends from '@/data/friends.json';
import transactions from '@/data/transactions.json';
import {FriendsList} from '@/components/Friends/FriendList.jsx';
import TransactionHistory
  from '@/components/Transactions/TransactionHistory.jsx';

const App = () => {
  return (
      <>
        <header>
          Header
        </header>
        <main>
         <div className="main__container">
            <Profile
                name={user.username}
                tag={user.tag}
                location={user.location}
                image={user.avatar}
                stats={user.stats}
            />
            <FriendsList friends={friends} />
           <TransactionHistory transactions={transactions} />
         </div>
        </main>
        <footer>
          Footer
        </footer>
      </>
  );
};
export default App;