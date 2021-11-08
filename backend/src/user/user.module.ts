import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { MailModule } from '../mail/mail.module';


@Module({
    providers: [UserService],
    imports: [PrismaModule, MailModule],
    exports: [UserService],
    controllers: [UserController]
})
export class UserModule { }
