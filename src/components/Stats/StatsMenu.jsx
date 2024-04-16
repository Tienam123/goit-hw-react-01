/* Default imports */

// Code...
import { StatsStyled } from './StatsStyled';
import style from './Stats.module.scss';
import { StatsItem } from './StatsItem';
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
export const StatsMenu = ({ data }) => {
  return (
    <StatsStyled>
      <h2 className={style.title}>Upload stats</h2>
      <ul className={style.statlist}>
        {data.map(el => <StatsItem key={el.id} label={el.label} bgColor={getRandomColor()} percent={el.percentage}/>)}
      </ul>
    </StatsStyled>
  );
};
