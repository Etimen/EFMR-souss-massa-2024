import { useSelector } from "react-redux";

export default function ListProduit() {
  const produitState = useSelector((state) => state.produits);
  console.log(produitState);

  return (
    <div className="p-6 bg-emerald-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-emerald-700">
        Product List
      </h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-emerald-600 text-white">
            <th className="px-4 py-2 border border-emerald-700">Référence</th>
            <th className="px-4 py-2 border border-emerald-700">Nom</th>
            <th className="px-4 py-2 border border-emerald-700">Catégorie</th>
          </tr>
        </thead>
        <tbody>
          {produitState.map((item, index) => (
            <tr
              key={index}
              className="odd:bg-emerald-100 even:bg-emerald-200 text-emerald-900"
            >
              <td className="px-4 py-2 border border-gray-300">{item.ref}</td>
              <td className="px-4 py-2 border border-gray-300">{item.nom}</td>
              <td className="px-4 py-2 border border-gray-300">{item.categorie}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
