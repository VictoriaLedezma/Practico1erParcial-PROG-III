$("#formLogin").validate({
    rules: {
        usuario: {
          required:true,
          maxlength:20
        },
        password:{
            required:true,
            maxlength:20
        }
    },
    messages:{
        usuario:{
            required:"Ingrese un usuario!",
            maxlength:"El usuario no puede tener mas de 20 caracteres"
        },
        password:{
            required:"Ingrese una contraseña",
            maxlength:"La contraseña no puede tener mas de 20 caracteres"
        }
    },
    submitHandler: function(form){
        window.location.href = "altaprofesionales.html";
    }
})

const inputUsuario = $("#inputUsuario");
const inputPassword = $("#inputPassword");

function Ingresar(e){
    if(inputUsuario.val()!="tup2022@tup.com.ar"){
        console.log("Usuario incorrecto");
        e.preventDefault();
    }
    else if(inputPassword.val()!="123456"){
        console.log("Contraseña incorrecta");
        e.preventDefault();
    }
    else{
        console.log("Success");
    }
}