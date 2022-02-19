export const cn = (...args: string[]) => args.join(" ");

export const cond = (cond: boolean, className: string) =>
  cond ? className : "";
