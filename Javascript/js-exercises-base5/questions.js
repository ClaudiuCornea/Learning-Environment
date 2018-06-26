/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    let res = texte.length;
    return res;
};

var remplaceECar = function (texte) {
    let result = '',
        first_e = texte.indexOf('e');
    for (let i = 0; i < texte.length; i++){
        if (i == first_e){
            result += " ";
        }else{
            result += texte[i];
        }
    }
    return(result);
};

var concatString = function (texte1, texte2) {
    return(texte1+texte2);
};

var afficherCar5 = function (texte) {
    return(texte[4]);
};

var afficher9Car = function (texte) {
    let result = '';
    for (let i = 0; i < 9; i++){
        result += texte[i];
    }
    return(result);
};

var majusculeString = function (texte) {
    return(texte.toUpperCase());
};

var minusculeString = function (texte) {
    return(texte.toLowerCase());
};

var SupprEspaceString = function (texte) {
    return(texte.trim());
};

var IsString = function (texte) {
    return(isNaN(texte));
};

var AfficherExtensionString = function (texte) {
    return(texte.substr(texte.indexOf('.')+1));
};

var NombreEspaceString = function (texte) {
    return(texte.match(/([\s]+)/g).length);
};

var InverseString = function (texte) {
    return(texte.split('').reverse().join(''));
};

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return(Math.pow(x, y));  
};

var valeurAbsolue = function (nombre) {
    return(Math.abs(nombre));
};

var valeurAbsolueArray = function (array) {
    let result =[];
    for (let i = 0; i < array.length; i++){
        result.push(Math.abs(array[i]));
    }
    return(result);
};

var sufaceCercle = function (rayon) {
    return(Math.round(Math.PI*Math.pow(rayon,2)));
};

var hypothenuse = function (ab, ac) {
    return(Math.sqrt(Math.pow(ab,2)+Math.pow(ac,2)));
};

var calculIMC = function (poids, taille) {
    let result = (poids/(taille*taille));
    console.log(result.toFixed(2));
    return(parseFloat(result.toFixed(2)));
};
