import React from 'react';

type Props = {
  isFormShown: boolean;
  onFormShown: (isFormShown: boolean) => void;
  onNextMonth: () => void;
  onPrevMonth: () => void;
  onToday: () => void;
};

export const CalendarHeader: React.FC<Props> = ({
  isFormShown,
  onFormShown,
  onNextMonth,
  onPrevMonth,
  onToday,
}) => {
  return (
    <div className="content">
      <button
        type="button"
        className="button is-link is-outlined"
        onClick={() => {
          onFormShown(!isFormShown);
        }}
      >
        +
      </button>

      <h2 className="subtitle is-3">Month Year</h2>

      <button type="button" className="button is-primary is-outlined" onClick={onToday}>Today</button>

      <button type="button" className="button is-primary is-outlined" onClick={onPrevMonth}>
        {'<'}
      </button>
      <button type="button" className="button is-primary is-outlined" onClick={onNextMonth}>
        {'>'}
      </button>
    </div>
  );
};
