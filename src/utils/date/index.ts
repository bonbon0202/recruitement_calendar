import moment from "moment";
import { MonthButtonType, JobPosting, PostingType } from "types";
import { TYPE_TO_STRING } from "data";

//TODO : 함수재사용으로 변경하기.
export const addOneMonth = (date: moment.Moment) => {
  const result = date.clone().add(1, "month").format("YYYY.MM");
  return result;
};

export const minusOneMonth = (date: moment.Moment) => {
  const result = date.clone().subtract(1, "month").format("YYYY.MM");
  return result;
};

export const calculateOneMonth = (month: string, type: MonthButtonType) => {
  let result;

  if (type === "previous") {
    result = moment(month).subtract(1, "month").format("YYYY.MM");
    return result;
  }

  result = moment(month).add(1, "month").format("YYYY.MM");
  return result;
};

export const makeWeekArray = (firstWeek: number, lastWeek: number) => {
  let result: number[] = [];
  let week = firstWeek;
  for (week; week <= lastWeek; week++) {
    result = result.concat(week);
  }
  return result;
};

export const findIncludedPostingsAtMonth = (
  postings: JobPosting[],
  date: moment.Moment | string
) => {
  const calendarMonth = moment(date).clone();
  const firstDateInMonth = calendarMonth.startOf("month").format();
  const lastDateInMonth = calendarMonth.endOf("month").format();
  const postingsInMonth = postings.filter((posting) => {
    const isPostingDateInMonth = moment(posting.start_time).isBetween(
      moment(firstDateInMonth).subtract(1, "days"),
      moment(lastDateInMonth).add(1, "days")
    );
    if (isPostingDateInMonth) return posting;
  });

  return postingsInMonth;
};

export const findIncludedPostingsAtWeek = (
  postings: JobPosting[],
  week: number
) => {
  const result = postings.filter((posting: JobPosting) => {
    const startPosting = moment(posting.start_time).week();
    const endPosting = moment(posting.end_time).week();

    if (week === startPosting || week === endPosting) return posting;
  });

  return result;
};

export const findIncludedPostingsAtDay = (
  postings: JobPosting[],
  type: PostingType,
  date: moment.Moment
) => {
  const result = postings.filter((posting: JobPosting) => {
    return (
      moment(posting[type === "start" ? "start_time" : "end_time"]).format(
        "D"
      ) === date.format("D")
    );
  });
  return result.sort((a, b) => {
    return a.name < b.name ? -1 : a.name < b.name ? 1 : 0;
  });
};

export const convertDateToFormat = (date: string, form: string) => {
  return moment(date).format(form);
};

export const calculateDiffFromToday = (date: string | moment.Moment) => {
  const today = moment();

  // TODO: refactoring
  const diffDate = moment(date).diff(today, "d");
  if (diffDate > 0) return `${diffDate}일 전`;
  if (diffDate < 0) return `${Math.abs(diffDate)}일 지남`;

  const diffHour = moment(date).diff(today, "hour");
  if (diffHour > 0) return `${diffHour}시간 전`;
  if (diffHour < 0) return `${Math.abs(diffHour)}시간 지남`;

  const diffMinute = moment(date).diff(today, "minute");
  if (diffMinute > 5) return `${diffMinute}분 전`;
  if (diffMinute > 0) return `${diffMinute}분 이내 전`;
  if (diffMinute < 0) return `${Math.abs(diffMinute)}분 지남`;

  return "현재";
};
