var i = 0;

function addInputField () {
var newInput = document.createElement('input');
newInput.setAttribute('type', 'text');
newInput.setAttribute('class', 'some-input');
newInput.setAttribute('value', document.getElementById('add-new').value);

// document.querySelector('form').appendChild(newInput);
var checkMark =  document.createElement('input');
checkMark.setAttribute('type', 'checkbox');
checkMark.setAttribute('class', 'checker')
//document.querySelector('form').insertBefore(checkMark, newInput);

var listItem = document.createElement('li');
listItem.setAttribute('class', 'input-items');
listItem.appendChild(checkMark);
listItem.appendChild(newInput);

unList.appendChild(listItem);

document.getElementById('add-new').value = document.querySelector('placeholder');

// document.querySelector('ul').appendChild(listItem);
// document.querySelector('li').insertBefore(checkMark, newInput);

i++;
} 


// var allInputs = document.getElementsByClassName('some-input');

document.getElementById('add-new').addEventListener('change', addInputField);

var unList = document.createElement('ul');
unList.setAttribute('id', 'input-list');
unList.setAttribute('style', 'list-style: none');
document.querySelector('form').appendChild(unList);
