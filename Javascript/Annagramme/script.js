function random_between(min,max){
    let random_x = Math.round(Math.random()*(max-min)+min);
    return(random_x);
}
    
function factorial(number){
    let result = 1;
    for (let i = number; i > 1; i--){
        result *= i;
    }
    return(result);
}

function findAnagrams(string) {
    let total_combination = factorial(string.length);
    let number_combination = [];
    let anagrams = [];
    while (number_combination.length < total_combination){
        let combination;
        do{
            combination = "";
            for (let i = 0; i < string.length; i++){
                let number ;
                do{
                    number = random_between(0,string.length-1);
                }while (combination.indexOf(number) != -1 );
                combination += number;
            }
        }while (number_combination.indexOf(combination) != -1);
        number_combination.push(combination);
    }
    for (let l of number_combination){
        let result = "";
        for (let m of l){
            result += string[m];
        }
        anagrams.push(result);
    }
    anagrams.sort();
    return(anagrams);
}
