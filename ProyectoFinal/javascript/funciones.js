
function validateForm() {
    let nom = document.forms["form"]["Nombre"].value;
    let mail = document.forms["form"]["Email"].value;
    if (nom == "" && mail == "") {
      alert("Debe poner un nombre y un email");
      return false;
    }
    else {
        if(nom == ""){
            alert("Debe poner un nombre");
            return false;
        }
        if(mail == ""){
            alert("Debe poner un mail");
            return false;
        }
    }
    alert ("formulario enviado");
    event.preventDefault();
}

