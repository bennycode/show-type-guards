// Show how to guard "primitive types"
function add1000(input: string | number): number {
  if (typeof input === 'number') {
    // No need to use `parseInt`
    return input + 1000;
  } else {
    return parseInt(input, 10) + 1000;
  }
}

// Show limitations of `typeof`

type Dog = {
  name: string;
  bark: () => void;
  run: () => void;
}

type Person = {
  name: string;
  shout: () => void;
  walk: () => void;
}

function makeNoise(dogOrPerson: Dog | Person): void {
  if (typeof dogOrPerson === 'object') {
    // Use value "Dog"
  }
}

export {}
