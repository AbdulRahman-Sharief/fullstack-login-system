import {
  Body,
  Controller,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { RefreshJWTGuard } from './guards/refresh.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}
  @Post('register')
  async registerUser(@Body() dto: CreateUserDto) {
    return await this.userService.create(dto);
  }

  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }
  @UseGuards(RefreshJWTGuard)
  @Post('refresh')
  async refreshToken(@Request() req) {
    console.log('refreshed');
    return await this.authService.refreshToken(req.user);
  }
}
