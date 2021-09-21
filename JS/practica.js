function hola() {
    return "Hola Mundo";
}

function suma(a = 1, b = 2)
{
    return a + b;    
}

console.log(hola);
console.log(suma());
console.log(suma(1, 2));