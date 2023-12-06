import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HelpComponent } from './help/help.component';
import { DisplayComponent } from './display/display.component';
import { RegistComponent } from './regist/regist.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:'display', component:DisplayComponent},
  {path:'schedule', component:ScheduleComponent},
  {path:'about', component:AboutComponent},
  {path:'help', component:HelpComponent},
  {path:'register',component:RegistComponent},
  {path:"**", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
