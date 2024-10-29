function init() {
    var fieldset = document.getElementsByTagName('input');
    for (var i = 0; i < fieldset.length; i++) {
        fieldset[i].addEventListener('click', toggle, false);
    }
}

function toggle() {
    var id = this.id;
    switch (id) {
        case "EWtoggle": {
            var hates = document.getElementsByClassName("hate");
            for (var i = 0; i < hates.length; i++) {
                hates[i].classList.toggle("on")
            }
        };
        break;
        case "HUHtoggle": {
            var hmm = document.getElementsByClassName("huh");
            for (var i = 0; i < hmm.length; i++) {
                hmm[i].classList.toggle("on")
            }
        };
        break;
        case "LISTENtoggle": {
            var liste = document.getElementsByClassName("listened");
            for (var i = 0; i < liste.length; i++) {
                liste[i].classList.toggle("on")
            }
        };
        break;
    }
}

window.onload = init;