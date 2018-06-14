// The background
const num_stars = 1000;

function get_random_position() {  
        let y = window.innerWidth;
        let x = window.innerHeight;
        let random_x = Math.floor(Math.random()*x);
        let random_y = Math.floor(Math.random()*y);
        return [random_x,random_y];
}

function background_stars(){
    for (let i = 0; i < num_stars; i++) {
        let star = document.createElement("div");
        let xy = get_random_position();
        star.className = "star";
        star.style.top = xy[0] + 'px';
        star.style.left = xy[1] + 'px';
        document.body.append(star);
    }
}
// The timer
function add_0(x){
    if (x<10){
        x = '0' + x;
    }
    return(x);
}

function like_00_(x){
    x = x%60;
    x = add_0(x);
    return(x);
}

function time(){
    let sec = parseInt(document.getElementById("sec").innerHTML);
    let min = parseInt(document.getElementById("min").innerHTML);
    let hour = parseInt(document.getElementById("hour").innerHTML);
    sec++;
    if (sec == 60){
        min++;
        if(min == 60){
            hour++;
        }
    }
    sec = like_00_(sec);
    min = like_00_(min);
    hour = add_0(hour);
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("min").innerHTML = min;
    document.getElementById("hour").innerHTML = hour;
}
//The click zone

let click_value = 1;
let click_auto= 0;

function click_able(){
    let total = parseInt(document.getElementById("total_gain").innerHTML);
    total += click_value;
    document.getElementById("total_gain").innerHTML = total;
}
//The upgrade zone
function generate_update_icon(){
    let img = document.createElement("img");
    let parent = document.getElementsByClassName("update")[0];
    img.className = "update_icon";
    img.src = "Images/Strormstrooper.png";
    img.style.cursor = 'pointer';
    parent.appendChild(img);
}

function generate_icons(number){
    for (let iter=0;iter<number;iter++){
        generate_update_icon(iter);
    }
}

function hide(cible){
    // cible.target.style.display = 'none';
    console.log(cible.target)
    cible.target.remove();
    // generate_update_icon();
}

document.getElementById("right_side").addEventListener('click',hide);
document.getElementById("death_star").addEventListener('click',click_able);

function initial(){
    setInterval(time,1000);
    background_stars();
    generate_icons(4);
}

function test(){
    x = document.getElementById("sec").innerHTML + document.getElementById("min").innerHTML + document.getElementById("hour").innerHTML
    console.log(x);
}

setInterval(test,5000)