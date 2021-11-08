import { Injectable } from '@nestjs/common';
import { LoginData } from './login-data.dto';

@Injectable()
export class LoginService {
  authenticate(loginData: LoginData): boolean {
    return loginData.email == loginData.password;
  }
}
