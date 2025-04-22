import { FC } from "react";

// Definindo o tipo genérico para a propriedade de dados
interface GenericTableProps<T> {
  data: T[];
  columns: (keyof T)[];
}

// Componente de Tabela Genérica
export const GenericTable: FC<GenericTableProps<any>> = ({ data, columns }) => {
  // Função para renderizar o valor da célula
  const renderCell = (value: any) => {
    if (typeof value === "number") {
      return value.toFixed(2); // Exibe números com 2 casas decimais
    } else if (value instanceof Date) {
      return value.toLocaleDateString(); // Formata as datas
    }
    return value || "N/A"; // Exibe "N/A" se o valor for undefined ou null
  };

  return (
    <div className="overflow-x-auto p-6">
      <h1 className="text-xl font-bold mb-4">Tabela Genérica</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
        <thead>
          <tr>
            {/* Gerando os cabeçalhos da tabela a partir das colunas */}
            {columns.map((col, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-sm font-semibold text-gray-700"
              >
                {String(col)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Preenchendo a tabela com os dados */}
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-gray-200">
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="px-6 py-4 text-sm text-gray-700">
                  {renderCell(row[col])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
