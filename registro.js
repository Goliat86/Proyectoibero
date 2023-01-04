var basededatos = []

var guardarusuario = function(){
    var nombre = document.getElementById('nombres').value;
    var apellido = document.getElementById('apellidos').value;
    var edad = document.getElementById('edad').value;
    var correo = document.getElementById('correo').value;
    var contraseña = document.getElementById('contraseña').value;

    basededatos.push({name:nombre, lastname:apellido, age:edad, email:correo, password:contraseña})
    localStorage.setItem("base",JSON.stringify(basededatos))
}

var cargardatos = function(){
    var misdatos=localStorage.getItem("base")
    if (misdatos == null){
    basededatos = []
    }
    else{
        basededatos = JSON.parse(misdatos)
        
    }
}

cargardatos()