import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { distinctUntilChanged } from 'rxjs/operators';

import { UserService } from '@ng-mfe/shared/data-access-user';

@Component({
  selector: 'ng-mfe-root',
  template: `
    <div *ngIf="isLoggedIn$ | async; else signIn">
      You are authenticated so you can see this content.
    </div>
    <ng-template #signIn><router-outlet></router-outlet></ng-template>
  `,
  styles: [``],
})
export class AppComponent implements OnInit {
  isLoggedIn$ = this.userService.isUserLoggedIn$;
  isUserMsb$ = this.userService.isUserMsb$;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.isLoggedIn$
      .pipe(distinctUntilChanged())
      .subscribe(async () => {
        // if (!loggedIn) {
          this.router.navigateByUrl('login');
          // this.router.navigateByUrl('msb01');

        // } else {
        //   this.router.navigateByUrl('');
        // }
      });
  }
}
