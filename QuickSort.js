/* Quicksort is a divide-and-conquer sorting algorithm
that selects a pivot element and partitions the array such
that elements less than the pivot go to one side and elements greater go to the other,then recursively sorts the partitions.
An efficient, comparison-based, in-place, recursive sorting algorithm.

Time Complexities:

Best case: O(nlogn), when the pivot divides the array into nearly equal halves.
Average case: O(nlogn), with balanced but not perfect partitions.
Worst case: O(n^2), when the pivot is always the smallest or largest element, causing unbalanced partitions.

Space Complexity:
Average case: O(logn) due to recursive stack depth.
Worst case: O(n) if recursion is highly skewed.
*/

function quickSort(arr,low = 0, high= arr.length - 1){
    if(low < high){
        const pIndex = partition(arr,low,high);
        quickSort(arr,low,pIndex - 1);
        quickSort(arr,pIndex + 1, high);
    }
    return arr;
}

function partition(arr,low,high){
    const pivot = arr[high];
    let i = low - 1;
    for(let j = low; j < high; ++j){
        if(arr[j] <= pivot){
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}