import { Component, OnInit, Input } from '@angular/core';
import { EventData } from '../../Models/event.model';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() sEvent: EventData;
  @Input() searchedText;
  eventToDIsplay: EventData;
  constructor() { }
  openAddUpdateWindow = false;
  highlightText = null;
  ngOnInit() {
    this.eventToDIsplay = this.sEvent;
  }

  updateEvent(event: any) {
    event.stopPropagation();
    this.openAddUpdateWindow = true;
  }

  closeModalWindow(event) {
    if (event === 'close') {
      this.openAddUpdateWindow = false;
    }
  }
}
