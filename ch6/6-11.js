class PriceOrder {
  #basePrice;
  #discountRate;
  #discountThreshold;
  #quantity;
  #discountThreshold2;
  #feePerCase;
  #discountedFee;

  constructor(data) {
    this.#basePrice = data.basePrice;
    this.#discountRate = data.discountRate;
    this.#discountThreshold = data.discountThreshold;
    this.#quantity = data.quantity;
    this.#discountThreshold2 = data.discountThreshold2;
    this.#feePerCase = data.feePerCase;
    this.#discountedFee = data.discountedFee;
  }
  get basePrice() {
    return this.#basePrice;
  }
  get discountRate() {
    return this.#discountRate;
  }
  get discountThreshold() {
    return this.#discountThreshold;
  }
  get quantity() {
    return this.#quantity;
  }
  get discountThreshold2() {
    return this.#discountThreshold2;
  }
  get feePerCase() {
    return this.#feePerCase;
  }
  get discountedFee() {
    return this.#discountedFee;
  }
  get calcBasePrice() {
    return this.basePrice * this.quantity;
  }
  get discount() {
    return (
      Math.max(this.quantity - this.discountThreshold, 0) *
      this.calcBasePrice *
      this.discountRate
    );
  }
  get shippingPerCase() {
    return this.calcBasePrice > this.discountThreshold2
      ? this.discountedFee
      : this.feePerCase;
  }
  get shippingCost() {
    return this.quantity * this.shippingPerCase;
  }
  get price() {
    return this.calcBasePrice - this.discount + this.shippingCost;
  }
}

export function priceOrder(product, quantity, shippingMethod) {
  const basePrice = calculateBasePrice(product, quantity);
  const discount = calculateDiscountPrice(product, quantity);
  const shippingCost = calculateShippingCost(
    basePrice,
    product,
    shippingMethod
  );
  return basePrice - discount + shippingCost;
}

function calculateBasePrice(product, quantity) {
  return product.basePrice * quantity;
}
function calculateDiscountPrice(product, quantity) {
  return (
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate
  );
}
function calculateShippingCost(basePrice, quantity, shippingMethod) {
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;

  return quantity * shippingPerCase;
}

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price = priceOrder(product, 5, shippingMethod);
console.log(price);

const productOrder = new PriceOrder({
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
  quantity: 5,
  discountThreshold2: 20,
  feePerCase: 5,
  discountedFee: 3,
});
console.log(productOrder.price);
