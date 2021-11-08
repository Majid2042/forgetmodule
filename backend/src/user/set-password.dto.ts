import { IsEmail, IsNotEmpty } from "class-validator"

export class SetPasswordDto {
    @IsEmail()
    email: string

    @IsNotEmpty()
    otp: string

    @IsNotEmpty()
    password: string
}
