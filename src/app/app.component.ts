import { Component } from '@angular/core';
import {User} from './user/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  title = 'frontendSSD';
  selection = true;

  receiveMessage($event) {
    this.user = $event;
  }

}
