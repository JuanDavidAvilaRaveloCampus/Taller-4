let alerta = prompt(`-----MENÚ-----
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

let data = {perro : "milu"};

if (alerta == 1){
    for( informacion in data){
        console.log(data[informacion]);
    };
} else if (alerta == 2) { 
    for ( i = 0; i < 1; i++){
        function Crear_Objeto (object){
            this.objeto = object;
        };
    };
} else if (data == 3){
    //mostrar objeto a travez de un for of
} else if (data == 4) {
    //crear array
} else if (data == 5){

} else if (data == 6){

} else if (data == 7){

} else if (data == 8){

} else if (data == 9){

} else if (data == 10){

} else if (data == 11){

} else if (data == 12){

} else if (data == 13){

} else if (data == 14){

} else if (data == 15){

} else {
    alert('Por favor ingresa aluna de las opciones especificadas.')
}




