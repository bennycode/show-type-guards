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
  if ('bark' in dogOrPerson) {
    // Show available methods
  }
  // Show type in `else` scope
}

export {}
