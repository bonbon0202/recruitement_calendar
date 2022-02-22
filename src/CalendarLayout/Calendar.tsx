import { useState } from 'react';
import { useQuery } from 'react-query';
import { makeWeekArray, calculateOneMonth, findIncludedPostingsAtMonth, findIncludedPostingsAtWeek } from 'utils/date';
import { useOutSideWeekInMonth } from "utils/hook/useOutSideWeekInMonth";
import MonthlyTool from "./MonthlyTool";
import DayTitle from "./DayTitle";
import Week from './Week';
import { MONTH_OF_TODAY } from 'data';
import { MonthButtonType, JobPosting } from 'types';
import css from './Calendar.module.scss';

const Calendar = () => {
  const [month, setMonth] = useState<string>(MONTH_OF_TODAY);
  const [firstWeek, lastWeek] = useOutSideWeekInMonth(month);
  const { data, error, isLoading, isError } = useQuery<JobPosting[]>('jobPosting', () =>
    fetch('/data/jobPostings.json').then(res => res.json())
  );

  if (isLoading)
    return (
      <div className={css.loadingWrapper}>
        <img src="/image/loading.gif" />
      </div>
    );

  if (isError) {
    let errorMessage = "Failed to do something exceptional";
    if (error instanceof Error) errorMessage = error.message;
    return <span>Error: {errorMessage}</span>;
  }

  const handleClickMonthArrow = (type: MonthButtonType) => {
    const result = calculateOneMonth(month, type);
    setMonth(result);
  }

  return (
    <section className={css.container}>
      <MonthlyTool handleClickMonthArrow={handleClickMonthArrow} month={month} />
      <DayTitle />
      { data &&
        makeWeekArray(firstWeek, lastWeek).map((week) => {
          const postingsInWeek = findIncludedPostingsAtWeek(findIncludedPostingsAtMonth(data, month), week);
          return <Week key={week} month={month} week={week} postings={postingsInWeek} />
        })
      }
    </section>
  )
};

export default Calendar;
