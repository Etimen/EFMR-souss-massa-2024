import { useState } from "react";
import { useDispatch } from "react-redux";
import { add_produit } from "./Redux/Actions/ProduitAction";

export default function AjouterProduit(){

    const dispatch = useDispatch()
    const [Produit,setproduit] = useState({
        Ref:"",
        Nom:"",
        Categorie:""
    })
    const addProduit=()=>{
        console.log(Produit)
        dispatch= (add_produit(Produit))
    }



return(
    <>
    <div>
        <label htmlFor="">Reference</label>
        <input type="text" value={Produit.Ref} onChange={(e)=>setproduit({...Produit,Ref:e.target.value})}/>
        <label htmlFor="">Nom</label>
        <input type="text" value={Produit.Nom} onChange={(e)=>setproduit({...Produit,Nom:e.target.value})}/>
        <label htmlFor="">Categorie</label>
        <input type="text" value={Produit.Categorie} onChange={(e)=>setproduit({...Produit,Categorie:e.target.value})} />
    </div>
    <button onClick={addProduit }>
        Ajouter
    </button>
    
    
    </>
)}