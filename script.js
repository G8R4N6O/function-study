//1 - crie uma função que exiba uma mensagem no console
function vasco(){
    console.log("botafogo é pequeno")
}
vasco()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function nome(name){
    console.log(`meu nome é ${name}`)
}
nome("Branco")
nome("marlon")


//3 - crie uma função que receba um nome, um número, e um estilo musical (parâmetros) e exiba no console
function pessoa(a , b , c){
    console.log(`nome: ${a} , numero: ${b} , estilo musical: ${c}`)
}
pessoa("tião" , 47 , "musica irlandesa")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function tarantino(filme , musica){
    console.log(`filme: ${filme} , musica: ${musica}`)
}
tarantino("django" , "são gonça")


//5 - crie uma função que retorne o triplo do número recebido no (parâmetro)

function numero(pai){
    return pai * 3
}
console.log(numero(10))