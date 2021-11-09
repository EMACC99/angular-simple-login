import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import { Router } from '@angular/router';
import { ESTADOS } from '../estados';
import { contador } from '../estados';
@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.css']
})

export class RegisterScreenComponent implements OnInit{

  email! : String;
  numero! :  String;
  instagram! : String;
  nombre! : String;
  apellido! : String;
  estados = ESTADOS;
  password! : String;
  
  constructor(public userService : UsersService, private router: Router) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  register(){
    console.log(this.email);
    console.log(this.numero);
    const user = { email : this.email, password : this.numero, nombre : this.nombre, apellido : this.apellido, numero : this.numero};
    // this.userService.register(user).subscribe(data => {
      // console.log(data);
    // });
    console.log(user);
    
    this.router.navigate(['/login']);
  }
}

