import React, { useState } from 'react';
import moment from 'moment';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { addOneMonth, minusOneMonth, makeWeekArrayOfMonth } from 'utils/date';
import { MonthButtonType } from './types';
import DayTitle from "./DayTitle";
import Week from './Week';
import css from './Calendar.module.scss';

const Calendar = () => {
  const monthOfToday = moment().format('YYYY.MM');

  const [month, setMonth] = useState(monthOfToday);

  const firstWeek = moment(month).clone().startOf('month').week();
  const lastWeek = moment(month).clone().endOf('month').week() === 1 ? 53 : moment(month).clone().endOf('month').week();

  const handleClickMonthArrow = (type: MonthButtonType) => {
    const result = type === 'previous' ? minusOneMonth(moment(month)) : addOneMonth(moment(month));
    setMonth(result);
  }

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
        makeWeekArrayOfMonth(firstWeek, lastWeek).map((week, idx) => {
          return <Week month={month} idx={idx} week={week} />
        })
      }
    </section>
  )
};

export default Calendar;
