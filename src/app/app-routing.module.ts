import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FlightListsComponent } from './home/flight-lists/flight-lists.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  // { path: 'home', component: HomeComponent },
  {
    path: 'home',
    component: HomeComponent,
    // children: [
    //   // { path: '', redirectTo: 'home' },
    //   { path: '', component: LoginComponent },
    //   { path: 'signup', component: SignupComponent },
    //   { path: '**', redirectTo: 'login' },
    // ],
  },
  {
    path: 'flight-list',
    component: FlightListsComponent,
    // children: [
    //   { path: '', redirectTo: 'updates', pathMatch: 'full' },
    //   { path: 'offers', component: ProductOfferComponent },
    //   { path: 'updates', component: ProductUpdatesComponent },
    // ],
  },
  // {
  //   path: 'about',
  //   component: AboutComponent,
  //   children: [
  //     { path: 'rating', outlet: 'rate', component: RatingComponent },
  //     { path: 'feedback', outlet: 'feed', component: FeedbackComponent },
  //   ],
  // },
  // { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
