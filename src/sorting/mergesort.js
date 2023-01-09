const pause = _ => new Promise(resolve => setTimeout(resolve, _));

async function merge(barChart, setBarChart, left, middle, right) {
  let arr = barChart.array;

  let leftArr = [];
  let rightArr = [];

  let leftLength = middle - left + 1;
  let rightLength = right - middle;

  for (let i = 0; i < leftLength; i++) {
    leftArr.push(arr[left + i]);
  }

  for (let j = 0; j < rightLength; j++) {
    rightArr.push(arr[middle + 1 + j]);
  }

  //index of leftArr
  let i = 0;
  //index of rightArr
  let j = 0;
  //index of merged arr
  let k = left;

  while (i < leftLength && j < rightLength) {
    if (leftArr[i] <= rightArr[j]) {
      await pause(100);
      arr[k] = leftArr[i];
      setBarChart({
        pointer: [k],
        swappers: [k, k + 1],
        array: arr
      });
      i++;
    } else {
      await pause(100);
      arr[k] = rightArr[j];
      setBarChart({
        pointer: [k],
        swappers: [k, k + 1],
        array: arr
      });
      j++;
    }

    k++;
  }

  while (i < leftLength) {
    await pause(100);
    arr[k] = leftArr[i];
    setBarChart({
      pointer: [k],
      swappers: [k, k + 1],
      array: arr
    });
    i++;
    k++;
  }

  while (j < rightLength) {
    await pause(100);
    arr[k] = rightArr[j];
    setBarChart({
      pointer: [k],
      swappers: [k, k + 1],
      array: arr
    });
    j++;
    k++;
  }

  setBarChart({
    pointer: [],
    swappers: [],
    array: arr
  });
}

async function mergeSort(barChart, setBarChart, left, right) {
  let arr = barChart.array;

  if (left >= right) {
    return;
  }

  let middle = left + Math.floor((right - left) / 2);
  await mergeSort(barChart, setBarChart, left, middle);
  await mergeSort(barChart, setBarChart, middle + 1, right);
  await merge(barChart, setBarChart, left, middle, right);

  setBarChart({
    pointer: [],
    swappers: [],
    array: arr
  });
}

export { mergeSort };
