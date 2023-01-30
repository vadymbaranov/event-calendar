import React from 'react';
import { Moment } from 'moment';

type Props = {
  today: Moment;
  isFormShown: boolean;
  onFormShown: (isFormShown: boolean) => void;
  onNextMonth: () => void;
  onPrevMonth: () => void;
  onToday: () => void;
};

export const CalendarHeader: React.FC<Props> = ({
  today,
  isFormShown,
  onFormShown,
  onNextMonth,
  onPrevMonth,
  onToday,
}) => {
  return (
    <div className="content is-justify-content-space-between">
      <div className="container">
        <button
          type="button"
          className="button is-link is-outlined"
          onClick={() => {
            onFormShown(!isFormShown);
          }}
        >
          +
        </button>
        <div className="switcher__container">
          <button
            type="button"
            className="button is-primary is-outlined"
            onClick={onToday}
          >
            Today
          </button>

          <button
            type="button"
            className="button is-primary is-outlined"
            onClick={onPrevMonth}
          >
            {'<'}
          </button>
          <h2 className="subtitle is-4">
            {today.format('MMMM')}
            &nbsp;
            {today.format('YYYY')}
          </h2>
          <button
            type="button"
            className="button is-primary is-outlined"
            onClick={onNextMonth}
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
};
