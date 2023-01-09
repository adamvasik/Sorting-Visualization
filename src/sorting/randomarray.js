function randomArray(setBarChart) {
  let arr = [];

  for(let i = 0; i < 40; i++){
    let randomNum = Math.floor(Math.random()*500);
    arr.push(randomNum);
  }
  
  setBarChart({
    pointer: [],
    swappers:[],
    array: arr
  });
  return;
}

export { randomArray };