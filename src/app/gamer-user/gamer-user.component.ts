import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../entities/User';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-gamer-user',
  templateUrl: './gamer-user.component.html',
  styleUrls: ['./gamer-user.component.css']
})
export class GamerUserComponent implements OnInit {

  usel = 0;

  @Output() messageEvent = new EventEmitter<User>();
  @Input() loggedInUser: User;

  constructor(private toasterService: ToastrService) { }

  ngOnInit() {
  }

  loggedOutClicked(e) {
    this.toasterService.success('User successfully logged out !');
    this.messageEvent.emit(null);
  }
}

