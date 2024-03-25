import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  async signInWithPhoneNumber(phoneNumber: string, appVerifier: any) {
    try {
      const result = await this.afAuth.signInWithPhoneNumber(phoneNumber, appVerifier);
      return result;
    } catch (error) {
      console.error('Error signing in with phone number:', error);
      throw error;
    }
  }

  async verifyPhoneNumber(code: string, confirmationResult: any) {
    try {
      const result = await confirmationResult.confirm(code);
      return result;
    } catch (error) {
      console.error('Error verifying phone number:', error);
      throw error;
    }
  }

  async signOut() {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  }
}
