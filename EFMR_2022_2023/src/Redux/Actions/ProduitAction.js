export function add_produit(NewProduit){
    return({
        type:"ADD_PRODUIT",
        payload:NewProduit
    })
}

export function delete_produit(IdProduit){
    return({
        type:"DELETE_PRODUIT",
        payload:IdProduit
    })
}