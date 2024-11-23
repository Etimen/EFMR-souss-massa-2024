import { useEffect, useState } from "react";
import InfoProduitForm from "./InfoProd";
import Affiche from "./Affiche";
import Recherche from "./recherche"

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
        <Link to="/">Home</Link>
        <Link to="/affiche">Products</Link>
        <Link  to="/recherche">Search</Link>
      </nav>
    
     <Routes>
        <Route path="/" element={<h1>Welcome to the Product Page</h1>}/>
        <Route path="/affiche" element={<Affiche produits={produits} />} />
        <Route path="/recherche" element={<Recherche />} />
        <Route path="/info-produit" element={<InfoProduitForm />} />
     </Routes>
    </Router>
     

    
    </>
  );
} 