import { ContactComponent } from './contact/contact.component';

import { PortofolioComponent } from './portofolio/portofolio.component';
import { StartComponent } from './start/start.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"",redirectTo: "start",pathMatch:"full"},
  {path:"start",component:StartComponent},
  {path:"portfolio",component:PortofolioComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
{path:"**",component:NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
