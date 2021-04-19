class Elevador {
    constructor(quantidadeAndares) {
        this.quantidadeAndares = quantidadeAndares;
        this.andarAtual = 0;
        this.capaxidadeMaximaPesssoas = 5;
        this.quantidadeAtualPessoas = 0;

    }

    exibitAndarAtual(){
        console.log('voce esta no andar: '+this.andarAtual);
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

                console.log('O elevador ja esta nesse andar ! '+ andarPretendido);
                
            }
            this.andarAtual = andarPretendido;
        }

    }
    exibirQuantidadeAtualDePessoas(){
        console.log('Ocupação total: '+this.quantidadeAtualPessoas);
    }
    adicionarUmaPessoa(){
        if (this.quantidadeAtualPessoas < 5) {
            this.quantidadeAtualPessoas++
            console.log('uma pessoa entrou no elevador, '+this.quantidadeAtualPessoas);
        }
        else{

            console.log('Entrada nao permitida a capacidade maxima de pessoas no elevador ja foi atingida');
        }
    }
    removerUmaPessoa(){
        if (this.quantidadeAtualPessoas > 0) {
            this.quantidadeAtualPessoas--
        console.log('uma pessoa saiu do elevador, '+ this.quantidadeAtualPessoas);
        }
        else{
            console.log('Nao há ninguem no elevador');
        }
    }

}

var novopredio = new Elevador(20);

novopredio.exibitAndarAtual();

novopredio.movimentar(10)

novopredio.exibitAndarAtual();

novopredio.movimentar(5)

novopredio.exibirQuantidadeAtualDePessoas();

novopredio.adicionarUmaPessoa();

novopredio.adicionarUmaPessoa();

novopredio.removerUmaPessoa();

novopredio.adicionarUmaPessoa();

novopredio.exibirQuantidadeAtualDePessoas()
