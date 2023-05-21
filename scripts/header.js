// Personalización superior del programa.

function salute(){
    const name = prompt("Introduce tu nombre usuario para personalizarlo en la parte superior: ");
    const title$$ = document.head.querySelector('title');
    
    title$$.innerHTML = `TO DO LIST DE ${name}`;
}

salute();