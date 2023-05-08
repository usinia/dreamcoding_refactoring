class Person {
  #name;
  #gender;
  constructor(name, gender) {
    this.#name = name;
    this.#gender = gender;
  }

  get name() {
    return this.#name;
  }

  get gender() {
    return this.#gender;
  }

  get isMale() {
    return this.#gender === "M";
  }

  static create(record) {
    switch (record.gender) {
      case "M":
        return new Person(record.name, "M");
      case "F":
        return new Person(record.name, "F");
      default:
        return new Person(record.name, "X");
    }
  }
}

function loadFromInput(data) {
  const result = [];
  data.forEach((record) => {
    const person = Person.create(record);
    result.push(person);
  });
  return result;
}

const people = loadFromInput([
  { name: "엘리", gender: "F" },
  { name: "철수", gender: "M" },
  { name: "밥", gender: "M" },
]);
const numberOfMales = people.filter((p) => p.isMale).length;
console.log(numberOfMales);
