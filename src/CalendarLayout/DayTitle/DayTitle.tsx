import React from 'react';
import { DAYS_NAME } from 'data';
import css from './DayTitle.module.scss';

const DayTitle = () => {

  return (
    <div className={css.container}>
      {
        DAYS_NAME.map((name) => {
          return (
            <div key={name} className={css.dayBox}>
              <p className={css.dayName}>{name}</p>
            </div>
          )
        })
      }
    </div >
  )
};

export default DayTitle;
