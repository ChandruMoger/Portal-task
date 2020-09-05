import { EventData } from '../src/app/Models/event.model';
export class MockDataService {
  allEvents: EventData[] = require('../mockObjects/mockDataObject.js')
  constructor() {

  }

  getSingleEvent(id) {
    return this.allEvents.find((event) => {
      return event.id === id;
    });
  }

  addNewEvent(newEvent) {
    newEvent.id = this.allEvents.length + 1;
    this.allEvents.push(newEvent);
  }

  updateEvent(newEvent: EventData) {
    const elementsIndex = this.allEvents.findIndex(element => element.id === newEvent.id);
    this.allEvents[elementsIndex] = {
      ...this.allEvents[elementsIndex], ...newEvent
    };
  }

  getFilteredEvents(searchString) {
    return this.allEvents.filter((item) => {
      return item.name.toLocaleLowerCase().includes(searchString.toLocaleLowerCase());
    });
  }
}