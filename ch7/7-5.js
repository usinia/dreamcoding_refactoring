class Person {
  #name;
  #telephone;
  constructor(name, areaCode, number) {
    this.#name = name;
    this.#telephone = new Telephone(areaCode, number);
  }
  get name() {
    return this.#name;
  }
  set name(arg) {
    this.#name = arg;
  }
  get telephoneNumber() {
    return this.#telephone.telephoneNumber;
  }
  get officeAreaCode() {
    return this.#telephone.officeAreaCode;
  }
  get officeNumber() {
    return this.#telephone.officeNumber;
  }
}

class Telephone {
  #officeAreaCode;
  #officeNumber;
  constructor(areaCode, number) {
    this.#officeAreaCode = areaCode;
    this.#officeNumber = number;
  }
  get telephoneNumber() {
    return `(${this.officeAreaCode}) ${this.officeNumber}`;
  }
  get officeAreaCode() {
    return this.#officeAreaCode;
  }
  set officeAreaCode(arg) {
    this.#officeAreaCode = arg;
  }
  get officeNumber() {
    return this.#officeNumber;
  }
  set officeNumber(arg) {
    this.#officeNumber = arg;
  }
}

const person = new Person("엘리", "010", "12345678");
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);

const telephone = new Telephone("010", "98765432");
console.log(telephone.telephoneNumber);
