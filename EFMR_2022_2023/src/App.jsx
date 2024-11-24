import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import InfoProduitForm from "./InfoProd";
import Affiche from "./Affiche";
import Recherche from"./Recherche"
import ListProduit from "./ListProduit"
import AjouterProduit from "./AddProduit"

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
     <Router>
      <nav>
        <Link to="/">Home</Link><br />
        <Link to="/affiche">Products</Link><br />
        <Link  to="/recherche">Search</Link><br />
        <Link  to="/info-produit">INfo produit</Link><br />
        <Link  to="/listproduit">list produit</Link><br />
        <Link  to="/AjouterProduit">Ajouter Produit produit</Link><br />
      </nav>
    
     <Routes>
        <Route path="/" element={<h1>Welcome to the Product Page</h1>}/>
        <Route path="/affiche" element={<Affiche produits={produits} />} />
        <Route path="/recherche" element={<Recherche />} />
        <Route path="/info-produit" element={<InfoProduitForm />} />
        <Route path="/listproduit" element={<ListProduit />} />
        <Route path="/AjouterProduit" element={<AjouterProduit />} />
       
     </Routes>
    </Router>
     

    
    </>
  );
} 