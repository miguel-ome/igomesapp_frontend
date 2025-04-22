"use client";

import { useState } from "react";

export default function CreatePaymentForm({
  onSuccess,
}: {
  onSuccess?: () => void;
}) {
  const [form, setForm] = useState({
    value: "",
    dueDate: "",
    emissionDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enviando pagamento:", form);
    // Aqui você pode chamar a API com axios
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Valor</label>
        <input
          type="number"
          name="value"
          value={form.value}
          onChange={handleChange}
          className="mt-1 w-full border rounded-md p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Data de Emissão</label>
        <input
          type="date"
          name="emissionDate"
          value={form.emissionDate}
          onChange={handleChange}
          className="mt-1 w-full border rounded-md p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Data de Vencimento</label>
        <input
          type="date"
          name="dueDate"
          value={form.dueDate}
          onChange={handleChange}
          className="mt-1 w-full border rounded-md p-2"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Criar Pagamento
      </button>
    </form>
  );
}
