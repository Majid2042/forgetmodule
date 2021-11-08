
import { ResetDataDto } from "./reset-data.dto";

export class ResetDto extends ResetDataDto {
    id: number;
    otp?: string; 
    otpExpiry?: Date
}
