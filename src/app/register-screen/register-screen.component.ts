import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import { Router } from '@angular/router';
import { estados } from '../estados';
@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.css']
})
export class RegisterScreenComponent{
  email! : String;
  numero! :  String;
  instagram! : String;
  nombre! : String;
  apellido! : String;
  constructor(public userService : UsersService, private router: Router) { }

  register(){
    console.log(this.email);
    console.log(this.numero);
    const user = { email : this.email, password : this.numero};
    this.userService.register(user).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/login']);
  }
}

// export class EstadosComponent implements OnInit{
//   estados = estados;
// }
