export interface IPayment {
  dueDate: Date;
  emissionDate: Date;
  id: string;
  nfe: {
    idNf: string;
    numberNf: number;
  };
  paymentMethod: {
    idPaymentMethod: string;
    namePaymentMethod: string;
  };
  receivedDate: Date;
  value: number;
}
