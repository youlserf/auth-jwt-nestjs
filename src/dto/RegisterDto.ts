import { IsEmail, IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';
export class RegisterDto {
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsNotEmpty()
    @IsEmail()
    email: string;
  
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    password: string;
  }