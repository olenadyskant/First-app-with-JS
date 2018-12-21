console.log('Hello');

function addInputField(index) {
  var input = document.createElement('input');
  var label = document.createElement('label');
  label.innerHTML = 'Test ' + index;
  
  document.querySelector('body').appendChild(label);
  document.querySelector('body').appendChild(input);

}

for(var i =0; i< 10; i++ ) {
  addInputField(i);
}

//document.querySelector('#add-new').addEventListener('click', addInputField);
