let usuario = {
    nombre: [], 
    pais: [],
    mail: [],  
    discosGuardados:[],
}

let ingresarUsuario = () => {
    let ingresarNombre = prompt ('Ingrese su nombre:');
    usuario.nombre.push (ingresarNombre);
    let ingresarPais = prompt ('Ingrese su país:');
    usuario.pais.push (ingresarPais);
    let ingresarMail = prompt ('Ingrese su mail:');
    usuario.mail.push (ingresarMail);
}
ingresarUsuario ();


let generos = [
    {nombre: 'Rock', discos: []}, 
    {nombre: 'Jazz', discos: []}, 
    {nombre: 'Hip-hop', discos: []}, 
    {nombre: 'Clásica', discos: []}, 
    {nombre: 'Samba', discos: []}, 
    {nombre: 'Tango', discos: []}, 
    {nombre: 'Salsa', discos: []}, 
    {nombre: 'Country', discos: []}
];
function mostrarGeneros (){
    generos.forEach ((genero, indice) =>{
        console.log (indice + 1 + " . " + genero.nombre);
    });
}

function agregarDisco(){
    mostrarGeneros();

    const opcion = parseInt (prompt ('Elija un género para agregar un disco(Ingrese el número correspondiente)'));
        if (opcion >= 1 && opcion <= generos.length) {
            const generoSeleccionado = generos [opcion-1];
            const artista = prompt ('Nombre del artista')
            const disco = prompt ('Nombre del disco');
            generoSeleccionado.discos.push ({nombre: disco, artista: artista});
            usuario.discosGuardados.push ({nombre: disco, artista: artista});

            console.log ('El disco ' +disco + ' de ' +artista+ ' se agregó al género ' +generoSeleccionado.nombre);
        } else {
            console.log ('Opcón inválida, elija un número de la lista de géneros');
        }
}
console.log (usuario);

agregarDisco();