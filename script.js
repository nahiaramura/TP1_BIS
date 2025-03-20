function validarForm()
{
let notaMatematica = document.getElementById('matematica').value;
let notaLengua = document.getElementById('lengua').value;
let notaEFSI = document.getElementById('efsi').value;

//VALIDAR
let notaMatematicaValida = validacion(notaMatematica);
let notaLenguaValida = validacion(notaLengua);
let notaEFSIValida = validacion(notaEFSI);

let mensaje = " ";
if(!notaMatematicaValida || !notaEFSIValida || !notaLenguaValida )
{
mensaje = "Error. Debe ser un número entre 1 y 10"
}

}

function validacion(datoAvalidar)
{
let nota=document.getElementById(datoAvalidar).value;

const tieneLetra = /(?:[A-Z])/.test(nota) || /(?:[a-z])/.test(nota);
const tieneNum = /(?:\d)/.test(nota);
let esValido = false;

if(nota > 10 || nota < 1)
{
alert="La nota debe estar entre 1 y 10"

}
else if(tieneLetra || tieneNum)
{
    alert="Debe ingresar un numero"
}

}