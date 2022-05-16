(function(){
    var formulario = document.formulario_registro,
        elementos = formulario.elements;

    var validarInput = function (){
        var valor = true
        for (var i=0 ; i <elementos.length;i++){
            if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "date") {
                if (elementos[i].value == 0){
                    elementos[i].className = elementos[i].className + " error" 
                    valor = false;
                } else {
                    elementos[i].className = elementos[i].className.replace(" error","")
                }
            }
        }
        return valor;
    };

    var validarRadio = function(){
        var opciones = document.getElementsByName("genero"), 
        resultado = false;

        for(i=0; i<elementos.length;i++){
            if (elementos[i].type == "radio" && elementos[i].name == "genero") {
                for ( var j = 0 ; j< opciones.length ; j++ ){
                    if (opciones[j].checked){
                        resultado = true;
                        break;
                    }
                }
                if (!resultado){
                    elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
                    return false;
                } else {
                    elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error","");
                    return true;
                }
            }
        }
    };
    
    var validarCheckbox = function(){
        var opciones = document.getElementsByName("terminos"), 
        resultado = false;

        for(i=0; i<elementos.length;i++){
            if (elementos[i].type == "checkbox") {
                for ( var j = 0 ; j< opciones.length ; j++ ){
                    if (opciones[j].checked){
                        resultado = true;
                        break;
                    }
                }
                if (!resultado){
                    elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
                    return false;
                } else {
                    elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error","");
                    return true;
                }
            }
        }
    };

    var enviar = function(e){
        if (!validarInput()){
            e.preventDefault();
        } if (!validarRadio()) {
            e.preventDefault();
        } if (!validarCheckbox()){
            e.preventDefault();
        } 
    };

    var focusInput = function(){
        this.parentElement.children[1].className = "label active";
        this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error","");
    };

    var blurInput = function(){
       if (this.value <= 0){
           this.parentElement.children[1].className = "label";
       }
    };

     
    function keyupDocumento(){
        let numeros=["0","1","2","3","4","5","6","7","8","9",];
        let ultimoValor = this.value[this.value.length-1];
        function comprueba(parametro){
            return parametro == ultimoValor;
        }
        if (numeros.some(comprueba)){
            this.maxLength="8";
            this.parentElement.children[0].className = "documento";
        } 
        if (!numeros.some(comprueba)){
            this.parentElement.children[0].className ="documento error";
            this.maxLength=this.value.length;
        }
        if (this.value <= 0 || this.value.length==0 ){
            this.parentElement.children[0].className = "documento";
            this.maxLength="8";
        }
        
    };

    formulario.addEventListener("submit",enviar);

    for (var i = 0; i< elementos.length; i++){
        if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "date"){
            elementos[i].addEventListener("focus",focusInput);
            elementos[i].addEventListener("blur",blurInput);
        }
        if (elementos[i].type == "text" && elementos[i].className == "documento"){
            elementos[i].addEventListener("keyup",keyupDocumento);
        }
    }
}())



