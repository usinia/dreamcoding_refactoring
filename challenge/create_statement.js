class Performance {
  #audience;
  #play;
  constructor(audience, play) {
    this.#audience = audience;
    this.#play = play;
  }

  get audience() {
    return this.#audience;
  }

  get play() {
    return this.#play;
  }

  get credit() {
    let result = 0;
    result += Math.max(this.#audience - 30, 0);
    // 희극 관객 5명마다 추가 포인트를 제공한다.
    if ("comedy" === this.#play.type) result += Math.floor(this.#audience / 5);
    return result;
  }

  get amount() {
    let result = 0;
    switch (this.#play.type) {
      case "tragedy": // 비극
        result = 40000;
        if (this.#audience > 30) {
          result += 1000 * (this.#audience - 30);
        }
        break;
      case "comedy": // 희극
        result = 30000;
        if (this.#audience > 20) {
          result += 10000 + 500 * (this.#audience - 20);
        }
        result += 300 * this.#audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${this.#play.type}`);
    }
    return result;
  }
}

export function createStatement(invoice, plays) {
  const s = {};
  s.customer = invoice.customer;
  s.performances = invoice.performances.map(
    (p) => new Performance(p.audience, plays[p.playID])
  );
  s.totalAmount = totalAmount(s.performances);
  s.totalCredit = totalCredit(s.performances);
  return s;

  function totalCredit(performances) {
    return performances.reduce((total, p) => (total += p.credit), 0);
  }
  function totalAmount(performances) {
    return performances.reduce((amount, p) => (amount += p.amount), 0);
  }
}