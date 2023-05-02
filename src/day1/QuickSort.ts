function qs(arr: number[], lo: number, hi: number): void {

}

function partition(arr: number[], lo: number, hi: number): number {
  // pivot is always rightmost element
  const pi = arr[hi];
  let piIndex = hi;

  // stop at piIndex to not go over elements we placed  at right of pivot.
  for (let i = lo; i < piIndex;) {
    // we dont increment if we move values to right side of pivot because index changes 
    if (arr[i] <= pi) { i++; continue; }

    const beforePi = piIndex - 1;

    let tmp = arr[i];
    arr[i] = arr[beforePi]
    arr[beforePi] = tmp;

    tmp = arr[piIndex];
    arr[piIndex] = arr[beforePi]
    arr[beforePi] = tmp

    // decrement piIndex because we put an element after it which decreases its index by 1
    --piIndex;
  }
  return piIndex;

}

export default function quick_sort(arr: number[]): void {
}

let arr = [6, 9, 8, 7, 4]
console.log(partition(arr, 0, arr.length - 1))
console.log(arr)


