doneTask = function() {
  if (this.checked) {
    this.parentNode.classlist.add("done");
  } else {
    this.parentNode.classlist.remove("done");
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
  newLi = document.createElement('li');
  newLi.className = color;
  liContents = document.createTextNode(task);
  newLi.appendChild(checkBox);
  newLi.appendChild(liContents);
  uL.appendChild(newLi);
}
