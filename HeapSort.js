/* Heap sort is an efficient comparison-based, recursive, but not stable sorting algorithm
that organizes an array into a heap data structure (usually a max heap)
and then repeatedly removes the largest element from the heap to build a sorted array. It works in two main phases:
1.Heap construction: Build a max heap from the unsorted input.
2.Sorting: Repeatedly extract the maximum element (root of the heap), place it at the end of the array, and restore the heap property (heapify) for the reduced heap.

Time Complexity:
Best case: O(nlogn);
Average case: O(nlogn);
Worst case: O(nlogn);

Space Complexity: O(1) (in-place sorting algorithm)
*/

function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
  
    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;
  
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
    }
  }
  
  function heapSort(arr) {
    let n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
    for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapify(arr, i, 0);
    }
  
    return arr;
  }