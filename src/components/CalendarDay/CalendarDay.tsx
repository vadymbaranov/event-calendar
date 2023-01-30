import React from 'react';
import classNames from 'classnames';
import moment, { Moment } from 'moment';
import { CalendarEvent } from '../../types/CalendarEvent';
// import { getAll } from '../../api/events';

type Props = {
  day: Moment;
  isWeekend: boolean;
  onFormShown: (isFormShown: boolean) => void;
  onSelectedEvent: (selectedEvent: CalendarEvent | null) => void;
};

export const CalendarDay: React.FC<Props> = ({
  day,
  isWeekend,
  // onFormShown,
  // onSelectedEvent,
}) => {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  // const getEvents = () => {
  //   const events: CalendarEvent[] = getAll();

  //   return events;
  // };

  // const events = getEvents();

  // const currentEvents = events.filter((event) => day.id === event.createdAt);
  const isCurrentDay = (dayItem: Moment) => moment().isSame(dayItem, 'day');

  return (
    <article
      className={classNames('calendar__cell', {
        'is-weekend': isWeekend === true,
      })}
    >
      <div className="cell__row">
        <p className="week__number">{weekDays[day.day()]}</p>
        <p
          className={classNames('day__number', {
            'has-text-danger': isCurrentDay(day) === true,
          })}
        >
          {day.format('D')}
        </p>
      </div>
      <div className="box">
        {/* {currentEvents.map((event) => (
            <span
              aria-label="Save"
              role="textbox"
              key={event.createdAt}
              tabIndex={0}
              onClick={() => {
                onFormShown(true);
                onSelectedEvent(event);
              }}
              onKeyPress={() => {
                onFormShown(true);
                onSelectedEvent(event);
              }}
            >
              {event.title}
              My event
            </span>
          ))} */}
      </div>
    </article>
  );
};
