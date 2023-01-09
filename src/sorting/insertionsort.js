const pause = _ => new Promise(resolve => setTimeout(resolve, _));

async function insertionSort(barChart, setBarChart) {
  let arr = barChart.array;
  let key;

  for(let i = 1; i < arr.length; i++) {
    key = arr[i];
    let j = i - 1;
    await pause(100);
    while(j >= 0 && arr[j] > key) {
      await pause(100);
      setBarChart({pointer: [j], swappers: [i, j + 1], array: arr})
      arr[j + 1] = arr[j]
      j--;
    }
    
    arr[j + 1] = key;
    setBarChart({pointer: [j], swappers: [i, j + 1], array: arr})
  }
  setBarChart({pointer: [], swappers: [], array: arr})
}

export {insertionSort};