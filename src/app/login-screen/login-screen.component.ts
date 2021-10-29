import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';


@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginComponent {
  email! : string;
  password! : string;

  constructor(public userService: UsersService) {}

  login() {
    console.log(this.email);
    console.log(this.password);
    const user = { email : this.email, password : this.password};
    this.userService.login(user).subscribe(data => {
      console.log(data);
    });
  }
}
