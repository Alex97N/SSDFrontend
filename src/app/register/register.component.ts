import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {CustomHttpService} from '../services/custom-http.service';
import {Message} from '../entities/message';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: CustomHttpService, private toasterService: ToastrService) {
  }

  ngOnInit() {
  }

  register(e) {

    const username = e.target.elements[0].value;
    const firstName = e.target.elements[1].value;
    const lastName = e.target.elements[2].value;
    const email = e.target.elements[3].value;
    const password = e.target.elements[4].value;
    const reenteredPassword = e.target.elements[5].value;

    if (password === reenteredPassword) {
      this.http.get('user/addUser?username=' + username + '&password=' + password + '' +
        '&active=true' + '&firstName=' + firstName + '&lastName=' + lastName + '&email=' + email + '&roleName=GAMER').subscribe(
        (value: Message) => {
          console.log(value);
          if (value) {
            this.toasterService.success(value.message);
          } else {
            this.toasterService.error(value.message);
          }
        }
      );
    } else {
      this.toasterService.error('Passwords don\'t match');
    }

  }

}
