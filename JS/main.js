console.log("PRACTICANDO JS // 28.29/01/2023");
console.log("");
console.log("CLASE 4 - PROGRAMACION CON FUNCIONES ");

/*function saludar() {
    console.log ("Bienvenidos a RB-Materiales")
}
saludar();
*/

//----------

/*function saludar (mensaje) {
    console.log (mensaje);
}

saludar ("Hola Fran");
saludar ("Hola Oli");
saludar ("Hola Cata");
saludar ("Hola Familia");
*/

//----------

/*function solicitarMaterial () {
    let materialIngresado = prompt("ingresar nombre material")
    console.log ("el material ingresado es: " + materialIngresado);
}

solicitarMaterial();
solicitarMaterial();
solicitarMaterial();
*/

//----------

//--PARAMETROS--
/*function conParametros (parametro1, parametro2) {
    console.log (parametro1 + " " + parametro2);
}
conParametros ("CEMENTO bolsa x 50 kg;","HERCAL bolsa x 40 kg");

function sumar (a, b) {
    console.log (a + b);
}
sumar (4, 3);
*/

//----------

//--SUMAR y MOSTRAR--
/*let resultado = 0

function sumar(primerNumero, segundoNumero){
    resultado = primerNumero + segundoNumero;
}
function mostrar(mensaje){
    console.log (mensaje);
}
//sumar(6, 3);
sumar(10, -5);
mostrar("RESULTADO SUMA");
mostrar(resultado);
*/

//----------

//--RETURN--
/*function sumar(primerNumero, segundoNumero){
    return primerNumero + segundoNumero;
}
console.log(sumar (1,10));
*/

/*function calculadora(primerNumero, operacion, segundoNumero){

    switch(operacion){
        case "+":
            return primerNumero + segundoNumero;
        break;

        case "-":
            return primerNumero - segundoNumero;
        break;

        case "*":
            return primerNumero * segundoNumero;
        break;

        case "/":
            return primerNumero / segundoNumero;
        break;

        default:
            return 0;
        break;
    }
}
console.log(calculadora(10,"+",5));
console.log(calculadora(10,"-",5));
console.log(calculadora(10,"*",5));
console.log(calculadora(10,"/",5));
*/

//----------

//--SCOPE --          VARIABLES GLOBAL Y LOCAL
/*let resultado = 0 // <-- global

function sumar(primerNumero, segundoNumero){
    resultado = primerNumero + segundoNumero;
}
sumar(7,6);
console.log(resultado);
*/

/*function sumar(primerNumero, segundoNumero){
    let resultado = primerNumero + segundoNumero; // <-- local
    console.log(resultado);
}
sumar(7,6);
*/

/*let nombre = "Juan Lopez"; // <-- global

function saludar(){
    let nombre = "Luisa Gomez"; // <-- local
    console.log(nombre);
}
console.log(nombre);
saludar();
//VARIABLES GLOBAL Y LOCAL pueden coexistir
*/

//misma variable pero dentro del scope
/*function suma(numero1, numero2){
    let resultado = numero1 + numero2;
    return resultado;
}
console.log(suma(4,2));
function resta(numero1, numero2){
    let resultado = numero1 - numero2;
    return resultado;
}
console.log(resta(4,2));
*/

//----------

//--FUNCIONES ANIDADAS--
/*function saludar1(nombre){
    console.log("Hola " + nombre);
}
saludar1("Rodrigo")

//--

const saludar2 = function (nombre){
    console.log("Hola " + nombre);
}
saludar2("Mario")

//--

const saludar3 = (nombre) => {                    //FUNCION FLECHA
    console.log("hola " + nombre);
} 
saludar3("Rodrigo")

//--

const suma = function (a,b) {return a + b}
const resta = function (a,b) {return a - b}

console.log (suma(4,2));
console.log (resta(4,2));

const newFunction = function () {
    let resultado = suma(4,2) + resta(4,2);
    console.log(resultado);
}
newFunction();
*/

//----------

//--FUNCION FLECHA--
/*const suma = (a,b) => { return a+b};
const resta = (a,b) => a-b; // siendo en una sola linea se puede quitar el"return" y las "{}"
console.log(suma(5,3));
console.log(resta(5,3));
*/

