import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModifDataService } from './modif-data/modif-data.service';
import { ModifDataController } from './modif-data/modif-data.controller';

@Module({
  imports: [],
  controllers: [AppController, ModifDataController],
  providers: [AppService, ModifDataService],
})
export class AppModule {}
