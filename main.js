const x = document.querySelector('.input1')
const y = document.querySelector('.hide2')
const z = document.querySelector('.hide1')
const eye = document.querySelector('.eye');


eye.addEventListener('click' , ()=> {  
    if(x.type === 'password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none"; 
    } else {
       x.type = 'password';
       y.style.display = 'none';
       z.style.display = 'block';
    }
})


