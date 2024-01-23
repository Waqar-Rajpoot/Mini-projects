let buttons = document.querySelectorAll(".btn");

buttons.forEach(element => {
    console.log(element);

    element.addEventListener("click", (elm) =>{
        console.log(elm.target);
        
        if(elm.target.id === 'white'){
            document.body.style.backgroundColor = 'white';
        }
        if(elm.target.id === 'blue'){
            document.body.style.backgroundColor = 'blue';
        }
        if(elm.target.id === 'red'){
            document.body.style.backgroundColor = 'red';
        }
        if(elm.target.id === 'yellow'){
            document.body.style.backgroundColor = 'yellow';
        }
    })

});