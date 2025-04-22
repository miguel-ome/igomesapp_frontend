import { TableViewNfe } from "@/components/tables/Nfe/TableViewNfe";
import { INfe } from "@/interfaces/INfe";
import api from "@/lib/axios/axios";

export default async function Nfe() {
  try {
    // Fazendo a requisição à API (usando a instância do axios configurada)
    const response = await api.get("nfe");

    // Supondo que o 'data' retorne a estrutura com 'body' e dentro dele 'data'
    const listNfe: INfe[] = response.data.body.data;

    // Renderizando os dados recebidos na tabela
    return (
      <div className="overflow-x-auto p-6">
        <h1 className="text-xl font-bold mb-4">Notas Fiscais</h1>
        <TableViewNfe data={listNfe} />
      </div>
    );
  } catch (error) {
    // Caso ocorra algum erro, exibe uma mensagem de erro
    console.error("Erro ao buscar dados:", error);
    return <div>Erro ao carregar as informações.</div>;
  }
}
