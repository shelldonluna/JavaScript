
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
const edad =5
if (edad > 5 &&edad <18) {
	console.log ('El niño puede jugar')

}
let x=true
while (x) {
	console.log(x)
	x = false

}

//console.log('terminando el lo')

//control de flujo -switch
switch (3){
	case 1: {
		console.log('yo soy el caso 1');
		break;
	}
	case 2: {
		console.log ('chanchito feliz');
		break;
	}
	case 3:{
		console.log ('chanchito triste');
		break;
	}
	default:
		console.log ('no hay chanchitos');
		break;
}