/* Default imports */
import styles from './TransactionHistory.module.scss'
import { TrasactionHistoryItemStyled } from './TrasactionHistoryItem.styled';
import style from './TransactionHistory.module.scss';
const firstToUpper = (string) => {
  const firstLetter = string[0];
  return firstLetter.toUpperCase() + string.slice(1)
}
// Code...
export const TrasactionHistoryItem = ({transaction,index}) => {
  return (
    <TrasactionHistoryItemStyled index={index}>
      <td>{firstToUpper(transaction.type)}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </TrasactionHistoryItemStyled>
  );
};
