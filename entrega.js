// ENTREGA FUNCION:

function calcular_prestamo( monto  , cuotas ){

    monto = parseFloat(monto);
    let prestamo = 0;

    if( monto > 0 && cuotas == 3 ){
        prestamo = monto + (monto * 0.10);
        return prestamo
    }

    else if ( monto > 0 && cuotas == 6){
        precio = monto + (monto * 0.20);
        return prestamo
    }    

    else if ( monto > 0 && cuotas == 9){
        prestamo = monto + (monto * 0.30);
        return prestamo
    }

    else if ( monto > 0 && cuotas == 12){
        prestamo = monto + (monto * 0.40);
        return prestamo
    }

}


let monto = "";

console.log("calcular prestamo")

while( monto != "FIN" ){

    
    monto = prompt("Ingrese el monto que desea o ingrese FIN para salir")
    let cuotas = prompt("ingrese la cantidad de cuotas 3, 6, 9 o 12");

    let resultado = calcular_prestamo( monto , cuotas );

    console.log("perdiste: ", monto)
    console.log("En tantas cuotas: ", cuotas);
    console.log("Tenes que devolver: ", resultado);
    

    console.log("Volver a calcular")
    
}

//LA IDEA ERA QUE TAMBIEN CALCULARA EL IVA, NO ME SALIO, DESPUES CON MAS TIEMPO LO VOY A SEGUIR INTENTANDO, OTRA COSA QUE NO ME SALIO FUE HACER QUE SI ESCRIBO "FIN" SE TERMINE EL BUCLE Y SE CIERRE EL prompt, TAMPOCO ME SALIO. LAMENTABLEMENTE ESTUVE CON POCO TIEMPO.

//-------------------------------------------------- O ---------------------------------------------

//CALCULAR PROMEDIO

/* function calcular_promedio( nota_uno , nota_dos , nota_tres){

    let promedio = (nota_uno + nota_dos + nota_tres) /3;

    if(typeof (numero_uno) != "number" || typeof(numero_dos) != "number" || typeof(numero_tres) != "number"){

        console.log("Solo acepto numeros");

    }
    else{

        let promedio = (numero_uno + numero_dos + numero_tres) /3;
        console.log("Tu promedio cuatrimestral es: ", promedio)

    }

}

calcular_promedio (7, pepe , 10);
calcular_promedio (4, 5 , 10); */

//-------------------------------------------------- O ---------------------------------------------

// CALCULAR IVA

/* function calcular_iva( precio ){

    let iva = precio *0.21;

    return iva

}

function calcular_cuota( precio , cuotas ){

    if (cuotas == 3 ){
        let cuota = precio * 0.03;
        return cuota
    }

    else if ( cuota == 6){
        let cuota = precio * 0.10;
        return cuota
    }

    else if ( cuota == 12){
        let cuota = precio * 0.20;
        return cuota
    }
}


let lampara = 5000
let tv = 60000
let computadora = 200000


let cuotas = prompt("ingrese la cantidad de cuotas 3 , 6 , 12");

console.log("El precio de la lampara es: ", lampara + calcular_iva(lampara)); */