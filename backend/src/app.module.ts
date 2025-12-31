import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DbModule } from './db/db.module';
import { TecnologiaModule } from './tecnologia/tecnologia.module';
import { ProjetoModule } from './projeto/projeto.module';

@Module({
  imports: [DbModule, TecnologiaModule, ProjetoModule],
  controllers: [AppController],
})
export class AppModule {}
