import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/User';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [AuthenticationController],
    providers: [AuthenticationService]
})
export class AuthenticationModule {}
