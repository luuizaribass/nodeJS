let estado = function (a){
    if (a == "RJ" || a == "SP"){
     return "Estado permitido"
    } else {
     return "Estado negado"
    }
 }
 module.exports = estado