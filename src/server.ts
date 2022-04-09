// questão 1
function soma(n1: number, n2: number){
    let soma = 0
    for( let i = n1; i < n2 - 1 ; i++){   
    
        console.log(`${soma += (i + 1)}`)
        
    }
}

soma(5, 10)

// // questão 2
// class Pessoa{
//     nome: string;
//     idade: number;

//     constructor(nome: string, idade: number){
//         this.nome = nome;
//         this.idade = idade;
//     }

//     calcular(){
//         this.idade = this.idade * 12
//         console.log(`Vc possui ${this.idade} meses`)
//     }
// }

// let pessoa = new Pessoa('Breno',20)

// pessoa.calcular()

