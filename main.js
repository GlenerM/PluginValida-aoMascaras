$(document).ready(function(){
    $('.carrosel').slick({
        autoplay:true
    })
})

$('.menu-hamburguer').click(function(){
    $('nav').slideToggle()
})

$('#telefone').mask('(00) 0 0000 - 0000')

$('#cpf').mask('000.000.000-00')

$('#cep').mask('00000 - 000')

$('form').validate({
    rules:{
        nome :{
            required : true
        },
        email :{
            required : true
        },
        telefone:{
            required : true
        },
        cpf:{
            required : true
        },
        endereco:{
            required : true
        },
        cep:{
            required : true
        }
        
    },
    messages:{
        nome: 'Por Favor insira seu Nome !',
        email:'Por Favor insira seu E-mail !',
        telefone:'Por Favor insira seu Telefone !',
        cpf:'Por Favor insira seu CPF !',
        endereco:'Por Favor insira seu Endereço !',
        cep:'Por Favor insira seu CEP !',
    }
})