import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../user/User';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  sel = 0;

  @Output() messageEvent = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  loggedOutClicked(e) {
    this.messageEvent.emit(null);
  }

}
