import { find } from "lodash";

// 예제 1
function totalOutstandingAnd() {
  return customer.invoices.reduce((total, each) => each.amount + total, 0);
}

function sendBill() {
  // send bill
}

// 예제 2
export function alertForMiscreant(people, alarm) {
  const miscreant = findMiscreant(people);
  setOffAlarms(alarm, miscreant);
  return miscreant || "";
}

function findMiscreant(people) {
  return people.find((p) => p === "Don" || p === "John") || null;
}

function setOffAlarms(alarm, p) {
  alarm.setOff("Found Miscreant " + p);
}
