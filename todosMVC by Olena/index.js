
function addInputField () {
var newInput = document.createElement('label');
newInput.setAttribute('class', 'some-input');
newInput.innerText = document.getElementById('add-new').value;

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

// var checkVal = document.querySelector('checker').addEventListener('change', crossLabelVal);

checkMark.addEventListener('change', crossLabelVal);

function crossLabelVal (event) {
    // var checkBox = document.querySelector('checker');
    // var labelText = document.querySelector('label');
    // if(checkBox.checked==true){
    //     labelText.style.textDecoration = 'line-through';
    // } else {
    //     labelText.style.textDecoration = 'none';
    // }

    var checkboxVal = event.target;
    var label = newInput;
    if (checkboxVal.checked){
        label.style = 'text-decoration: line-through';
    } else {
        label.style = 'text-decoration: none';
    }
    
}

} 

function changeBackground(event) {
    // debugger;
}


document.getElementById('add-new').addEventListener('change', addInputField);
document.getElementById('add-new').addEventListener('input', changeBackground);


var unList = document.createElement('ul');
unList.setAttribute('id', 'input-list');
unList.setAttribute('style', 'list-style: none');
document.querySelector('form').appendChild(unList);
