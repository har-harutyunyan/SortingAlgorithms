/* Selection sort is a simple comparison-based and non-recursive sorting algorithm
that divides the list into a sorted part at the beginning and an unsorted part at the end. 
It repeatedly selects the smallest (or largest) element from the unsorted portion
and swaps it with the first unsorted element, gradually growing the sorted section until the entire list is sorted.
The time complexities of selection sort are:

Best, average, and worst cases: all O(n^2)
since it always scans the unsorted part to find the minimum regardless of the initial order.

Space complexity is O(1) because it sorts in place without extra memory.

Selection sort is not stable by default because swapping may change the relative order of equal elements.
*/

function selectionSort(arr){
    for(let i = 0; i < arr.length; ++i){
        let m = i;
        for(let j = i + 1; j < arr.length; ++j){
            if(arr[j] < arr[m]){
                m = j;
            }
        }
        [arr[i], arr[m]] = [arr[m], arr[i]];
    }
    return arr;
}