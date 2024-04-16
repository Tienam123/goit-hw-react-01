import style from './TransactionHistory.module.css'
import TransactionHistoryItem
  from '@/components/Transactions/TransactionHistoryItem.jsx';

function TransactionHistory({transactions}) {
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
        {transactions.map((el,idx) => <TransactionHistoryItem index={idx} key={el.id} transaction={el} />)}
      </tbody>
    </table>
  );
}

export default TransactionHistory;