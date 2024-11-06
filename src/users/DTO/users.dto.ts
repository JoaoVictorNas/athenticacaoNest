import { IsBoolean, IsEmail, IsNotEmpty, isNotEmpty, IsString } from "class-validator"

export class UserDTO {
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    password: string

    @IsNotEmpty()
    role: string

    @IsNotEmpty()
    @IsBoolean()
    isActive: boolean
}