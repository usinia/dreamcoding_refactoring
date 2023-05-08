{
  class Printer {
    private printerHeader: PrirnterHeader;
    constructor(printerHeader?: PrirnterHeader) {
      this.printerHeader = printerHeader
        ? printerHeader
        : new DefaultPrinterHeader();
    }
    print(): void {
      this.printerHeader.print();
    }
  }
  interface PrirnterHeader {
    print(): void;
  }
  class DefaultPrinterHeader implements PrirnterHeader {
    print() {
      console.log("기본적인 출력!");
    }
  }
  class RedPrinter implements PrirnterHeader {
    print(): void {
      console.log("🔴 출력!");
    }
  }
  class BluePrinter implements PrirnterHeader {
    print(): void {
      console.log("🔵 출력!");
    }
  }

  const printers = [
    new Printer(),
    new Printer(new RedPrinter()),
    new Printer(new BluePrinter()),
  ];
  printers.forEach((printer) => printer.print());
}
