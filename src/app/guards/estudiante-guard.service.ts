import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class EstudianteGuardService implements CanActivate {

  realRol: string;

  constructor(private tokenService: TokenService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRol = route.data.expectedRol;
    const roles = this.tokenService.getAuthorities();
    this.realRol = 'ADMIN';

    roles.forEach(rol => {
      if(rol === 'ROLE_ADMIN'){
        this.realRol = 'ADMIN';
      }
      if(rol === 'ROLE_PROFESOR'){
        this.realRol = 'PROFESOR';
      }
    });

    if(!this.tokenService.getToken() || expectedRol.indexOf(this.realRol) === -1){
      this.router.navigate(['/dashboard']);
      return false;
    }

    return true;

  }

}

