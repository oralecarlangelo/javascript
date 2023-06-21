class Singleton {
  constructor() {
    // Private variable
    this.data = 'Singleton instance created';
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  getData() {
    return this.data;
  }
}

const instance1 = Singleton.getInstance();
console.log(instance1.getData()); // Output: Singleton instance created

const instance2 = Singleton.getInstance();
console.log(instance2.getData()); // Output: Singleton instance created

console.log(instance1 === instance2); // Output: true (both instances are the same)
