/*------- ul --------*/
const ulElement = document.querySelector('ul');

/*------- li --------*/
const oneLiElement=document.createElement('li')
ulElement.append(oneLiElement);

const twoLiElement=document.createElement('li')
ulElement.append(twoLiElement);

const thirdLiElement=document.createElement('li')
ulElement.append(thirdLiElement);

const fourthLiElement=document.createElement('li')
ulElement.append(fourthLiElement);

/*------- label --------*/
const oneLabelElement= document.createElement('label')
oneLabelElement.innerText  = 'Подія натискання на елемент називається click?';
oneLiElement.append(oneLabelElement)

const twoLabelElement= document.createElement('label')
twoLabelElement.innerText  = 'Усередині розмітки не можна додати обробник події?';
twoLiElement.append(twoLabelElement)

const thirdLabelElement= document.createElement('label')
thirdLabelElement.innerText  = 'Припинити спливання події можна за допомогою метода stopImmediatePropagation?';
thirdLiElement.append(thirdLabelElement)

const fourthLabelElement= document.createElement('label')
fourthLabelElement.innerText  = 'Припинити спливання події можна за допомогою метода stopPropagation?';
fourthLiElement.append(fourthLabelElement)



/*------- input --------*/
const oneCheckbox= document.createElement('input')
oneCheckbox.type="checkbox";
oneLabelElement.append(oneCheckbox)

const twoCheckbox= document.createElement('input')
twoCheckbox.type="checkbox";
twoLabelElement.append(twoCheckbox)

const thirdCheckbox= document.createElement('input')
thirdCheckbox.type="checkbox";
thirdLabelElement.append(thirdCheckbox)

const fourthCheckbox= document.createElement('input')
fourthCheckbox.type="checkbox";
fourthLabelElement.append(fourthCheckbox)



/*-------  div and span --------*/
const result = document.getElementsByClassName('result');
const resultSpan = document.querySelector('span');


/*------- click  --------*/

const arr= [];
const buttonElement = document.querySelector('button')
buttonElement.addEventListener("click", function (event){


    if ( oneCheckbox.checked === true) {
        arr.push(+1)
    }if(twoCheckbox.checked === false){
        arr.push(+1)
    }
    if(thirdCheckbox.checked === false){
        arr.push(+1)
    }
    if(fourthCheckbox.checked === true){
        arr.push(+1)
    }

    const result = arr.reduce(function(sum, current) {
        return sum + current;
    }, 0);
    resultSpan.innerText = ` = ${result} / 4 `;


})





