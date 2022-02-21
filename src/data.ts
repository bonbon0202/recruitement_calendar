import moment from "moment";

export const DAYS_NAME = ["일", "월", "화", "수", "목", "금", "토"];

export const MONTH_OF_TODAY = moment().format("YYYY.MM");

export const FIRST_WEEK_OF_YEAR = 1;
export const LAST_WEEK_OF_YEAR = 52;

export const TYPE_TO_STRING = {
  start: "시",
  end: "끝",
};

export const DATE_CONVERT_FORM = {
  fullDate: "YYYY.MM.DD HH:MM",
  yearMonth: "YYY.MM",
  date: "D",
};
