let segundos = 0;

let intervalo = setInterval(
    () => {
        console.log("Hola mundo");        
    },
    1000
);


setTimeout(() => {
    clearInterval(intervalo);
},
5000);

function prueba() {

}

const prueba2 = () => {
    console.log("Prueba 2")
};

console.log(prueba2());




