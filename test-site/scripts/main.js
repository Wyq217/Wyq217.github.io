/*
let myHeading = document.querySelector('h1');
myHeading.textContent = '好好学习，天天向上吧!!';
document.querySelector('html').onclick = function() {
    alert('小伙汁别玩了，快点去学习吧！');
}
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/myimage.png') {
      myImage.setAttribute('src', 'images/myimage2.png');
    } else {
      myImage.setAttribute('src', 'images/myimage.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('请输入你的名字：');
    localStorage.setItem('name',myName);
    mtHeading.textContent = 'Mozilla 酷毙了，'+ myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'boring---'+storedName;
}

myButton.onclick = function(){
    setUserName();
}