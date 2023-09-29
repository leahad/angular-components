import { Injectable } from  '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from  '@angular/router';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class AuthAdminGuard implements CanActivate {
  constructor(
    public userService: UserService,
    public router: Router
  ) {}

  canActivate(
    next:  ActivatedRouteSnapshot,
    state:  RouterStateSnapshot): any {
      if (this.userService.getRole() == "ADMIN") {
        return true;
      } else {
        this.router.navigate(['/home']);
        return false;
      }
    }
}

@Injectable({
  providedIn: 'root',
})

export class AuthLoginGuard implements CanActivate {
  constructor(
    public userService: UserService,
    public router: Router
  ) {}

  canActivate(
    next:  ActivatedRouteSnapshot,
    state:  RouterStateSnapshot): boolean {
      if (this.userService.getRole() == "ADMIN" || this.userService.getRole() == "USER") {
        return true;
      } else {
        this.router.navigate(['/home']);
        return false;
      }
    }
};

// Nouvelle façon de créer un guard => https://angular.io/guide/router-tutorial-toh
// export const authGuard = () => {
//   const userService = inject(UserService);
//   const router = inject(Router);
//   }

