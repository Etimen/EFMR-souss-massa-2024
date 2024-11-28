import { useState } from "react";
import { useDispatch } from "react-redux";
import { add_produit } from "./Redux/Actions/ProduitAction";

export default function AjouterProduit() {
  const dispatch = useDispatch();
  const [Produit, setproduit] = useState({
    Ref: "",
    Nom: "",
    Categorie: "",
  });

  const addProduit = () => {
    console.log(Produit);
    dispatch = add_produit(Produit);
  };

  return (
    <>
      <div className="p-6 bg-emerald-100 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="" className="block text-emerald-900 font-bold mb-2">
            Reference
          </label>
          <input
            type="text"
            value={Produit.Ref}
            onChange={(e) => setproduit({ ...Produit, Ref: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="block text-emerald-900 font-bold mb-2">
            Nom
          </label>
          <input
            type="text"
            value={Produit.Nom}
            onChange={(e) => setproduit({ ...Produit, Nom: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="block text-emerald-900 font-bold mb-2">
            Categorie
          </label>
          <input
            type="text"
            value={Produit.Categorie}
            onChange={(e) =>
              setproduit({ ...Produit, Categorie: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>
      <button
        onClick={addProduit}
        className="mt-4 bg-emerald-500 text-white py-2 px-4 rounded-lg shadow hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      >
        Ajouter
      </button>
    </>
  );
}
