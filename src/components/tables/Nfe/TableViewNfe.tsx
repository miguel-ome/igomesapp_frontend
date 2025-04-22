import { INfe } from "@/interfaces/INfe";

export function TableViewNfe({ data }: { data: INfe[] }) {
  return (
    <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
      <thead>
        <tr>
          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
            Chave NFE
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
            Número da NFE
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
            Data de Emissão
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
            CNPJ do Destinatário
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
            Nome do Destinatário
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
            Série
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
            Total ICMS
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
            Total da Nota
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
            URL DANFE
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((nfe) => (
          <tr key={nfe.id} className="border-b border-gray-200">
            <td className="px-6 py-4 text-sm text-gray-700">{nfe.chaveNfe}</td>
            <td className="px-6 py-4 text-sm text-gray-700">{nfe.numberNf}</td>
            <td className="px-6 py-4 text-sm text-gray-700">
              {new Date(nfe.emissionDate).toLocaleDateString()}
            </td>
            <td className="px-6 py-4 text-sm text-gray-700">
              {nfe.recipientCNPJ}
            </td>
            <td className="px-6 py-4 text-sm text-gray-700">
              {nfe.recipientName}
            </td>
            <td className="px-6 py-4 text-sm text-gray-700">{nfe.series}</td>
            <td className="px-6 py-4 text-sm text-gray-700">
              {nfe.totICMS ? nfe.totICMS.toFixed(2) : "N/A"}
            </td>
            <td className="px-6 py-4 text-sm text-gray-700">
              {nfe.totValue ? nfe.totValue.toFixed(2) : "N/A"}
            </td>
            <td className="px-6 py-4 text-sm text-gray-700">
              <a
                href={nfe.urlDanfe}
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Visualizar DANFE
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
