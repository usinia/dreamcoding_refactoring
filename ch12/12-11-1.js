class List {}

class Stack {
  constructor() {
    // extends List : 사용하지 않는 List 의 api 도 모두 가지고 있고 노출됨.
    // 컴포지션을 활용하여 필요한 것만 정의해서 사용할 수 있음
    this.storage = new List();
  }
  pop() {}
  push() {}
}
