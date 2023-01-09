const pause = _ => new Promise(resolve => setTimeout(resolve, _));

async function bubbleSort(barChart, setBarChart) {
  let arr = barChart.array;
  // Loop through the array, comparing adjacent elements and swapping their
  // positions if they are not in the correct order
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      await pause(100);
      if (arr[j] > arr[j + 1]) {
        // Swap the elements
        setBarChart({
          pointer: [j],
          swappers: [j, j + 1],
          array: arr
        });
        [arr[j], arr[j +1 ]] = [arr[j + 1], arr[j]]
      }
    }
  }
  setBarChart({
          pointer: [],
          swappers: [],
          array: arr
        }); 
  // Return the sorted array
  return arr;
}


export {bubbleSort}