import { Component } from '@angular/core';
import { UserService } from '@ng-mfe/shared/data-access-user';

@Component({
  selector: 'ng-mfe-login-entry',
  template: `
    <div class="login-app">
      <form class="login-form" (ngSubmit)="login()">
        <h1>Here page login text with login</h1>
        <label>
          Username:
          <input type="text" name="username" [(ngModel)]="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" [(ngModel)]="password" />
        </label>
        <!-- <button><a mat-button href="https://www.google.com/" target="_blank">Link</a></button> -->
        <button type="submit" [routerLink]="'123123'">Login</button>
      </form>
      <div *ngIf="isLoggedIn$ | async">User is logged in!</div>
    </div>
  `,
  styles: [
    `
      .login-app {
        width: 30vw;
        border: 2px dashed black;
        padding: 8px;
        margin: 0 auto;
      }
      .login-form {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 0 auto;
        padding: 8px;
      }
      label {
        display: block;
      }
    `,
  ],
})
export class RemoteEntryComponent {
  username = '';
  password = '';

  isLoggedIn$ = this.userService.isUserLoggedIn$;

  constructor(private userService: UserService) { }

  login() {
    this.userService.checkCredentials(this.username, this.password);
  }
}
