import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { FlightListComponent } from './flight/flight-list/flight-list.component';
import { FlightSearchComponent } from './partial/flight-search/flight-search.component';
import { HotelSearchComponent } from './partial/hotel-search/hotel-search.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }, //default route
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'flight-search', component: FlightSearchComponent },
  { path: 'hotel-search', component: HotelSearchComponent },

  // {
  //   path: '',
  //   component: HomeComponent,
  //   children: [
  //     // { path: '', redirectTo: 'flight-search' },
  //     { path: '', redirectTo: '', pathMatch: 'full' },
  //     { path: '', component: FlightSearchComponent },
  //     { path: 'flight-search', component: FlightSearchComponent },
  //     { path: 'hotel-search', component: HotelSearchComponent },
  //     { path: '**', redirectTo: 'flight-search' },
  //   ],
  // },
  // {
  //   path: 'flight-list',
  //   component: FlightListComponent,
  //   // children: [
  //   //   { path: '', redirectTo: 'updates', pathMatch: 'full' },
  //   //   { path: 'updates', component: ProductUpdatesComponent },
  //   // ],
  // },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
