import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaSerivce } from 'src/prisma.service';
import { CreateUserDto } from './dto/user.dto';
import { hash } from 'bcrypt';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaSerivce) {}

  async create(dto: CreateUserDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (user) throw new ConflictException('duplicate email!');

    const newUser = await this.prisma.user.create({
      data: {
        ...dto,
        password: await hash(dto.password, 10),
      },
    });

    const { password, ...result } = newUser;
    return result;
  }
}
