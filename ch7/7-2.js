export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return [...this.#courses];
  }

  // set courses(courses) {
  //   this.#courses = courses;
  // }

  addCourse(course) {
    this.#courses.push(course);
  }
  removeCourse(course, runIfAbsent) {
    const index = this.#courses.indexOf(course);
    // if (index === -1) return;
    if (index === -1) {
      runIfAbsent && runIfAbsent();
      return;
    }
    this.#courses.splice(index, 1);
  }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const ellie = new Person("엘리");
// ellie.courses.push(new Course("리팩토링", true));
const course = new Course("리팩토링", true);
ellie.addCourse(course);
console.log(ellie.courses.length);
ellie.removeCourse(course, () => console.log("해당 코스는 없음"));
console.log(ellie.courses.length);
ellie.removeCourse({}, () => console.log("해당 코스는 없음"));
