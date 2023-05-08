export class Site {
  constructor(customer) {
    this._customer = customer;
  }

  get customer() {
    return this._customer;
  }
}

export class Customer {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get billingPlan() {
    //
  }

  set billingPlan(arg) {
    //
  }

  get paymentHistory() {
    //
  }
}

class UnknownCustomer extends Customer {
  get name() {
    return "occupant";
  }
}

// 사용하는 부분
export function customerName(site) {
  // const aCustomer = site.customer;
  // // 더 많은 코드가 여기에 있음
  // let customerName;
  // if (aCustomer === "unknown") customerName = "occupant";
  // else customerName = aCustomer.name;

  // return customerName;
  const customer =
    site.customer === "unknown"
      ? new UnknownCustomer()
      : new Customer(site.customer.name);
  return customer.name;
}

console.log(customerName({ customer: { name: "usinia" } }));
console.log(customerName({ customer: "unknown" }));

// ------ ellie
class Hotel {
  constructor() {
    this.rooms = [];
  }
  addRoom(roomNumber) {
    this.rooms[roomNumber] = new Room(roomNumber);
  }
  emptyRoom(roomNumber) {
    // this.rooms[roomNumber] = null;
    this.rooms[roomNumber] = new EmptyRoom(roomNumber);
  }
  cleanRooms() {
    this.rooms.forEach((room) => room.clean());
  }
}
class Room {
  constructor(roomNumber) {
    this.roomNumber = roomNumber;
  }
  clean() {
    console.log(`${this.roomNumber} 깨끗히 청소합니다.`);
  }
}
class EmptyRoom extends Room {
  constructor(roomNumber) {
    super(roomNumber);
  }
  clean() {
    console.log(`${this.roomNumber} 비어 있어요~`);
  }
}

const hotel = new Hotel();
hotel.addRoom(101);
hotel.addRoom(102);
hotel.cleanRooms();
hotel.emptyRoom(101);
hotel.cleanRooms();
