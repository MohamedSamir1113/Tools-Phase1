import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthService:AuthService , private _Router:Router) { }


  registerForm:FormGroup = new FormGroup(
    {
      username:new FormControl(null,[Validators.minLength(3),Validators.required]),
      password: new FormControl(null,[Validators.required])
    }
  )

  submitSignUp(registerForm:FormGroup)
  {
    if(registerForm.valid)
    {
      this._AuthService.signup(registerForm.value).subscribe(
         {
           next:(response)=>{
            console.log(response)
            this._Router.navigate(['/trip'])
          },
           error:()=>console.log("error"),
           complete:()=>console.log("done")
           }
      )
    }
    
  }

  

  
  ngOnInit(): void {
  }

}