/*const suma = (a,b) => a+b;
const resta = (a,b) => a-b;
const IVA = x => x * 0.21;

let precioProducto = 500;
let descuento = 50;

let nuevoPrecio = resta(suma(precioProducto, IVA(precioProducto)), descuento);

console.log(nuevoPrecio);
*/

console.log("");
console.log("CLASE 5 - OBJETOS");

//--OBJETOS--
/*const persona1 = {
    nombre: "Rodrigo",
    edad: 45,
    bentin: true,
    calle: "25 de Mayo 912"
}
console.log(persona1); // muestra todo

console.log(persona1.nombre); // muestra el valor que le pido
console.log(persona1.edad); // muestra el valor que le pido
console.log(persona1.bentin); // muestra el valor que le pido
console.log(persona1.calle); // muestra el valor que le pido
console.log(persona1.ciudad); // muestra undefined
// se puede poner persona1.nombre o persona1["nombre"]
console.log(persona1["nombre"]); // muestra el valor que le pido
console.log(persona1["edad"]); // muestra el valor que le pido
console.log(persona1["bentin"]); // muestra el valor que le pido
console.log(persona1["calle"]); // muestra el valor que le pido
//agrego nuevo valor a una propiedad
persona1.edad = 40;
console.log(persona1.edad);
persona1["nombre"] = "Mario";
console.log(persona1["nombre"]);
*/

//----------

//--CONSTRUCTOR-- --------> funcion constructora
//                --------> funcion para crear un nuevo objeto

/*function Persona (nombre, edad, calle) { // plantilla de datos
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}

const persona1 = new Persona ("Rodrigo", 45, "25 de Mayo 912");
const persona2 = new Persona ("Olivia", 9, "Guido Spano 241");
const persona3 = new Persona ("Francesco", 9, "Guido Spano 241");
const persona4 = new Persona ("Catalina", 5, "Guido Spano 241");

console.log(persona1);
console.log(persona2);
console.log(persona3);
console.log(persona4);
*/

//--

/*function Persona (nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;

    this.decirNombre = function() {
        return "Hola, mi nombre es " + this.nombre;
    }
}

const persona1 = new Persona ("Rodrigo", 45, "25 de Mayo 912");

console.log(persona1);
console.log(persona1.nombre);
console.log(persona1["edad"]);
console.log(persona1.decirNombre());
*/

//--

/*function Persona (nombre, edad, calle, vivo) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.vivo = vivo;
    
    this.decirNombre = function() {
        return "Hola, mi nombre es " + this.nombre;
    }

    this.hablar = function (mensaje) {
        return this.nombre + " dice: " + mensaje;
    }

    this.saludar = _ => {      // -----> en la funcion flecha, cuando la funcion anonima esta vacia se la puede escribir tambien con _ o ()
        return this. nombre + " dice chau";
    }
}

const persona1 = new Persona ("Rodrigo", 45, "25 de Mayo 912", true);
const persona2 = new Persona ("Mario", undefined, "25 de Mayo 912", true);

console.log(persona1);
console.log(persona2);

console.log(persona1.hablar("Hola, como estas?"));
console.log(persona2.saludar());
*/

//----------

//--OPERADOR IN -----------------> devuelve true si esta declarada la variable
//--OPERADOR FOR...IN -----------> recorre todas las instancias del objeto

/*const persona = {
    nombre: "Rodrigo",
    pais: "Argentina",
    edad: 45,
    soltero: false,
}

if ("nombre" in persona) {
    console.log(persona.nombre); // Rodrigo
}
if ("edad" in persona) {
    console.log(persona.edad);  // 45
}
if ("calle" in persona) {
    console.log(persona.calle); // no devuelve nada xq no existe "calle"
}

//--

console.log("nombre" in persona); // true 
console.log("edad" in persona); // true
console.log(persona.edad); // 45
console.log("calle" in persona); // false

//--

for (const i in persona){
    console.log(i); // i (clave)
    console.log(persona[i]); // persona (valor)
}
*/

