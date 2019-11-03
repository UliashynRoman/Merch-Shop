Set_Events();
//Some Var
let sum_global = 0;
Print_Total(sum_global);
const shoppingCartContent = document.querySelector("#cart-content tbody");

///EVENTS
function Events_Handler(event){
    /* if(event.target.classList.contains('buy')){

        let modal = document.querySelector('.modal');
        modal.className = "modal ";
        modal.className += "modal-open"
        console.log(modal);
    } */
    //Contact Copy
    if(event.target.classList.contains('link')){
        var email = "electroperedachi@gmail.com";
        alert("Звертайтесь до нас поштою " + email + ", ми чекаемо!");
    }
    //Delete Items
    if(event.target.classList.contains('clear')){  
        const tbody = document.querySelector('tbody');
        let length = tbody.children.length;
        const tr = document.querySelectorAll('tbody tr');
         for(let i = 0; i < length; ++i){  
              tbody.removeChild(tr[i]);
          }
        sum_global = 0;
        Print_Total(sum_global);
        clearLocalStorage();
        }
    //Delete item from shop-cart    
    //remove From The DOM
    if(event.target.classList.contains('remove')){
        event.target.parentNode.parentNode.remove();
        let course, courseID;
        course = event.target.parentNode.parentNode;
        courseID = course.querySelector('a').getAttribute('data-id');
        deleteCourse(courseID);

        sum_global = summary();
        Print_Total(sum_global);
    }
    //Add Item
    if(event.target.classList.contains('add-to-cart')){
        alert('Додано! Продовжи купівлю у кошику.');
        const course = event.target.parentNode.parentNode;
        //GetCourse Info
        const courseInfo = {
            image: course.querySelector('img').src,
            title: course.querySelector('h4').textContent,
            price: course.querySelector('.price span').textContent.replace("₴",""),
            id: course.querySelector('a').getAttribute('data-id')
        }
        //Add To Cart
            //create a <tr>
        const row = document.createElement('tr');
        const price = parseInt(courseInfo.price);
        //Build the template
        row.innerHTML = `
            <tr>
                <td>
                    <img src="${courseInfo.image}" width = "120">
                </td>
                <td>${courseInfo.title}</td>
                <td>${price} ₴</td>
                <td>
                <a class="remove" data-id="${courseInfo.id}">X</a>
                </td>
            </tr>
        `;
        console.log(row);
        //Add into the shopping cart
        shoppingCartContent.appendChild(row);
       // buyCartContent.appendChild(copy);

        //Price Handler
        sum_global += price;
        Print_Total(sum_global);
        event.stopPropagation();
        saveIntoStorage(courseInfo);
    }

//CLEAR ALL IN STORAGE
function clearLocalStorage(){
    localStorage.clear();         
}
//Delete solo item STORAGE
function deleteCourse(id){
    //Get Data from LC
    console.log('data-id='+ id);
    const coursesLC = getCoursesFromStorage();
    //Loop through the array and find the index
    coursesLC.forEach(function(courseLS,index){
        if(courseLS.id === id){
            //Spliice index
            coursesLC.splice(index,1);
        }
    });
    console.log(coursesLC);
    localStorage.setItem('courses',JSON.stringify(coursesLC));
}
    
}
function GetFromLC(){
    //Load All from Local Storage
    let coursesLS = getCoursesFromStorage();    
    //loop through array and print elements
    coursesLS.forEach(function(course){
        const row = document.createElement('tr');
        const price = parseInt(course.price);
        //Build the template
        row.innerHTML = `
            <tr>
                <td>
                    <img src="${course.image}" width = "120">
                </td>
                <td>${course.title}</td>
                <td>${price} ₴</td>
                <td>
                <a class="remove" data-id="${course.id}">X</a>
                </td>
            </tr>
        `;
        //Add into the shopping cart
        shoppingCartContent.appendChild(row);
        //Price
        sum_global += price;
        Print_Total(sum_global);
        
        event.stopPropagation();
    });
}

//LOCAL STORAGE 
function saveIntoStorage(course) {
    let courses = getCoursesFromStorage();

    // add the course into the array
     courses.push(course); 
    // since storage only saves strings, we need to convert JSON into String
    localStorage.setItem('courses', JSON.stringify(courses) );
}
function getCoursesFromStorage() {
    let courses;
    // if something exist on storage then we get the value, otherwise create an empty array
    if(localStorage.getItem('courses') === null) {
         courses = [];
    } else {
         courses = JSON.parse(localStorage.getItem('courses') );
    }
    return courses;
}

//Set Events
function Set_Events(){
    //Events inside body   
    const body_events = document.body;
    body_events.addEventListener('click',Events_Handler);
    //Set Event inside Basket
    let button_remove = document.querySelectorAll('tbody tr');
    for(let i = 0; i < button_remove.length; i++){
        button_remove[i].children[3].addEventListener('click',Events_Handler);
    }
    //Set event for Adding to each button in body
    const add_to_card = document.querySelectorAll('.info-card a');
    for(let i=0; i<add_to_card.length;i++){
        //add_to_card[i].setAttribute('href',"#submenu");
        add_to_card[i].removeAttribute('href');//
        add_to_card[i].addEventListener('click',Events_Handler);
    }
    document.addEventListener('DOMContentLoaded', GetFromLC);

}
//Print_Total
function Print_Total(sum){
    let th = document.querySelectorAll('thead th');
    th[2].textContent = "Сума: " ;
    th[3].textContent = sum + " ₴";
}
//Total Price counter
function summary(){
    let sum = 0;
    let price = [];
    let tr = document.querySelectorAll('tbody tr');
     for(let i = 0; i < tr.length; i++){
        let real_price = tr[i].children[2].innerHTML.replace('₴','');
        let parsed = parseInt(real_price); 
        price[i] = parsed;
        sum += price[i];  
    } 
    console.log("Sum from summary()"+sum);
    return sum;
}