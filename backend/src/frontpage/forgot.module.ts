import { Module } from '@nestjs/common';
import { ForgotService } from './forgot.service';
import { ForgotController } from './forgot.controller';

@Module({
  providers: [ForgotService],
  controllers: [ForgotController]
})
export class ForgotModule {}
