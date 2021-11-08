import { Injectable } from '@nestjs/common';
import { SignupData } from './signup-data.dto';

@Injectable()
export class SignupService {
  authenticate(signupData: SignupData): boolean {
    return signupData.password == signupData.confirm_password;
    
  }
}
