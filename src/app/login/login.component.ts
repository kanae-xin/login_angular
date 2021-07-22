import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any ={
    username:null,
    pw:null
  };
  errorMessage = '';

  loginState = false;

  constructor(private auth: AuthService, private token: TokenService, private router: Router){}

  ngOnInit() {
    
  }

  onSubmit() {
   const {userName,pw} = this.form;
   console.log(userName);
   this.auth.login(userName,pw).subscribe(

    success =>{
        //loginState => 
        this.loginState=success.success;
        console.log(this.loginState);
        if(this.loginState){
          this.token.saveToken(userName);
          this.router.navigateByUrl('/note');
        }
        else{alert("password is wrong");}
      }
      )
  }
}