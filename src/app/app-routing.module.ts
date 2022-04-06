import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { ContactComponent } from './contact/contact.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { AddempComponent } from './admin/addemp/addemp.component';


const routes: Routes = [
  
  {path:'',component:HomeComponent },
  {path:'about',component:AboutComponent },
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'dashbord',component:DashbordComponent},
  {path:'addemp',component:AddempComponent},
 
  {path:'**',component:PagenotfoundComponent},

  


 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
