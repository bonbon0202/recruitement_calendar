import moment from 'moment';
import Badge from '../../Badge';
import css from './Week.module.scss';

interface Props {
  month: string;
  week: number;
  idx: number;
}

const Week: React.FC<Props> = ({ month, week, idx }) => {

  return (
    <div className={css.weekWrapper}>
      {
        [...Array(7)].map((_, idx) => {
          let dates = moment(month).clone().startOf('year').week(week).startOf('week').add(idx, 'day');
          const previousDate = dates.format('YYYY.MM') !== month;
          return (
            <div key={idx} className={css.oneDayWrapper}>
              <div className={css.dateBox}>{dates.format(!previousDate ? 'D' : 'M/D')}</div>
              <div className={css.contentBox}>
                <div className={css.notice}>
                  <Badge />
                  <span className={css.companyName}>한화역사</span>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
};

export default Week;

