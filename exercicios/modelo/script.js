let refresco = {
    suco: ["Suco de abacaxi", "Suco de Morango", "Suco de Uva", "Suco de Limão"],
    preço: ["R$ 6,00", "R$ 7,00", "R$ 8,00", "R$ 9,00"],
    Codigo: [0,1,2,3]
}



function mostrar() {
    alert(refresco.suco[0])
    let bebidas = document.getElementById("Bebidas")
    let lanches = document.getElementById("lanches")
    let resp = document.getElementById("resp")
    if (bebidas.checked) {
        resp.innerHTML ="<p>Opcões de bebidas a baixo:</p>"
        for ( let c=0 ; c < 4; c++) {
            resp.innerHTML = `<p>${refresco.suco[c]} | preço: ${refresco.preço[c]} | Código: ${refresco.Codigo[c]}<br/></p>`
        }
        
    }
}
