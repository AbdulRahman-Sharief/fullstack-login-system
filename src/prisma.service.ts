import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaSerivce extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    console.log(`The module has been initialized.`);
    await this.$connect();
    console.log('Prisma connected to the database ...');
  }
}
