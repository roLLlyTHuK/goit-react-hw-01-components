import { Profile } from './Profile/Profile';
import user from './Json/user.json';
import { Statistics } from './Statistic/Statistics';
import dataset from './Json/data.json';
import { FriendList } from './FriendList/FreendList';
import friends from './Json/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './Json/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" dataset={dataset} />
      <Statistics dataset={dataset} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};