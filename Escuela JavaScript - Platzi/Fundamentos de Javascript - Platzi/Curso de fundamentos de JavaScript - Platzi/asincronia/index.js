/* 
Promesas en JavaScript
Las promesas (promises) en JavaScript son un concepto fundamental para manejar operaciones asincrónicas. Permiten a los desarrolladores escribir código más limpio, organizado y manejable al lidiar con tareas que se ejecutan en el tiempo, como la recuperación de datos de una API o la ejecución de tareas en segundo plano.

¿Qué es una operación asincrónica?

Una operación asincrónica es una tarea que se inicia y luego se ejecuta en un momento posterior, sin bloquear el hilo principal de ejecución. Esto permite que el programa continúe ejecutando otro código mientras la operación asincrónica se completa.

¿Cómo funcionan las promesas?

Las promesas se basan en dos estados principales:

Pendiente: La promesa aún no se ha completado ni rechazado.
Resuelta: La operación asincrónica se completó con éxito y se devuelve un valor.
Rechazada: La operación asincrónica falló y se genera un error.
Una promesa se crea utilizando el constructor Promise(). Dentro del constructor, se pasa una función asíncrona como argumento. Esta función asíncrona, también conocida como función de resolución o rechazo, recibe dos argumentos:

Resolve: Una función que se llama cuando la operación asincrónica se completa con éxito. Se le pasa un valor como parámetro, que representa el resultado de la operación.

Reject: Una función que se llama cuando la operación asincrónica falla. Se le pasa un error como parámetro, que representa la causa del fallo.

Encadenamiento de promesas:

Las promesas se pueden encadenar utilizando los métodos then() y catch(). El método then() se utiliza para procesar el valor devuelto cuando la promesa se resuelve, mientras que el método catch() se utiliza para manejar errores.
*/

const promise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        let operationSuccessful = true;
        if(operationSuccessful) {
            resolve('la operacion fue exitosa');
        } else {
            reject('fallo la operacion');
        }
    }, 2000);
})

promise 
    .then((successMessage) => {
        console.log(successMessage);
    })
    .catch((errorMessage) => {console.log(errorMessage)});