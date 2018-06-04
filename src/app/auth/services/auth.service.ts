import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable, UnsubscriptionError } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {

  user: firebase.User;
  user$: Observable<firebase.User>;
  currentUser: firebase.User;
  auth: firebase.auth.Auth;
  isLoggedIn = false;
  // isAdmin: false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(public afAuth: AngularFireAuth, private _router: Router) {
    this.auth = afAuth.auth;
    this.user$ = afAuth.authState;

    this.user$.subscribe( user => {
      this.user = user;
      this.isLoggedIn = false;
      if ( user !== null ) {
        this.goRoute( user );
      }
    });

    this.auth.onAuthStateChanged(
      (user: firebase.User) => {
        if ( user !== null && this.user.uid !== user.uid ) {
          this.user = user;
          this.goRoute( user );
        }
      },
      (error) => { console.log('authStateChanged: Error: ', error); },
      () => {
        console.log('authStateChanged: ');
        return null;
      }
    );

    this.auth.onIdTokenChanged((user: firebase.User) => {
      if (user) {
        // User is signed in or token was refreshed.
        console.log('onIdTokenChanged: ' + user.getIdToken());
      }
    });
  }

  getUser() {
    return this.user;
  }

  goRoute( user: firebase.User ) {
    if ( this.redirectUrl !== undefined ) {
      this._router.navigate([this.redirectUrl]);
    } else {
      this._router.navigate(['/app']);
    }
  }

  isLogged() {
    if (localStorage.getItem('isLoggedin')) {
      return true;
    }
    return false;
  }

  logout(): void {
    if ( this.auth.currentUser != null ) {
      this.isLoggedIn = false;
      this.auth.signOut();
      this._router.navigate(['/login']);

      if ( !environment.production ) {
        console.log('logout:' + this.auth.currentUser.uid);
      }
    }
  }

  debugUser( user: firebase.User ) {
    if ( environment.production ) {
      return;
    }

    if ( user !== null ) {
      console.log(`User: \n` +
        ` uid: ` + user.uid +
        `, anony: ` + user.isAnonymous +
        `, email: ` + user.email +
        `, emailVerified: ` + user.emailVerified +
        `, providerId: ` + user.providerId +
        `, providerData: ` + user.providerData +
        `, redirectUrl: ` + this.redirectUrl);
    } else {
      console.log('authStateChanged: user: ' + user);
    }
  }
}
