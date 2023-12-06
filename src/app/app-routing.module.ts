import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DisplayComponent } from './display/display.component';
import { RegistComponent } from './regist/regist.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:'display', component:DisplayComponent},
  {path:'register',component:RegistComponent},
  {path:"**", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
