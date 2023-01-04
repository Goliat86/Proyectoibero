var basededatos = []



var cargardatos = function(){
    var misdatos=localStorage.getItem("base")
    if (misdatos == null)
    basededatos = []
    else{
        basededatos = JSON.parse(misdatos)
        
    }
}

var iniciarsesion = function(){
    var correo = document.getElementById('correo').value;
    var contraseña = document.getElementById('contraseña').value;

    var posicion = basededatos.findIndex((item) => item.email == correo && item.password == contraseña)
    console.log(posicion)
     var msj = document.getElementById('mensaje')
     if (posicion == -1){
        msj.innerHTML="<div class='alert alert-danger' role='alert'>Usuario no exixte</div>"
    }else{
        msj.innerHTML="<div class='alert alert-success' role='alert'>Bienvenido "+basededatos[posicion].name+ " </div>"
    }

    

  
}

cargardatos()
