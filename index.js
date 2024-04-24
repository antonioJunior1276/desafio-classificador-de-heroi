let nomeHeroi = "Lampião"
let nivelExperiencia = 13500

if(nivelExperiencia <= 1000){
    nivelExperiencia = "Ferro"
}else if(nivelExperiencia >= 1001 && nivelExperiencia <= 2000){
    nivelExperiencia = "Bronze"
}else if(nivelExperiencia >= 2001 && nivelExperiencia <= 5000){
    nivelExperiencia = "Prata"
}else if(nivelExperiencia >= 5001 && nivelExperiencia <= 6000){
    nivelExperiencia = "Ouro"
}else if(nivelExperiencia >= 6001 && nivelExperiencia <= 8000){
    nivelExperiencia = "Platina"
}else if(nivelExperiencia >= 8001 && nivelExperiencia <= 9000){
    nivelExperiencia = "Ascendente"
}else if(nivelExperiencia >= 9001 && nivelExperiencia <= 10000){
    nivelExperiencia = "Imortal"
}else{
    nivelExperiencia = "Radiante"
}

console.log("O herói de nome " + nomeHeroi + " está no nível " + nivelExperiencia)