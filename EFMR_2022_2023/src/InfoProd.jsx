import { useEffect, useState } from "react"

export default function InfoProduitForm(){
    const [Produit,setProduit]= useState({
        Reference:"",
        NomProduit:"",
        Categories:"",
        Description:"",
        Prix:"",
        ImageProduit:""

    });
    const [Categories, setCategories] = useState([])
    const [Produits,setProduitS]= useState([])

    useEffect(() => {
        setCategories([
            {idC:1,nomC: "Petit déjeuner"},
            {idC:2,nomC: "Snacks"},
            {idC:3,nomC: "Boissons chaudes"},
            {idC:4,nomC: "Produits laitiers"}
        ]);
    }, []); 
    
    

    // les handlers
    function handleAjouter(){
        setProduitS([...Produits,Produit])

        setProduit({
            Reference:"",
            NomProduit:"",
            Categories:"",
            Description:"",
            Prix:"",
            ImageProduit:""
        })
    }
   
    return(
        <>
            <form action="">
            <label htmlFor="">Reference:</label>
            <input type="text"  value={Produit.Reference} onChange={(e)=>setProduit({...Produit,Reference:e.target.value})}/><br />

            <label htmlFor="">Nom Produit:</label>
            <input type="text"  value={Produit.NomProduit} onChange={(e)=>setProduit({...Produit,NomProduit:e.target.value})} /><br />


            <label htmlFor="">Catégories Produit</label>
            <select value={Produit.Categories} onChange={(e) => setProduit({ ...Produit, Categories: e.target.value })} >
            <option value="">---</option> 
                        {Categories.map((item) => (
            <option key={item.idC} value={item.nomC}>{item.nomC} </option>  ))}
            </select>           





            {/*  <label htmlFor="">Catégories Produit</label>
           <select value={Produit.map} name="" id="">
                <option value="">---</option>
                {categories.map(function(item){
                    return(<option value={item.idC}>{item.nomC}</option>)
                })}
                
            </select><br /> */}

            <label htmlFor="">Description:</label>
            <textarea name="" id="" value={Produit.Description || "" } onChange={(e)=>setProduit({...Produit,Description:e.target.value})}></textarea><br />

            <label htmlFor="">Prix:</label>
            <input type="number"  value={Produit.Prix || ""} onChange={(e)=>setProduit({...Produit,Prix:e.target.value})}/><br />


            <label htmlFor="">Image Produit:</label>
            <input type="file" onChange={(e) =>setProduit({ ...Produit, ImageProduit: e.target.files[0] })}/><br />
  
    


            {/* the origin input
            <input type="file" value={Produit.ImageProduit} onChange={(e)=>setProduit({...Produit,ImageProduit:e.target.value})} /> */}
            </form>
            <button onClick={handleAjouter}>valider</button>

                <div>
                    <h1>Information Produit</h1>
                    {
                        Produits.map((item,index)=>{
                            return(
                                <>
                                <ul key={index} onClick={()=>setProduit({...item})}>
                                    <li>{item.Reference}</li>
                                    <li>{item.NomProduit}</li>
                                    <li>{item.Categories}</li>
                                    <li>{item.Description}</li>
                                    <li>{item.Prix}</li>
                                    <li>{item.ImageProduit ? item.ImageProduit.name : "No image uploaded"}</li>
                                    
                                </ul>
                                </>
                            )
                        })
                    }
                </div>
        </> 
    )
}