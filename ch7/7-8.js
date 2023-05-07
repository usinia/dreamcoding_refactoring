/**
 * composition, 중개자, 위임
 * class A 가 class B 를 포함할 때, B에게 데이터 핸들링을 위임하는 것
 * person A has Department B, A get department's information using B
 * extract: A 의 로직이 너무 크거나 비즈니스적으로 다를 땐 분리
 * inline: B 의 로직이 단순하거나 비즈니스 로직이 적을 땐 합침 (별도 역할이나 로직이 없을 때)
 */

class Person {
  #name;
  //   #department;
  #manager;
  #chargeCode;

  constructor(name, manager, chargeCode) {
    this.#name = name;
    // this.#department = department;
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get name() {
    return this.#name;
  }

  //   get department() {
  //     return this.#department;
  //   }

  //   set department(arg) {
  //     this.#department = arg;
  //   }

  get manager() {
    return this.#manager;
  }

  get chargeCode() {
    return this.#chargeCode;
  }
}

/*
export class Department {
  #manager;
  #chargeCode;
  constructor(manager, chargeCode) {
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get chargeCode() {
    return this.#chargeCode;
  }

  set chargeCode(arg) {
    this.#chargeCode = arg;
  }

  get manager() {
    return this.#manager;
  }

  set manager(arg) {
    this.#manager = arg;
  }
}
*/

// const person = new Person("Tom", new Department("aManager", "999"));
const person = new Person("Tom", "aManager", "999");
console.log(person.name);
console.log(person.manager);
console.log(person.chargeCode);
