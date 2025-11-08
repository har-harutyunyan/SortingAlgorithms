/* Counting sort is classified as a non-comparison-based,non-recursive, stable sorting algorithm.
It belongs to the category of linear time complexity sorting algorithms,
operating efficiently when the input consists of non-negative integers within a limited range.
It is stable because it preserves the relative order of elements with equal keys.
Unlike comparison-based algorithms (e.g., quicksort, mergesort),
counting sort works by counting occurrences of each key and calculating positions rather than performing comparisons.
It requires additional space proportional to the range of the input values, making it a non-in-place sorting algorithm.

Time Complexity: O(n+k),where n is the number of elements to sort, and k is the range of input values (the maximum value).​​

Space Complexity: O(n+k), because it requires auxiliary arrays for counting and output, proportional to the number of elements and the range of values.
*/

function countingSort(arr){
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const range = max - min + 1;

    let count = new Array(range).fill(0);
    let output = new Array(array).fill(0);

    for(let nums of arr){
        count[nums - min]++;
    }

    for(let i = 1; i < range; ++i){
        count[i] += count[i - 1];
    }

    for(let i = arr.length - 1; i >= 0; --i){
        let num = arr[i];
        output[count[num - min] - 1] = arr[i];
        count[num - min]--;
    }
    return output;
}