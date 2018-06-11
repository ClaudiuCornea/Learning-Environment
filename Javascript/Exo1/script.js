function calc_perim(lenght,width){
    let resultat=(lenght+width)*2;
    document.getElementById("perim_ans").innerHTML=resultat;
}

function calc_air(lenght,width){
    let resultat=(lenght*width);
    document.getElementById("air_ans").innerHTML=resultat;
}

function calc(){
    let lenght = parseFloat(document.getElementById("lenght").value),
        width = parseFloat(document.getElementById("width").value);
    calc_perim(lenght,width);
    calc_air(lenght,width);
}