# Sorters
Demonstration of the differences in efficiency of sorting algorithms with webworkers

Multiple workers are spawned during runtime:
 - at first to create the initial array
 - and to sort multiple instances of the same array concurrently

The results (with the sorting algorithms) are displayed once each of the workers
finish their tasks. 

Next.js handles the UI. [Next.js](https://nextjs.org/)
Basis of React Progress Bar: Daniel Zuzevich @ [CodePen](https://codepen.io/DZuz14/pen/oqeMpY?editors=0010)
