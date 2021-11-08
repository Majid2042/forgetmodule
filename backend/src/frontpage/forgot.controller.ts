import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { ForgotData } from './forgot-data.dto';
import { ForgotService } from './forgot.service';

@Controller('api/forgot')
export class ForgotController {

    constructor(private forgotService: ForgotService) {}

    @Post()
    authenticate(@Body() forgotData: ForgotData) {
        if (this.forgotService.authenticate(forgotData)){
            return {
                message: 'You are authorized',
            };
        }
        throw new BadRequestException();
    }
}
