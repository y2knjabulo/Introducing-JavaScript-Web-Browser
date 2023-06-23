const theMessageButton = document.querySelector('.theMessageButton');
const inputBox = document.querySelector('.theInputValue')
const myMessage = document.querySelector('.myMessage');
const fruitList = document.querySelector(".fruits");
const li = document.createElement('li');

theMessageButton.addEventListener('click', function() {
    if (inputBox.value.trim().length > 0) {
       myMessage.innerText = inputBox.value;
    }
    setTimeout(function(){
        myMessage.innerText = 'This is a message in the DOM!'
    }, 3000 )
    
});

const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
for(let i=0;i<fruits.length;i++){
    // get fruits from the list
    const fruit = fruits[i];
    li.innerText = fruit;
   fruitList.appendChild(li);
}




