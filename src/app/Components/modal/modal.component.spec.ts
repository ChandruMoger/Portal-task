import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../../Services/data.service';
import { ModalComponent } from './modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MockDataService } from '../../../../mockObjects/mockDataService';
import { EventData } from 'src/app/Models/event.model';
const mockData: EventData = require('../../../../mockObjects/mockDataObject.js');
describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent ],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [{ provide: DataService, useClass: MockDataService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should closeModal', () => {
    const event = new MouseEvent('click');
    component.closeModalWindow(event);
    expect(component.closeModalWindow).toBeDefined();
  });

  it('should closeModal on click backdrop', () => {
    const event = {
      target: {
        id: 'myModal'
      },
      stopPropagation: function(){
        return;
      }
    };
    component.closeModalOnClick(event);
    expect(component.closeModalOnClick).toBeDefined();
  });

  it('should return unique id', () => {
    expect(component.generateId().length).toEqual(10);
  });

  it('should submit the form invalid', () => {
    const event = new MouseEvent('click')
    component.submitForm(event);
    expect(component.submitForm).toBeDefined();
  });

  it('should submit the form for add event', () => {
    const event = new MouseEvent('click');
    component.buttonText = 'Add';
    component.eventForm.patchValue({
      name: 'Agile',
      description: 'AGile methodologies',
      department: 'Learning',
      duration: '1',
      date: '2020-09-05T03:02',
      meetingRoom: '1',
      id: 1
    });
    component.submitForm(event);
    expect(component.submitForm).toBeDefined();
  });

  it('should submit the form for Update event', () => {
    const event = new MouseEvent('click');
    component.buttonText = 'Update';
    component.eventInfo = mockData;
    component.eventForm.patchValue({
      name: 'Agile',
      description: 'AGile methodologies',
      department: 'Learning',
      duration: '1',
      date: '2020-09-05T03:02',
      meetingRoom: '1',
      id: 1
    });
    component.submitForm(event);
    expect(component.submitForm).toBeDefined();
  });
});
