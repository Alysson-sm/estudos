class Elevador {
    constructor(quantidadeAndares) {
        this.quantidadeAndares = quantidadeAndares;
        this.andarAtual = 0;
        this.capaxidadeMaximaPesssoas = 5;
        this.quantidadeAtualPessoas = 0;
        this.pesoMaximoSuportado = 300;
        this.pesoAtualTotalDasPessoas = 0;

    }

    exibitAndarAtual() {
        console.log('voce esta no andar: ' + this.andarAtual);
    }

    movimentar(andarPretendido) {
        var cont = 0;
        console.log('------------------------------------');
        console.log('você esta no andar ' + this.andarAtual + ' e esta indo para o andar ' + andarPretendido);

        if (andarPretendido > this.quantidadeAndares || andarPretendido < 0) {
            console.log('------------------------------------');
            console.log('ERRO: andar 404 not found ' + ' O predio possui apenas ' + this.quantidadeAndares); //haha

        } else {

            if (this.andarAtual < andarPretendido) {
                console.log('------------------------------------');

                while (cont < andarPretendido) {
                    console.log('Elevador subindo - ANDAR : ' + cont)
                    cont++
                }
                console.log('voce chegou ao andar de destino!');
            }

            if (this.andarAtual > andarPretendido) {
                console.log('------------------------------------');

                while (cont < andarPretendido) {
                    console.log('Elevador descendo - ANDAR : ' + cont)
                    cont++
                }
                console.log('voce chegou ao andar de destino!');
            }
            if (this.andarAtual == andarPretendido) {

                console.log('O elevador ja esta nesse andar ! ' + andarPretendido);

            }
            this.andarAtual = andarPretendido;
        }

    }
    exibirQuantidadeAtualDePessoas() {
        console.log('Ocupação total: ' + this.quantidadeAtualPessoas);
    }
    adicionarUmaPessoa(pesoDaPessoa) {

        if (this.quantidadeAtualPessoas < this.capaxidadeMaximaPesssoas && pesoDaPessoa + this.pesoAtualTotalDasPessoas <= this.pesoMaximoSuportado) {


            this.quantidadeAtualPessoas++
            this.pesoAtualTotalDasPessoas = this.pesoAtualTotalDasPessoas + pesoDaPessoa

            peso.push(pesoDaPessoa)  //o array peso recebe o pesoDaPessoa e armazena ele na posiçao da variavel contadora
            //console.log('pessoa ' + contadora + ': ' + peso[contadora]);
            contadora++

            console.log('uma pessoa entrou no elevador, QUANTIDADE DE PESSOAS: ' + this.quantidadeAtualPessoas,
                '|| O elevado esta com ' + this.pesoAtualTotalDasPessoas + ' quilos'

            );
        }
        else {

            console.log('Entrada nao permitida a capacidade maxima de pessoas no elevador ja foi atingida');
        }

    }
    removerUmaPessoa(pessoa) {
        if (this.quantidadeAtualPessoas > 0) {

            this.quantidadeAtualPessoas--
            this.pesoAtualTotalDasPessoas = this.pesoAtualTotalDasPessoas - peso[pessoa];

            console.log('uma pessoa saiu do elevador, QUANTIDADE DE PESSOAS: ' + this.quantidadeAtualPessoas,
                '|| O elevado esta com ' + this.pesoAtualTotalDasPessoas + ' quilos');
            
            
            peso.splice(pessoa, 1); //primeiro valor e o index onde se incia a remoçao o segundo a quantidade de valores a serem removido
            

        }
        else {
            console.log('Nao há ninguem no elevador');
        }
    }

}
var contadora = 0;
var peso = [];
var novopredio = new Elevador(20);

novopredio.exibitAndarAtual();
novopredio.movimentar(10)
novopredio.exibitAndarAtual();
novopredio.movimentar(5)
novopredio.exibirQuantidadeAtualDePessoas();

novopredio.adicionarUmaPessoa(80);
novopredio.adicionarUmaPessoa(80);
novopredio.adicionarUmaPessoa(80);
novopredio.adicionarUmaPessoa(40);  // momento onde o limite de peso ainda e valido
novopredio.adicionarUmaPessoa(20);  // onde o limite de peso e execido e informa o else com erro.

novopredio.removerUmaPessoa(3);
novopredio.exibirQuantidadeAtualDePessoas();
novopredio.adicionarUmaPessoa(40);
console.log(peso);





