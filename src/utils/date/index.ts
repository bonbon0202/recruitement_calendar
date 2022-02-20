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
