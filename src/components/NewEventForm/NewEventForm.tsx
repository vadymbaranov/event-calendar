import React, { useState } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { addOne, updateOne } from '../../api/events';
import { CalendarEvent } from '../../types/CalendarEvent';

type Props = {
  selectedEvent: CalendarEvent | null;
  onFormShown: (isFormShown: boolean) => void;
};

export const NewEventForm: React.FC<Props> = ({
  selectedEvent,
  onFormShown,
}) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');

  const handleSubmit = () => {
    const newEvent: CalendarEvent = {
      createdAt: moment().format('DD.MM.YYYY HH:MM'),
      title,
      description,
      date,
      time,
    };

    if (!selectedEvent) {
      addOne(newEvent);
    } else {
      updateOne({
        ...selectedEvent,
        title,
        date,
        time,
        description,
      });
    }

    onFormShown(false);
  };

  return (
    <form className="event__form">
      <div className="event__title">
        <h2 className="subtitle is-3">Add new idea item</h2>
        {selectedEvent && <p>{`Created at ${selectedEvent?.createdAt}`}</p>}

        <button
          onClick={() => onFormShown(false)}
          type="button"
          className="event__close-form"
        >
          X
        </button>
      </div>

      <h3 className="subtitle is-4">Title*</h3>

      <input
        name="title"
        required
        placeholder="Title goes here"
        value={title}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
      />

      <input
        name="description"
        placeholder="Description"
        value={description}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => (
          setDescription(event.target.value)
        )}
        // disabled={isAdding}
      />

      <input
        type="date"
        required
        className="event__dateField"
        value={date}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDate(event.target.value)}
      />

      <input
        type="time"
        required
        className="event__timeField"
        value={date}
        onChange={(event) => setTime(event.target.value)}
      />

      {selectedEvent && (
        <button
          aria-label="Save"
          type="submit"
          className="button is-danger is-outlined"
          // onClick={() => deleteOne(selectedEvent?.createdAt)}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      )}

      <button
        type="submit"
        className="button is-success is-outlined"
        disabled={!title || !date}
        onClick={handleSubmit}
      >
        Save
      </button>
    </form>
  );
};
