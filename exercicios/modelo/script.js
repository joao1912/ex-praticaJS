let refresco = {
    suco: [" Suco de abacaxi", " Suco de Morango", " Suco de Uva", " Suco de Limão", " Coca-Cola", " Pepsi"],
    preço: [" R$ 6,00", " R$ 7,00", " R$ 8,00", " R$ 9,00", " R$ 10,00" , " R$10,00"],
    Codigo: [0,1,2,3,4,5]
}

let alimentos = {
    lanche: [" Cachorro Quente", " Bauru Simples", " Bauru com Ovo", "Hambúrguer", "Cheeseburguer", " Pastel de Carne"],
    preço: [" R$ 12,00", " R$ 14,00", " R$ 15,00", " R$ 16,00", " R$ 16,00" , " R$8,00"],
    Codigo: [6,7,8,9,10]
}

let carrinho = []


let resp_carrinho = document.getElementById("carrin")
let pedido = document.getElementById("txtC")
let botaoPedir = document.getElementById("butpedir")
let codigo = document.getElementById("cod")
let item = document.createAttribute("imput:number")
let bebidas = document.getElementById("Bebidas")

function mostrar() {
    
    let lanches = document.getElementById("lanches")
    let resp = document.getElementById("resp")
    if (bebidas.checked) {
        resp.innerHTML = ""
        resp.innerHTML ="<p>Opcões de bebidas a baixo:</p>"
        for ( let c=0 ; c < 6; c++) {
            resp.innerHTML += `<p>${refresco.suco[c]} | preço: ${refresco.preço[c]} | Código: ${refresco.Codigo[c]}<br/></p>`
        }
        
        pedido.removeAttribute("disabled")
          
    } else if (lanches.checked) {
        resp.innerHTML = ""
        resp.innerHTMl = "<p>Opcões de Lanches a baixo:</p>"
        for (let c = 0 ; c < 5 ; c++) {                              //arrumar erro
            resp.innerHTML += `<p>${alimentos[c]} | preço: ${alimentos.preço[c]} | Código: ${alimentos.Codigo[c]}<br/></p>`
        }
    }
    
}
function verificar() {
    if (!bebidas.checked || !laches.checked) {
        alert("[erro]: antes de pedir, pressione o botão 'mostrar'.")
    } else if (pedido.value.length == 0 || pedido.value < 0  || pedido.value > 5) {
        alert("[erro]: digite o código de algum alimento acima!.")
    } else {
        let pedVal = pedido.value
        if (bebidas.checked) {
            resp_carrinho.innerHTML = "Carrinho: "
            if (pedido.value == 0) {
                let suco = refresco.suco[0]
                carrinho.push(suco)
                resp_carrinho.innerHTML += ` ${carrinho} `
                pedido.value = ""
            } else if (pedVal == 1) {
                let suco = refresco.suco[1]
                carrinho.push(suco)
                resp_carrinho.innerHTML += ` ${carrinho} `
                pedido.value = ""
            } else if (pedVal == 2) {
                let suco = refresco.suco[2]
                carrinho.push(suco)
                resp_carrinho.innerHTML += ` ${carrinho} `
                pedido.value = ""
            } else if (pedVal == 3) {
                let suco = refresco.suco[3]
                carrinho.push(suco)
                resp_carrinho.innerHTML += ` ${carrinho} `
                pedido.value = ""
            } else if (pedVal == 4) {
                let suco = refresco.suco[4]
                carrinho.push(suco)
                resp_carrinho.innerHTML += ` ${carrinho} `
                pedido.value = ""
            } else if (pedVal == 5) {
                let suco = refresco.suco[5]
                carrinho.push(suco)
                resp_carrinho.innerHTML += ` ${carrinho} `
                pedido.value = ""
            }    
        } else if (lanches.checked) {alert("opaa")}
    }   
}
