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
    <div className="event event__container">
      <form className="box event__form">
        <div className="event__title">
          <h2 className="subtitle is-3">Add new idea item</h2>
          {selectedEvent && <p>{`Created at ${selectedEvent?.createdAt}`}</p>}

          <button
            onClick={() => onFormShown(false)}
            type="button"
            className="button is-danger button__close"
          >
            X
          </button>
        </div>

        <div className="field">
          <label htmlFor="title" className="label">
            Title*:
            <div className="control">
              <input
                name="title"
                className="input"
                type="text"
                required
                placeholder="Title goes here"
                value={title}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => (
                  setTitle(event.target.value)
                )}
              />
            </div>
          </label>
        </div>

        <div className="field">
          <label htmlFor="description" className="label">
            Description:
            <div className="control">
              <textarea
                name="description"
                className="input description-text"
                placeholder="Description"
                value={description}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => (
                  setDescription(event.target.value)
                )}
              />
            </div>
          </label>
        </div>

        <div className="field">
          <label htmlFor="title" className="label">
            Date*:
            <div className="control event__date-picker">
              <input
                type="date"
                required
                className="input event__dateField"
                value={date}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => (
                  setDate(event.target.value)
                )}
              />

              <input
                type="time"
                required
                className="input event__timeField"
                value={date}
                onChange={(event) => setTime(event.target.value)}
              />
            </div>
          </label>
        </div>

        {/* {selectedEvent && ( */}

        <div className="save-button__container">
          <button
            aria-label="Save"
            type="submit"
            className="button is-danger is-outlined button__delete"
            // onClick={() => deleteOne(selectedEvent?.createdAt)}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
          {/* )} */}

          <button
            type="submit"
            className="button is-success is-outlined button__save"
            disabled={!title || !date}
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
