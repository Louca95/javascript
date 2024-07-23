
//1_Déclaration d'une variable
let temps ;

//2_Assigner une valeur a la variable
temps = "pluvieux";

//Vérification de la valeur dans la console
console.log(temps);


alert("Super, tu es arrivé sur mon site !");
window.alert("J'affiche une nouvelle boite de dialogue");

// Ecrire sur la page
document.write("<h1>C'est stylé le javascript !</h1>");

// Demander à l'utilisateur une valeur(2facons)
let answer = prompt("Question: On est quel jour aujourd'hui ?");
//window.prompt("Question: On est quel jour aujourd'hui ?")
document.write(`<p>La réponse est :${answer}`);

let weatherrofday;

// CamelCase
let weatherOfDay;

// PascalCase
let WeatherOfDay;

// SnakeCase
let weather_of_day;

// Posssibilité de réassigner une nouvelle valeur variable de base
temps ="nuageux";
console.log(temps);


/* LES TYPES DE VARIABLES */


//1. Chaîne de caratères (string)

let holidays ="2020";
let destination ="Egypte";

// 1. Un nombre entier (integer ou int)
let year = 2015;

// 3. Un nombre decimal (float)
let number = 3.55;

// 4.Un booléen ( boolean VRAI/FAUX = TRUE/FALSE)
let condition = false;

// 5. Une constante
const PAYS = "France"; // string
const YEAR = 2021; // integer

//6. connaitre le type d'une varible avec typeof
console.log(typeof YEAR);
console.log(typeof holidays);

// NUMBER ==> STRING
let otherNumber = 20;
otherNumber = otherNumber.toString();
console.log(typeof otherNumber);


// STRING ==> NUMBER
let number2 = "36";
// let number2 = "36,5";
number2 =parseInt(number2);
// number2 =parseFloat(number2);
console.log(typeof number2);



if (answer == "martin" || answer == "johanis"  || answer == "Martin"){
    document.write("true");
}
else {
    document.write("false");
}




let number1 = prompt ("Quelle est votre premier nombre ?");
number1 =parseInt(number1);
let number3 = prompt ("Quelle est votre deuxieme nombre ?");
number3 =parseInt(number3);
let operator = prompt ("Quelle est votre operateur ?");
let result;
if(operator == "-" ){
    result = number1 - number3;
}
if(operator == "*" ){
    result = number1 * number3;
}
if(operator == "+" ){
    result = number1 + number3;
}
if(operator == "/" ){
    result = number1 / number3;
}
document.write(result)
