import { useSelector } from "react-redux"
export default function ListProduit(){
    const produitState=useSelector((state)=>state.produits)
    console.log(produitState)
    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Ref:</th>
                    <th>Nom:</th>
                    <th>Categorie</th>
                </tr>
            </thead>
            <tbody>
                
                {
                    produitState.map(function(item){
                        return(
                            <>
                            <tr >
                            <th>{item.ref}</th>
                            <td>{item.nom}</td>
                            <td>{item.categorie}</td>
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