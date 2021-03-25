import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/main/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ActivityComponent } from './components/activity/activity.component';
import { AboutComponent } from './components/about/about.component';
import { DetailsComponent } from './components/details/details.component';

registerLocaleData(localeEs, 'es')

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ActivityComponent,
    AboutComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
