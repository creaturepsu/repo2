window.addEventListener('DOMContentLoaded', hi, false);
window.addEventListener ('copy' , steal , true);
/*can we replace window with anything or is it needed to make this work? also why does it say false? can we make it true? making the steal function true doesnt seem to change anything*/

function steal () {
    alert ('theif')
}
/*this tells the user they're stealing in case they copy paste but I wonder if theres a way to make it specific to one thing on the page*/


function hi() {
    alert ('im in your walls');
    var buttons = document.getElementsByTagName("button")
    buttons[0].addEventListener('click', changefontsize, false);
    buttons[1].addEventListener('click', playalert, false);
}


function changefontsize() {document.getElementById("fonttoggle").style.fontSize = "35px";
    var p1 = document.getElementById("fonttoggle")
}


function playalert() {
    alert ('WHAT DID YOU DO?');
    var li = document.getElementsByTagName('li')
    }
    
const textarea = document.querySelector(`[data-role="input"]`)
textarea.addEventListener("keydown", (funny) => { /* bla bla bla */ })

/*Im not sure how to do it but I REALLY wanted to have a sound effect play everytime someone typed in the text box*/