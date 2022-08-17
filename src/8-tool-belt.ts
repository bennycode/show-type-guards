import {isArray, isString} from '@tool-belt/type-predicates';

console.log(getTextLength('abc')); // 3
console.log(getTextLength(['abc', 'xyz'])); // 6
console.log(getTextLength([1_000])); // 1

function getTextLength(input: string | any[]): number {
  // `Array.isArray` with value validation:
  // https://github.com/tool-belt/type-predicates/blob/main/src/guards/isArray.ts
  if (isArray<string>(input, {valueValidator: isString})) {
    return input.reduce((total, text) => {
      return total + text.length;
    }, 0);
  }
  return input.length;
}
