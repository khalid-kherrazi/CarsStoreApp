import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../rest-api.service";
import {AuthenticationServiceService} from "../authentication-service.service";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(private authenticationService: AuthenticationServiceService) {}

  ngOnInit() {
    this.authenticationService.logout();
  }

  onLogin() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .then( data => {
        this.loading = false;
      })
      .catch(eerror => {
        this.loading = false;
      });

  }

}
