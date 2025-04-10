function insertionSort(arr, visualCallback) {
    let n = arr.length;
    let iterationCount = 0;
    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j] > key) {
        iterationCount++;
        arr[j + 1] = arr[j];
        j = j - 1;
        visualCallback(arr, j, j + 1);
      }
      arr[j + 1] = key;
      visualCallback(arr, j + 1, i);
    }
    document.getElementById('iteration-counter').textContent = iterationCount + " itérations";
    return arr;
}
  
module.exports = insertionSort;
  