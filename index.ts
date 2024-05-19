type Usuario = {
    name: String
    anoQueNasceu: number
}

function calcularIdadeDoUsuario(usuario: Usuario){
    if(usuario.anoQueNasceu >= 2023){
        return "Ano de nascimento invalido"
    }
    return 2023 - usuario.anoQueNasceu;
}

calcularIdadeDoUsuario ({name: "gabriel", anoQueNasceu: 2000})