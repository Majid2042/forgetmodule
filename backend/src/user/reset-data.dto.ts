import { IsEmail, IsNotEmpty } from "class-validator";

export class ResetDataDto{
    @IsEmail()
    email: string;
}
