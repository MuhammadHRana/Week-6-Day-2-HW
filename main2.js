// let todoItems = [
//     "Laundry",
//     "Cook",
//     "Shop",
//     "Eat",
//     "Work",
// ]

// let dropDownItems = document.querySelectorAll('.dropdown-item')
// let dropDownItems = document.querySelector('.dropdown-item')
// console.log(dropDownItems)

// let mainElement = document.querySelectorAll('main')
// console.log(mainElement)

// let mainElementClass = document.querySelector('.container')
// console.log(mainElementClass)

let todoListElement = document.querySelector('#todoList')

// for (const item of todoItems) {
//     let todoItemElement = `<li class="list-group-item">${item}</li>`

//     todoListElement.innerHTML += todoItemElement
//     console.log(todoItemElement)

// }

// let todoListItems = document.getElementsByClassName('list-group-item')


const createEvents = (el) => {
    el.addEventListener('mouseenter', (e) => {
        e.target.classList.add('active')
    })
    el.addEventListener('mouseleave', (e) => {
        e.target.classList.remove('active')
    })
    
    el.addEventListener('click', () => {
        if (el.classList.contains('active')) {
                el.classList.toggle('disabled');
                el.style.textDecoration = 'line-through';
            }
        if (el.classList.contains('disabled'))  {
                el.classList.toggle('active');
                el.style.textDecoration = 'default';
            }
    })
}


    // el.addEventListener('click', () => {
    //     if (el.classList.contains('active')) {
    //         el.classList.toggle('disabled',);
    //         el.style.textDecoration = 'line-through';
    //     }
    // })
    // el.addEventListener('click', () => {
    //     if (el.classList.contains('disabled')) {
    //         el.classList.toggle('active',);
    //         el.style.textDecoration = 'none';
    //     }
        // el.classList.toggle('active', )
        // el.classList.toggle('disabled')
        // el.classList.add('disabled')
        


// if (el.classList.contains('active')) {
//     e.preventDefault();
//     el.addEventListener('click', () => {
//         el.classList.toggle('disabled');
//         el.style.textDecoration = 'line-through';
//     })
// }
// else {
//     el.addEventListener('click', () => {
//         el.classList.toggle('active');
//         el.style.textDecoration = 'default';
//     })


let input = document.querySelector('#todoInputField');
let form = document.querySelector('#todoForm');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    let li = document.createElement('li')
    li.classList.add('list-group-item')
    li.innerText = input.value
    createEvents(li);
    todoListElement.appendChild(li);
    // let todoItemElement = `<li class="list-group-item">${input.value}</li>`
    // todoListElement.innerHTML += todoItemElement


    input.value = '';
})


// function Deleter() {
//     deleter.renmoveEventListener('click', () => {
//     li.list-group-item.reset();
//     list-group-item.reset()
// })
// }

let deleter = document.getElementById('Deleter')

deleter.addEventListener('click', (e) => {
    todoListElement.remove('li')
})






























    // // li.list-group-item.reset();
    // // list-group-item.reset();
    // // todoListElement.reset();
    // // li.classList.reset()
    // // form.reset();
    // // li.reset();
    // // input.value.reset();
    // // document.getElementById("todoForm").reset();
    // // todoListElement = undefined
    // // document.querySelector('#todoList').reset()
    // document.querySelectorAll('#todoList').empty()
    // // document.querySelectorAll('#todoList') = null
    // document.querySelectorAll('.todoInputField').empty()
    // // document.querySelectorAll('.todoInputField') = null
    // // todoListElement.value = null
    // // todoListElement = null
    // // document.querySelectorAll('.list-group').empty()
    // // document.querySelectorAll('.list-group') = null
    // todoListElement.empty();
    // list-group.empty()
    // todoListElement.empty()
    // document.querySelectorAll('#todoList').innerHTML = '';
    // document.querySelectorAll('.list-group').innerHTML = '';
    // todoListElement.innerHTML('')


// form.reset();
// todoList.reset();
// todoForm.pop();
// console.log(todoList);
// console.log(todoForm);
// document.getElementById('Deleter');
// document.getElementById('todoList').reset();
// todoList.reset();

// input.addEventListener('keyup', () => {
//     e.preventDefault();
//     if (e.which === 13) {
//         alert('hi')
//     }
// })

// let deleter = document.getElementById('Deleter')

// deleter.addEventListener('click', () => {


//     form.reset();
//     todoList.reset();
//     todoForm.pop();
//     console.log(todoList)
//     console.log(todoForm)
//     document.getElementById('Deleter')

//     document.getElementById('todoList').reset()
//     todoList.reset()

//     // document.getElementById("todoForm").reset();
//     // document.getElementById("todoForm") = [];
//     // document.getElementById("todoForm").onsubmit();
//     // document.getElementsByClassName("list-group-item").reset();
//     // document.getElementsByClassName("list-group-item") = [];
//     // document.getElementsByClassName("list-group-item").onsubmit();
//     // todoListElement.reset();
//     // todoListElement.value = []
//     // todoListElement.onsubmit()
//     // li.reset()
//     // li = []
// })