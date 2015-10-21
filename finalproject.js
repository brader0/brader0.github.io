doneTask = function() {
  if (this.checked) {
    this.parentNode.classList.add("done");
  } else {
    this.parentNode.classList.remove("done");
  }
}

addTask = function() {
  var uL
  var task
  var color
  uL = document.querySelector('#theList');
  task = document.querySelector('#theTask').value;
  color = document.querySelector('#priority').value;
  checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.onclick = doneTask;
  newLi = document.createElement('li');
  newLi.className = color;
  liContents = document.createTextNode(task);
  newLi.appendChild(checkBox);
  newLi.appendChild(liContents);
  uL.appendChild(newLi);
}
