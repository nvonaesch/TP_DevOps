function quickSort(arr, low, high, visualCallback) {
    if (low < high) {
      let pi = partition(arr, low, high, visualCallback);
      quickSort(arr, low, pi - 1, visualCallback);
      quickSort(arr, pi + 1, high, visualCallback);
    }
  }
  
  function partition(arr, low, high, visualCallback) {
    let pivot = arr[high];
    let i = low - 1;
  
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        visualCallback(arr, i, j); 
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    visualCallback(arr, i + 1, high); 
    return i + 1;
}
  
module.exports = quickSort;
  