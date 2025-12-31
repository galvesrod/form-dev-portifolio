import { Module } from '@nestjs/common';
import { PrismaProvider } from './prisma.provider/prisma.provider';
import { PrismaProvider } from './prisma.provider';

@Module({
  providers: [PrismaProvider]
})
export class DbModule {}
