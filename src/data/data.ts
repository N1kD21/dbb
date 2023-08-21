const data = [
  {
    department: 'Employee',
    name: 'John Doe',
    joinDate: new Date('2020-01-15'),
    baseSalary: 50000,
    supervisor: null,
    subordinates: [],
  },
  {
    department: 'Manager',
    name: 'Jane Smith',
    joinDate: new Date('2018-05-10'),
    baseSalary: 50000,
    supervisor: null,
    subordinates: [{ name: 'Alex Johnson' }, { name: 'Emily Brown' }],
  },
  {
    department: 'Manager',
    name: 'Alex Johnson',
    joinDate: new Date('2022-03-20'),
    baseSalary: 50000,
  },
  {
    department: 'Manager',
    name: 'Emily Brown',
    joinDate: new Date('2021-07-08'),
    baseSalary: 50000,
  },
  {
    department: 'Sales',
    name: 'Sam Rogers',
    joinDate: new Date('2019-11-02'),
    baseSalary: 50000,
    supervisor: null,
    subordinates: [
      { name: 'Lisa Taylor' },
      { name: 'Michael Clark', subordinates: [{ name: 'Sophia Adams' }] },
    ],
  },
  {
    department: 'Sales',
    name: 'Lisa Taylor',
    joinDate: new Date('2020-09-18'),
    baseSalary: 50000,
    subordinates: [],
  },
  {
    department: 'Sales',
    name: 'Michael Clark',
    joinDate: new Date('2022-01-05'),
    baseSalary: 50000,
    subordinates: [
      {
        name: 'Sophia Adams',
      },
    ],
  },
  {
    department: 'Sales',
    name: 'Sophia Adams',
    joinDate: new Date('2023-03-10'),
    baseSalary: 50000,
    subordinates: [],
  },
];

const basicCoef = {
  EmployeeBonus: 0.03,
  EmployeeYear: 0.3,
  ManagerBonus: 0.05,
  ManagerYear: 0.4,
  ManagerBonusSub: 0.005,
  SalesBonus: 0.01,
  SalesYear: 0.35,
  SalesBonusSub: 0.003,
};

export { basicCoef, data };
