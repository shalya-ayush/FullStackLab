let btnAdd=document.querySelector('#add');
let btnSubtract=document.querySelector('#subtract');
let input=document.querySelector('input');

btnAdd.addEventListener('click',() =>{
     input.value=parseInt(input.value)+1;
});

btnSubtract.addEventListener('click', () =>{
	var result=parseInt(input.value)-1
     if(result<0)
     {
     	input.value=0;
     }

     else
     {
     	input.value=  result;
     }
});