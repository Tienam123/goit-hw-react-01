/* Default imports */
import style from './TransactionHistory.module.scss'
import { TrasactionHistoryItem } from './TrasactionHistoryItem';
// Code...
export const TrasactionHistory = ({transactions}) => {
  return (
    <table className={style.transactionHistory}>
      <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
      </thead>

      <tbody>
      {transactions.map((el,idx) => <TrasactionHistoryItem index={idx} key={el.id} transaction={el}/>)}
      </tbody>
    </table>
  );
};
