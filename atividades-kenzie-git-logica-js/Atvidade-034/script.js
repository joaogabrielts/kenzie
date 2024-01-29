function rainAmount(mm){
    if(mm < 40){
        return `You need to give your plant ${40- mm} of water`
    } 
    else {
        return  'You plant has more than enough water for today!'
    }
}
console.log(rainAmount(50))

function litres(time){
     return Math.floor(time/2)
}
console.log(litres(6.7))