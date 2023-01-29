/* eslint-disable react/no-array-index-key */
import React from 'react';
import moment, { Moment } from 'moment';
import { CalendarHeader } from '../CalendarHeader';
import { CalendarDay } from '../CalendarDay';

export const Calendar: React.FC = () => {
  moment.updateLocale('en', { week: { dow: 1 } });
  // const [today, setToday] = useState<Moment>(moment());
  const startDay: Moment = moment().clone().startOf('month').startOf('week');
  const day: Moment = startDay.clone().subtract(1, 'day');
  // const prevHandler = () => setToday((prev) => prev.clone().subtract(1));
  // const todayHandler = () => setToday(moment());

  // const [method, setMethod] = useState(null);
  // // const [isShowForm, setShowForm] = useState<boolean>(false);
  // const [event, setEvent] = useState(null);

  // const [events, setEvents] = useState([]);
  // const startDayQuery = startDay.clone().format('X');
  // const endDayQuery = startDay.clone().add(totalDays, 'days').format('X');

  // const endDay: Moment = moment().endOf('month').endOf('week');

  // const calendar: Moment[] = [];

  // while (!day.isAfter(endDay)) {
  //   calendar.push(day.clone());
  //   day.add(1, 'day');
  // }
  // const totalDays = 42;
  const daysArray: Moment[] = [...Array(42)]
    .map(() => day.add(1, 'day').clone());

  return (
    <section className="section">
      <div className="calendar__container">
        <div className="calendar__header">
          <h1 className="title is-1">Welcome to my calendar app</h1>
          <CalendarHeader />
        </div>

        <div className="calendar__body">
          {daysArray.map((dayItem) => (
            <CalendarDay
              key={dayItem.format('DDMMYYYY')}
              day={dayItem.format('D')}
              isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
