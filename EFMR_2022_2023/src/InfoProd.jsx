import { useEffect, useState } from "react";

export default function InfoProduitForm() {
  const [Produit, setProduit] = useState({
    Reference: "",
    NomProduit: "",
    Categories: "",
    Description: "",
    Prix: "",
    ImageProduit: "",
  });

  const [Categories, setCategories] = useState([]);
  const [Produits, setProduits] = useState([]);

  useEffect(() => {
    setCategories([
      { idC: 1, nomC: "Petit déjeuner" },
      { idC: 2, nomC: "Snacks" },
      { idC: 3, nomC: "Boissons chaudes" },
      { idC: 4, nomC: "Produits laitiers" },
    ]);
  }, []);

  // Add Product Handler
  function handleAjouter() {
    if (!Produit.Reference || !Produit.NomProduit || !Produit.Categories || !Produit.Prix) {
      alert("Please fill out all required fields.");
      return;
    }

    setProduits([...Produits, Produit]);

    setProduit({
      Reference: "",
      NomProduit: "",
      Categories: "",
      Description: "",
      Prix: "",
      ImageProduit: "",
    });
  }

  return (
    <div className="p-6 bg-emerald-50 min-h-screen">
      <h1 className="text-3xl font-bold text-emerald-700 text-center mb-6">Add a New Product</h1>

      <form className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="reference" className="block text-emerald-600 font-semibold mb-2">
            Reference:
          </label>
          <input
            type="text"
            id="reference"
            className="w-full p-2 border border-gray-300 rounded"
            value={Produit.Reference}
            onChange={(e) => setProduit({ ...Produit, Reference: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="nomProduit" className="block text-emerald-600 font-semibold mb-2">
            Nom Produit:
          </label>
          <input
            type="text"
            id="nomProduit"
            className="w-full p-2 border border-gray-300 rounded"
            value={Produit.NomProduit}
            onChange={(e) => setProduit({ ...Produit, NomProduit: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="categories" className="block text-emerald-600 font-semibold mb-2">
            Catégories Produit:
          </label>
          <select
            id="categories"
            className="w-full p-2 border border-gray-300 rounded"
            value={Produit.Categories}
            onChange={(e) => setProduit({ ...Produit, Categories: e.target.value })}
          >
            <option value="">---</option>
            {Categories.map((item) => (
              <option key={item.idC} value={item.nomC}>
                {item.nomC}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-emerald-600 font-semibold mb-2">
            Description:
          </label>
          <textarea
            id="description"
            className="w-full p-2 border border-gray-300 rounded"
            value={Produit.Description}
            onChange={(e) => setProduit({ ...Produit, Description: e.target.value })}
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="prix" className="block text-emerald-600 font-semibold mb-2">
            Prix:
          </label>
          <input
            type="number"
            id="prix"
            className="w-full p-2 border border-gray-300 rounded"
            value={Produit.Prix}
            onChange={(e) => setProduit({ ...Produit, Prix: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="imageProduit" className="block text-emerald-600 font-semibold mb-2">
            Image Produit:
          </label>
          <input
            type="file"
            id="imageProduit"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={(e) => setProduit({ ...Produit, ImageProduit: e.target.files[0] })}
          />
        </div>

        <button
          type="button"
          onClick={handleAjouter}
          className="w-full bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700"
        >
          Valider
        </button>
      </form>

      <div className="mt-10 max-w-lg mx-auto">
        <h2 className="text-xl font-bold text-emerald-700 mb-4">Product Information</h2>
        {Produits.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 mb-4 rounded-lg shadow-md cursor-pointer"
            onClick={() => setProduit({ ...item })}
          >
            <p><strong>Reference:</strong> {item.Reference}</p>
            <p><strong>Nom Produit:</strong> {item.NomProduit}</p>
            <p><strong>Catégorie:</strong> {item.Categories}</p>
            <p><strong>Description:</strong> {item.Description}</p>
            <p><strong>Prix:</strong> {item.Prix} DH</p>
            <p><strong>Image:</strong> {item.ImageProduit ? item.ImageProduit.name : "No image uploaded"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
