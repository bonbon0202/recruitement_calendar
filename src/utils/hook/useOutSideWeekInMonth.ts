import moment from "moment";
import { FIRST_WEEK_OF_YEAR, LAST_WEEK_OF_YEAR } from "data";

export function useOutSideWeekInMonth(date: moment.Moment | string) {
  const dateObj = moment(date);
  const firstWeek = dateObj.startOf("month").week();
  const lastWeek =
    dateObj.endOf("month").week() === FIRST_WEEK_OF_YEAR
      ? LAST_WEEK_OF_YEAR + FIRST_WEEK_OF_YEAR
      : dateObj.endOf("month").week();

  return [firstWeek, lastWeek];
}
