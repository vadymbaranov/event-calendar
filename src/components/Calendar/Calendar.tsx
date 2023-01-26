import React, { useState } from 'react';
import { CalendarDays } from '../CalendarDays';

export const Calendar: React.FC = () => {
  const [currentDay, setCurrentDay] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const onChangeCurrentDay = (day: Date) => {
    setCurrentDay(new Date(day.year, day.month, day.number));
  };

  const nextMonth = () => {
    setCurrentMonth(currentMonth.getMonth() + 1);
  };

  const previousMonth = () => {
    setCurrentMonth(currentMonth.getMonth() - 1);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="calendar__title title">
          <h1 className="title">This is my event calendar App</h1>
          <h2 className="title__month">
            {currentDay.getMonth()}
            &nbsp;
            {currentDay.getFullYear()}
          </h2>

          <div className="tools">
            <button type="button" onClick={previousMonth} aria-label="Save">
              <span>arrow_back</span>
            </button>
            <p>
              {months[currentDay.getMonth()].substring(0, 3)}{' '}
              {currentDay.getDate()}
            </p>
            <button type="button" onClick={nextMonth} aria-label="Save">
              <span>arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="calendar__body">
          <div className="table__header">
            {weekdays.map((weekday) => (
              <div key={weekday} className="weekday">
                <p>{weekday}</p>
              </div>
            ))}
          </div>
          <CalendarDays
            day={currentDay}
            changeCurrentDay={onChangeCurrentDay}
          />
        </div>
      </div>
    </section>
  );
};
