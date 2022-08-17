import assert from 'node:assert';

function validateString(input: string | number): void {
  if (typeof input === 'string') {
    console.log(`Valid string: ${input}`);
  } else {
    throw new Error('Input is not a string!');
  }
}

try {
  validateString(72);
} catch (error) {
  console.error((error as Error).message);
}

// Assertion Function

function validateStringWithAssert(input: string | number): void {
  assert(typeof input === 'string', new Error('Input is not a string!'));
  console.log(`Valid string: ${input}`);
}

try {
  validateStringWithAssert(72);
} catch (error) {
  console.error((error as Error).message);
}
