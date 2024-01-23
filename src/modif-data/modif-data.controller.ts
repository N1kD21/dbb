import { Controller, Get, Param, Post } from '@nestjs/common';
import { ModifDataService } from './modif-data.service';

@Controller('modif-data')
export class ModifDataController {
  constructor(private readonly modifydataService: ModifDataService) {}

  @Get('/get/data')
  getData() {
    return this.modifydataService.getData();
  }

  @Get('/get/basicCoef')
  getBasicCoef() {
    return this.modifydataService.getBasicCoef();
  }

  @Post('basicCoefPut/:nameCoef/:id')
  update(@Param('nameCoef') nameCoef: string, @Param('id') id: string) {
    return this.modifydataService.putModifyCoef(nameCoef, id);
  }
}
