import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import moment from 'moment';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { makeWeekArray, calculateOneMonth, findIncludedPostingsAtWeek } from 'utils/date';
import { MonthButtonType, JobPosting } from 'types';
import DayTitle from "./DayTitle";
import Week from './Week';
import { MONTH_OF_TODAY, FIRST_WEEK_OF_YEAR, LAST_WEEK_OF_YEAR } from 'data';
import css from './Calendar.module.scss';

const Calendar = () => {

  const [month, setMonth] = useState<string>(MONTH_OF_TODAY);
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

  const firstDateInMonth = calendarMonth.startOf('month').format();
  const lastDateInMonth = calendarMonth.endOf('month').format();
  const postingsInMonth = data?.filter((posting) => {
    if (moment(posting.start_time).isBetween(moment(firstDateInMonth).subtract(1, 'days'), moment(lastDateInMonth).add(1, 'days'))) {
      return posting;
    }
  })

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
      { postingsInMonth &&
        makeWeekArray(firstWeek, lastWeek).map((week) => {
          const postingsInWeek = findIncludedPostingsAtWeek(postingsInMonth, week);
          const isFirstOrLastWeek = firstWeek === week || lastWeek === week;
          return <Week key={week} month={month} week={week} postings={postingsInWeek} isFirstOrLastWeek={isFirstOrLastWeek} />
        })
      }
    </section>
  )
};

export default Calendar;

// TODO: 컴포넌트 내 추상화 비슷하게 수정
