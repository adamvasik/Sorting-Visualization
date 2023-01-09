const pause = _ => new Promise(resolve => setTimeout(resolve, _));

async function heapify(arr, n, i, setBarChart = () => {}) {
  let largest = i
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  //pointers left, right
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }
  
  if (largest != i) {
    //swappers i, largest
    setBarChart({pointer: [left, right], swappers: [i, largest], array: arr})
    await pause(100);
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    setBarChart({pointer: [left, right], swappers: [i, largest], array: arr})
    //update array
    await heapify(arr, n, largest);
  }
  
}


async function heapSort(barChart, setBarChart) {
  
  let arr = barChart.array;
  let n = arr.length;
  for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
    await heapify(arr, n, i, setBarChart);
  }

  for (let i = n - 1; i >= 0; i--) {
    await pause(100);
    [arr[0], arr[i]] = [arr[i], arr[0]];
    await heapify(arr, i, 0, setBarChart);
  }
   setBarChart({pointer: [], swappers: [], array: arr})
}

export { heapSort };