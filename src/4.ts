//creating Key class with private property sinature
class Key {
  private signature: number = Math.random();

  public getSignature() {
    return this.signature;
  }
}

//creatin Person class, and storing key, previously created with Key class
class Person {
  constructor(private key: Key) {}

  public getKey() {
    return this.key;
  }
}

//creating abstract class House, which would be a prototype for a person's house
abstract class House {
  public door: boolean = false; //making door closed by default

  public tenants: Person[] = []; //initializing an Array, to store tenants

  constructor(protected key: Key) {} //initializing and storing key, that have been kreated with Key class

  //declaring necessary methods
  public abstract openDoor(key: Key): boolean;

  public comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
    } else {
      console.log("The door is closed. Cannot enter.");
    }
  }
}

//creating a person's house with class MyHouse
class MyHouse extends House {
  constructor(key: Key) {
    super(key); //inheriting from House class
  }

  //checking if the key that a person holds is the same that opens a house(were given with initialization) to enter a house
  public openDoor(key: Key): boolean {
    this.door = key.getSignature() === this.key.getSignature();
    if (!this.door) {
      console.log("The key is not correct. Access denied");
    }
    return this.door;
  }
}

//Usage example
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
