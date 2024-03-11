let carro = {
    fabicante: "kenzie",
    modelo:"Forkenzie",
    cv: 150,
    ano : 2019,
    estaligado: false,
    velocidade:0,
    velocidadeMaxima: 200,

    ligar : function(){
        if(this.estaligado){
         return "Veiculo ja esta ligado"
        } this.estaligado = true
        return "ligado"
    },
     
    desligar : function(){
    if(!this.estaligado){
        return "Veiculo ja esta desligado"
    } 
       this.estaligado = true
       return "Desligado"
      
    },
    acelerar : function(){
        if(this.velocidade < this.velocidadeMaxima){
            this.velocidade += 10;
            return "Velocidade aumentada"
        }
        return "Velocidade maxima"
    },

    frear: function(){
        if(this.velocidade > 0){
            this.velocidade -= 5;
            return "velocidade reduzida"
        }
        return "veiculo parado"
    }
    
}