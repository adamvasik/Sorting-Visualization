import {react, useState} from 'react';
import './App.css'
import { Canvas } from './components/canvas';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { bubbleSort } from './sorting/bubblesort';
import { heapSort } from './sorting/heapsort';
import { mergeSort } from './sorting/mergesort';
import { quickSort } from './sorting/quicksort';
import { insertionSort } from './sorting/insertionsort';
import { randomArray } from './sorting/randomarray';

export default function App() {
  
  const [barChart, setBarChart] = useState({
    pointer:[],
    swappers: [],
    array: []
  });
  
  const handleSort = (str) => {
    switch(str) {
      case 'bubble':
        bubbleSort(barChart, setBarChart);
        break;
      case 'random':
        randomArray(setBarChart);
        break;
      case 'heap':
        heapSort(barChart, setBarChart);
        break;
      case 'insertion':
        insertionSort(barChart, setBarChart);
        break;
      case 'merge':
        mergeSort(barChart, setBarChart, 0, barChart.array.length)
        break;
      case 'quick':
        quickSort(barChart.array, 0, barChart.array.length, setBarChart)
        break;
      default:
        return;
    }
  }
  
  return (
    <>
      <Navbar handleSort={handleSort}/>
      <h5>NOTICE: If you have battery saving mode enabled on your device, the animation on this website may not function properly. To ensure the best experience, I recommend disabling battery saving mode or trying right-clicking whenever the animation gets stuck.</h5>
      <Canvas barChart={barChart}/>
      <Footer />
    </>
  )
}
