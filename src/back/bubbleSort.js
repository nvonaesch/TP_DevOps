function bubbleSort(arr, visualCallback) {
    let n = arr.length;
    let iterationCount = 0;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        iterationCount++;
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          visualCallback(arr, j, j + 1); 
        }
      }
    }
    document.getElementById('iteration-counter').textContent = iterationCount + " itérations";
    return arr;
  }
  
  module.exports = bubbleSort;