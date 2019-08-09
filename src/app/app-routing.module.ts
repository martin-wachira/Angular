import { AuthorsService } from './authors/authors.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PatientsComponent } from './patients/patients.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonComponent } from './person.component';
import { AppComponent } from './app.component';


const appRoutes: Routes = [
  { path: 'app-authors', component: AuthorsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'app-patients', component: PatientsComponent },
  { path: '',   redirectTo: '/app-authors', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
