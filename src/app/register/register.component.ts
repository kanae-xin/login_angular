import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any ={
    username:null,
    pw:null,
    repw:null
  };
  errorMessage = '';

  loginState = false;
  constructor(private auth: AuthService, private token: TokenService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
   const {userName,pw,repw} = this.form;
   if(pw!==repw){
    alert("password not the same");
   }
   else{
    this.auth.register(userName,pw).subscribe(
      success =>{
        //loginState => 
        this.loginState=success.success;
        console.log(this.loginState);
        if(this.loginState){this.router.navigateByUrl('/login');}
        else{alert("Name has been registered");}
      }
      )
    }
  }
}
