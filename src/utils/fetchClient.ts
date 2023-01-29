import { CalendarEvent } from '../types/CalendarEvent';

export const client = {
  get: () => JSON.parse(localStorage.getItem('events') || '[]'),
  post: (data: CalendarEvent) => {
    const events: CalendarEvent[] = client.get();

    localStorage.setItem('events', JSON.stringify([...events, data]));
  },
  delete: (eventCreatedDate: string) => {
    const events: CalendarEvent[] = client.get();

    const newArrayOfevents = events.filter(
      (event) => event.createdAt !== eventCreatedDate
    );

    localStorage.setItem('events', JSON.stringify([newArrayOfevents]));
  },
  patch: (newData: CalendarEvent) => {
    const events: CalendarEvent[] = client.get();

    const currentEvent = events.find(
      (event) => newData.createdAt === event.createdAt
    );

    const newevents = events.filter(
      (event) => event.createdAt !== currentEvent?.createdAt
    );

    localStorage.setItem('events', JSON.stringify([...newevents, newData]));
  },
};
