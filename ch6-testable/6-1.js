export function printOwing(invoice, console, clock) {
  printBanner(console);
  let outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice, clock);
  printDetails(invoice, outstanding, console);
}
function printBanner(console) {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
}
function calculateOutstanding(invoice) {
  return invoice.orders.reduce((result, o) => (result += o.amount), 0);
}
function recordDueDate(invoice, clock) {
  // record due date
  const today = clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}
function printDetails(invoice, outstanding, console) {
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
