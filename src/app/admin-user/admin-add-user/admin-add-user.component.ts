import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CustomHttpService} from '../../services/custom-http.service';
import {Message} from '../../entities/message';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-admin-add-user',
  templateUrl: './admin-add-user.component.html',
  styleUrls: ['./admin-add-user.component.css']
})
export class AdminAddUserComponent implements OnInit {

  constructor(private http: CustomHttpService, private toasterService: ToastrService) {
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

    this.http.get('/user/addUser?username=' + username + '&password=' + password + '' + '&active=true' + '&firstName='
      + firstName + '&lastName=' + lastName + '&email=' + email + '&roleName=' + role).subscribe(
      (value: Message) => {
        console.log(value);
        if (value) {
          this.toasterService.success(value.message);
        } else {
          this.toasterService.error(value.message);
        }
      }
    );

  }
}
