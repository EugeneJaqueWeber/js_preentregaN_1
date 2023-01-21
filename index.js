const nombre = prompt ("ingrese su nombre")

let usuarioIngresado = prompt ("ingrese su nombre de usuario")
    const usuario = "eugenejaqueweber"

let contraseñaIngresada = Number ( prompt ("ingrese su contraseña") )
    const contraseña = 1234567


function usuarioIngresadoNuevamente (nuevoUsuario) {
    while (usuarioIngresado != usuario) {
        alert ("el usuario ingreso: " + usuarioIngresado)
        usuarioIngresado = prompt ("ingrese su nombre de usuario")
    }
    nuevoUsuario = usuarioIngresado
    return nuevoUsuario;
}

if ( usuarioIngresado === usuario ) {
    alert ("usuario correctamente ingresado")
    console.log ("usuario correctamente ingresado")
} else {
    alert ("usuario incorrectamente ingresado")
    console.log ("usuario incorrectamente ingresado")
    console.log (usuarioIngresado.length)
    for ( let i = 0; i < usuarioIngresado.length; i++ ) {
    console.log (i)
    console.log (usuarioIngresado[i]) }
    usuarioIngresadoNuevamente (usuarioIngresado)
}

function contraseñaIngresadaNuevamente (nuevaContraseña) {
    while (contraseñaIngresada != contraseña) {
        alert ("el usuario ingreso: " + contraseñaIngresada)
        contraseñaIngresada = prompt ("ingrese su contraseña nuevamente")
    }
    nuevaContraseña = contraseñaIngresada
    return nuevaContraseña;
}

if ( contraseñaIngresada === contraseña ) {
    alert ("contraseña correctamente ingresada")
    console.log ("contraseña correctamente ingresada")
} else {
    alert ("contraseña incorrectamente ingresada")
    console.log ("contraseña incorrectamente ingresada")
    contraseñaIngresadaNuevamente (contraseñaIngresada)
}


if ( usuarioIngresado === usuario || nuevoUsuario === usuario && nuevaContraseña === contraseña || contraseñaIngresada === usuario) {
    alert ("Bienvenido a esta pagina: " + nombre)
} else {
    alert ("usuario o contraseña erróneos")
    console.log ("usuario o contraseña erróneos")
}



const edadNecesaria = 15
let edadDelUsuario = prompt (`ingrese su edad`)

function registroDelUsuario ( edadDelUsuario ) {
    alert (`usted tiene ${edadDelUsuario}`)
}

registroDelUsuario ( edadDelUsuario )

if ( edadDelUsuario > edadNecesaria) {
    alert ("tiene permiso para visitar esta pagina")
} else {
    alert ("no tiene permiso para visitar esta pagina, necesita ser mayor a 15 o tener el permiso de los padres")
} 

function datosDelUsuario (nombre, edadDelUsuario) {
    console.log (`Nombre: ${nombre}`)
    console.log (`Edad: ${edadDelUsuario}`)

}
datosDelUsuario (nombre, edadDelUsuario)