const questions = [{
    caption: 'Подія натискання на елемент називається click?',
    correctAnswer: true
    },
    {
        caption: 'Усередині розмітки не можна додати обробник події?',
        correctAnswer: false
    },
    {
        caption: 'Припинити спливання події можна за допомогою метода stopImmediatePropagation?',
        correctAnswer: false
    },
    {
        caption: 'Припинити спливання події можна за допомогою метода stopPropagation?',
        correctAnswer: true

    }
    ]


/*------- ul --------*/
const ulElement = document.querySelector('ul');

/*------- li , label , input--------*/
for (let i = 0; i <questions.length; i ++){
    const LiElement=document.createElement('li')
    ulElement.append(LiElement);

    const LabelElement= document.createElement('label')
    LabelElement.innerText  = questions[i].caption;
    LiElement.append(LabelElement)

    const Checkbox= document.createElement('input')
    LabelElement.append(Checkbox)
    Checkbox.type="checkbox";
}


/*-------  div , span --------*/
const result = document.getElementsByClassName('result');
const resultSpan = document.querySelector('span');


/*------- click  --------*/



const buttonElement = document.querySelector('button')



buttonElement.addEventListener("click", function f(event){

    const arr= [];

    const checkBox = document.getElementsByTagName('input')

    for(let i = 0; i < questions.length; i++){

        if (checkBox[i].checked === questions[i].correctAnswer){
            arr.push(+1)
        }
    }

    const result = arr.length

    const resultLength = questions.length

    resultSpan.innerText = ` = ${result} / ${resultLength} `;


})


