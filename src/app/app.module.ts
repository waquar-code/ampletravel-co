import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './partial/header/header.component';
import { FooterComponent } from './partial/footer/footer.component';
import { SubscribeEmailComponent } from './partial/subscribe-email/subscribe-email.component';
import { HomeSearchComponent } from './partial/home-search/home-search.component';
import {
  APP_BASE_HREF,
  HashLocationStrategy,
  LocationStrategy,
} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    SubscribeEmailComponent,
    HomeSearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NoopAnimationsModule],
  // providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