//--CLASS --------------> la clase es forma la apropiada de escribir un objeto
/*class Persona {
    constructor (nombre, edad, calle, vivo){
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
        this.vivo = vivo;
    }
    decirNombre () {
        return "Hola, mi nombre es " + this.nombre;
    }
    hablar (mensaje) {
        return this.nombre + " dice: " + mensaje;
    }
    saludar () {      // -----> en la class no funciona la funcion flecha
        return this.nombre + " dice chau";
    }
}
const persona1 = new Persona ("Rodrigo", 45, "25 de Mayo 912", true);
const persona2 = new Persona ("Mario", undefined, "25 de Mayo 912", true);

console.log(persona1);
console.log(""); 
console.log(persona2);
console.log("");
console.log(persona1.hablar("Hola, como estas?"));
console.log("");
console.log(persona2.saludar());
*/

console.log("");
console.log("CLASE 6 - ARRAYS");

//ACLARACION   ---> {objetos}
//             ---> [arrays]
//             ---> 1º index = 0

/*const simpsons = ["Homero", "Marge", "Bart", "Lisa", "Maggie"];
console.log(simpsons[0]);
console.log(simpsons[1]);
console.log(simpsons[2]);
console.log(simpsons[3]);
console.log("hola, mi nombre es ".concat(simpsons[4])); // ej con .concat
console.log(simpsons[5]); // undefined
*/

//--

/*const numeros = [2,4,6,8,10];
console.log(numeros[0]); // 2
console.log(numeros[2] + numeros[4]); // 6 + 10 = 16
*/

//----------

//--RECORRIENDO UN ARRAY (es un objeto iterante --> se puede recorrer)

/*const numeros = [1,2,3,4,5,6,7,8,9,10];
for (let i=0; i<10; i++){
    console.log(numeros[i]); // me muestra todos los numeros
}
*/

//--

/*let parrafo = "Hola Coders"
console.log("Largo del parrafo: " + parrafo.length + " caracteres"); // largo del parrafo: 11 - tambien podemos ver el metodo .length
*/

//----------

/////////////////////////////////////////////////
//--METODOS Y PROPIEDADES MAS COMUNES DEL ARRAY//
/////////////////////////////////////////////////

/*
const animales = ["perro", "tigre", "tiburon", "oso", "leon"];
console.log(animales);

//PUSH agrega elemento/s al final
animales.push("gato", "canario");
console.log(animales);

//UNSHIFT agrega elemento/s al inicio
animales.unshift("tortuga", "unicornio");
console.log(animales);

//SHIFT quita 1º elemento ()
animales.shift();
console.log(animales);

//POP quita ultimo elemento ()
animales.pop();
console.log(animales);
*/

//--

/*
const animales = ["perro", "tigre", "tiburon", "oso", "leon"];
console.log(animales);

//SPLICE quita de la posicion/index que le indico la cantidad de elementos que le indique
animales.splice(1,2);
console.log(animales); // a partir del index1, quito 2 elementos

//JOIN junta elementos
console.log(animales.join(" - ")); // le doy el tipo de separacion que quiero
*/

//--

//CONCAT concatenar/combinar
/*const perros = ["perro", "dog", "cane"];
const gatos = ["gato", "cat"];
const mascotas = perros.concat(gatos); // concatena

console.log(perros);
console.log(gatos);
console.log(mascotas);
*/

//--

//SLICE duclica desde el index y la cantidad que le indico menos el ultimo
/*const animales = ["perro", "tigre", "tiburon", "oso", "leon"];
console.log(animales);

const iniciaConLetraT = animales.slice(1,3);

console.log(iniciaConLetraT);
console.log(animales);
*/

//--

//INDEXOF (indexOf) devuelve el index de la primera coincidencia que encuente, si hubiera mas de 1 devuelve solo la primera. Si no encuentra nada devuelve -1
/*const nombre = ["Rita", "Pedro", "miguel", "Ana", "Vanesa", "Ana"];
console.log(nombre.indexOf("Ana")); // index 3
console.log(nombre.indexOf("Rodrigo")); // index -1

//INCLUDES devuelve true o false si el elemento esta incluido o no
console.log(nombre.includes("Ana")); // true
console.log(nombre.includes("Rodrigo")); // false

//REVERSE invierte orden de los elementos
const numeros = [1,2,3,4,5];
console.log(numeros);
console.log(numeros.reverse());
console.log(numeros); // destruye

//--

const numerosA = [1,2,3,4,5];
const numerosB = numerosA.slice().reverse(); // invierto sin destruir el array original (osea duplique e inverti)
console.log(numerosA);
console.log(numerosB);
*/

