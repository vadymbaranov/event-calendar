/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import moment, { Moment } from 'moment';
import { CalendarEvent } from '../../types/CalendarEvent';

import { CalendarHeader } from '../CalendarHeader';
import { CalendarDay } from '../CalendarDay';
import { NewEventForm } from '../NewEventForm';

export const Calendar: React.FC = () => {
  const [today, setToday] = useState<Moment>(moment());
  // const [year, setYear] = useState<Moment>(moment());
  // const [month, setMonth] = useState<Moment>(moment());
  // const [selectedDay, setSelectedDay] = useState<Day | null>(null);
  const [isFormShown, setIsFormShown] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  moment.updateLocale('en', { week: { dow: 1 } });
  const startDay: Moment = today.clone().startOf('month').startOf('week');
  const day: Moment = startDay.clone().subtract(1, 'day');
  const totalDays = 42;
  const daysArray: Moment[] = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  // const isCurrentDay = (dayCell: Day) => {
  //   return (
  //     moment().format('YYYY M D')
  //     === `${dayCell.year} ${dayCell.month} ${dayCell.numberOfDay}`
  //   );
  // };

  const handlePrevMonth = () => setToday(prev => prev.clone().subtract(1, 'month'));
  const handleToday = () => setToday(moment());
  const handleNextMonth = () => setToday(prev => prev.clone().add(1, 'month'));

  // const [method, setMethod] = useState(null);
  // const [event, setEvent] = useState(null);

  // const [events, setEvents] = useState([]);
  // const startDayQuery = startDay.clone().format('X');
  // const endDayQuery = startDay.clone().add(totalDays, 'days').format('X');

  // const openFormHandler = (methodName, eventForUpdate, dayItem) => {
  //   setEvent(eventForUpdate || { ...defaultEvent, date: dayItem.format('X') });
  //   setMethod(methodName);
  // };

  // const openModalFormHandler = (methodName, eventForUpdate, dayItem) => {
  //   setShowForm(true);
  //   openFormHandler(methodName, eventForUpdate, dayItem);
  // };

  // const cancelButtonHandler = () => {
  //   setShowForm(false);
  //   setEvent(null);
  // };

  // const changeEventHandler = (text, field) => {
  //   setEvent((prevState) => ({
  //     ...prevState,
  //     [field]: text,
  //   }));
  // };

  // const endDay: Moment = moment().endOf('month').endOf('week');

  // const calendar: Moment[] = [];

  // while (!day.isAfter(endDay)) {
  //   calendar.push(day.clone());
  //   day.add(1, 'day');
  // }

  return (
    <section className="section">
      <div className="calendar__container">
        <div className="calendar__header">
          <h1 className="title is-1">Welcome to my calendar app!</h1>
          <CalendarHeader
            today={today}
            isFormShown={isFormShown}
            onFormShown={setIsFormShown}
            onNextMonth={handleNextMonth}
            onPrevMonth={handlePrevMonth}
            onToday={handleToday}
          />
        </div>

        <div className="calendar__body">
          {isFormShown && (
            <NewEventForm
              selectedEvent={selectedEvent}
              onFormShown={setIsFormShown}
            />
          )}

          {daysArray.map((dayItem) => (
            <CalendarDay
              key={dayItem.unix()}
              day={dayItem}
              isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
              onFormShown={setIsFormShown}
              onSelectedEvent={setSelectedEvent}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
