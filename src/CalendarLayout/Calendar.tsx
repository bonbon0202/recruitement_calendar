import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import moment from 'moment';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { makeWeekArray, calculateOneMonth, findIncludedPostingsAtWeek } from 'utils/date';
import { MonthButtonType, JobPosting } from './types';
import DayTitle from "./DayTitle";
import Week from './Week';
import css from './Calendar.module.scss';

const FIRST_WEEK_OF_YEAR = 1;
const LAST_WEEK_OF_YEAR = 52;
let postingsInMonth: JobPosting[] = [];

const Calendar = () => {
  const monthOfToday = moment().format('YYYY.MM');

  const [month, setMonth] = useState<string>(monthOfToday);
  const { data, error, isLoading, isError, refetch } = useQuery<JobPosting[]>('jobPosting', () =>
    fetch(`/data/jobPostings.json`).then(res => res.json())
  );

  // TODO: 로딩컴포넌트 생성
  if (isLoading) return <p>Loading..</p>;

  // TODO: 에러처리
  // if (isError) return <span>Error: {error.message}</span>;

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
      { data &&
        makeWeekArray(firstWeek, lastWeek).map((week) => {
          const postings = findIncludedPostingsAtWeek(data, week);
          return <Week key={week} month={month} week={week} postings={postings} />
        })
      }
    </section>
  )
};

export default Calendar;

// TODO: 컴포넌트 내 추상화 비슷하게 수정
