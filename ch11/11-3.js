// 예제 1
function setWidth(value) {
  this._width = value;
  return;
}
function setHeight(value) {
  this._height = value;
  return;
}

// 예제 2
class Concert {
  regularBook(customer) {}
  premiumBook(customer) {}
  #book(customer, isPremium) {
    // 정말 중복된 비즈니스 로직이 많을 땐 공개 API는 분리해두고 내부 함수에서만 호출하도록 정의
  }
}

// 예제 3
function switchOn() {}
function switchOff() {}

// 매개변수는 3개 이상 넘기지 않는게 좋다.
// 가장 좋은 함수는 매개변수가 없는 함수다.
