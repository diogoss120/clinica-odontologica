var nome = document.getElementById('inpNome');
var tel = document.getElementById('inpTel');
var email = document.getElementById('inpEmail');
var mensagem = document.getElementById('Msg');
var menu = document.getElementById('menu_mobile').style;
var visualizar = false;

function validarForm(){
    if(nome.value.length <= 3){
        nome.style.outlineStyle = 'solid';
        nome.focus();
        return false;
    }else{
        nome.style.outlineStyle = 'none';
    }

    if(isNaN(tel.value) || tel.value == ''){
        tel.style.outlineStyle = 'solid';
        tel.focus();
        return false;
    }else{
        tel.style.outlineStyle = 'none';
    }

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        email.style.outlineStyle = 'solid';
        email.focus();
        return false;
    }else{
        email.style.outlineStyle = 'none';
    }

    if(mensagem.value == ""){
        mensagem.style.outlineStyle = 'solid';
        mensagem.focus();
        return false;
    }else{
        mensagem.style.outlineStyle = 'none';
    }
}

function menu_mobile(){
    visualizar = !visualizar;
    visualizar ? menu.display = 'inline-block' : menu.display = 'none';
}