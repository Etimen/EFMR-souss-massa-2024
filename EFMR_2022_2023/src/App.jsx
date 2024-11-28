import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import InfoProduitForm from "./InfoProd";
import Affiche from "./Affiche";
import Recherche from "./Recherche";
import ListProduit from "./ListProduit";
import AjouterProduit from "./AddProduit";

export default function App() {
  useEffect(() => {
    fetch("http://localhost:4000/produits")
      .then((response) => response.json())
      .then((data) => setproduits(data));
  }, []);

  const [produits, setproduits] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Router>
        <nav className="bg-emerald-500 text-white p-4 shadow-md">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/affiche" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link to="/recherche" className="hover:underline">
                Search
              </Link>
            </li>
            <li>
              <Link to="/info-produit" className="hover:underline">
                Info Product
              </Link>
            </li>
            <li>
              <Link to="/listproduit" className="hover:underline">
                List Product
              </Link>
            </li>
            <li>
              <Link to="/AjouterProduit" className="hover:underline">
                Add Product
              </Link>
            </li>
          </ul>
        </nav>

        <div className="container mx-auto p-6">
          <Routes>
            <Route
              path="/"
              element={<h1 className="text-3xl font-bold text-emerald-600">Welcome to the Product Page</h1>}
            />
            <Route path="/affiche" element={<Affiche produits={produits} />} />
            <Route path="/recherche" element={<Recherche />} />
            <Route path="/info-produit" element={<InfoProduitForm />} />
            <Route path="/listproduit" element={<ListProduit />} />
            <Route path="/AjouterProduit" element={<AjouterProduit />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
