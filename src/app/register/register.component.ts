import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {HttpClient, HttpClientModule, HttpParams} from '@angular/common/http';
import {User} from '../user/User';
import {Role} from '../role/Role';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  register(e) {

    const username = e.target.elements[0].value;
    const firstName = e.target.elements[1].value;
    const lastName = e.target.elements[2].value;
    const email = e.target.elements[3].value;
    const password = e.target.elements[4].value;

    this.http.get('http://localhost:8080/SSDBackend/user/addUser?username=' + username + '&password=' + password + '' +
      '&active=true' + '&firstName=' + firstName + '&lastName=' + lastName + '&email=' + email + '&roleName=GAMER').subscribe(
      (value: any[]) => {
        console.log(value);
      }
    );

    return false;

  }

}
