import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  isDisable:boolean=false
  
  constructor(private user:UsersService, private route: Router)
  {
    
  }
  ngOnInit(): void {
  }

  scheduleForm=new FormGroup({
    date: new FormControl('',[Validators.required]),
    time: new FormControl('',[Validators.required]),
  })

  scheduleFor()
  {

      console.log("submitted");
      console.log(this.scheduleForm.value);
      this.user.schedule(this.scheduleForm.value).subscribe((result)=>{
          console.log(result);})
      this.route.navigate(['display'])
  }


  get Date(): FormControl
  {
    return this.scheduleForm.get("date") as FormControl;
  }
  get Time(): FormControl
  {
    return this.scheduleForm.get("time") as FormControl;
  }

}
