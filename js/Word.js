function startValidate(wordOfDay,wordOfUser,round){
    var charsHitted = wordOfDay.split("");
    var charsOfDay = wordOfDay.split("");
    var charsUser = wordOfUser;
    var wrong = [];
    var near = [];
    var hit = [];

    console.log(charsOfDay);
    console.log(charsUser);

        for (var i = 0; i < 5; i++){
            if (charsOfDay[i]==charsUser[i]){
                hit += [i + " "]
                var x = document.getElementById('char-'+round+'-'+(i+1));
                x.style.backgroundColor = 'green';  
                
            }else if(charsHitted.indexOf(charsUser[i]) != -1){
                near += [i + " "]
                var y = document.getElementById('char-'+round+'-'+(i+1));
                y.style.backgroundColor = 'yellow';  

            }else{
                // charsHitted.splice(0,i);
                // console.log(charsHitted);
                // hit.indexOf(charsUser[i]) == 2
                // .filter(x => x === "oi").length                
                // console.log(charsOfDay[i]," x ",charsUser[i]," wrong");

                wrong += [i + " "]            
                var z = document.getElementById('char-'+round+'-'+(i+1));
                z.style.backgroundColor = 'red';  
            }
        }
    
    console.log("Acertou: " + hit)
    console.log("Quase: " + near)
    console.log("Errou: " + wrong)
    
    // Winner
    acertos = hit.length;
    if (hit.length==5) {
        win();
    } 

    wrong = [];
    near = [];
    hit = [];
}

function wordOfDay(){

    const wordsList = [
        "amigo", "banho", "canto", "dedos", "estre", "fazer", "gente", "hotel", "icone", "junto",
        "livro", "mundo", "nuvem", "olhar", "praia", "quero", "roupa", "saber", "tempo", "unido",
        "vinho", "xale", "yoga", "zarpa", "amado", "banjo", "carro", "doido", "estar", "feroz",
        "gosto", "horta", "indio", "jogar", "laudo", "massa", "navio", "ouvir", "piano", "quilo",
        "rédea", "santo", "traje", "único", "velho", "zelar", "andar", "bravo", "claro", "dores",
        "enfim", "fraco", "grato", "humor", "idoso", "jovem", "linha", "matar", "noite", "otear",
        "pobre", "quase", "resto", "saude", "truta", "urubu", "velar", "zelos", "acima", "beber",
        "ceder", "deixar", "entre", "farto", "ganho", "honra", "idolo", "jeito", "leque", "mitos",
        "nobre", "ousar", "prato", "quero", "raiva", "salvo", "terra", "unir", "vento", "xampu"
    ];

    const aleatoryIndex = Math.floor(Math.random() * wordsList.length);
    return wordsList[aleatoryIndex];

}

var wordOfDay = wordOfDay();