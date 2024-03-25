import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-login.component.html',
  styleUrl: './app-login.component.scss'
})
export class AppLoginComponent {
  phoneNumber: string = '';
  verificationCode: string = '';
  confirmationResult: any;

  constructor(private authService: AuthService) { }

  async signInWithPhoneNumber() {
    try {
      const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
      this.confirmationResult = await this.authService.signInWithPhoneNumber(this.phoneNumber, appVerifier);
    } catch (error) {
      console.error('Error signing in with phone number:', error);
    }
  }

  async verifyPhoneNumber() {
    try {
      await this.authService.verifyPhoneNumber(this.verificationCode, this.confirmationResult);
    } catch (error) {
      console.error('Error verifying phone number:', error);
    }
  }
}
