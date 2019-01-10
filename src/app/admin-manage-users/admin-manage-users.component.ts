import {Component, OnInit} from '@angular/core';
import {User} from '../user/User';
import {HttpClient} from '@angular/common/http';
import {CustomHttpService} from '../services/custom-http.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-admin-manage-users',
  templateUrl: './admin-manage-users.component.html',
  styleUrls: ['./admin-manage-users.component.css']
})
export class AdminManageUsersComponent implements OnInit {

  users: Array<User>;
  selectedUser: User;

  constructor(private http: CustomHttpService, private toasterService: ToastrService) {
  }

  ngOnInit() {
    this.http.get('/user/getAllUsers').subscribe(
      (value: Array<User>) => {
        this.users = value;
        this.selectedUser = this.users[0];
      }
    );
  }

  updateUser(e) {
    if (e.target.elements[1].value === 'true') {
      this.http.get('/user/unbanUser?username=' + this.selectedUser.username).subscribe(
        (value: boolean) => {
          if (value === true) {
            this.toasterService.success();
          }
        }
      );
    } else {
      this.http.get('/user/banUser?username=' + this.selectedUser.username).subscribe(
        (value: boolean) => {
        }
      );
    }
  }
}
