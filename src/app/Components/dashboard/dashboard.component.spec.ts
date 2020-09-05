import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardComponent } from './dashboard.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { EventListComponent } from '../event-list/event-list.component';
import { EventComponent } from '../event/event.component';
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, NavBarComponent, ModalComponent,
                    EventListComponent, EventComponent ],
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal', () => {
    component.addUpdateWindow();
    expect(component.openAddUpdateWindow).toEqual(true);
  });

  it('should close modal', () => {
    component.closeModalWindow('close');
    expect(component.openAddUpdateWindow).toEqual(false);
  });
});
