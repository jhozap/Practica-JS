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




