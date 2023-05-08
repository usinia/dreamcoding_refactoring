export function createStatement(invoice, plays) {
  const s = {};
  s.customer = invoice.customer;
  s.performances = invoice.performances.map(enrichPerformance);
  s.totalAmount = totalAmount(s.performances);
  s.totalCredit = totalCredit(s.performances);
  return s;

  function enrichPerformance(performance) {
    const result = { ...performance };
    result.play = playFor(performance);
    result.amount = amountFor(result);
    result.credit = creditFor(result);
    return result;
  }
  function playFor(performance) {
    return plays[performance.playID];
  }
  function creditFor(performance) {
    let result = 0;
    result += Math.max(performance.audience - 30, 0);
    // 희극 관객 5명마다 추가 포인트를 제공한다.
    if ("comedy" === performance.play.type)
      result += Math.floor(performance.audience / 5);
    return result;
  }
  function amountFor(performance) {
    let result = 0;
    switch (performance.play.type) {
      case "tragedy": // 비극
        result = 40000;
        if (performance.audience > 30) {
          result += 1000 * (performance.audience - 30);
        }
        break;
      case "comedy": // 희극
        result = 30000;
        if (performance.audience > 20) {
          result += 10000 + 500 * (performance.audience - 20);
        }
        result += 300 * performance.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${performance.play.type}`);
    }
    return result;
  }
  function totalCredit(performances) {
    return performances.reduce((total, p) => (total += p.credit), 0);
  }
  function totalAmount(performances) {
    return performances.reduce((amount, p) => (amount += p.amount), 0);
  }
}
