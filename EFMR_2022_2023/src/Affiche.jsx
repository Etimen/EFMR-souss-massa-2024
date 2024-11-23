export default function Affiche({produits}){
return(
    <>
    <table>
        <thead>
            <tr>
                <th>Référence</th>
                <th>Nom Produit</th>
                <th>Description</th>
                <th>Prix</th>
                <th>Catégorie</th>
                <th>image</th>
            </tr>
        </thead>
        <tbody>
            {produits.map((item,index)=>{
                return(
                    <>
                    <tr key={index.id}>
                        <td>{item.id}</td>
                        <td>{item.nomP}</td>
                        <td>{item.descP}</td>
                        <td>{item.prixP}</td>
                        <td>{item.categorie.nomC}</td>
                        <td>{item.thumbnail}</td>
                    </tr>
                    
                    
                    </>
                )
            })

            }
        </tbody>
    </table>
    
    </>
)
}