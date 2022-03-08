import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { FotterComponent } from './fotter/fotter.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    PortofolioComponent,
    AboutComponent,
    ContactComponent,
    NavComponent,
    FotterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
