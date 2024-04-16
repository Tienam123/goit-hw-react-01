/* Default imports */
import style from './Stats.module.scss';
// Code...
export const StatsItem = ({ label, percent,bgColor }) => {
  return (
    <li className={style.item} style={{backgroundColor:bgColor}}>
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percent}%</span>
    </li>
  );
};
