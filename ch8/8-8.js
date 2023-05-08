export function acquireData(input) {
  const lines = input.split("\n");
  let firstLine = true;
  const result = [];
  for (const line of lines) {
    if (firstLine) {
      firstLine = false;
      continue;
    }
    if (line.trim() === "") continue;
    const record = line.split(",");
    if (record[1].trim() === "India") {
      result.push({ city: record[0].trim(), phone: record[2].trim() });
    }
  }
  return result;
}

function acquireData2(input) {
  return input
    .split("\n")
    .filter((v, i) => i > 0 && !!v)
    .map((v) => {
      const [office, country, telephone] = v.split(",");
      return {
        office: office.trim(),
        country: country.trim(),
        telephone: telephone.trim(),
      };
    })
    .filter((v) => v.country === "India")
    .map((v) => ({ office: v.office, telephone: v.telephone }));
}

const input = `office, country, telephone\n
Chicago, USA, +1 312 373 1000\n
Beijing, China, +86 4008 900 505\n
Bangalore, India, +91 80 4064 9570\n
Porto Alegre, Brazil, +55 51 3079 3550\n
Chennai, India, +91 44 660 44766`;
const result = acquireData(input);
console.log(result);

const result2 = acquireData2(input);
console.log(result2);
