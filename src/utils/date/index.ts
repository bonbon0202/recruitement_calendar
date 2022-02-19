import moment from "moment";
import { MonthButtonType } from "CalendarLayout/types";

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
