import moment from 'moment';
import Posting from '../../Posting';
import { JobPosting } from '../types';
import css from './Week.module.scss';

interface Props {
  month: string;
  week: number;
  postings: JobPosting[];
}

const Week: React.FC<Props> = ({ month, week, postings }) => {

  return (
    <div className={css.weekWrapper}>
      {
        [...Array(7)].map((_, idx) => {
          let date = moment(month).clone().startOf('year').week(week).startOf('week').add(idx, 'day');
          const isIncludesDateInMonth = date.format('YYYY.MM') === month;
          return (
            <div key={idx} className={css.oneDayWrapper}>
              <div className={css.dateBox}>{date.format(isIncludesDateInMonth ? 'D' : 'M/D')}</div>
              <div className={css.contentBox}>
                {
                  postings.map((posting: JobPosting) => {
                    const startPosting = moment(posting.start_time).format('D') === date.format('D');
                    const endPosting = moment(posting.end_time).format('D') === date.format('D');
                    if (startPosting || endPosting) {
                      return (
                        <Posting key={posting.id} posting={posting} type={startPosting ? 'start' : 'end'} />
                      )
                    }
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

