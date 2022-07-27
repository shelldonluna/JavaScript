
console.log('Hola mundo')

//control de flujo
/* const edad = 5
if (edad > 5 &&edad <18) {
	console.log ('El niño puede jugar')

} else {
	console.log ('el niño no puede jugar')
}
 */

//control de flujo while
// const edad =5
// if (edad > 5 &&edad <18) {
// 	console.log ('El niño puede jugar')

// }
// let x=true
// while (x) {
// 	console.log(x)
// 	x = false

// }

//console.log('terminando el lo')

//control de flujo -switch
// let y = 3;

// switch (y){
// 	case 1: {
// 		console.log('yo soy el caso 1');
// 		break;
// 	}
// 	case 2: {
// 		console.log ('chanchito feliz');
// 		break;
// 	}
// 	case 3:{
// 		console.log ('chanchito triste');
// 		break;
// 	}
// 	default:
// 		console.log ('no hay chanchitos');
// 		break;
// }

// ciclo for
// for (let i = 0; i < 10; i++) {
// 	console.log(i)

// }

// Accediendo a los elementos de un arreglo 

// const numeros = [1,2,'hola',4,5]

// for (let i = 0; i < numeros.length; i++) {
//  	console.log(i)
// }

// for (let i = 0; i < numeros.length; i++) {
// 	console.log(numeros[i])
// }
//funciones
/* function iterar (arg1) {
	 for (let i = 0; i < arg1.length; i++) {
  	console.log(arg1[i])
 }
}
const numeros = [1,2,'Hola',4,5]
const nombres = ['pedro','juan','felipe', 'chanchito feliz','chanchito triste']

iterar(numeros)
iterar(nombres) */
// funciones con el return hacia una constante y despues calcular el resultado
/* function suma(a,b){
	return (a+b)
}

const resultadoSuma1 = suma (1,3)
const resultadoSuma2 = suma (5,6)
const resultadoSuma3 = suma (resultadoSuma1,resultadoSuma2)
console.log ('resultado',resultadoSuma3)
 */
/* function suma(a,b){
	return (a+b)
}
const resultadoSuma1 = suma (1,3)
const resultadoSuma2 = suma (5,6)
const resultadoSuma3 = suma (resultadoSuma1,resultadoSuma2)
console.log ('resultado',resultadoSuma3) */

function sumar(a,b,cb) {
	const r = a+b
	cb(r)
}

function callback(result){
	console.log ('resultado', result)
}
//callback (6)
//sumar (2,3,callback) 

//far arrow function 
const miFatArrowFunction = (a,b) => (a +b)
// si se utllizan los corchetes en las fat arrow se requere utilizar el return

const otraFAF = (a,b) => {
	return a+b
 }
//const r =miFatArrowFunction(2,3)
const r= otraFAF (3,2)

console.log('resultado', r)


//funciones anonimas
sumar (2,3,function (r) {
	console.log('soy una funcion anonima y mi resutado s', r)
})