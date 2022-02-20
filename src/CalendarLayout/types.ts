//TODO: 타입명.. 바꾸기.
export type MonthButtonType = "previous" | "next";

export interface JobPosting {
  id: number;
  name: string;
  image: string;
  start_time: Date;
  end_time: Date;
  content: string;
}
