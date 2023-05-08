export class Employee {
  constructor(name, typeCode) {
    // instance 만드는 로직을 캡슐화하고, 외부에서는 손쉽고 간결하게 instance 생성하기 위해 factory 함수 사용
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: "Engineer", M: "Manager", S: "Salesman" };
  }

  //  factory 함수
  static createEngineer(name) {
    return new Employee(name, "E");
  }

  static createSeniorEngieer(name) {
    return new Employee(name, "SE");
  }

  static createMarketer(name) {
    return new Employee(name, "M");
  }
}

const employee = Employee.createEngineer("usinia");
console.log(employee);
