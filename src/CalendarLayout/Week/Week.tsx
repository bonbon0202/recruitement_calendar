import moment from 'moment';
import { findIncludedPostingsAtDay } from 'utils/date';
import Posting from '../../PostingItem';
import { JobPosting } from 'types';
import css from './Week.module.scss';

interface Props {
  month: string;
  week: number;
  postings: JobPosting[];
  isFirstOrLastWeek: boolean;
}

const Week: React.FC<Props> = ({ month, week, postings, isFirstOrLastWeek }) => {

  let postingArr: JobPosting[] = [];


  return (
    <div className={css.weekWrapper}>
      {
        [...Array(7)].map((_, idx) => {
          let date = moment(month).clone().startOf('year').week(week).startOf('week').add(idx, 'day');
          const isIncludesDateInMonth = date.format('YYYY.MM') === month; // 함수로 빼기.
          const startPostingsAtDay = findIncludedPostingsAtDay(postings, 'start', date);
          const endPostingsAtDay = findIncludedPostingsAtDay(postings, 'end', date);
          postingArr = [...startPostingsAtDay, ...endPostingsAtDay];

          return (
            <div key={idx} className={css.oneDayWrapper}>
              <div className={css.dateBox}>{date.format(isIncludesDateInMonth ? 'D' : 'M/D')}</div>
              <div className={css.contentBox}>
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


