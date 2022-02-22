import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { MonthButtonType } from 'types';
import css from './MonthlyTool.module.scss';

interface Props {
  handleClickMonthArrow: (type: MonthButtonType) => void;
  month: string;
}

const MonthlyTool: React.FC<Props> = ({ handleClickMonthArrow, month }) => {
  return (
    <div className={css.monthTool}>
      <MdArrowBackIos
        className={css.arrowIcon}
        onClick={() => handleClickMonthArrow('previous')}
      />
      <span className={css.cureentMonth}>{month}</span>
      <MdArrowForwardIos
        className={css.arrowIcon}
        onClick={() => handleClickMonthArrow('next')}
      />
    </div>
  )
};

export default MonthlyTool;

