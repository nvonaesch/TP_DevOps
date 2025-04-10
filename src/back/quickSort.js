let iterationsArray = [];

    function quickSort(arr, low, high, visualCallback) {
      if (low < high) {
        let pi = partition(arr, low, high, visualCallback);
        quickSort(arr, low, pi - 1, visualCallback);
        quickSort(arr, pi + 1, high, visualCallback);
      }
        displayIterationCount();
      
    }
  
    function partition(arr, low, high, visualCallback) {
      let pivot = arr[high];
      let i = low - 1;
      let loopIterations = 0;

      for (let j = low; j < high; j++) {
        loopIterations++;  
        if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          visualCallback(arr, i, j); 
        }
      }

      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      visualCallback(arr, i + 1, high); 

      iterationsArray.push(loopIterations);

      return i + 1;
    }

    function displayIterationCount() {
      let totalIterations = iterationsArray.reduce((acc, curr) => acc + curr, 0);
      document.getElementById("iteration-counter").innerText =  totalIterations + " itérations";
    }

    