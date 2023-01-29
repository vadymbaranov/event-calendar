import React from 'react';
import classNames from 'classnames';
// import { Moment } from 'moment';

type Props = {
  day: string;
  isWeekend: boolean;
};

export const CalendarDay: React.FC<Props> = ({ day, isWeekend }) => {
  return (
    <article
      className={classNames('calendar__cell', {
        '-is-weekend': isWeekend === true,
      })}
    >
      <div className="cell__row">
        <p className="day__number">{day}</p>
      </div>
    </article>
  );
};
