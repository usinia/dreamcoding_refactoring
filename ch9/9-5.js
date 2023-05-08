const customerRepository = new CustomerRepository();
const order = new Order(
  data.number,
  customerRepository.registerCustomer(data.customerId)
);

class Order {
  constructor(data, customer) {
    this._number = data.number;
    this._customer = customer;
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }
}

class CustomerRepository {
  #customer;
  constructor() {
    this.#customer = new Map();
  }
  registerCustomer(id) {
    if (!this.#customer.has(id)) {
      this.#customer.set(id, new Customer(id));
    }
    return findCustomer(id);
  }
  findCustomer(id) {
    return this.#customer.get(id);
  }
}
