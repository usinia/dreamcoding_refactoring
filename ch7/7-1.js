class Organization {
  #name;
  #country;
  #data;
  constructor(data) {
    this.#name = data.name;
    this.#country = data.country;
    this.#data = data;
  }
  get name() {
    return this.#name;
  }
  set name(value) {
    this.#name = value;
  }
  get country() {
    return this.#country;
  }
  set country(value) {
    this.#country = value;
  }
  get rawData() {
    // return { ...this.#data };
    return { name: this.#name, country: this.#country };
  }
}

// const organization = { name: "Acme Gooseberries", country: "GB" };
const organization = new Organization({
  name: "Acme Gooseberries",
  country: "GB",
});

organization.name = "Dream Coding";
console.log(organization.name);
console.log(organization.country);
