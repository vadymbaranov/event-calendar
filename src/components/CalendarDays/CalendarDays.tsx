import React from 'react';
import classNames from 'classnames';

type Props = {
  day: Date;
  changeCurrentDay: (day: Date) => void;
};

export const CalendarDays: React.FC<Props> = ({ day }) => {
  const firstDayOfMonth: Date = new Date(day.getFullYear(), day.getMonth(), 1);
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  const currentDays = [];

  for (let days = 0; days < 42; days++) {
    if (days === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (days === 0) {
      firstDayOfMonth.setDate(
        firstDayOfMonth.getDate() + (days - weekdayOfFirstDay),
      );
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    const calendarDay = {
      slug: firstDayOfMonth.toDateString(),
      currentMonth: firstDayOfMonth.getMonth() === day.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      dayNumber: firstDayOfMonth.getDate(),
      selected: firstDayOfMonth.toDateString() === day.toDateString(),
      year: firstDayOfMonth.getFullYear(),
    };

    currentDays.push(calendarDay);
  }

  return (
    <div className="table_content">
      {currentDays.map((currentDay) => (
        <div
          key={currentDay.slug}
          className={classNames(
            'calendar-day',
            currentDay.currentMonth ? ' current' : '',
            currentDay.selected ? ' selected' : '',
          )}
        >
          <p>{currentDay.dayNumber}</p>
        </div>
      ))}
    </div>
  );
};
