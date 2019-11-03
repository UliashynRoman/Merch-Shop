/* //dbl click
const btn_clear = document.querySelector('#clear-cart');
let element = btn_clear.addEventListener('dblclick' , echo);
//mouseenter over element
//element = btn_clear.addEventListener('mouseenter' , echo);
//mouseLeave
//element = btn_clear.addEventListener('mouseleave' , echo);
//mouseOver
let counter_global = 0;
element = btn_clear.addEventListener('mouseover' , echo);


//mouseOut
//mouseUP after clicking
//mouseDown the same with enter
function echo(e){
    console.log(`Type of evenet is ${e.type}`);
    if(e.type == 'mouseover') {
        counter_global++;
        console.log(counter_global);
    }
}

 */




let prd_list = document.querySelectorAll('#product-list');



const add_to_card = document.querySelectorAll('.add-to-cart');
const cards = document.querySelectorAll('.card');

function set(){
    for(let i=0; i<add_to_card.length;i++){
        //add_to_card[i].setAttribute('href',"#submenu");
        add_to_card[i].addEventListener('mouseover',Events_Handler_over);
        add_to_card[i].addEventListener('mouseout',Events_Handler_out);
    }
}
set();

function Events_Handler_over(e){
    e.target.parentNode.parentNode.children[0].style.background = '#D8D2CC';
    e.target.parentNode.parentNode.children[0].style.transition =  '0.5s';
 }
function Events_Handler_out(e){
   e.target.parentNode.parentNode.children[0].style.background = 'none';
}