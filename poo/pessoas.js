class pessoas {
    constructor(nome,idade,cidade,estado){
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.estado = estado;
    
    }
        informarficha(){
            console.log
                (this.nome,
                this.idade,
                this.cidade,
                this.estado)
            }
        }


var infomaçoes = Array();
infomaçoes [0] = 'nome';
infomaçoes [1] = 'idade';
infomaçoes [2] = 'cidade';
infomaçoes [3] = 'estado';

/*var i = 0;
while(i < infomaçoes.length){
    console.log(infomaçoes[i])
    i++
    
}*/
var cont = 0;
var capturardados= Array();

 while(cont <= 3){
     
     
     if(cont == 0 || cont == 3){
        capturardados[cont] = prompt('qual o seu '+infomaçoes[cont]+'?');
        console.log(capturardados[cont])
        cont++
        
    }else{
        capturardados[cont] = prompt('qual o sua '+infomaçoes[cont]+'?');
        console.log(capturardados[cont])
        cont++
        
        
    }
    
}
var dadospessoa = new pessoas(capturardados[0],capturardados[1],capturardados[2],capturardados[3]);
dadospessoa.informarficha(); 

    