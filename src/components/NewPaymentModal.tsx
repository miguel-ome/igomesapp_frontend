"use client";

import { useState } from "react";
import { Modal } from "./ui/Modal";
import CreatePaymentForm from "./forms/Payment/CreatePaymentForm";

export function NewPaymentModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Novo Pagamento
      </button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2 className="text-xl font-semibold mb-4">Criar novo pagamento</h2>
        <CreatePaymentForm onSuccess={() => setOpen(false)} />
      </Modal>
    </>
  );
}
