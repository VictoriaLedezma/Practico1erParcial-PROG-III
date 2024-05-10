const inputNombre = $("#inputNombre");
const inputApellido =$("#inputApellido");
const inputHoras = $("#inputHoras");

function Guardar(){
    let aux=0;
    if(inputNombre.val()==""){
        $("#errorNombre").show();
        aux++;
    }
    if(inputNombre.length>30){
        $("#errorNombre").show();
        aux++;
    }
    if(inputApellido.val()==""){
        $("#errorApellido").show();   
        aux++;
    }
    if(inputApellido.length>20){
        $("#errorApellido").show();
        aux++;
    }
    if(inputHoras.val()==""){
        $("#errorHoras").show();
        aux++;
    }
    if(isNaN(inputHoras.val())){
        $("#errorHoras").show();
        aux++;
    }
    if($("#selectNacionalidades option:selected").text()=="Seleccionar"){
        $("#errorNacionalidad").show();
        aux++;
    }
    console.log("Errores:"+aux);
    if(aux==0){
        inputApellido.val("");
        inputNombre.val("");
        inputHoras.val("");
        Swal.fire({
            title: "Alta completada exitosamente!",
            text: "Se ha enviado el alta",
            icon: "success"
          });
    }
}

inputNombre.on("change",()=>{
    $("#errorNombre").hide();
});

inputApellido.on("change",()=>{
    $("#errorApellido").hide();
})

inputHoras.on("change",()=>{
    $("#errorHoras").hide();
})

$("#selectNacionalidades").on("change",()=>{
    $("#errorNacionalidad").hide();
})