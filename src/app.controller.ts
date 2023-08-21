import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { basicCoef, data } from './data/data';
import { SaleryService } from './salery/salery.service';

@Controller('salery')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get/:name')
  getSalery(@Param('name') name: string) {
    const salery = new SaleryService(data, basicCoef);
    return salery.salaryCalculation(name);
  }

  @Get('all')
  getAll() {
    const salery = new SaleryService(data, basicCoef);
    let accum: number = 0;
    salery.data.forEach((el) => {
      accum += salery.salaryCalculation(el.name);
    });
    return accum;
  }
}
