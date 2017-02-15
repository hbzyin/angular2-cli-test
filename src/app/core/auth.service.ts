import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }
  loginWithCredentials(name: string, password: string): boolean {
    if(name === 'admin')
      return true;
    return false;
  }
}
