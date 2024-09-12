const numeroSecreto = Math.floor(Math.random() * 10 + 1)

const numeroJuador = parseInt(prompt("Adivina el numero secretro entre el 1 al 10"))

console.log(`Este es el numero con el que juegas ${numeroJugador}`)

if (numeroJugador === numeroSecreto) {
    console.log("felicidades! Adivinaste el numero secreto!")
} else if (numeroJugador < numeroSecreto) {
    console.log("El numero es demasiado bajo, intenta de nuevo")
} else{
    console.log("El numero es muy alto, intenta de nuevo")
}