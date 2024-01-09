export default function cleanSet(set, startString) {
  if (
    startString === ''
    || typeof startString !== 'string'
    || !(set instanceof Set)
  ) {
    return '';
  }

  const cleanedValues = [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
  return cleanedValues;
}
