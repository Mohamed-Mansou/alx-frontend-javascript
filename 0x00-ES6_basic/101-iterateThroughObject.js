export default function iterateThroughObject(reportWithIterator) {
  let employe = '';
  for (const item of reportWithIterator) {
    if (item === reportWithIterator[reportWithIterator.length - 1]) {
      employe += `${item}`;
    } else {
      employe += `${item} | `;
    }
  }
  return employe;
}
