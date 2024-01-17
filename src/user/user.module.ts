import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaSerivce } from 'src/prisma.service';

@Module({
  providers: [UserService, PrismaSerivce],
  controllers: [UserController],
})
export class UserModule {}
