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
                    console.log('Elevador subindo - ANDAR : ' + cont)  // mostra os andares que o elevador esta passando
                    cont++
                }
                console.log('voce chegou ao andar de destino!');
            }

            if (this.andarAtual > andarPretendido) {
                console.log('------------------------------------');

                while (cont < andarPretendido) {
                    console.log('Elevador descendo - ANDAR : ' + cont)  // mostra os andares que o elevador esta passando
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
        /*Ao tentar efetuar a soma sem usar o valor de pesoDaPessoa na condiçao nao se pode obter um valor valido*/

        /* a validaçao para entrada de uma nova pessoa agora é feita por quantidade e peso */
        if (this.quantidadeAtualPessoas < this.capaxidadeMaximaPesssoas && pesoDaPessoa + this.pesoAtualTotalDasPessoas <= this.pesoMaximoSuportado) {

            this.quantidadeAtualPessoas++
            this.pesoAtualTotalDasPessoas = this.pesoAtualTotalDasPessoas + pesoDaPessoa

            console.log('uma pessoa entrou no elevador, QUANTIDADE DE PESSOAS: ' + this.quantidadeAtualPessoas,
                '|| O elevado esta com ' + this.pesoAtualTotalDasPessoas + ' quilos'

            );
        }
        else {

            console.log('Entrada nao permitida a capacidade maxima de pessoas no elevador ja foi atingida');
        }

    }
    removerUmaPessoa() {
        if (this.quantidadeAtualPessoas > 0) {
            this.quantidadeAtualPessoas--
            console.log('uma pessoa saiu do elevador, ' + this.quantidadeAtualPessoas);
        }
        else {
            console.log('Nao há ninguem no elevador');
        }
    }

}

var novopredio = new Elevador(20);  /* informando valor de 20 andares para o constructor com a  entrada de nome quantidadeDeAndares*/

novopredio.exibitAndarAtual();

novopredio.movimentar(10)   

novopredio.exibitAndarAtual();

novopredio.movimentar(5)

novopredio.exibirQuantidadeAtualDePessoas();

/* como a validaçao agora necessita de duas condiçoes para ser validada esse trecho de codigo causa um erro por informar apenas um valor da condiçao o de quantidade e nao o de peso 

novopredio.adicionarUmaPessoa();
novopredio.adicionarUmaPessoa();
novopredio.removerUmaPessoa();
novopredio.adicionarUmaPessoa();
novopredio.exibirQuantidadeAtualDePessoas()

*/

novopredio.adicionarUmaPessoa(80);
novopredio.adicionarUmaPessoa(80);
novopredio.adicionarUmaPessoa(80);
novopredio.adicionarUmaPessoa(40);  // momento onde o limite de peso ainda e valido
novopredio.adicionarUmaPessoa(55);  // onde o limite de peso e execido e informa o else com erro.