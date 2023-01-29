import React from 'react';

export const CalendarHeader: React.FC = () => {
  return (
    <div className="content">
      <button type="button" className="button is-link is-outlined">
        +
      </button>

      <h2 className="subtitle is-3">Month Year</h2>

      <button type="button" className="button is-primary is-outlined">
        {'<'}
      </button>
      <button type="button" className="button is-primary is-outlined">
        {'>'}
      </button>
    </div>
  );
};
