import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<User>();

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  login(e) {

    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    this.http.get('http://localhost:8080/SSDBackend/user/checkCredentials?username=' + username + '&password=' + password).subscribe(
      (value: boolean) => {
        if (value === true) {
          this.getUser(username);
        }
      }
    );

    return false;

  }

  private getUser(username) {
    this.http.get('http://localhost:8080/SSDBackend/user/getUserByUsername?username=' + username).subscribe(
      (value: User) => {
        this.messageEvent.emit(value);
  }
    );
  }

}
