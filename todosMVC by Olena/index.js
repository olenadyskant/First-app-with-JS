
  var i = 0;

  function addInputField () {
  var newInput = document.createElement('input');
  newInput.setAttribute('type', 'text');
  newInput.setAttribute('class', 'some-input');
  document.querySelector('form').appendChild(newInput);
  var checkMark =  document.createElement('input');
  checkMark.setAttribute('type', 'checkbox');
  checkMark.setAttribute('class', 'checker')
  document.querySelector('form').insertBefore(checkMark, newInput);
  i++
  } 
  

  document.getElementById('add-new').addEventListener('change', addInputField);
  
  //var eachObjValue = {};
  var allInputs = document.getElementsByClassName('some-input');
   
 /* function addListItem(){
    var unList = document.createElement('ul');
    unList.setAttribute('class', 'todo-list');
    document.querySelector('form').appendChild(unList);
    var liItem = document.createElement('li');
    unList.appendChild(liItem);
  } */
  for (i = 0; i < allInputs.length; i++){
    //var currentValue = allInputs[i];   ---> do  need to map each obj to its value?
    //eachObjValue[currentValue.value] = currentValue;    
    var unList = document.createElement('ul');
    unList.setAttribute('class', 'todo-list');
    document.querySelector('form').appendChild(unList);
    var liItem = document.createElement('li');
    unList.appendChild(liItem);
    liItem.innerText = allInputs[i];         
    }
  
 




  //document.querySelector('add-new').addEventListener('change', addInputField);
 
  //moreInputs.shift(document.getElementById('#add-new').addEventListener('click', addInputField));

 



