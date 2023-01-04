var buttonKeyboard = addEventListener("keydown", userAction);
var buttonSubmit = document.getElementById("keyboard-key-enter");
var buttonBackspace = document.getElementById("keyboard-key-backspace");
var keyLayout = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "backspace", "z", "x", "c", "v", "b", "n", "m", "enter"];

buttonSubmit.addEventListener("click", userAction);
buttonBackspace.addEventListener("click", userAction);

for (var i = 0; i < keyLayout.length; i++){
    var clickKeyboard = [];
    clickKeyboard[i] = document.getElementById("keyboard-key-"+keyLayout[i]);
    clickKeyboard[i].addEventListener("click", userAction);
}

//Actions of user
function userAction (event){
    if((event.type=="click")&&((event.target.name=="Backspace")||(event.target.name=="Enter"))){
        char = event.target.name;
    }
    else if(event.type=="click"){
        char = event.target.innerHTML;
        console.log("Aqui", char)
    }
    else{
        char = event.key;
    }

    if ((char != null)&&(char != 0)){
    //Validating Charr
    char = removeAccent(char);
    statusChar = validateChar(char,charSequence,statusChar,buttonSubmit.disabled);

    switch (statusChar){

        case 0:        
            //Incorrect Char Message  
            wrongChar();
            break;
        
       case 1:            
            //Delete Char in the Div
            charSequence -= 1;            
            inputChar = document.getElementById("char-"+round+"-"+charSequence);
            inputChar.textContent = "";

            //Disable Button
            enableButton(0,buttonSubmit);
            break;

        case 2:
            //Backspace Null
            break;

        case 3:
            //Disable Keyboard
            break;
        
        case 4:            
            //Get Chars of the div  
            var wordOfUser = [];
            for(let i = 1; i <= wordLenght; i++){        
                var x = document.getElementById("char-"+round+"-"+i);
                wordOfUser.push(x.textContent);
            }
            
            //Validating Word
            startValidate(wordOfDay,wordOfUser,round);
        
            //Next Round
            round +=1;
            
            // Loser
            if(round==7){
                loser();
            }
        
            //Restart Div Focus
            charSequence = 1;
        
            //Disable Button
            enableButton(0,buttonSubmit);
            break;

        case 5:
            //Put Char in the Div
            inputChar = document.getElementById("char-"+round+"-"+charSequence);
            inputChar.textContent = char;
            
            //Last Char of Row
            if(charSequence == wordLenght){    
                //Next Char Div
                charSequence += 1;

                //Enable Button Send
                enableButton(1,buttonSubmit);
                
            }else{
                //Next Char Div
                charSequence += 1;
            }
        break;
    }
    }
    return event;
}

function enableButton(x,buttonSubmit){
    if(x==1){
        buttonSubmit.disabled = false;
    }else{        
        buttonSubmit.disabled = true;        
    }
}

function displayLetter(round,i,status){
    if (status==0){
        var x = document.getElementById('char-'+round+'-'+(i+1));
        x.readOnly = true;
    }
    if (status==3){
        var y = document.getElementById('char-'+round+'-'+(i+1));
        y.disabled = true;
    }
}