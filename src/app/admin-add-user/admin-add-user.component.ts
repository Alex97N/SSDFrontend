import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin-add-user',
  templateUrl: './admin-add-user.component.html',
  styleUrls: ['./admin-add-user.component.css']
})
export class AdminAddUserComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  addUser(e) {

    const username = e.target.elements[0].value;
    const firstName = e.target.elements[1].value;
    const lastName = e.target.elements[2].value;
    const email = e.target.elements[3].value;
    const password = e.target.elements[4].value;
    const role = e.target.elements[5].value;

    this.http.get('http://localhost:8080/SSDBackend/user/addUser?username=' + username + '&password=' + password + '' +
      '&active=true' + '&firstName=' + firstName + '&lastName=' + lastName + '&email=' + email + '&roleName=' + role, {responseType: 'text'}).subscribe(
      (value: String) => {
        console.log(value);
      }
    );

    return false;

  }
}
