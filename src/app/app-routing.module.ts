import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NoteComponent } from './note/note.component';

const routes: Routes = [
{path: '', redirectTo: 'login', pathMatch: 'full'},
{ path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'note', component: NoteComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
