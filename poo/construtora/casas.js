class Casa {
    constructor(rua,bairro,areaDoTerreno,areaConstruida,valorDoAlugel){
    this.rua = rua;
    this.bairro = bairro;
    this.areaDoTerreno = areaDoTerreno;
    this.areaConstruida = areaConstruida;
    this.valorDoAlugel = valorDoAlugel;
    }

    informaçoescasa(){
        console.log('Rua: '+this.rua);
        console.log('Bairro: '+this.bairro);
        console.log('Área do terreno: '+this.areaDoTerreno);
        console.log('Área construida: '+this.areaConstruida);
        console.log('Valor do aluguel: '+this.valorDoAlugel);
    }

}

var novacasa = new Casa('Alfedro gaspar','Alphavile','1000m²','700m²','R$1480,00');

novacasa.informaçoescasa();




/*var infoCasa = Array();
infoCasa[0] = 'Rua';
infoCasa[1] = 'Bairro';
infoCasa[2] = 'Área Do Terreno';
infoCasa[3] = 'Área Construida';
infoCasa[4] = 'Valor do alugel';
*/

var valoresCasa = Array();
var contadora = 0;



while(contadora <= 4){
    switch (contadora) {
        case 0:
            valoresCasa[contadora] = prompt('Informe o nome da rua')
            console.log('Rua: '+valoresCasa[contadora]);
            contadora++
            
            break;
        case 1:
            valoresCasa[contadora] = prompt('Informe o nome do bairro')
            console.log('Bairro: '+valoresCasa[contadora]);
            contadora++
            break;            
        case 2:
            valoresCasa[contadora] = prompt('Informe o tamanho da area do terreno')
            
            if(valoresCasa[contadora] == 'nao sei') {
                
                var tamanhofrente = prompt('qual valor da frente em m² ?');
                var tamanhofundo = prompt('qual valor do fundo em m² ?');
                var comprimento = prompt('qual valor do comprimento em m² ?');
                var resultado = (((parseInt(tamanhofrente) + parseInt(tamanhofundo))/2) * comprimento);
                valoresCasa[contadora] = resultado;
            }else{
                resultado = valoresCasa[contadora];    
            }
            console.log('Área do terreno: '+valoresCasa[contadora]+'m²');
            contadora++
            break;
        case 3:
            valoresCasa[contadora] = prompt('Informe o tamanho da area contruida doterreno')
            console.log('Área construida do terreno: '+valoresCasa[contadora]+'m²');
            contadora++
            break;
        case 4:
            valoresCasa[contadora] = prompt('Informe o valor do aluguel')
            console.log('Valor do aluguel: '+valoresCasa[contadora]);
            console.log('o custo do m² é de R$'+(resultado / valoresCasa[contadora]).toFixed(2))
            contadora++ 
            break;
                
        default:
            alert('404')
            break;
    }
   
}

