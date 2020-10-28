import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home/home.component';
import { ContactusComponent} from './contact/contactus/contactus.component';
import { LoginComponent } from './signin/login/login.component';
import { RegistrationComponent} from './signup/registration/registration.component';



const routes: Routes = [
  {
    path: '', component: HomeComponent,
    data: {
      title: 'Home',
      description: 'Share market share detail',
      keywords: 'Share market share detail'
    }

  },
  {
    path: 'home', component: HomeComponent,
    data: {
      title: 'Home',
      description: 'Share market share detail',
      keywords: 'Share market share detail'
    }

  },
  {
    path: 'signin', component: LoginComponent,
    data: {
      title: 'Login',
      description: 'Login page',
      keywords: 'Share market share detail'
    }

  },
  {
    path: 'signup', component: RegistrationComponent,
    data: {
      title: 'Registration',
      description: 'Registration page',
      keywords: 'Registration page'
    }

  },
  {
    path: 'contactus', component: ContactusComponent,
    data: {
      title: 'Contact Us',
      description: 'Share market share detail',
      keywords: 'Share market share detail'
    }

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
