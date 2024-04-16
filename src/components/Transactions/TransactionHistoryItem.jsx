import {
  TrasactionHistoryItemStyled,
} from '@/components/Transactions/TransactionHistoryItem.styled.js';

export function TransactionHistoryItem({transaction,index}) {
  const firstToUpper = (string) => {
    const firstLetter = string[0];
    return firstLetter.toUpperCase() + string.slice(1)
  }
  return (
      <TrasactionHistoryItemStyled index={index}>
<td>{firstToUpper(transaction.type)}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
  </TrasactionHistoryItemStyled>
  );
}

export default TransactionHistoryItem;