/* Default imports */
import { TrasactionHistoryItemStyled } from './TrasactionHistoryItem.styled';
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
