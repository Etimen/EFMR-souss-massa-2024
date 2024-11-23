import { useEffect, useState } from "react";
import InfoProduitForm from "./InfoProd";
import Affiche from "./Affiche";

export default function App() {
  useEffect(
    ()=>{
      fetch("http://localhost:4000/produits").then(
        function (response){
          return response.json()
        }
      ).then(function(data){
        setproduits(data)
      })
    },[])
  const [produits,setproduits] = useState([])
  console.log(produits)
  return (
     <>
     <InfoProduitForm />
    <Affiche produits={produits}/>
     
    </>
  );
} 