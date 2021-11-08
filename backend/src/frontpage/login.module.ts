import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { ForgotModule } from './forgot.module';

@Module({
  providers: [LoginService],
  controllers: [LoginController],
  imports: [ForgotModule]
})
export class LoginModule {}
