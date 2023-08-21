import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class SaleryService {
  baseSalery: number = 50000;
  year: number = 365 * 86400000;
  accum: number = 0;
  data: Array<any>;
  basicCoef: any;
  bonusCoef: number = 0;
  yearCoef: number = 0;
  bonusSubCoef: number = 0;

  constructor(data: Array<any>, basicCoef: any) {
    this.data = data;
    this.basicCoef = basicCoef;
  }

  detectionDepartment(el: any) {
    this.bonusCoef = this.basicCoef[el.department + 'Bonus'];
    this.yearCoef = this.basicCoef[el.department + 'Year'];
    // eslint-disable-next-line prettier/prettier
    if (this.basicCoef[el.department + 'BonusSub']) this.bonusSubCoef = this.basicCoef[el.department + 'BonusSub'];
  }

  takingElement(name: string) {
    const el = this.data.find((el) => el.name === name);
    if (el !== undefined) {
      return this.data.find((el) => el.name === name);
    }
    throw new BadRequestException('Wrong name');
  }

  dateCalculation(el: any) {
    const res = Math.trunc((Date.now() - el.joinDate) / this.year);
    return res;
  }

  increaseSalary(el: any) {
    const maxIncrease = this.baseSalery * this.yearCoef;
    // eslint-disable-next-line prettier/prettier
    const increase = this.bonusCoef * this.baseSalery * this.dateCalculation(el);
    if (maxIncrease < increase) return maxIncrease;
    return increase;
  }

  salaryCalculation(name: string) {
    const el = this.takingElement(name);
    this.detectionDepartment(el);
    let resultSalery = this.baseSalery + this.increaseSalary(el);
    if (el.subordinates) {
      for (let i = 0; i < el.subordinates.length; i++) {
        const subName = el.subordinates[i].name;
        this.accum += this.salaryCalculation(subName) * this.bonusSubCoef;
      }
      if (this.accum < this.baseSalery * this.yearCoef) {
        resultSalery += this.accum;
      } else {
        resultSalery += this.baseSalery * this.yearCoef;
      }
      this.accum = 0;
    }
    return resultSalery;
  }
}
