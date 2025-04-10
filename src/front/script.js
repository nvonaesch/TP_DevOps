let array = [];

function generateArray() {
  array = [];
  for (let i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() * 100) + 10);
  }
  renderArray();
}

function renderArray() {
  const container = document.getElementById('array-container');
  container.innerHTML = '';
  array.forEach((value, index) => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${value}px`;
    bar.dataset.index = index;
    container.appendChild(bar);
  });
}

function visualCallback(arr, i, j) {
  setTimeout(() => {
    const bars = document.querySelectorAll('.bar');
    bars[i].style.height = `${arr[i]}px`;
    bars[j].style.height = `${arr[j]}px`;
    bars[i].classList.add('changed');
    bars[j].classList.add('changed');
    setTimeout(() => {
      bars[i].classList.remove('changed');
      bars[j].classList.remove('changed');
    }, 300);
  }, 300);
}

function startBubbleSort() {
  generateArray();
  bubbleSort(array, visualCallback);
}

function startInsertionSort() {
  generateArray();
  insertionSort(array, visualCallback);
}

function startQuickSort() {
  iterationsArray = []
  generateArray();
  quickSort(array, 0, array.length - 1, visualCallback);
}

generateArray();
