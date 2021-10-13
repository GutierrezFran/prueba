function validar(formulario){
    exp_reg= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (isNaN(formulario.nocontrol.value)==true || formulario.nocontrol.value.length !=8){
        alert("Hola... escribe un numero de control valido");
        formulario.nocontrol.value=""
        formulario.nocontrol.focus();
        return false;
    }
    
    if (!exp_reg.test(formulario.correo.value)){
        alert("Hola... escribe un correo valido");
        formulario.correo.value=""
        formulario.correo.focus();
        return false;
    }
    
    if (isNaN(formulario.celular.value)==true || formulario.celular.value.length !=10){
        alert("Hola... escribe un numero de celular valido");
        formulario.celular.value=""
        formulario.celular.focus();
        return false;
    }

    return true;
}