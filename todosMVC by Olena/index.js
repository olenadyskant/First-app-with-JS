var i = 0;

function addInputField () {
var newInput = document.createElement('input');
newInput.setAttribute('type', 'text');
newInput.setAttribute('class', 'some-input');
newInput.setAttribute('value', document.getElementById('add-new').value);
document.querySelector('form').appendChild(newInput);
var checkMark =  document.createElement('input');
checkMark.setAttribute('type', 'checkbox');
checkMark.setAttribute('class', 'checker')
document.querySelector('form').insertBefore(checkMark, newInput);
i++
document.getElementById('add-new').value = document.querySelector('placeholder');
} 

document.getElementById('add-new').addEventListener('change', addInputField);


//var eachObjValue = {};
var unList = document.createElement('ul');
unList.setAttribute('class', 'full-list');
document.getElementById('container').appendChild(unList);

var allInputs = document.getElementsByClassName('some-input').value;
for (var k = 0; k < allInputs.length; k++){
  var liItem = document.createElement('li');
  liItem.value = allInputs[k];
  document.querySelector('ul').appendChild(liItem);
  
}


/*for (i = 0; i < allInputs.length; i++){
  //var currentValue = allInputs[i];   ---> do  need to map each obj to its value?
  //eachObjValue[currentValue.value] = currentValue;    
  var unList = document.createElement('ul');
  unList.setAttribute('class', 'todo-list');
  document.querySelector('form').appendChild(unList);
  var liItem = document.createElement('li');
  unList.appendChild(liItem);
  liItem.innerText = allInputs[i];         
  }
*/





//document.querySelector('add-new').addEventListener('change', addInputField);

//moreInputs.shift(document.getElementById('#add-new').addEventListener('click', addInputField));
