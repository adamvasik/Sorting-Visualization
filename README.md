## Sorting Algorithm Visualization
This app animates the following sorting algorithms on a bar chart:

* Bubble sort
* Insertion sort
* Heap sort
* Merge sort
* Quick sort

The animation shows the steps taken by the algorithm to sort the array.

Here is a brief description of each algorithm:

#### Bubble sort
Bubble sort is a simple sorting algorithm that repeatedly iterates through the list, compares adjacent elements, and swaps them if they are in the wrong order. The algorithm repeats this process until the list is sorted.

Time complexity: O(n^2)

#### Insertion sort
Insertion sort is a simple sorting algorithm that builds the final sorted array one element at a time. It iterates through the list, and for each element, it compares it with the elements in the sorted portion of the list and inserts it in the correct position.

Time complexity: O(n^2)

#### Heap sort
Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure to sort an array. It works by building a heap from the unsorted array, and then repeatedly extracting the root element (which is the maximum or minimum element, depending on the order in which the heap is constructed) and adding it to the sorted portion of the array.

Time complexity: O(n log n)

#### Merge sort
Merge sort is a divide and conquer sorting algorithm that works by recursively dividing the array into smaller subarrays, sorting them, and then merging them back together. The algorithm uses a divide and conquer approach, which allows it to achieve good time complexity and to be used for external sorting.

Time complexity: O(n log n)

#### Quick sort
Quick sort is a divide and conquer sorting algorithm that works by selecting a pivot element from the array, partitioning the other elements around it, and recursively sorting the subarrays on either side of the pivot. It is a highly efficient algorithm with good average-case time complexity.

Time complexity: O(n log n) (average case)

### Preview here: [Sorting Visualization](https://replit.com/@adamvasik/Sorting-Visualization)
