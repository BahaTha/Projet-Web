import { Component, OnInit } from '@angular/core';
import { FakeSessionItemService } from '../fake-session-item.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  providers: [FakeSessionItemService],
  styleUrls: ['./admin.component.css']

})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
