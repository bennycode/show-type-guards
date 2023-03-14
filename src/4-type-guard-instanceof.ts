class Dog {
  name?: string;
  bark = () => {
  };
  run = () => {
  };
}

class Person {
  name?: string;
  shout = () => {
  };
  walk = () => {
  };
}

function makeNoise(dogOrPerson: Dog | Person): void {
  if (dogOrPerson instanceof Dog) {
    dogOrPerson.bark();
    dogOrPerson.run();
  } else {
    dogOrPerson.shout();
    dogOrPerson.walk();
  }
}
