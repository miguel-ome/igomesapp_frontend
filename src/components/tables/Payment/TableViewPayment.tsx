import { IPayment } from "@/interfaces/IPayment";

export function TableViewPayment({ data }: { data: IPayment[] }) {
  return (
    <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
            Número NF
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
            Método de Pagamento
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
            Emissão
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
            Vencimento
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
            Recebido
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
            Valor
          </th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={7} className="text-center text-sm py-4 text-gray-500">
              Nenhum pagamento encontrado.
            </td>
          </tr>
        ) : (
          data.map((payment) => (
            <tr key={payment.id} className="border-b border-gray-200">
              <td className="px-6 py-4 text-sm text-gray-700">
                {payment.nfe.numberNf}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {payment.paymentMethod.namePaymentMethod}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {new Date(payment.emissionDate).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {new Date(payment.dueDate).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {new Date(payment.receivedDate).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                R$ {payment.value.toFixed(2)}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
