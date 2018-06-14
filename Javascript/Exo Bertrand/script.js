function bertrand_1(number,ligne_max){
    let resultat = [];
    for (let iter = 0;iter<ligne_max;iter++){
        resultat.push(number);
        console.log(resultat);
    }
}

function bertrand(){
    let number = prompt('Combien de fois a répeter ?'),
        ligne_max = prompt("Combien d'elements max?");
    for (iter = 1; iter<=number;iter++){
        bertrand_1(iter, ligne_max);
    }
}

bertrand();