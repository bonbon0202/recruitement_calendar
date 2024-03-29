import moment from 'moment';
import { findIncludedPostingsAtDay, checkIsDateInMonth, checkIsToday } from 'utils/date';
import { cn, cond } from 'utils/styles';
import Posting from '../../PostingItem';
import { JobPosting } from 'types';
import css from './Week.module.scss';

interface Props {
  month: string;
  week: number;
  postings: JobPosting[];
}

let postingArr: JobPosting[] = [];

const Week: React.FC<Props> = ({ month, week, postings }) => {
  return (
    <div className={css.weekWrapper}>
      {
        [...Array(7)].map((_, idx) => {
          let date = moment(month).clone().startOf('year').week(week).startOf('week').add(idx, 'day');
          const startPostingsAtDay = findIncludedPostingsAtDay(postings, 'start', date);
          const endPostingsAtDay = findIncludedPostingsAtDay(postings, 'end', date);
          postingArr = [...startPostingsAtDay, ...endPostingsAtDay];

          return (
            <div key={idx} className={css.oneDayWrapper}>
              <div className={css.dateBox}>
                {date.format(checkIsDateInMonth(date, month) ? 'D' : 'M/D')}
              </div>
              <div className={
                cn(css.contentBox,
                  cond(!checkIsDateInMonth(date, month), css.dateInOtherMonth),
                  cond(checkIsToday(date), css.todayContent))
              }>
                {
                  postingArr.map((posting: JobPosting) => {
                    const isStartPosting = moment(posting.start_time).format('D') === date.format('D');
                    return <Posting key={posting.id} posting={posting} type={isStartPosting ? 'start' : 'end'} />
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
};

export default Week;


