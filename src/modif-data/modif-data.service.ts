import { Injectable } from '@nestjs/common';
import { basicCoef, data } from '../data/data';

@Injectable()
export class ModifDataService {
  constructor() {}

  getData() {
    return data;
  }

  getBasicCoef() {
    return basicCoef;
  }
}
