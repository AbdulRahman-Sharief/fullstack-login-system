import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaSerivce } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [UserService, PrismaSerivce, JwtService],
  controllers: [UserController],
})
export class UserModule {}
