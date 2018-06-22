// The background
const num_stars = 500;

function get_random_position() {  
        let y = window.innerWidth;
        let x = window.innerHeight;
        let random_x = Math.floor(Math.random()*x);
        let random_y = Math.floor(Math.random()*y);
        return [random_x,random_y];
}

function random_between(min,max){
    let random_x=Math.round((Math.random()*(max-min)+min));
    return(random_x);
}

function background_stars(){
    for (let i = 0; i < num_stars; i++) {
        let star = document.createElement("div");
        let xy = get_random_position();
        let duration = random_between(30,60) + "s";
        let move_or_not = random_between(0,1);
        let size = random_between(1,3);
        let index = random_between(-1,1);
        star.className = "star";
        star.style.top = xy[0] + "px";
        star.style.left = xy[1] + "px";
        star.style.width = size + "px";
        star.style.height = size + "px";
        star.style.zIndex = index;
        switch (move_or_not){
            case 0:
                star.style.animation = "appear "+ duration +" linear 0s infinite alternate forwards running";
                break;
            case 3:
                star.style.animation = "up_down "+ duration +" linear 0s infinite normal forwards running";
                break;
            case 2:
                star.style.animation = "up_down "+ duration +" linear 0s infinite reverse forwards running";
                break;
            case 1:
                star.style.animation = "right_left "+ duration +" linear 0s infinite normal forwards running";
                break;
            case 4:
                star.style.animation = "right_left "+ duration +" linear 0s infinite reverse forwards running";
                break;
            case 5:
                break;
        }
        document.body.append(star);
    }
}
// The timer
function add_0(x, milisec){
    if (x<10){
        x = '0' + x;
    }
    if (milisec){
        if (x<100){
            x = '0' + x;
        }
    }
    return(x);
}

function like_00_(x,milisec){
    if (!milisec){
        x = x%60;
        x = add_0(x);
    }else{
        x = x%100;
        x = add_0(x,true);
    }
    return(x);
}

function time(){
    let milisec = parseInt(document.getElementById("milisec").innerHTML);
    let sec = parseInt(document.getElementById("sec").innerHTML);
    let min = parseInt(document.getElementById("min").innerHTML);
    let hour = parseInt(document.getElementById("hour").innerHTML);
    milisec++;
    if (milisec == 100){
        sec++;
        if (sec == 60){
            min++;
            if(min == 60){
                hour++;
            }
        }
    }
    milisec = like_00_(milisec,true);
    sec = like_00_(sec);
    min = like_00_(min);
    hour = add_0(hour);
    document.getElementById("milisec").innerHTML = milisec;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("min").innerHTML = min;
    document.getElementById("hour").innerHTML = hour;
}
//The click zone

let click_value = 1;
let click_auto= 0;

function click_animation_on(){
    let death_star = document.getElementById("death_star");
    death_star.style.animation = "pulsate linear 0.1s 1 normal both running";
}

function click_animation_off(){
    let death_star = document.getElementById("death_star");
    death_star.style.animation = "null";
}

function click_able(auto){
    let total = parseInt(document.getElementById("total_gain").innerHTML);
    if (!auto){
        total += click_value;
        click_animation_on();
        setTimeout(click_animation_off, 1);
    }else{
        total += click_auto;
    }
    document.getElementById("total_gain").innerHTML = total;
    check_price();
}
//The upgrade zone
let number_click_value = 0;
let number_auto_click_value = 0;
let price_upgrade = 10;

function id_gen(){
    let id = document.getElementById("milisec").innerHTML + document.getElementById("sec").innerHTML + document.getElementById("min").innerHTML + document.getElementById("hour").innerHTML;
    return(id);
}

function generate_update_icon(id){
    let img = document.createElement("img");
    let parent = document.getElementsByClassName("update")[0];
    img.id= id;
    img.className = "update_icon";
    number_click_value++;
    img.classList.add(number_click_value);
    img.classList.add(number_auto_click_value);
    img.classList.add(price_upgrade);
    price_upgrade *= 2;
    number_auto_click_value++;
    img.src = "Images/Strormstrooper.png";
    img.style.cursor = 'pointer';
    parent.appendChild(img);
}

function generate_icons(number){
    for (let iter=0;iter<number;iter++){
        generate_update_icon(iter);
    }
}

function use_upgrade(cible){
    let update = cible.srcElement.classList;
    let total = parseInt(document.getElementById("total_gain").innerHTML);
    click_value += parseInt(update[1]);
    click_auto += parseInt(update[2]);
    total -= parseInt(update[3]);
    document.getElementById("click").innerHTML = click_auto;
    document.getElementById("total_gain").innerHTML = total;
    cible.target.remove();
    generate_update_icon(id_gen());
    check_price();
}

function check_price(){
    let items = document.getElementsByClassName("update_icon");
    let total = parseInt(document.getElementById("total_gain").innerHTML);
    for (let i = 0; i < items.length; i++){
        let price = items[i].classList;
        let id = items[i].id;
        if (price[3] <= total){
           items[i].style.opacity = "1";
           document.getElementById(id).addEventListener('click',use_upgrade);
        }else{
            items[i].style.opacity = "0.4";
        }
    }
}

function initial(){
    setInterval(time,1);
    background_stars();
    generate_icons(4);
    check_price();
    //setInterval(() => click_able(true),1000);
    document.getElementById("death_star").addEventListener('click',() => click_able());
}