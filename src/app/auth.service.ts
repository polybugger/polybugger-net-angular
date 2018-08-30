import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  protected _state = false;

  constructor() {  }

  public isSignedIn(): boolean {
    return this._state;
  }

  public signIn(userName: string, password: string): boolean {
    this._state = true;
    return true;
  }

  public signOut() {
    this._state = false;
  }
}
