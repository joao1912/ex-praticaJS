
let alimentos = {
    suco: [" Suco de abacaxi", " Suco de Morango", " Suco de Uva", " Suco de Limão", " Coca-Cola", " Pepsi"],
    lanche: [null,null,null,null,null,null," Cachorro Quente", " Bauru Simples", " Bauru com Ovo", "Hambúrguer", "Cheeseburguer", " Pastel de Carne"],
    preço: [" R$ 6,00", " R$ 7,00", " R$ 8,00", " R$ 9,00", " R$ 10,00" , " R$10,00"," R$ 12,00", " R$ 14,00", " R$ 15,00", " R$ 16,00", " R$ 16,00" , " R$8,00"],
    Codigo: [0,1,2,3,4,5,6,7,8,9,10,11]
}

let carrinho = []


let resp_carrinho = document.getElementById("carrin")
let pedido = document.getElementById("txtC")
let botaoPedir = document.getElementById("butpedir")
let codigo = document.getElementById("cod")
let item = document.createAttribute("imput:number")
let bebidas = document.getElementById("Bebidas")
let lanches = document.getElementById("lanches")
let resp = document.getElementById("resp")
let botaoCalcular = document.getElementById("BotCalcular")



function mostrar() {
    
    if (bebidas.checked) {
        resp.innerHTML = ""
        resp.innerHTML ="<p>Opcões de bebidas a baixo:</p>"
        for ( let c=0 ; c < 6; c++) {
            resp.innerHTML += `<p>${alimentos.suco[c]} | preço: ${alimentos.preço[c]} | Código: ${alimentos.Codigo[c]}<br/></p>`
        }

    } else if (lanches.checked) {
        resp.innerHTML = ""
        resp.innerHTMl = "<p>Opcões de Lanches a baixo:</p>"
        for (let c = 6 ; c < 12 ; c++) {                              
            resp.innerHTML += `<p>${alimentos.lanche[c]} | preço: ${alimentos.preço[c]} | Código: ${alimentos.Codigo[c]}<br/></p>`
        }
    }
    pedido.removeAttribute("disabled")
    botaoPedir.removeAttribute("disabled")
}
function verificar() {
        botaoCalcular.removeAttribute("disabled")

        let pedVal = pedido.value
        if (bebidas.checked) { 
            if (pedido.value.length == 0 || pedido.value < 0  || pedido.value > 5) {
            alert("[erro]: digite o código de algum alimento acima!.")
        } else {
            resp_carrinho.innerHTML = "Carrinho: "
            if (pedido.value == 0) {
                let suco = alimentos.suco[0]
                carrinho.push(suco)
                resp_carrinho.innerHTML += ` ${carrinho} `
                pedido.value = ""
            } else if (pedVal == 1) {
                let suco = alimentos.suco[1]
                carrinho.push(suco)
                resp_carrinho.innerHTML += ` ${carrinho} `
                pedido.value = ""
            } else if (pedVal == 2) {
                let suco = alimentos.suco[2]
                carrinho.push(suco)
                resp_carrinho.innerHTML += ` ${carrinho} `
                pedido.value = ""
            } else if (pedVal == 3) {
                let suco = alimentos.suco[3]
                carrinho.push(suco)
                resp_carrinho.innerHTML += ` ${carrinho} `
                pedido.value = ""
            } else if (pedVal == 4) {
                let suco = alimentos.suco[4]
                carrinho.push(suco)
                resp_carrinho.innerHTML += ` ${carrinho} `
                pedido.value = ""
            } else if (pedVal == 5) {
                let suco = alimentos.suco[5]
                carrinho.push(suco)
                resp_carrinho.innerHTML += ` ${carrinho} `
                pedido.value = ""
            }    
        
        } 
    
    } else if (lanches.checked) {
        if (pedido.value.length == 0 || pedido.value < 6  || pedido.value > 11) {
            alert("[erro]: digite o código de algum alimento acima!.")
        } else {
            resp_carrinho.innerHTML = "Carrinho: "
            if (pedido.value == 6) {
                let comida = alimentos.lanche[6]
                carrinho.push(comida)
                resp_carrinho.innerHTML += ` ${carrinho} `
                pedido.value = ""
            } else if (pedVal == 7) {
                let comida = alimentos.lanche[7]
                carrinho.push(comida)
                resp_carrinho.innerHTML += ` ${carrinho} `
                pedido.value = ""
            } else if (pedVal == 8) {
                let comida = alimentos.lanche[8]
                carrinho.push(comida)
                resp_carrinho.innerHTML += ` ${carrinho} `
                pedido.value = ""
            } else if (pedVal == 9) {
                let comida = alimentos.lanche[9]
                carrinho.push(comida)
                resp_carrinho.innerHTML += ` ${carrinho} `
                pedido.value = ""
            } else if (pedVal == 10) {
                let comida = alimentos.lanche[10]
                carrinho.push(comida)
                resp_carrinho.innerHTML += ` ${carrinho} `
                pedido.value = ""
            } else if (pedVal == 11) {
                let comida = alimentos.lanche[11]
                carrinho.push(comida)
                resp_carrinho.innerHTML += ` ${carrinho} `
                pedido.value = ""
            }    
        }
    }
}

    
    let respTotvalor = document.getElementById("totvalor")

    
function Calcular() {
    respTotvalor.innerHTML = ``

    //desisto, vou largar o switch e trabalhar com varios (IF).
    
    respTotvalor.innerHTML = `valor: ${valortot}`
   
}
