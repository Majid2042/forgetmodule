import { IsEmail, IsNotEmpty } from "class-validator";

export class AuthDataDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}
