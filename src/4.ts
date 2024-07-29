class Key {
  private signature = Math.random();

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(public name: string, private key: Key) {}

  getKey() {
    return this.key;
  }
}

abstract class House {
  protected tenants: Person[] = [];
  protected door = false;

  constructor(protected key: Key) {}

  comeIn(tenant: Person) {
    if (this.door) {
      this.tenants.push(tenant);
      this.door = false;
      console.log(`${tenant.name} entered the house and closed the door.`);
    } else {
      console.log(`The door is closed, ${tenant.name} did not enter.`);
    }
  }

  abstract openDoor(key: Key): void;

  isValidKey(key: Key): boolean {
    return key.getSignature() === this.key.getSignature();
  }

  toString() {
    const door = this.door ? "opened" : "closed";
    const tenants = this.tenants.map((tenant) => tenant.name).join(", ");

    return `There are ${tenants} in the house, the door is ${door}.`;
  }
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (this.isValidKey(key)) {
      this.door = true;
      console.log("The door is opened.");
    } else {
      console.log("Your key did not open the door.");
    }
  }
}

const key = new Key();
const house = new MyHouse(key);

const person = new Person("Mark", key);
const eva = new Person("Eva", key);
const thief = new Person("Thief", new Key());

// the thief tries to open the door and enter
house.openDoor(thief.getKey()); // Your key did not open the door.
house.comeIn(thief); // The door is closed, Thief did not enter.

house.openDoor(person.getKey()); // The door is opened.
house.comeIn(person); // Mark entered the house and closed the door.

house.openDoor(eva.getKey()); // The door is opened.
house.comeIn(eva); // Eva entered the house and closed the door.

console.log(house.toString()); // There are Mark, Eva in the house, the door is closed

export {};
