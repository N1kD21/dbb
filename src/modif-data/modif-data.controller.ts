import { Controller, Get } from '@nestjs/common';
import { ModifDataService } from './modif-data.service';

@Controller('modif-data')
export class ModifDataController {
  constructor(private readonly modifdataService: ModifDataService) {}

  @Get('/get/data')
  getData() {
    return this.modifdataService.getData();
  }

  @Get('/get/basicCoef')
  getBasicCoef() {
    return this.modifdataService.getBasicCoef();
  }
}
