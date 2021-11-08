
export interface AuthDto {
    email: string
    password: string
}

export interface SignupDto {
    email: string
    firstName: string;
    lastName: string;
}

export interface SetPasswordDto {
    otp: string;
    email: string;
    password: string;
    confirmPassword?: string;
}

export interface ForgotDto {
    email: string;
}