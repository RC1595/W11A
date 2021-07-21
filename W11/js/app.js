function bgcolor(e){
    let background = document.getElementById("main").style.backgroundColor='blue';    
}
let button1 = document.getElementById("btn1");
button1.addEventListener("click", bgcolor);

function nuke(e){
    document.getElementById("color").style.display='none';    
    }

function body(e){
document.getElementById("body").style.backgroundColor='green';
}

function paragraph(e){
    console.log(e);
        if (e.keyCode == 32 || e.key ==' '){
            document.getElementById('color').style.fontSize='2em';
            document.getElementById('color').style.color='white';
    }    
    }


let button2 = document.getElementById('btn2');
button2.addEventListener("click", nuke);

let maindiv = document.getElementById('body');
maindiv.addEventListener("mouseover", body);

let pTag = document.getElementById('color');
pTag.addEventListener("keydown", paragraph);    

