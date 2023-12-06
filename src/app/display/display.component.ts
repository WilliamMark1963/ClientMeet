import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { FormControlName } from '@angular/forms';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{
  list:any=[];
  list2:any=[]
  i=0;
constructor(private route: Router, private user : UsersService)
{

}
  ngOnInit(): void {
    this.getUserdata();    
  }
  getUserdata()
  {
    this.user.getData().subscribe((data)=>{
      this.list=data
     })  
  }

  getSchedule()
  {
    this.user.scheduleData().subscribe((data)=>{
      this.list2=data
    })
  }
  onAdd()
  {
    this.route.navigate(['register'])
  }
}
/* */