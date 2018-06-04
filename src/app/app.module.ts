import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ServiceWorkerModule } from '@angular/service-worker';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';

import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { environment } from '../environments/environment';
import { LoginComponent } from './auth/login/login.component';

import { AuthService } from './auth/services/auth.service';
import { AuthGuard } from './auth/services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    NgProgressModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgProgressRouterModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    NgxAuthFirebaseUIModule.forRoot( environment.firebase ),
    LayoutModule,
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
