import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { RegisterDto } from 'src/dto/RegisterDto';
import { LoginDto } from 'src/dto/LoginDto';

@Controller('authentication')
export class AuthenticationController {
    constructor(private readonly authService: AuthenticationService){}

    @Post('register')
    async register(@Body() registerDto: RegisterDto){

    }
    @Post('login')
    async login(@Body() loginDto: LoginDto){

    }
}
