import { useState } from "react"

export default function InfoProduitForm(){
    const [Produit,setProduit]= useState({
        Reference:1,
        NomProduit:"Nutella",
        Catégories:"",
        Description:"",
        Prix:null,
        ImageProduit:""

    })
    const [Produits,setProduitS]= useState([])
    const [categories, setCategories] = useState([])
    function handleAjouter(){
        setProduit([...Produits,{Produits}])
    }
    return(
        <>
            <form action="">
            <label htmlFor="">Reference:</label>
            <input type="text" />

            <label htmlFor="">Nom Produit:</label>
            <input type="text" />

            <label htmlFor="">Catégories Produit</label>
            <select name="" id="">
                <option value="">---</option>
            </select>

            <label htmlFor="">Description:</label>
            <textarea name="" id=""></textarea>

            <label htmlFor="">Prix:</label>
            <input type="number" />

            <label htmlFor="">Image Produit:</label>
            <input type="file" />
            </form>
            <button>valider</button>


            <table>
                <thead>
                    <h1>Information Produit</h1>
                    <tr>
                        
                        <th>Reference Produit</th>
                        <th> Nom </th>
                        <th>categorie</th>
                        <th>Prix</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </>

        
    )
}