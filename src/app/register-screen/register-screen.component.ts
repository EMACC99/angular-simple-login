import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.css']
})
export class RegisterScreenComponent{
  email! : String;
  password! :  String;
  confirmPassword! : String;

  constructor() { }

  register(){
    console.log(this.email);
    console.log(this.password);
  }

}