///////////////////////////////////////////////

//--CARGAR ARRAY CON ENTRADAS

/*const listaNombres = [];
let cantidad = 5;

do {
    let entrada = prompt("Ingresar nombre");
    listaNombres.push(entrada.toUpperCase());

    console.log(listaNombres.length);
} while (listaNombres.length != cantidad);

const nuevaLista =  listaNombres.concat(["Patrick","Ema"]);
alert (nuevaLista.join("\n"));
*/

//--ELIMINAR CUALQUIER ELEMENTO

/*const nombres = ["Rita", "Pedro", "miguel", "Ana", "Vanesa"];

const eliminar = (nombre) => {
    let index = nombres.indexOf(nombre);
    if (index != -1){
        nombres.splice(index, 1);
    } else {
        console.log(nombre + " no existe");
    }
}

console.log(nombres); // array completo
eliminar("Juan"); // juan no existe
console.log(nombres); // array completo
eliminar("Ana");
console.log(nombres); // array sin Ana
*/

//--ARRAY DE OBJETOS

/*const objeto1 = {
    id: 1,
    producto: "Arroz",
    Precio: 125
};

const myArray = [objeto1, {id: 2, producto: "Fideos", precio: 98}];
console.log(myArray);

myArray.push({id: 3, producto: "Leche"});
console.log(myArray);
*/

//--FOR...OF ------> bucle p/ arrays ------> EJEMPLOS

/*const productos = [
    {id: 1, nombre: "Arroz"},
    {id: 2, nombre: "Fideos"},
    {id: 3, nombre: "Pan"},
];
console.log(productos);

for (const item of productos){
    console.log(item);
    console.log(item.id);
    console.log(item.nombre);
}
*/

//--OBJETO, PRODUCTO Y ARRAY ------> EJEMPLOS

/*class Producto {
    constructor (nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIVA (){
        this.precio = this.precio * 1.21;
    }
    vender (){
        this.vendido = true;
    }
}

const productos = [];
console.log(productos);

productos.push( new Producto ("Arroz", "125"));
productos.push( new Producto ("Fideos", "70"));
productos.push( new Producto ("Pan", "50"));
console.log(productos);

for (const el of productos){
    el.sumaIVA();
}
console.log(productos);

for (const el of productos){
    el.vender();
}
console.log(productos);
*/

console.log("");
console.log("CLASE 7 - FUNCIONES DE ORDEN SUPERIOR");

//ACLARACION   ---> sirven para abstraerse 
//             ---> son metodos ya declarados
//             ---> funcion que devuelve otra funcion / funcion que recibe como parametro otra funcion
// (+= incrementa)
// (-= decrementa)

/*let total = 0

for (let i=1; i<=10; i++){
    total +=i;
}
console.log(total);

// ↑↑ HACEMOS DINAMICA LA FUNCION ↑↑

function sumarRango (desde, hasta){
    let total = 0
    for (let i=desde; i<=hasta; i++){
        total +=i;
    }
    return total;
}
console.log(sumarRango(1, 10)); // 55
console.log(sumarRango(5, 14)); // 95
*/

//--RETORNAR UNA FUNCION

/*function mayorQue (n){
    return (m) => m > n;
}

let mayorQueDiez = mayorQue(10);
let mayorQueCien = mayorQue(100);
console.log(mayorQueDiez(12)); // true
console.log(mayorQueDiez(8)); // false
console.log(mayorQueCien(99)); // false
console.log(mayorQueCien(120)); // true


console.log("");
// ↓↓ se puede resumir de esta forma ↓↓ 

mayorQueDiez = (m) => m > 10
mayorQueCien = (m) => m > 100
console.log(mayorQueDiez(12)); // true
console.log(mayorQueDiez(8)); // false
console.log(mayorQueCien(99)); // false
console.log(mayorQueCien(120)); // true
*/

