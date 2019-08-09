import { AuthorsService } from './authors/authors.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person.component';
import { AuthorsComponent } from './authors/authors.component';
import { PatientsComponent } from './patients/patients.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SummaryComponent } from './components/summary/summary.component';



@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    AuthorsComponent,
    PatientsComponent,
    ContactsComponent,
    PageNotFoundComponent,
    SummaryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,    
    RouterModule
 
  ],
  providers: [
    // PersonService
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
