const btnAddEstudiantes = document.querySelector("#idBtnAgregarEstudiante")
const btnViewEstudiantes = document.querySelector("#idBtnMostrarEstudiante")
const inputCarnet = document.querySelector("#inputCarnet")
const inputNombre = document.querySelector("#inputNombre")
const inputApellido = document.querySelector("#inputApellido")

btnAddEstudiantes.addEventListener("click", guardarEstudiante)

function guardarEstudiante(){
    const carnet = inputCarnet.value.trim()
    const nombre = inputNombre.value.trim()
    const apellido = inputApellido.value.trim()

    const errores = validarDatos(carnet, nombre, apellido)

    if (errores.length > 0){
        alert("Errores: \n" + errores.join(","))
        return
    }

    const alumno = [recuperarEstudiantes()];
    alumno.push({carnet, nombre, apellido});
    guardarEstudiantes(alumno);
    
}

function guardarEstudiantes(estudiantes) {
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes))
}

function recuperarEstudiantes() {
    const data = localStorage.getItem("estudiantes")
    return data ? JSON.parse(data) : [];
    

}


function validarDatos(carnet, nombre, apellido) {  
    const errores = []

    if(carnet.trim().length == 0){
        errores.push("El carnet es requerido")
    } 
    if(nombre.trim().length == 0){
        errores.push("El nombre es requerido")
    } 
    if(apellido.trim().length == 0){
        errores.push("El apellido es requerido")
    } 
    
    return errores
}