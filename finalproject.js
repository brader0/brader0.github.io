addTask = function() {
  var uL
  var task
  task = document.querySelector('#theTask.value');
  uL = document.querySelector('#theList');
  newLi = document.createElement('li');
  liContents = document.createTextNode(task);
  newLi.appendChild(liContents);
  checkBox = document.createElement('input');
  checkBox.type = checkbox
  newLi.appendChild(checkBox);
  uL.appendChild(newLi);
}
