// composition (위임)
class Printer {
  #printerDelegate;
  constructor(printerDelegate) {
    this.#printerDelegate = printerDelegate;
  }
  print() {
    this.#printerDelegate
      ? this.#printerDelegate.print()
      : console.log("기본적인 출력!");
  }
}
class RedPrinter {
  print() {
    console.log("🔴 출력!");
  }
}
class BluePrinter {
  print() {
    console.log("🔵 출력!");
  }
}

const printers = [
  new Printer(),
  new Printer(new RedPrinter()),
  new Printer(new BluePrinter()),
];
printers.forEach((printer) => printer.print());
