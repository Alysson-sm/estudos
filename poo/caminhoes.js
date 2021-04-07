class caminhao{
    constructor(modelo,marca,motor,numerodaplaca,cor,velmax){
    this.modelo = modelo;
    this.marca = marca;
    this.motor = motor;
    this.numerodaplaca = numerodaplaca;
    this.cor = cor;
    this.velmax = velmax;
}

    infomacoes(){
        console.log(
            this.modelo, 
            this.marca,
            this.motor,
            this.numerodaplaca,
            this.cor,
            this.velmax
        );
    }
}
 var f4000 = new Array(6);  
 var i = 0;

for(i;i<6;i++){
    
    f4000[i] = prompt('Informe na ordem: Modelo,Marca,motor,numero da placa,cor e velocidade maxima')
    console.log(f4000[i])
    
    }
while(i < 6){
    var novocaminhao = new caminhao(f4000[i]);
    i++;
}
//var f4000 = new caminhao('f4000','ford','Cummins','HGL145','125');
novocaminhao.infomacoes();