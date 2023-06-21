// Product classes
class ProductA {
  constructor() {
    this.name = 'Product A';
  }
  // ...
}

class ProductB {
  constructor() {
    this.name = 'Product B';
  }
  // ...
}

// Factory class
class Factory {
  createProduct(type) {
    if (type === 'A') {
      return new ProductA();
    } else if (type === 'B') {
      return new ProductB();
    } else {
      throw new Error('Invalid product type.');
    }
  }
}

// Usage
const factory = new Factory();

const productA = factory.createProduct('A');
console.log(productA.name); // Output: Product A

const productB = factory.createProduct('B');
console.log(productB.name); // Output: Product B
