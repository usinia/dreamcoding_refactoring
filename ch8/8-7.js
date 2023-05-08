export function reportYoungestAgeAndTotalSalary(people) {
  return `youngestAge: ${youngestAge()}, totalSalary: ${totalSalary()}`;

  function youngestAge() {
    const youngest = Math.min(...people.map((p) => p.age));
    // let youngest = people[0] ? people[0].age : Infinity;
    // for (const p of people) {
    //   if (p.age < youngest) youngest = p.age;
    // }
    return youngest;
  }

  function totalSalary() {
    const totalSalary = people.reduce((total, p) => (total += p.salary), 0);
    // let totalSalary = 0;
    // for (const p of people) {
    //   totalSalary += p.salary;
    // }
    return totalSalary;
  }
}
