const pause = _ => new Promise(resolve => setTimeout(resolve, _));

async function partition(arr, left, right, setBarChart = () => {}) {
  const pivot = arr[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (arr[i] < pivot) {
      await pause(100);
      if (setBarChart() !== 'undefined') {
        setBarChart({ pointer: [i, j], swappers: [], array: arr });
      }
      i++;
    }

    while (arr[j] > pivot) {
      await pause(100);
      if (setBarChart() !== 'undefined') {
        setBarChart({ pointer: [i, j], swappers: [], array: arr });
      }
      j--;
    }

    

    if (i <= j) {
      await pause(100);
      if (setBarChart() !== 'undefined') {
        setBarChart({ pointer: [i, j], swappers: [i, j], array: arr });
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setBarChart({ pointer: [i, j], swappers: [i, j], array: arr });
      }
      i++;
      j--;
    }
  }

  return i;
}

async function quickSort(arr, left, right, setBarChart) {
  if (arr.length > 1) {
    const index = await partition(arr, left, right, setBarChart);

    if (left < index - 1) {
      await quickSort(arr, left, index - 1, setBarChart);
    }

    if (index < right) {
      await quickSort(arr, index, right, setBarChart);
    }
  }

  setBarChart({ pointer: [], swappers: [], array: arr });
}

export { quickSort };
