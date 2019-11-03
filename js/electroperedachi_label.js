//BuyLabel
const buy = document.getElementById('learn');
buy.textContent = 'Electroperedachi Official Shop';


//Electroperedachi label
const label = document.getElementById('heading');
label.textContent = 'Electroperedachi Label';

//Different images
let counter = 0;
let New_Src = ['img/Ash-Grey.png','img/Black.png','img/Cardinal-Red.png',
'img/Forest-Green.png','img/Heliconia.png','img/Maroon.png','img/Navy.png','img/Pistachio.png',
'img/Royal.png','img/Sand.png','img/Sapphire.png','img/Sport-Grey.png'];
const product_img = document.querySelectorAll(".course-image");

product_img.forEach(function(image){
    image.src = New_Src[counter];    
    counter++;
});

//different name of product
//Array of product
//electroperedachi name
let cards = document.querySelectorAll('.card');
let lngth = cards.length; //12
let New_Name = [];
New_Name.length = lngth;


function Set_Name(str = 'T-Shirt'){
    //New_Name = [str + '1','Shirt2','Shirt3','Shirt4','Shirt5','Shirt6','Shirt7','Shirt8','Shirt9','Shirt10','Shirt11','Shirt12'];
    for(let i = 0; i < New_Name.length;i++){
        New_Name[i] = str + ` ${i+1}`;
    }
    console.log(str);
}
Set_Name();

const product_name = document.querySelectorAll('.card h4');
counter = 0;
product_name.forEach(function(text){
    text.textContent = New_Name[counter];
    counter++;
});

//entrepreneur_Name
const coursesList = document.querySelector('#courses-list');
const entrepreneur_name = document.querySelectorAll('.info-card p');
for(let i = 1;i<=4;i++){
    for(let k = 0; k<3;k++){
        //Autor_name=coursesList.children[i].children[k];
        Autor_name=coursesList.children[i].children[k].children[0].children[1].children[1];
        Autor_name.textContent = 'Electroperedachi inc.';

    }
}
Autor_name=coursesList.children[1].children[0].children[0].children[1].children[1];



lngth = entrepreneur_name.length;
let Ent_Name = [];
Ent_Name.length = lngth;

console.log(Autor_name);


