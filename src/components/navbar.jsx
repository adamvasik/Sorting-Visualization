import react from 'react';
import './navbar.css';


const Navbar = ({handleSort}) => {
  
  const randomArray = () => {
    handleSort('random');
  }

  const bubbleSort = () => {
    handleSort('bubble');
  }

  const heapSort = () => {
    handleSort('heap');
  }

  const insertionSort = () => {
    handleSort('insertion');
  }

  const mergeSort = () => {
    handleSort('merge')
  }

  const quickSort = () => {
    handleSort('quick')
  }

  return (
    <div className='navbar'>
      <button className='btn' onClick={randomArray}>Random Array</button>
      <button className='btn' onClick={mergeSort}>Merge Sort</button>
      <button className='btn' onClick={quickSort}>Quick Sort</button>
      <h1>SORTING VISUALIZATION</h1>
      <button className='btn' onClick={bubbleSort}>Bubble Sort</button>
      <button className='btn' onClick={heapSort}>Heap Sort</button>
      <button className='btn' onClick={insertionSort}>Insertion Sort</button>
    </div>
  );
}

export { Navbar };