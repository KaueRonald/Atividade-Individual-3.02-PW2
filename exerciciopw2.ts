//RESPOSTAS DA ATIVIDADE INDIVIDUAL 3.02 DE PW2
// Como podemos rodar isso em um arquivo .ts sem causar erros?

let employee = {
    code: 10,
    name: 'John'
}

employee.code = 10;

employee.name = "John";


// Como podemos melhorar o esse código usando TS?

type Pessoa = {
    nome: string
    idade: number | string
    profissao: string
}


let pessoa1: Pessoa = {

nome: "maria",
idade:  29,
profissao: "atriz"

};


let pessoa2: Pessoa = {

nome: "roberto",
idade: 19,
profissao: "Padeiro"

};


let pessoa3: Pessoa = {

nome: "laura",
idade: "32",
profissao: "Atriz"

};



let pessoa4: Pessoa = {

nome:"carlos",
idade: 19,
profissao: "padeiro"

}