//--ASIGNAR OPERACION (op)

/*function asignarOperacion(op){
    if (op == "sumar"){
        return (a,b) => a+b;
    } else if (op == "restar"){
        return (a,b) => a-b;
    } else if (op == "multiplicar"){
        return (a,b) => a*b;
    } else if (op == "dividir"){
        return (a,b) => a/b;
    } else {
        return (a,b) => "'No se cual es la operacion, solo se permite; +, -, *, /'"
    }
}

let suma = asignarOperacion("sumar");
let resta = asignarOperacion("restar");
let multiplicacion = asignarOperacion("multiplicar");
let division = asignarOperacion("dividir");
let miVariable = asignarOperacion("depurar");

console.log(suma(10, 5)); // 15
console.log(resta(10, 5)); // 5
console.log(multiplicacion(10, 5)); // 50
console.log(division(10, 5)); // 2
console.log(division(10, 0)); // Infinity
console.log(division(10, -0)); // -Infinity
console.log(miVariable(10, 5)); // 'No se cual es la operacion...'
*/

//--RECIBIR FUNCIONES POR PARAMETROS

/*const simpsons = ["homero", "marge", "bart", "lisa", "maggie",];
const numeros = [1,2,3,4,5,6,7,8,9,10];
let total = 0;

function saludar(A){
    return console.log("hola, yo soy " + A);
}
function acumular(num){
    total += num;
}

function porCadaUno(arr, fn){ // porCadaUno == forEach
    for (const el of arr){
        fn(el)
    }
}

console.log(total);
porCadaUno(simpsons,saludar);
porCadaUno(numeros,acumular);
console.log(total);
*/

//--

/*const numeros = [1,2,3,4,5,6];
const duplicado = [];

//function agregasrADuplicado(A){
//    duplicado.push(A);
//}

function porCadaUno(arr, fn){
    for (const el of arr){
        fn(el)
    }
}
console.log(duplicado);
//porCadaUno(numeros, agregasrADuplicado);
porCadaUno(numeros, (A) => duplicado.push(A));
console.log(duplicado);
*/

//////////////////////////////////////////
//--METODOS DE BUSQUEDA Y TRANSFORMACION//
//////////////////////////////////////////

//FOREACH (forEach)

/*const numeros = [1,2,3,4,5,6];

numeros.forEach((el, index) => {
    console.log(index, el); // devuelve cada indice con su elemento correspondiente
});
*/

//FIND encuentra el 1º y lo devuelve

/*const cursos = [
    {nombre: "Javascript", precio: 15000},
    {nombre: "ReactJS", precio: 22000},
    {nombre: "ReactJS", precio: 36000}    
]

const resultado1 = cursos.find((el) => el.nombre === "ReactJS");
console.log(resultado1); // 2
const resultado2 = cursos.find((el) => el.nombre === "DW");
console.log(resultado2); // Undefined
const resultado3 = cursos.find((el) => el.precio <= 16000);
console.log(resultado3); // 1
*/

//FILTER devuelve un nuevo array con todo lo que encuentre, sino devuelve uno vacio

/*const cursos = [
    {nombre: "Javascript", precio: 15000},
    {nombre: "ReactJS", precio: 22000},
    {nombre: "AngularJS", precio: 22000},
    {nombre: "Desarrollo Web", precio: 16000}
]

const resultado1 = cursos.filter((el) => el.nombre.includes ("JS"));
console.log(resultado1); // 2 3
const resultado2 = cursos.filter((el) => el.precio < 20000);
console.log(resultado2); // 1 4
*/

//SOME igual que FIND pero ahora nos devuelve True o False

/*const cursos = [
    {nombre: "Javascript", precio: 15000},
    {nombre: "ReactJS", precio: 22000},
    {nombre: "AngularJS", precio: 22000},
    {nombre: "Desarrollo Web", precio: 16000}
]

console.log(cursos.some ((el) => el.nombre == ("Desarrollo Web"))); // true
console.log(cursos.some ((el) => el.nombre == ("VueJS"))); // false
*/

//MAP crea un nuevo array / no destruye / transforma

