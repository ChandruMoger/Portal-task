import { TestBed, getTestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { EventData } from '../Models/event.model';
import { of } from 'rxjs';

const mockData: EventData[] = [{
  name: 'React',
  description: 'React tutorial',
  department: 'Learning',
  duration: '1',
  date: '2020-09-05T03:02',
  meetingRoom: '5',
  id: 4,
}];

describe('DataService', () => {
  let injector: TestBed;
  let service: DataService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService]
    });
    injector = getTestBed();
    service = injector.get(DataService);
    service.allEvents = mockData;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return single event', () => {
    const sevent = service.getSingleEvent(4);
    expect(sevent).toEqual(mockData[0]);
  });


  it('should add event', () => {
    const newEvent = {
      name: 'Vue',
      description: 'Tutorial',
      department: 'Learning',
      duration: '1',
      date: '2020-09-05T03:02',
      meetingRoom: '5',
    };
    service.addNewEvent(newEvent);
    expect(service.allEvents.length).toEqual(2);
  });

  it('should update event', () => {
    const newEvent = {
      name: 'Angular',
      description: 'Tutorial',
      department: 'Learning',
      duration: '1',
      date: '2020-09-05T03:02',
      meetingRoom: '5',
      id: 4
    };
    service.updateEvent(newEvent);
    expect(service.allEvents[0]).toEqual(newEvent);
  });

  it('should return filtered event', () => {
    const filteredEvent = service.getFilteredEvents('An');
    expect(typeof filteredEvent).toEqual('object');
  });
});
