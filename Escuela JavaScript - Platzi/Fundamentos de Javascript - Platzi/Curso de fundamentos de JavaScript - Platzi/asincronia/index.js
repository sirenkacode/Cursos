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

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         let operationSuccessful = true;
//         if(operationSuccessful) {
//             resolve('la operacion fue exitosa');
//         } else {
//             reject('fallo la operacion');
//         }
//     }, 2000);
// })

// promise 
//     .then((successMessage) => {
//         console.log(successMessage);
//     })
//     .catch((errorMessage) => {console.log(errorMessage)});

//meen.academy/javascript/async-and-await-in-javascript/

// Async y Await en JavaScript
// Async y await son dos palabras clave introducidas en JavaScript (ES8) para simplificar la programación asíncrona. Antes de su llegada, se utilizaban promesas para manejar operaciones asíncronas, pero el código podía resultar complejo y difícil de leer.

// ¿Qué es Async?
// Async se utiliza para declarar una función como asíncrona.
// Una función asíncrona siempre devuelve una promesa.
// Dentro de una función async, puedes utilizar la palabra clave await.
// ¿Qué es Await?
// Await se utiliza únicamente dentro de una función async.
// Pausa la ejecución de la función hasta que la promesa asociada se resuelva o rechace.
// El valor resuelto de la promesa se asigna a la variable que está a la izquierda de await.
// Ventajas de usar Async/Await:

// Código más legible: El código se parece más a código síncrono, lo que mejora la comprensión.
// Manejo de errores más fácil: Puedes utilizar try...catch para manejar errores de las promesas.
// Mejor estructuración del código: Facilita la organización del código asíncrono.
// En resumen:

// Async/await es una sintaxis que hace que el código asíncrono sea más fácil de escribir y leer. Transforma el código asíncrono en un estilo similar al síncrono, lo que mejora la mantenibilidad y legibilidad del código.

// function fetchData() {
//     fetch('https://rickandmortyapi.com/api/character')
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log((error)));
// }

// async function fetchData() {
//     try {
//         let response = await fetch('https://rickandmortyapi.com/api/character')
//         let data = await response.json();
//         console.log(data);
//     } catch(error) {
//         console.log(error);
//     }
// }

// const urls = ['https://rickandmortyapi.com/api/character', 'https://rickandmortyapi.com/api/location', 'https://rickandmortyapi.com/api/episode'];


// async function fetchNewData () {
//     try {
//         for await (let url of urls) {
//             let response = await fetch(url);
//             let data = await response.json();
//             console.log(data)
//         }
//     } catch(error) {
//         console.log(error);
//     }
// }

// como funciona  el http?

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((data) => console.log(data));

// metodo GET en JavaScript

function sendHTTPRequest(method, url, data) {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => {
        return response.json();
    });
}

async function fetchPosts() {
    const responseData = await sendHTTPRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
    console.log(responseData);
    const listOfPosts = responseData;

    for (const post of listOfPosts) {
        const postContainer = document.createElement("article");
        postContainer.id = post.id;
        postContainer.classList.add("post-item");
    
        const title = document.createElement("h2");
        title.textContent = post.title;
    
        const body = document.createElement("p");
        body.textContent = post.body;
    
        const button = document.createElement("button");
        button.textContent = "DELETE Content";
    
        postContainer.append(title);
        postContainer.append(body);
        postContainer.append(button);
    
        listElement.append(postContainer);
    }
}

