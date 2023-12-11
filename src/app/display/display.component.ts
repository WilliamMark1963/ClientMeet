import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{
  userList:any=[];
  dummyList={
      name:"",
      email:"",
      address:"",
      pwd:"",
      date:null,
      time:null,
      id:null
    }

  isShow=false;
  date:any;
  time:any;
  id=null;
  isdisplay=false;
constructor(private route: Router, private user : UsersService)
{

}
  ngOnInit(): void {
    this.getUserdata();    
  }
  getUserdata()
  {
    this.user.getData().subscribe((data)=>{
      this.userList=data
     })  
  }

  deleteUser(id:any)
  {
    this.user.deleteData(id).subscribe((res)=>{
      this.getUserdata()
    })
  }

  onAdd()
  {
    this.route.navigate(['register'])
  }
 
  scheduleForm=new FormGroup({
    dateFor: new FormControl('',[Validators.required]),
    time: new FormControl('',[Validators.required]),
  })

  scheduleFor()
  {
      console.log("submitted");
      this.date=this.scheduleForm.value.dateFor;
      this.time=this.scheduleForm.value.time;
      console.log(this.date, this.time);   
      this.isShow=false;
      this.updateData();
  }



  updateData()
  {
    this.dummyList.date= this.date;
    this.dummyList.time=this.time;
    this.dummyList.id=this.id;
    console.log(this.dummyList);
    this.user.putData(this.dummyList).subscribe((res)=>{
      this.getUserdata();
    })
  }

  get Date(): FormControl
  {
    return this.scheduleForm.get("dateFor") as FormControl;
  }
  get Time(): FormControl
  {
    return this.scheduleForm.get("time") as FormControl;
  }

 
  cancel()
  {
    this.isShow=false;
  }

  setData(data:any)
  {
      this.isShow=true;
      this.dummyList.name=data.name;
      this.dummyList.email=data.email;
      this.dummyList.address=data.address;
      this.dummyList.pwd=data.pwd;
      // this.dummyList.date=data.date;
      // this.dummyList.time=data.time;
      this.id=data.id;
  }
}
/* */