import { Component, OnInit } from '@angular/core';
import {first} from 'rxjs/operators';
import {HttpClient, HttpClientModule, HttpParams} from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  register(e) {

      const username = e.target.elements[0].value;
      const firstname = e.target.elements[1].value;
      let lastname = e.target.elements[2].value;
      const email = e.target.elements[3].value;
      let password = e.target.elements[4].value;



      // public String addUser(@QueryParam("username") String username, @QueryParam("password") String password, @QueryParam("active") Boolean active, @QueryParam("firstName") String firstName, @QueryParam("lastName") String lastName, @QueryParam("email") String email, @QueryParam("roleName") String roleName)
      const params = new HttpParams().set('username', username).set('password', password).set('active', 'true').set('firstName', firstname).set('lastName', lastname).set('email', email).set('roleName', 'gamer');
      this.http.post('localhost:8080/SSDBackend/user/addUser', {params});
      return false;
  }
}
