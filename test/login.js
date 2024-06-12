const tetx = document.querySelector('#txt'); 
const sub = document.querySelector('#sub');
sub.addEventListener('click' , ()=>{
    window.print(tetx.value); 
})