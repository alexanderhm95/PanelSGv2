import { TokenInformation } from '@/app/core/interfaces/interface-token';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  // Injection of JwtHelperService
  constructor(private jwtHelper: JwtHelperService) {}

  // verifies if the token is expired
  public isTokenExpired(token: string): boolean {
    return this.jwtHelper.isTokenExpired(token);
  }

  public destroyToken(): void {
    localStorage.removeItem('token');
  }

  // returns the expiration date of the token
  getTokenExpirationDate(token: string): Date | null {
    const decodedToken = this.jwtHelper.decodeToken(token);
    const exp = decodedToken && decodedToken.exp;

    if (exp) {
      const expirationDate = new Date(0);
      expirationDate.setUTCSeconds(exp);
      return expirationDate;
    }

    return null;
  }

  // returns the token information
  public getTokenInformation(token: string): TokenInformation | null {
    const decoded = this.jwtHelper.decodeToken(token);

    if (!decoded.exp) {
      return null;
    }
    const dateNow = new Date();
    const expiresAt = this.getTokenExpirationDate(token);
    if (!expiresAt) {
      return null;
    }
    const timeLeft: number = expiresAt.getTime() - dateNow.getTime();
    return {
      exp: decoded.exp,
      iat: decoded.iat,
      name: decoded.name,
      role: decoded.role,
      user: decoded.user,
      institution: decoded.institution,
      dateNow: dateNow,
      expiresAt: expiresAt,
      timeLeft: timeLeft,
    };
  }
}
