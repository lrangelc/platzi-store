import { Injectable, Provider } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private httpClient: HttpClient
  ) {}

  createUser(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

  login(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  logout(): Promise<void> {
    return this.angularFireAuth.signOut();
  }

  hasUser(): Observable<firebase.User> {
    return this.angularFireAuth.authState;
  }

  loginRestAPI(email: string, password: string) {
    return this.httpClient
      .post('https://platzi-store.herokuapp.com/auth', {
        email,
        password,
      })
      .pipe(
        tap((data: any) => {
          const token = data.token;
          this.saveToken(token);
        })
      );
  }

  saveToken(token: string): void {
    localStorage.setItem('ACCESS_TOKEN', token);
  }

  getToken(): string {
    return localStorage.getItem('ACCESS_TOKEN');
  }
}
