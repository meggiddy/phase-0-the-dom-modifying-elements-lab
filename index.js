// Write your code here!
const removeMain = document.getElementById("main");
    removeMain.remove();

const newHeader = document.createElement('h1');
    newHeader.setAttribute('id', 'victory')
    newHeader.textContent = 'Meg is the champion';
    body.append(newHeader);