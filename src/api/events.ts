import { CalendarEvent } from '../types/CalendarEvent';
import { client } from '../utils/fetchClient';

export function getAll() {
  return client.get();
}

export function addOne(data: CalendarEvent) {
  return client.post(data);
}

export function deleteOne(eventCreatedDate: string) {
  return client.delete(eventCreatedDate);
}

export function updateOne(newData: CalendarEvent) {
  return client.patch(newData);
}
