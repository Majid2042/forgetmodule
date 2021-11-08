import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { SignupData } from './signup-data.dto';
import { SignupService } from './signup.service';

@Controller('/api')
export class SignupController {

    constructor(private signupService: SignupService) {}

    @Post('/signup')
    authenticate(@Body() signupData: SignupData) {
        if (this.signupService.authenticate(signupData)){
            return {
                message: 'You are authorized',
            };
        }
        throw new BadRequestException();
    }
}
