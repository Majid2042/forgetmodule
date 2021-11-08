import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDataDto } from './auth-data.dto';
import { CreateUserDto } from './create-user.dto';
import { SetPasswordDto } from './set-password.dto';
import { UserDto } from './user.dto';
import { ResetDataDto } from './reset-data.dto';
import { ResetDto } from './reset.dto';

const bcrypt = require('bcrypt');
const randomstring = require('randomstring');

@Injectable()
export class UserService {

    private static SALT_ROUNDS = 10;
    private static _10Days = 1000 * 60 * 60 * 24 * 10;

    constructor(private prisma: PrismaService) { }

    async create(userDto: CreateUserDto): Promise<UserDto> {
        return await this.prisma.user.create({
            data: {
                ...userDto,
                otp: randomstring.generate(),
                otpExpiry: new Date(new Date().getTime() + UserService._10Days),
            }
        });
    }

    async setPassword(dto: SetPasswordDto): Promise<void> {
        await this.prisma.user.update({
            where: {
                email: dto.email
            },
            data: {
                password: await bcrypt.hash(dto.password, UserService.SALT_ROUNDS),
                otp: null,
                otpExpiry: null
            }
        });
    }

    async findByEmail(email: string): Promise<UserDto> {
        return await this.prisma.user.findUnique({
            where: { email }
        })
    }

    async forgot(resetDto: ResetDataDto): Promise<ResetDto> {
        return await this.prisma.user.update({
            where: {
                email: resetDto.email
            },
            data: {
                ...resetDto,
                
                otpExpiry: new Date(new Date().getTime() + UserService._10Days),
            }
        });
    }

    

    async authenticate(authData: AuthDataDto): Promise<UserDto> {
        const user = await this.prisma.user.findUnique({
            where: { email: authData.email }
        });

        if (user.password &&
            await bcrypt.compare(authData.password, user.password))
            return user;
        else
            return null;
    }
}
