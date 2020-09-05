import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EventComponent } from './event.component';
import { ModalComponent } from '../modal/modal.component';
import { EventData } from 'src/app/Models/event.model';

const mockData: EventData = require('../../../../mockObjects/mockDataObject.js')[0];
describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventComponent, ModalComponent ],
      imports: [ReactiveFormsModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    component.sEvent = mockData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Update event', () => {
    const event = new MouseEvent('click');
    component.updateEvent(event);
    expect(component).toBeDefined();
  });

  it('should close modal', () => {
    component.closeModalWindow('close');
    expect(component).toBeDefined();
  });
});
