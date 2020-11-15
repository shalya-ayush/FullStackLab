//Selector
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const date = document.getElementById("date");
const name = document.getElementById("name");


//Event handler
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

//functions
function showTime() {
    var today = new Date();
    var hours = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    let today_date = today.toDateString();


    const ampm = hours > 12 ? "PM" : "AM";
    if(hours>12){
        hours = hours-12;
    }
    let dots =":"
    


    time.innerHTML = `${addZero(hours)}${dots}${addZero(min)}${dots}${addZero(sec)} ${ampm}`;
    date.innerHTML = `${today_date}`;

    setTimeout(showTime, 1000);
}

function addZero(n) {
    return (n< 10 ? '0' +n : n);
}

function getGreeting() {
    var today = new Date();
    var hours = today.getHours();

    if (hours < 12) {
        document.body.style.backgroundImage = 'url("../static/morning.jpg")';
        greeting.innerHTML = "Good Morning";
        greeting.style.color = 'white';
        name.style.color = 'white';
        date.style.color = 'white';
        time.style.color = 'white';
        

    } else if (hours < 18) {
        document.body.style.backgroundImage = ' url("../static/afternoon.jpg") ';
        greeting.innerHTML = "Good Evening";
        greeting.style.color = 'white';
        name.style.color = 'white';
        date.style.color = 'white';
        time.style.color = 'white';
        
    } else {
        document.body.style.backgroundImage = ' url("../static/night.jpg") ';
        greeting.innerHTML = "Good Night";
        greeting.style.color = 'white';
        name.style.color = 'white';
        date.style.color = 'white';
        time.style.color = 'white';
        
        
    }
}

function getName() {
    if (localStorage.getItem("myData") === null) {
        name.innerHTML = "[Enter Name]";

    } else {
        name.innerHTML = localStorage.getItem('myData');
    }
}

function setName(e) {
    if (e.type === "keypress") {
        if (e.keyCode == 13) {
            localStorage.setItem("myData", e.target.innerHTML);
            name.blur();
        }

    } else {
        localStorage.setItem("myData", e.target.innerHTML);
    }
}

//functions calls

showTime();
getGreeting();
getName();