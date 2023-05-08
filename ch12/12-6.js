class Employee {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get type() {
    return "engineer";
  }

  static createEmployee(name, type) {
    switch (type) {
      case "engineer":
        return new EngineerEmployee(name, type);
      case "manager":
        return new ManagerEmployee(name, type);
      case "salesperson":
        return new SalespersonEmployee(name, type);
      default:
        throw new Error(`${type}라는 직원 유형은 없습니다.`);
    }
  }

  toString() {
    return `${this.#name} (${this.type})`;
  }
}
class EngineerEmployee extends Employee {
  constructor(name) {
    super(name);
  }
  get type() {
    return "engineer";
  }
}
class ManagerEmployee extends Employee {
  constructor(name) {
    super(name);
  }
  get type() {
    return "manager";
  }
}
class SalespersonEmployee extends Employee {
  constructor(name) {
    super(name);
  }
  get type() {
    return "salesperson";
  }
}
const ellie = Employee.createEmployee("엘리", "engineer");
const bob = Employee.createEmployee("밥", "manager");
const usinia = new EngineerEmployee("유지니아");
const james = Employee.createEmployee("제임스", "salesperson");
console.log(ellie.toString());
console.log(bob.toString());
console.log(usinia.toString());
console.log(james.toString());
