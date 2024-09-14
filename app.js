const plusOnebtn = document.querySelector(".plusOne");
const minusOnebtn = document.querySelector(".minusOne");
const display = document.querySelector(".display");

let counter = 0;

const update = () =>{
    display.textContent = counter;
}

plusOnebtn.addEventListener('click',()=>{
    counter += 1;
    update();
})

minusOnebtn.addEventListener('click',()=>{
    counter -= 1;
    update();
})

update();