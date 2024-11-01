let task_array = [];

let arr = [' chocolate cake', ' red velvet cake', ' blueberry cake', ' strawberry cake', ' hazelnut cake'];

task_array_length = 1 + Math.random() * (5 + 1 - 1);

for (var i = 0; i < task_array_length; i++) {
  let rand = Math.floor(Math.random() * arr.length);
  task_array.push(arr[rand]);
}

let dataTargetId = task_array;

let task = document.getElementById('task');
task.innerHTML = task_array;

const cakes = document.querySelectorAll('.draggable-list li');
const plate = document.querySelector('#target');

cakes.forEach(el => {
  el.addEventListener('dragstart', dragStartHandler);
})

function dragStartHandler(e) {
  console.log('dragStartHandler running');
  console.log(e.target.id);
  window.dataSourceId = this.id;
  console.log(window.dataSourceId);
}

console.log(window.dataSourceId);

plate.addEventListener('dragenter', dragEnterHandler);
plate.addEventListener('dragover', dragOverHandler);
plate.addEventListener('dragleave', dragLeaveHandler);
plate.addEventListener('drop', dropHandler);

function dragEnterHandler(e) {
  console.log('dragEnterHandler running');
}

function dragOverHandler(e) {
  console.log('dragOverHandler running');
  event.preventDefault();
}

function dragLeaveHandler(e) {
  console.log('dragLeaveHandler running');
}

function dropHandler(e) {
  e.preventDefault();

  console.log('dropHandler running'); 

  console.warn(dataSourceId, dataTargetId);

for (var i = 0; i < dataTargetId.length; i++) {
  if (dataTargetId[i] === dataSourceId) {
      task_array.splice(i,1);
      task.innerHTML = task_array;
      console.log("DROP");
}
  console.log('NOT DROP');
}

if (task_array.length == 0) {
  hidden.style.display = 'block';
  shown.style.display = 'none';
  task.style.display = 'none';
}

}

function next_order() {
  location.reload()
}
