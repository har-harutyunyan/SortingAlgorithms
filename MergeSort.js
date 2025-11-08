/* Merge sort is a divide-and-conquer,stable,recursive sorting algorithm
that efficiently sorts an array by recursively dividing it into smaller subarrays, sorting each subarray,
and then merging them back together in sorted order.

Time complexities:

Best case: O(nlogn);
Average case: O(nlogn);
Worst case: O(nlogn);

Space complexity: O(n) auxiliary space is needed for the temporary arrays used during the merging process.
*/

function mergeSort(arr, low, high){
    if(low >= high) return;
    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
}

function merge(arr, low, mid, high){
    const left = arr.slice(low, mid + 1);
    const right = arr.slice(mid + 1, high + 1);
    let i = 0, j = 0, k = low;
    while(i < left.length && j < right.length){
        arr[k++] = left[i] < right[j] ? left[i++] : right[j++];
    }
    [...left.slice(i),...right.slice(j)].forEach(v => arr[k++] = v);
}