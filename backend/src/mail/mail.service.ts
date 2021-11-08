import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../user/create-user.dto';
import { ResetDataDto } from 'src/user/reset-data.dto';

@Injectable()
export class MailService {

    constructor(private mailerService: MailerService) { }

    async sendUserConfirmation(dto: CreateUserDto, uri: string) {
        await this.mailerService.sendMail({
            to: dto.email,
            subject: 'Smart MCQs: Welcome to Smart MCQs',
            template: './user-confirmation',
            context: {
                ...dto,
                uri
            }
        });
    }
    async sendPasswordConfirmation(resetdto: ResetDataDto, uri: string) {
        await this.mailerService.sendMail({
            to: resetdto.email,
            subject: 'Smart MCQs: Welcome to Smart MCQs',
            template: './password-confirmation',
            context: {
                ...resetdto,
                uri
            }
        });
    }

}

