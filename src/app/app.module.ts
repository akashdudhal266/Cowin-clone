import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginModule } from './login/login.module';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { SearchModule } from './search/search.module';

const appRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },

  {
    path: 'search',
    loadChildren: () =>
      import('./search/search.module').then((m) => m.SearchModule),
  },
];
@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AccordionModule,
    BrowserAnimationsModule,
    CardModule,
    LoginModule,
    RouterModule.forRoot(appRoutes),
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SearchModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
