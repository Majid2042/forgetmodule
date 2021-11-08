import { CreateUserDto } from "./create-user.dto";

export class UserDto extends CreateUserDto {
    id: number;
    otp?: string
    otpExpiry?: Date
}
