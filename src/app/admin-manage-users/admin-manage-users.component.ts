import {Component, OnInit} from '@angular/core';
import {User} from '../user/User';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin-manage-users',
  templateUrl: './admin-manage-users.component.html',
  styleUrls: ['./admin-manage-users.component.css']
})
export class AdminManageUsersComponent implements OnInit {

  users: Array<User>;
  selectedUser: User;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:8080/SSDBackend/user/getAllUsers').subscribe(
      (value: Array<User>) => {
        this.users = value;
        this.selectedUser = this.users[0];
      }
    );
  }

  updateUser(e) {
    if (e.target.elements[1].value === 'true') {
      this.http.get('http://localhost:8080/SSDBackend/user/unbanUser?username=' + this.selectedUser.username).subscribe(
        (value: boolean) => {
        }
      );
    } else {
      this.http.get('http://localhost:8080/SSDBackend/user/banUser?username=' + this.selectedUser.username).subscribe(
        (value: boolean) => {
        }
      );
    }


  }
}
