export default function createIteratorObject(report) {
  let all = [];
  for (const items of Object.values(report.allEmployees)) {
    all = [...all, ...items];
  }
  return all;
}
