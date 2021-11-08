import { Injectable } from '@nestjs/common';
import { ForgotData } from './forgot-data.dto';

@Injectable()
export class ForgotService {
  authenticate(forgotData: ForgotData): boolean {
    return ;
  }
}

