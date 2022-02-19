import Badge from '../../Badge';
import css from './Week.module.scss';

const Week = () => {
  return (
    <div className={css.weekWrapper}>
      {
        [...Array(7)].map((_, idx) => {
          return (
            <div key={idx} className={css.oneDayWrapper}>
              <div className={css.dateBox}>2</div>
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