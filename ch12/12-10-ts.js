{
    var Printer = /** @class */ (function () {
        function Printer(printerHeader) {
            this.printerHeader = printerHeader;
            this.printerHeader = printerHeader;
        }
        Printer.prototype.print = function () {
            this.printerHeader
                ? this.printerHeader.print()
                : console.log("기본적인 출력!");
        };
        return Printer;
    }());
    var RedPrinter = /** @class */ (function () {
        function RedPrinter() {
        }
        RedPrinter.prototype.print = function () {
            console.log("🔴 출력!");
        };
        return RedPrinter;
    }());
    var BluePrinter = /** @class */ (function () {
        function BluePrinter() {
        }
        BluePrinter.prototype.print = function () {
            console.log("🔵 출력!");
        };
        return BluePrinter;
    }());
    var printers = [
        new Printer(),
        new Printer(new RedPrinter()),
        new Printer(new BluePrinter()),
    ];
    printers.forEach(function (printer) { return printer.print(); });
}
