import { Component, OnInit } from '@angular/core';
import {Session} from '../session';
import {NgForm} from '@angular/forms';
import { FakeSessionItemService } from '../fake-session-item.service';
import { SESSIONITEMS } from '../sessions';
@Component({
  selector: 'app-session-edit-form',
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css']
})
export class SessionEditFormComponent implements OnInit {
  session: Session ;
  tracks = ['MEAN', 'Angular','NodeJS', 'Android', 'Swift',
  'Xamarin'];
  constructor(private sessionItemService:
  FakeSessionItemService) {this.session=new Session (1,SESSIONITEMS[0].name,SESSIONITEMS[0].track,SESSIONITEMS[0].date,SESSIONITEMS[0].participants,SESSIONITEMS[0].adress,0,false); }
  ngOnInit() {
  this.session = this.sessionItemService.getSession(1);
  }
  editSession(sessionItem : any) {
  console.log(sessionItem);
  }
  }
