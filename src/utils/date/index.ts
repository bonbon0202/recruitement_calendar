import moment from "moment";

//TODO : 함수재사용으로 변경하기.
export const addOneMonth = (date: moment.Moment) => {
  const result = date.clone().add(1, "month").format("YYYY.MM");
  return result;
};

export const minusOneMonth = (date: moment.Moment) => {
  const result = date.clone().subtract(1, "month").format("YYYY.MM");
  return result;
};
