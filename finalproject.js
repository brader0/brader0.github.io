addTask = function() {
  var uL
  var task
  uL = document.querySelector('#theList');
  task = document.querySelector('#theTask').value;
  checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  newLi = document.createElement('li');
  liContents = document.createTextNode(task);
  newLi.appendChild(checkBox);
  newLi.appendChild(liContents);
  uL.appendChild(newLi);
}
