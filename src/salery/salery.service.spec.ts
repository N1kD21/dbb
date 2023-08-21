import { SaleryService } from './salery.service';
import { basicCoef, data } from '../data/data';

describe('SaleryService', () => {
  const salery = new SaleryService(data, basicCoef);

  it('should be ', () => {
    expect(salery.salaryCalculation('John Doe')).toBe(54500);
  });

  it('should be ', () => {
    expect(salery.salaryCalculation('Sam Rogers')).toBe(51805.410377);
  });

  it('should be ', () => {
    expect(salery.salaryCalculation('Jane Smith')).toBe(63037.5);
  });
});
