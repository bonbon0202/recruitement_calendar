export type MonthButtonType = "previous" | "next";
export type PostingType = "start" | "end";

export interface JobPosting {
  id: number;
  name: string;
  image: string;
  start_time: string;
  end_time: string;
  content: string;
}
