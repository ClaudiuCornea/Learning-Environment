var selectElementsStartingWithA = function(array) {
    let result = [];
    for (let i of array){
        if (i[0] == 'a'){
            result.push(i);
        }
    }
    return(result);
};

var selectElementsStartingWithVowel = function(array) {
    let vowel = ['a','e','i','o','u','y'],
        result = [];
    for (let i of array){
        if (vowel.indexOf(i[0]) >= 0){
            result.push(i);
        }
    }
    return(result);
};

var removeNullElements = function(array) {
    let result = [];
    for (let i of array){
        if ( i !== null){
            result.push(i);
        }
    }
    return(result);
};

var removeNullAndFalseElements = function(array) {
    let result = [];
    for (let i of array){
        if (!(i === false || i === null)){
            result.push(i);
        }
    }
    return(result);
};

var reverseWordsInArray = function(array) {
    for (let i in array){
        array[i] = array[i].split('').reverse().join('');
    }
    return(array);
};

var everyPossiblePair = function(array) {
    let result = [];
    array.sort();
    for (let i = 0; i < array.length; i++){
        for (let j = i+1; j < array.length; j++){
            if (result.indexOf([array[i],array[j]]) < 0){
                result.push([array[i],array[j]]);
            }
        }
    }
    return(result);
};

var allElementsExceptFirstThree = function(array) {
    let i = 0;
    while (i < 3){
        array.shift();
        i++;
    }
    return(array);
};

var addElementToBeginning = function(array, element) {
    array.unshift(element);
    return(array);
};

var sortByLastLetter = function(array) {
    for (let i in array){
        array[i] = array[i].split('').reverse().join('');
    }
    array.sort();
    for (let i in array){
        array[i] = array[i].split('').reverse().join('');
    }
    return(array);
};

var getFirstHalf = function(string) {
    let result = '',
        limit = (string.length) / 2;
    for ( let i = 0; i < limit; i++){
        result += string[i];
    }
    return(result);
};

var makeNegative = function(number) {
    let abs_number = Math.abs(number);
    return(abs_number-(abs_number*2));
};

var numberOfPalindromes = function(array) {
    let result = 0;
    for (let i of array){
        let reverse = i.split('').reverse().join('');
        if (i == reverse){
            result++;
        }
    }
    return(result);
};

var shortestWord = function(array) {
    let result = array[0];
    for (let i = 1; i < array.length; i ++){
        if (result.length > array[i].length){
            result = array[i];
        }
    }
    return(result);
};

var longestWord = function(array) {
    let result = array[0];
    for (let i = 1; i < array.length; i ++){
        if (result.length < array[i].length){
            result = array[i];
        }
    }
    return(result);
};

var sumNumbers = function(array) {
    let result = 0;
    for (let i of array){
        result += i; 
    }
    return(result);
};

var repeatElements = function(array){
    let length = array.length;
    for (let i = 0; i < length; i++){
        array.push(array[i]);
    }
    return(array);
};

var stringToNumber = function(string) {
    let result = parseInt(string);
    return(result);
};

var calculateAverage = function(array) {
    let result = 0;
    for (let i of array){
        result += parseInt(i);
    }
    return(result/array.length)
};

var getElementsUntilGreaterThanFive = function(array) {
    let result = [];
    let ok = true;
    let i = 0;
    while (array[i] <= 5){
        result.push(array[i]);
        i++;
    }
    return(result);
};

var convertArrayToObject = function(array) {
    let result = {};
    for (let i = 0; i < array.length; i+=2){
        result[array[i]] = array[i+1];
    }
    return(result);
};

var getAllLetters = function(array) {
    let result = [];
    for (let i in array){
        for (let j in array[i]){
            if (result.indexOf(array[i][j]) < 0){
                result.push(array[i][j]);
            }
        }
    }
    return(result.sort());
};

var swapKeysAndValues = function(object) {
    let result = {},
        key,
        satelite;
    for (let i in object){
        key = object[i];
        satelite = i;
        result[key] = satelite;
    }
    return(result);
};

var sumKeysAndValues = function(object) {
    let result = 0;
    for (let i in object){
        result += parseInt(i);
        result += parseInt(object[i]);
    }
    return(result);
};

var removeCapitals = function(string) {
    let result = [];
    let words = string.split(" ");
    for ( let i of words){
        result.push(i.substr(1));
    }
    return(result.join(" "));
};

var roundUp = function(number) {
    return(Math.ceil(number));
};

var formatDateNicely = function(date) {
    let result_msec = Date.parse(date);
    let result = new Date(result_msec).toLocaleDateString();
    return(result);
};

var getDomainName = function(string) {
    let result = "";
    let domain = false;
    for (let i in string){
        if (string[i] == ".") {
            if (i >= (string.length - 4)){
                domain = false;
            }
        }
        if (domain){
            result += string[i];
        }
        if (string[i] == "@"){
            domain = true;
        }
    }
    return(result);
};

var titleize = function(string) {
    let result= "";
    let transform = string.split(" ");
    let transform_final = [];
    for (let i = 0; i < transform.length; i++){
        if (i == 0){
            transform_final.push(transform[i][0].toUpperCase() + transform[i].substr(1));
        }else if (i >=1){
            let previous = transform[(i-1)];
            let previous_length = (previous.length - 1);
            if(previous == "the" || previous[previous_length] == "."){
                transform_final.push(transform[i][0].toUpperCase() + transform[i].substr(1));
            }else{
            transform_final.push(transform[i]);
            }
        }
    }
    result = transform_final.join(" ");
    return(result);
};

var checkForSpecialCharacters = function(string) {
    let result = false,
        i = 0;
    while (!result && (i < string.length)){
        let test = string.charCodeAt(i);
        if ( ((48 <= test)&&(test <= 57)) || ((65 <= test)&&(test <= 90)) || ((97 <= test)&&(test <= 122)) ){
            result = false;
        }else{
            result = true;
        }
        i++;
    }
    return(result);
};

var squareRoot = function(number) {
    return(Math.sqrt(number));
};

var factorial = function(number) {
    let result = 1;
    for ( let i = number; i > 1; i--){
        result *= i;
    }
    return(result);
}

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

var findAnagrams = function(string) {
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

var convertToCelsius = function(number) {
    return(Math.round((number-32)/1.8));
};

var letterPosition = function(array) {
    let result = [];
    for (i in array){
        let letter = array[i].charCodeAt(array[i]);
        if ((65 <= letter)&&(letter <= 90)){
            result.push(letter - 64);
        }else if ((97 <= letter)&&(letter <= 122)){
            result.push(letter - 96);
        }
    }
    return(result);
};
