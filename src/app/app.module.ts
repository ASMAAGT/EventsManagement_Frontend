import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './View/Authentification/login/login.component';
import { AuthentificationComponent } from './View/Authentification/authentification.component';
import { RegisterComponent } from './View/Authentification/register/register.component';
import { HomeComponent } from './View/home/home.component';
import { ErrorPageComponent } from './View/error-page/error-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthentificationComponent,
    RegisterComponent,
    HomeComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
