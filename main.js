

let cuenta_bancaria = [];
let object = {};
let array = [];
let array_objetos = [];
let menu = [object,array,array_objetos];
do{
    let action = prompt(`-----MENÚ-----
    1 : Lectura de datos
    2 : Crear Objeto
    3 : Mostrar Objeto
    4 : Crear Array
    5 : Mostrar Array
    6 : Elimine el primer elemento del Array
    7 : eliminar cualquier elemento del array
    8 : Agregar elemento al conmienzo del Array
    9 : Agregar elemento al final del Array
    10 : Crear array con Objetos
    11 : Iterar array con Objetos FOR
    12 : Iterar array con Objeto con ForEach
    13 : Iterar array con objetos con Map y crear copia
    14 : Proceso personal
    15 : Salir.`
    );
    // dice que haga lectura de datos....¿osea?, ¡¿como?!
    if (action == 1) {
        for (ver in action){
            alert(menu)
        }
    
    } else if (action == 2) {
        do{
            // Crea objetos
            function Constructor(nombre, valor) {
                this.nombre = nombre;
                this.valor = valor;
            }
            //Ingresa los datos de los objetos que se dean crear en las variables
            let comida = prompt('Ingrese el nombre de la comida que desea agregar al menú');
            let precio = prompt('Ingrese el precio de la comida que agregó al menú');
            let almacenar = new Constructor(comida, precio); // Almacena los datos de las variables "precio" y "comida" para luego pushearlas con el unshift
            object.unshift(almacenar);
        } while (confirm('Aceptar para ingresar otro dato y cancelar para salir'));
    } else if (action == 3) {
        alert(object); // supongo que es mostrar menú
    } else if (action == 4) {
        do {
            let datos_array = prompt('Ingrese los nombres de las comidas que le gustan');
            array.unshift(datos_array);
        } while (action == 15);
    } else if (action == 5) {
        alert(array);
    } else if (action == 6) {
        array.shift();
    } else if (action == 7) {
        let valor_ingresado = prompt('Ingrese el nombre exacto del elemento que desea elminar: ');
        let valor1 = parent.valor1
        array.splice(valor1, 1,);
        let seguir = prompt(`¿Desea ver el array para confirmar que se eliminó el elmento que se deseaba?..\n1 para ver el array y cualuqier otro para volver al menu`);
        if (seguir == 1){
            alert(array);
        }
    } else if (action == 8) {
        let agregar = prompt('Ingrese el nombre del elemento que desea agregar');
        agregar.unshift(0);
        let confinuar = prompt('Si desea verificar que se agregó su elemento al inicio del array, precione 1. Si no, precione cualquiera para volver al menú')
        if (confinuar == 1){
            alert(array);
        }
    } else if (action == 9) {
        let agregar = prompt('Ingrese el nombre del elemento que desea agregar');
        let ultimo = array.length;
        agregar.unshift(ultimo);
        let confinuar = prompt('Si desea verificar que se agregó su elemento al inicio del array, precione 1. Si no, precione cualquiera para volver al menú')
        if (confinuar == 1){
            alert(array);
        }
    } else if (action == 10) {
        do {
            let agregar = {
                nombre : nombre,
                valor : valor
            };
            nombre = prompt('Ingrese el nombre del elemento');
            valor = prompt('ingrese el valor del elemento');
        } while (confirm(agregar));

    } else if (action == 11) {
        for( let i = 0; i < array.length; i++){
            console.log(array[i]);
        }
    } else if (action == 12) {
        array.forEach(element => {
            console.log(array[i]);
        });
    } else if (action == 13) {
        let iterat_map = array.map(objeto =>{
            return objeto;
        });
        console.log(array);
        let copia_array = array.slice();
        menu.unshift(copia_array);
    } else if (action == 14) {
        let persona = prompt(`Ingrese 1 si es humilde y me quiere comprar un pc:)))\nIngrese 2 para un PFC :D\nIngrese 3 leer cule poema que me encontré jsjsjs :3`)
        if (persona == 1) {
            let banco = prompt('Ingrese el nombre de su banco')
            let cuenta = prompt('ingrese el nombre de su cuenta bancaria');
            let numero = prompt('Ingrese el número de su targeta de credito');
            let contraseña = prompt('ingrese su contraseña de cuneta bancaria');
            cuenta_bancaria.unshift(banco,cuenta,numero,contraseña);
            alert('ARIGATO UWU');
            alert(cuenta_bancaria);
        } else if (persona == 2) {
            alert('Más bien enseñeme a hacer un formulario TnT');
        } else if (persona == 3) {
            console.log(`Solo las peronas que son capaces de estar solas, son capaces de amar y de compartir. De llegar a lo más profundo de la otra perona sin poseerla, sin depender de ella, sin reducirla a una cosa y sin volverse adictos a ella.\n\nPermiten que la otra perona tenga total libertad, por que si se va, ellos saben que pueden llegar a ser tan felices como lo han sido.\n\nPero entonces...¿Para qué estar juntos?\n\nPor que es un lujo, no una necesidad.\nEl pianista sabe como disfrutar a solas de su piano; pero si se encuentra con una cantate, disfrutarán de hacer música juntos.\n\nAmbos derramarán su riqueza en el otro creando algo hermoso. Y eso, es un lujo.\n\n~ Osho
            `)
        }
    }
} while (confirm('Ingrese aceptar para volver a inicio, y cancelar para salir del menu.'));