import React from 'react';
import classNames from 'classnames';
import { Day } from '../../types/Day';
import { CalendarEvent } from '../../types/CalendarEvent';
import { getAll } from '../../api/events';

type Props = {
  day: Day;
  // isWeekend: boolean;
  onFormShown: (isFormShown: boolean) => void;
  onSelectedEvent: (selectedEvent: CalendarEvent | null) => void;
};

export const CalendarDay: React.FC<Props> = ({
  day,
  // isWeekend,
  onFormShown,
  onSelectedEvent,
}) => {
  const { dayNumber, weekNumber } = day;

  const getEvents = () => {
    const events: CalendarEvent[] = getAll();

    return events;
  };

  const events = getEvents();

  const currentEvents = events.filter((event) => day.id === event.createdAt);

  return (
    <article
      className={classNames('calendar__cell', {
        // 'is-weekend': isWeekend === true,
      })}
    >
      <div className="cell__row">
        <p className="week__number">{weekNumber}</p>
        <p className="day__number">{dayNumber}</p>
        <div className="box">
          {currentEvents.map((event) => (
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
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
