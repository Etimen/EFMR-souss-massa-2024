export default function Affiche({ produits }) {
    return (
      <div className="p-6 bg-emerald-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-emerald-700">Product List</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-emerald-600 text-white">
              <th className="px-4 py-2 border border-emerald-700">Référence</th>
              <th className="px-4 py-2 border border-emerald-700">Nom Produit</th>
              <th className="px-4 py-2 border border-emerald-700">Description</th>
              <th className="px-4 py-2 border border-emerald-700">Prix</th>
              <th className="px-4 py-2 border border-emerald-700">Catégorie</th>
              <th className="px-4 py-2 border border-emerald-700">Image</th>
            </tr>
          </thead>
          <tbody>
            {produits.map((item, index) => (
              <tr key={index} className="odd:bg-emerald-100 even:bg-emerald-200">
                <td className="px-4 py-2 border border-gray-300">{item.id}</td>
                <td className="px-4 py-2 border border-gray-300">{item.nomP}</td>
                <td className="px-4 py-2 border border-gray-300">{item.descP}</td>
                <td className="px-4 py-2 border border-gray-300">{item.prixP} DH</td>
                <td className="px-4 py-2 border border-gray-300">{item.categorie.nomC}</td>
                <td className="px-4 py-2 border border-gray-300">
                  <img
                    src={item.thumbnail}
                    alt={item.nomP}
                    className="h-12 w-12 object-cover rounded-md border border-emerald-500"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  