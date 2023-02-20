// encontrar el billete de 999

let encontrar_billete  =false
let usuario= ""

for(let i=0; i<5 && encontrar_billete==false ; i++){

    usuario=Number(prompt("Ingrese un billete mayor a 900 y menor a 1000.\n Tienes 5 intentos"))

    if(usuario == 999){
        encontrar_billete =true


        alert("Encontraste el billete correcto era el de 999")
    }
    else{
        alert("El billete de "+usuario +" NO es el correcto")
    }
   
}