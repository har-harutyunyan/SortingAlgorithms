/* Bubble sort is a comparison-based and non-recursive simple sorting algorithm
that repeatedly compares adjacent elements in a list and swaps them if they are in the wrong order,
effectively "bubbling" the largest unsorted element to its correct position in each iteration
until the entire list is sorted.
Its time complexities are:

Best case: O(n)(when the array is already sorted and no swaps are needed).
Average case: O(n^2) (when elements are in a random order).
Worst case: O(n^2) (when the array is sorted in reverse order).

Space complexity is O(1)
As it sorts in place without requiring extra storage.
Bubble sort is a stable sorting algorithm, meaning it preserves the relative order of equal elements.
*/

function bubbleSort(arr){
    let n = arr.length;
    while(n){
        let x = 0;
        for(let i = 1; i < n; ++i){
            if(arr[i-1] > arr[i]){
                [arr[i-1], arr[i]] = [arr[i], arr[i-1]];
                x = i;
            }
        }
        n = x;
    }
    return arr;
}