/*const cursos = [
    {nombre: "Javascript", precio: 15000},
    {nombre: "ReactJS", precio: 22000},
    {nombre: "AngularJS", precio: 22000},
    {nombre: "Desarrollo Web", precio: 16000}
]

const nombres = cursos.map((el) => el.nombre.toLocaleUpperCase());
console.log(nombres);

const actualizado = cursos.map ((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio,
        precioIVA: el.precio * 1.21,
        nuevo: true
    }
})
console.log(actualizado); // devuelve todo actualizado
// el array entre () devuelve solo
// el array entre {} debo poner RETURN para que devuelva
*/

//RECUCE devuelve un unico valor tras iterar sobre el array
//       ej: acumula suma de prop de elementos
//       ej: obtener resultado gral sobre el array
//       muy utilizado en CARRITOS
//       Recibe 2 parametros (acumulador y elemento)+(valor inicial)
//              acumulador == acc / elemento == el  
//              valor inicial != index / valor inicial del acc

//ej 1
/*const numeros = [1,2,3,4,5,6];

let total = numeros.reduce((acc, el) => acc + el, 0);
console.log(total); // 21
*/

//ej 2
/*let bono = -10000;

const miCompra = [
    {nombre: "Desarrollo Web", precio: 20000},
    {nombre: "Javascript", precio: 18750},
    {nombre: "ReactJS", precio: 27500},
]
let total1 = miCompra.reduce((acc,el) => acc + el.precio, 0);
console.log(total1); // 66250
let total2 = miCompra.reduce((acc,el) => acc + el.precio, bono);
console.log(total2); // 56250
*/

//SORT ordena x numero o valor numerico (letras)
//     solo 2 parametros
//     (A-B) ascendente / (B-A) descendente

//ej 1
/*const numeros = [40, 1, 5, 200, .4, -3];
console.log(numeros);

console.log(numeros.sort((a , b) => a - b)); // ascendente
console.log(numeros.sort((a , b) => b - a)); // descendente
*/

//ej 2
/*const items = [
    {nombre: "Messi", precio: 250},
    {nombre: "Cristiano Ronaldo", precio: 190},
    {nombre: "Neymar Jr", precio: 180},
    {nombre: "Mbappe", precio: 150},
    {nombre: "Mbappe Kilian", precio: 150},
    {nombre: "Messi Lio", precio: 250},
]
items.sort((a,b)=>{
    if (a.nombre > b.nombre){
    return 1;
    }
    if (a.nombre < b.nombre){
        return -1;
    }
    return 0;
})
console.log(items);
*/

//ej varios
/*const material = [
    {id: 1, nombre: "Cemento x 50 kg", precio: 1600},
    {id: 2, nombre: "Hercal x 40 kg", precio: 1200},
    {id: 3, nombre: "Malla Q188 - 15*15*6", precio: 9000},
    {id: 4, nombre: "Malla R131 - 15*25*5", precio: 6000}
]
const buscado = material.find((material) => material.id === 3);
console.log(buscado); // 3
const existe1 = material.some((material) => material.nombre === "Hierro");
console.log(existe1); // false
const existe2 = material.some((material) => material.nombre === "Cemento x 50 kg");
console.log(existe2); // true
const baratos = material.filter((material) => material.precio < 5000);
console.log(baratos); // 1 2
const listaMateriales = material.map(material => material.nombre);
console.log(listaMateriales); // lista todos los materiales y acomodados x index
*/

//MATH (Math) propiedades matematicas
/////////////////////////////////////

/*console.log(Math.E); // 2.718281828459045
console.log(Math.PI); // 3.141592653589793
*/

//--MIN & MAX

/*console.log(Math.max(55, 13.443, 0, -25, 93, 4)); // 93
console.log(Math.min(55, 13.443, 0, -25, 93, 4)); // -25
console.log(Math.max(55, Infinity, 0, -25, 93, 4)); // Infinity
console.log(Math.min(55, -Infinity, 0, -25, 93, 4)); // -Infinity
*/

//--CEIL - FLOOR - ROUND

/*const pi = Math.PI // 3.141592653589793

console.log(Math.ceil(pi)); // 4 / redondea al entero MAYOR mas proximo
console.log(Math.floor(pi)); // 3 / redondea al entero MENOR mas proximo
console.log(Math.round(pi)); // 3 / redondea al entero mas proximo
*/

