// Otra forma de acceder a un elemento HTML es utilizando el getElementById del DOM
// Noté que para este caso no se antepone el carácter #
const campo = document.getElementById("idTxtNumero");

//definamos una funcion anonima que permita validar en tiempo real el ingreso de un numero
const validarNumero = function (e) {
	// Creamos una expresión regular que valide que sean numeros
	let validar = /[0-9]{1}$/;
	// Tecla que se está evaluando
	let tecla = e.key;

	/*
	test válida que la expresión regular coincida con el valor ingresado
	podrá observar que al intentar teclar una letra u otro caracter diferente
	a un número este no se escribe en el campo
	*/
	if (!validar.test(tecla)) e.preventDefault();
};

campo.addEventListener("keypress", validarNumero);

//Trabajando con el boton Calcular
const boton = document.getElementById("idBtnCalcular");

//Definiendo una funcion anonima para calcular el factorial de un numero
const calcularFactorial = function (numero) {
	return numero < 2 ? 1 : numero * calcularFactorial(numero - 1);
};

//Definamos una funcion de tipo flecha para imprimir el resultado del factorial
const imprimir = (numero, resultado) => {
	const contenedor = document.getElementById("idDivResultado");
	contenedor.innerHTML = `El factorial de ${numero}! es ${resultado}`;
};

// Definiendo una funcion tradicional
function calcular() {
	let numero = document.getElementById("idTxtNumero").value;

	if (numero !== "") {
		// Llamamos a la funcion anonima para que calcule el factorial
		const resultado = calcularFactorial(numero);
		//Enviando el resultado a una funcion de tipo flecha
		imprimir(numero, resultado);
	} else {
		alert("Debe ingresar un número válido");
	}
}

//Agregando el addEventListener click para el boton
boton.addEventListener("click", calcular);
