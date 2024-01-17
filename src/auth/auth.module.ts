import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { PrismaSerivce } from 'src/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService, PrismaSerivce],
})
export class AuthModule {}
