import { useState } from 'react';
import moment from 'moment';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { makeWeekArray, calculateOneMonth } from 'utils/date';
import { MonthButtonType } from './types';
import DayTitle from "./DayTitle";
import Week from './Week';
import css from './Calendar.module.scss';

const FIRST_WEEK_OF_YEAR = 1;
const LAST_WEEK_OF_YEAR = 52;

const Calendar = () => {
  const monthOfToday = moment().format('YYYY.MM');

  const [month, setMonth] = useState(monthOfToday);

  const handleClickMonthArrow = (type: MonthButtonType) => {
    const result = calculateOneMonth(month, type);
    setMonth(result);
  }

  const calendarMonth = moment(month).clone();
  const firstWeek = calendarMonth.startOf('month').week();
  const lastWeek = calendarMonth.endOf('month').week() === FIRST_WEEK_OF_YEAR
    ? LAST_WEEK_OF_YEAR + FIRST_WEEK_OF_YEAR
    : calendarMonth.endOf('month').week();

  return (
    <section className={css.container}>
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
      <DayTitle />
      {
        makeWeekArray(firstWeek, lastWeek).map((week) => {
          return <Week key={week} month={month} week={week} />
        })
      }
    </section>
  )
};

export default Calendar;
