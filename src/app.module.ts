import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaSerivce } from './prisma.service';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaSerivce],
})
export class AppModule {}
