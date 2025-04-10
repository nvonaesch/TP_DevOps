function insertionSort(arr, visualCallback) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
<<<<<<< HEAD
        visualCallback(arr, j, j + 1);
      }
      arr[j + 1] = key;
      visualCallback(arr, j + 1, i);
=======
        visualCallback(arr, j, j + 1); 
      }
      arr[j + 1] = key;
>>>>>>> 69ef3d8dbb3ef2be5c1958872c0716e3c6f4a4fe
    }
    return arr;
}
  
module.exports = insertionSort;
  