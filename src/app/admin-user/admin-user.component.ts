import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../entities/User';
import {CustomHttpService} from '../services/custom-http.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  sel = 0;

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
