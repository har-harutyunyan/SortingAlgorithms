/* Insertion sort is a stable, comparison-based, non-recursive sorting algorithm
that works much like sorting playing cards in your hands.
Imagine you have a hand of cards and you pick up one card at a time from the table.
You insert each new card at its correct position among the cards already held,
shifting larger cards one space to the right as needed to make room for the new card.

Its time complexities are:

Best case(nearly sorted array): O(n);
Average and worst case: O(n^2);

Space complexity is O(1) since it sorts the array in place.

This method is stable because it does not reorder equal elements and non-recursive since it uses iterative loops.
*/

function insertionSort(arr){
    for(let i = 1; i < arr.length; ++i){
        let key = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > key){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}