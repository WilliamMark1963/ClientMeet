import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {
pass:string="none";
  
  constructor(private user:UsersService, private route: Router)
  {
    
  }
  ngOnInit(): void {
  }

  registForm=new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(5), Validators.pattern("[a-zA-z].*")]),
    email: new FormControl('',[Validators.required, Validators.email]),
    address: new FormControl('',[Validators.required, Validators.minLength(10)]),
    pwd: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    rpwd: new FormControl(''),
    dateFor: new FormControl(''),
    time: new FormControl('')
  })

  updateData()
  {
    if(this.pwd.value===this.rpwd.value)
    {
      console.log("submitted");
      console.log(this.registForm.value);
      this.user.userSignUp(this.registForm.value).subscribe((result)=>{
          console.log(result);})
      this.route.navigate(['display'])
    }
  
    else{
       this.pass='inline'
    }




  }


  get name(): FormControl
  {
    return this.registForm.get("name") as FormControl;
  }
  get email(): FormControl
  {
    return this.registForm.get("email") as FormControl;
  }
  get address(): FormControl
  {
    return this.registForm.get("address") as FormControl;
  }
  get pwd(): FormControl
  {
    return this.registForm.get("pwd") as FormControl;
  }
  get rpwd(): FormControl
  {
    return this.registForm.get("rpwd") as FormControl;
  }
}

/*firstname:new FormControl("",[Validators.required,Validators.minLength(2), Validators.pattern("[a-zA-z].*")]),
lastname: new FormControl("",[Validators.required,Validators.minLength(2), Validators.pattern("[a-zA-z].*")]),
email:new FormControl("",[Validators.required, Validators.email]),
mobile: new FormControl("",[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]*")]),
gender: new FormControl("",[Validators.required]),
pwd:new FormControl("",[Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
rpwd:new FormControl("")


get FirstName(): FormControl
  {
    return this.registeredForm.get("firstname") as FormControl;
  }
  get LastName(): FormControl
  {
    return this.registeredForm.get("lastname") as FormControl;
  }
  get Email(): FormControl
  {
    return this.registeredForm.get("email") as FormControl;
  }
  get Mobile(): FormControl
  {
    return this.registeredForm.get("mobile") as FormControl;
  }
  get Gender(): FormControl
  {
    return this.registeredForm.get("gender") as FormControl;
  }
  get pwd(): FormControl
  {
    return this.registeredForm.get("pwd") as FormControl;
  }
  get rpwd(): FormControl
  {
    return this.registeredForm.get("rpwd") as FormControl;
  }


*/
