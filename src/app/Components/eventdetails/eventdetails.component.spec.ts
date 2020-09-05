import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EventdetailsComponent } from './eventdetails.component';
import { DataService } from '../../Services/data.service';
import { EventData } from '../../Models/event.model';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MockDataService } from '../../../../mockObjects/mockDataService';
const mockData: EventData[] = [{
  name: 'React',
  description: 'React tutorial',
  department: 'Learning',
  duration: '1',
  date: '2020-09-05T03:02',
  meetingRoom: '5',
  id: 4,
}];

describe('EventdetailsComponent', () => {
  let component: EventdetailsComponent;
  let fixture: ComponentFixture<EventdetailsComponent>;
  let dataService: jasmine.SpyObj<DataService>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventdetailsComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: DataService, useClass: MockDataService },
      {
        provide: ActivatedRoute,
        useValue: {
          params: of({
            eventId: 4,
          }),
        },
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventdetailsComponent);
    dataService = TestBed.get(DataService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
