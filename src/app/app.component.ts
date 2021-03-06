import { Component } from '@angular/core';
import {User} from './entities/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedInUser: User;
  title = 'Gateway';
  selection = true;

  receiveMessage($event) {
    this.loggedInUser = $event;
  }

}
