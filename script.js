window.onload = function () {
    //array with the words
    let sujeto = ["Ese perro ", "El vecino ", "Mi mamá ", "El profesor "];
    let verbo = ["se comió ", "estropeó ", "botó ", "se robó ", "me copió "];
    let sustantivo = ["mis tareas ", "mi ropa ", "mi comida ", "la frazada ", "mis codes "];
    let lugar = ["en la Universidad.", "el fin de semana.", "cuando me distraje.", "en frente de la pizzería."];

    // declaring random variables

    let randSuj = Math.floor((Math.random() * sujeto.length));
    let randVerb = Math.floor((Math.random() * verbo.length));
    let randSust = Math.floor((Math.random() * sustantivo.length));
    let randLugar = Math.floor((Math.random() * lugar.length));

    //creating a sentence (the excuse)
    document.querySelector("#theexcuse").innerHTML = sujeto[randSuj] + verbo[randVerb] + sustantivo[randSust] + lugar[randLugar];

}