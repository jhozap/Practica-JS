function hola() {    
    return "Hola Mundo";
}

function suma(a = 2, b = 3)
{
    return a + b;    
}

console.log(hola());
console.log(suma());
console.log(suma(1, 2));