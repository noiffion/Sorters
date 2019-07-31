Sorters    
Demonstration of the differences in efficiency of sorting algorithms with webworkers.
To start the page on a local server (port: 3030) type (after cloning the git repo):  
```
$ yarn install  
$ yarn build  
$ yarn test  
$ yarn start
```
 
Multiple workers are spawned during runtime:
 - at first to create the initial array  
 - and to sort multiple instances of the same array concurrently  
   
![WebWorkers](https://dl.dropboxusercontent.com/s/tn78w2bbai6td1p/scaling-threads.png)
Source: [webworker-threads](https://www.npmjs.com/package/webworker-threads)
    
The results (with the sorting algorithms) are displayed once each of the workers have finished their tasks.  

Next.js handles the UI. [Next.js](https://nextjs.org/)  
Basis of React Progress Bar: Daniel Zuzevich @ [CodePen](https://codepen.io/DZuz14/pen/oqeMpY?editors=0010)  
And [react-tiny-virtual-list](https://github.com/clauderic/react-tiny-virtual-list) for rendering the array elements quickly.
