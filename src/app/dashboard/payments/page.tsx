import { NewPaymentModal } from "@/components/NewPaymentModal";
import { TableViewPayment } from "@/components/tables/Payment/TableViewPayment";
import { IPayment } from "@/interfaces/IPayment";
import api from "@/lib/axios/axios";

export default async function PaymentPage() {
  try {
    const response = await api.get("payment");
    const payments: IPayment[] = response.data.body.data;

    return (
      <div className="p-6 w-full">
        <h1 className="text-4xl font-bold mb-4">Pagamentos</h1>
        <div className="overflow-x-auto">
          <div className="mb-6">
            <NewPaymentModal />
          </div>
          <TableViewPayment data={payments} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return (
      <div className="p-6 text-red-600">Erro ao carregar as informações.</div>
    );
  }
}
