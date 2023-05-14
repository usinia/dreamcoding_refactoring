import { printOwing } from "../6-1";

describe("printOwing", () => {
  it("should print owing", () => {
    const invoice = {
      orders: [{ amount: 2 }, { amount: 5 }],
      customer: "엘리",
    };
    const expected =
      "***********************\n" +
      "**** Customer Owes ****\n" +
      "***********************\n" +
      "name: 엘리\n" +
      "amount: 7\n" +
      "due: 6/13/2023\n";
    expect(printOwing(invoice)).toBe(expected);
  });
});
