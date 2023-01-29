import React, { useState } from 'react';
import moment, { Moment } from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { CalendarEvent } from '../../types.ts/CalendarEvent';

import { InputField } from '../InputField';

type Props = {
  selectedEvent: CalendarEvent | null;
  today: Moment;
  isFormShown: boolean;
  onFormShown: (isFormShown: boolean) => void;
};

export const NewEventForm: React.FC<Props> = ({
  selectedEvent,
  today,
  isFormShown,
  onFormShown,
}) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState(chosenDay.date);
  const [time, setTime] = useState<string>('');

  const handleSubmit = () => {
    const newEvent = {
      createdAt: moment().format('DD.MM.YYYY HH:MM'),
      title,
      description,
      date,
      time,
    };

    if (!currentEvent) {
      addOne(newEvent);
    } else {
      updateOne({
        ...currentEvent,
        title,
        date,
        time,
        description,
      });
    }

    onSetFormIsShowing(false);
  };

  return (
    <form className="event__form">
      <div className="event__title">
        <h2 className="subtitle is-3">Add new idea item</h2>
        {currentEvent && <p>{`Created at ${currentEvent?.createdAt}`}</p>}

        <button
          onClick={() => onSetFormIsShowing(false)}
          type="button"
          className="event__close-form"
        >
          X
        </button>
      </div>

      <h3 className="subtitle is-4">Title*</h3>

      <input
        type="text"
        className="event__titleField"
        label="Title"
        required
        placeholder="Title goes here"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        disabled={isAdding}
      />

      <input
        type="text"
        className="event__descriptionField"
        label="Description"
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        disabled={isAdding}
      />

      <input
        type="date"
        required
        className="event__dateField"
        label="Description"
        value={date}
        onChange={(event) => setDate(event.target.value)}
        disabled={isAdding}
      />

      <input
        type="time"
        required
        className="event__timeField"
        label="Time"
        value={date}
        onChange={(event) => setTime(event.target.value)}
        disabled={isAdding}
      />

      {currentEvent && (
        <button type="submit" onClick={() => deleteOne(currentEvent?.createdAt)}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      )}

      <InputField />
      <InputField />
    </form>
  );
};
