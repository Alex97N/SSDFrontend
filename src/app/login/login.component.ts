import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../entities/User';
import {CustomHttpService} from '../services/custom-http.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<User>();

  constructor(private http: CustomHttpService, private toasterService: ToastrService) {
  }

  ngOnInit() {
  }

  login(e) {

    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    this.http.get('/user/checkCredentials?username=' + username + '&password=' + password).subscribe(
      (value: boolean) => {
        if (value === true) {
          this.toasterService.success('Logged in successfully !');
          this.getUser(username);
        } else {
          this.toasterService.error('Credentials are incorrect');
        }
      }
    );

    return false;

  }

  private getUser(username) {
    this.http.get('/user/getUserByUsername?username=' + username).subscribe(
      (value: any) => {
        this.messageEvent.emit(value);
      }
    );
  }

}