//--SQUARE ROOT (sqrt) --> raiz cuadrada

/*console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(2)); // 1.4142135623730951
console.log(Math.sqrt(1)); // 1
console.log(Math.sqrt(0)); // 0
console.log(Math.sqrt(-1)); // NaN
*/

//--RANDOM numeros al azar entre 0 y X, incluyendo 0 pero sin incluir X

/*console.log(Math.random()); // 0.1261600462947865
console.log(Math.random()); // 0.8339049302394048
console.log(Math.random()); // 0.38651378069362585

console.log(Math.random().toFixed(2)); // numero (string) random con 2 decimales
console.log(Math.random() * 10); // numero random entre 0 y 10
console.log(Math.round(Math.random()*10)); // numero random entre 0 y 10 redondeado
console.log(Math.random() * 50); // numero random entre 0 y 50
console.log(Math.random() * 30 + 20); // numero random entre 20 + 30 (osea 50)
*/

//ejemplo
/*generadorNumero = (total) => {
    return Math.round(Math.random() * total); // 0 a 100 inclusive 
}
console.log(generadorNumero(100));
generadorNumero = (total) => {
    return Math.ceil(Math.random() * total); // 1 a 100 inclusive
}
console.log(generadorNumero(100));
generadorNumero = (total) => {
    return Math.floor(Math.random() * total); // 0 a 99 inclusive
}
console.log(generadorNumero(100));
*/

//DATE (Date) fechas y horas
/////////////////////////////////////
//     debo instanciar con "new"
//     los meses los cuenta del 0 al 11
//     los dias los cuenta a partir del 1

//console.log(new Date()); // Sun Jan 29 2023 19:02:11 GMT-0300 (hora estándar de Argentina)
//console.log(new Date(1977, 2, 19)); // Sat Mar 19 1977 00:00:00 GMT-0300 (hora estándar de Argentina)

/*const casiNavidad = new Date (2023, 11, 24, 23, 59,59);
console.log(casiNavidad); // Sun Dec 24 2023 23:59:59 GMT-0300 (hora estándar de Argentina)
// ↑↑ ↓↓ lo puedo escribir de las 2 formas ↓↓ ↑↑
const casiNavidad2 = new Date ("December 24, 2023 23:59:59"); // December o Dec
console.log(casiNavidad2); // Sun Dec 24 2023 23:59:59 GMT-0300 (hora estándar de Argentina)
*/

//--VALOR SINGULAR
//-----> getMonth(); // mes entre 0 y 11
//-----> getFullYear(); // año
//-----> getDay(); // dia entre 0 (domingo) y 6 (sabado)

//ejemplos
/*const hoy = new Date("January 29, 2023");
console.log(hoy); // Sun Jan 29 2023 00:00:00 GMT-0300 (hora estándar de Argentina)

console.log(hoy.getFullYear()); // 2023
console.log(hoy.getMonth()); // 0
console.log(hoy.getDate()); // 29

console.log(hoy.toDateString()); // Sun Jan 29 2023
console.log(hoy.toLocaleString()); // 29/1/2023, 00:00:00
console.log(hoy.toLocaleDateString()); // 29/1/2023
console.log(hoy.toTimeString()); // 00:00:00 GMT-0300 (hora estándar de Argentina)
console.log(hoy.toUTCString()); // Sun, 29 Jan 2023 03:00:00 GMT
*/

//--DIFERENCIA ENTRE FECHAS en milisegundos

/*const hoy = new Date ("jan 29, 2023");
const finDeMes = new Date ("jan 31, 2023");
console.log(finDeMes - hoy); // 172800000

const milisegundosPorDia = 86400000;
console.log((finDeMes - hoy) / milisegundosPorDia); // 2 dias
*/

//ej "haciendo tiempo"
/*const inicio = new Date();

for (let i=0; i<2000; i++){
    console.log("haciendo tiempo"); // cuenta hasta 2000
}

const final = new Date();

console.log("el proceso tardo: " + (final - inicio) + " milisegundos"); // el proceso tardo: 241 milisegundos (va a tirar casi siempre valores distintos)
*/