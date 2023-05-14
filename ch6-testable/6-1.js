export function printOwing(invoice, console, clock) {
  let outstanding = 0;

  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");

  // calculate outstanding
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // record due date
  const today = clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  //print details
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

class Clock {
  constructor() {}
  get today() {
    return new Date();
  }
}
const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: "엘리",
};
printOwing(invoice, console, new Clock());
