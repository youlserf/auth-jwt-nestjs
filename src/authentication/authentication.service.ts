import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDto } from 'src/dto/LoginDto';
import { RegisterDto } from 'src/dto/RegisterDto';
import { User } from 'src/entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class AuthenticationService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ){}

    async register(registerDto: RegisterDto) {
        // Implementation for user registration
      }
    
      async login(loginDto: LoginDto) {
        // Implementation for user login
      }
}
