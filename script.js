
function validacion(id) {
    let input = document.getElementById(id);
    let errorText = document.getElementById("error-" + id);
    let nota = input.value.trim();

    if (nota === "") {
        errorText.textContent = "Debe ingresar un valor.";
        input.classList.add("invalid");
        input.classList.remove("valid");
        return false;
    }

    let valorNumerico = parseFloat(nota);

    if (isNaN(valorNumerico)) {
        errorText.textContent = "Debe ingresar solo números.";
        input.classList.add("invalid");
        input.classList.remove("valid");
        return false;
    }

    if (valorNumerico < 1 || valorNumerico > 10) {
        errorText.textContent = "La nota debe estar entre 1 y 10.";
        input.classList.add("invalid");
        input.classList.remove("valid");
        return false;
    }

    errorText.textContent = "";
    input.classList.add("valid");
    input.classList.remove("invalid");
    return true;

}
function calcularPromedio() {
    let notaMate = parseFloat(document.getElementById("matematica").value.trim());
    let notaLengua = parseFloat(document.getElementById("lengua").value.trim());
    let notaEFSI = parseFloat(document.getElementById("efsi").value.trim());
    const cantMaterias = 3;
    if (isNaN(notaMate) || isNaN(notaLengua) || isNaN(notaEFSI)) {
        document.getElementById("resultadoPromedio").textContent = "Por favor, ingrese todas las notas válidas.";
        document.getElementById("resultadoPromedio").classList.remove("resultado-verde", "resultado-rojo");
        return;}
    let promedio = (notaEFSI + notaLengua + notaMate) / cantMaterias;
    
    let resultadoElement = document.getElementById("resultadoPromedio");
    resultadoElement.textContent = "Su promedio es: " + promedio;

    if (promedio >= 6) {
        resultadoElement.classList.add("resultado1-verde");
        resultadoElement.classList.remove("resultado-rojo");
    } else {
        resultadoElement.classList.add("resultado-rojo");
        resultadoElement.classList.remove("resultado1-verde");
    }
}

function buscarMayorNota() {
    let notaMate = parseFloat(document.getElementById("matematica").value.trim());
    let notaLengua = parseFloat(document.getElementById("lengua").value.trim());
    let notaEFSI = parseFloat(document.getElementById("efsi").value.trim());
    
    if (isNaN(notaMate) || isNaN(notaLengua) || isNaN(notaEFSI)) {
        document.getElementById("resultadoPromedio").textContent = "Por favor, ingrese todas las notas válidas.";
        document.getElementById("resultadoPromedio").classList.remove("resultado-verde", "resultado-rojo");
        return;}
    let mayorNota = Math.max(notaMate, notaLengua, notaEFSI); 
    let resultadoText = "La(s) materia(s) con la mayor nota: ";

    if (notaMate === mayorNota) {
        resultadoText += "<span class='resultado-azul'>Matemática</span>";
    }

    if (notaLengua === mayorNota) {
        if (resultadoText !== "La(s) materia(s) con la mayor nota: ") {
            resultadoText += " y ";
        }
        resultadoText += "<span class='resultado-azul'>Lengua</span>";
    }

    if (notaEFSI === mayorNota) {
        if (resultadoText !== "La(s) materia(s) con la mayor nota: ") {
            resultadoText += " y ";
        }
        resultadoText += "<span class='resultado-azul'>EFSI</span>";
    }


    document.getElementById("resultadoMayorNota").innerHTML = resultadoText;
}
