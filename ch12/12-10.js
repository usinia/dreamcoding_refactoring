// 상속 : 다중 상속 불가능, 비즈니스 로직이 많이 다르고 연관성이 떨어질 때 수정/확장이 어려움
class Printer {
  print() {
    console.log("기본적인 출력!");
  }
}
class Network {
  send() {
    console.log("send network...");
  }
}
class RedPrinter extends Printer {
  print() {
    console.log("🔴 출력!");
  }
}

const printers = [new Printer(), new RedPrinter()];
printers.forEach((printer) => printer.print());
