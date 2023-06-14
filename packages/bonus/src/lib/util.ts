export function* flatten<T>(list: T | T[]): Generator<T> {
  if (Array.isArray(list)) {
    for (const elementOrList of list) {
      for (const element of flatten(elementOrList)) {
        yield element;
      }
    }
  } else {
    yield list;
  }
}
