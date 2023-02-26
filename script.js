var agora = new Date()
var ano_atual = agora.getFullYear()

function calc(){
    var ano_user = document.getElementById('ano')
    var ano = Number(ano_user.value)
    ano_user = ano_user.value
    if (ano > ano_atual || ano_user.length == 0){
        alert('Ano inválido, tente novamente!')
    } else{
        var idade = ano_atual - ano
        var msg = document.getElementById('msg')
        var sexo = document.getElementsByName('sexo')
        var img = document.getElementById('foto')
        var genero = ''

        if (sexo[0].checked){
            genero = 'Masculino'
            if (idade < 2){
                // RECÉM NASCIDO HOMEM
                img.src = 'perfil_recemnascido.png'

            } else if (idade < 6){
                // BEBÊ HOMEM
                img.src = 'IMG_Masculinos/perfil_masc_bebe.png'

            } else if (idade < 12){
                // CRIANÇA HOMEM
                img.src = 'IMG_Masculinos/perfil_masc_crianca.png'

            } else if (idade < 18){
                // ADOLESCENTE HOMEM
                img.src = 'IMG_Masculinos/perfil_masc_adolescente.png'

            } else if (idade < 50){
                // ADULTO HOMEM
                img.src = 'IMG_Masculinos/perfil_masc_adulto.png'

            } else{
                // IDOSO HOMEM
                img.src = 'IMG_Masculinos/perfil_masc_idoso.png'

            }
            if (idade == 1){
                msg.innerHTML = `Você tem ${idade} ano`
            } else{
                msg.innerHTML = `Você tem ${idade} anos`
            }
        } else if (sexo[1].checked){
            genero = 'Feminino'
            if (idade < 2){
                // RECÉM NASCIDO MULHER
                img.src = 'perfil_recemnascido.png'

            } else if (idade < 6){
                // BEBÊ MULHER
                img.src = 'IMG_Femininos/perfil_fem_bebe.png'

            } else if (idade < 12){
                // CRIANÇA MULHER
                img.src = 'IMG_Femininos/perfil_fem_crianca.png'

            } else if (idade < 18){
                // ADOLESCENTE MULHER
                img.src = 'IMG_Femininos/perfil_fem_adolescente.png'

            } else if (idade < 50){
                // ADULTO MULHER
                img.src = 'IMG_Femininos/perfil_fem_adulto.png'

            } else{
                // IDOSO MULHER
                img.src = 'IMG_Femininos/perfil_fem_idoso.png'

            }
            if (idade == 1){
                msg.innerHTML = `Você tem ${idade} ano`
            } else{
                msg.innerHTML = `Você tem ${idade} anos`
            }
        } else{
            alert('Escolha o sexo.')
        }
    }
}