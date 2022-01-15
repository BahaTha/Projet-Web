import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FakeSessionItemService } from '../fake-session-item.service';

@Component({
  selector: 'app-session-add-form',
  templateUrl: './session-add-form.component.html',
  styleUrls: ['./session-add-form.component.css']
  })
  export class SessionAddFormComponent {
    constructor(private sessionItemService : FakeSessionItemService) { }
  ngOnInit() {
  }
  addSession(sessionItem: NgForm):void { console.log(sessionItem);
    this.sessionItemService.add(sessionItem);
    
  }
  }